import { Injectable, UnauthorizedException,ConflictException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService, private jwtService: JwtService){

    }

    async validateUserByPassword(loginAttempt: LoginUserDto) {

        // This will be used for the initial login
        let userToAttempt = await this.usersService.findOneByEmail(loginAttempt.email);
        
        if(userToAttempt == null ){
            throw new ConflictException('Please check your Email or Password');
        }
        
        return new Promise((resolve) => {

            // Check the supplied password against the hash stored for this email address
            userToAttempt.checkPassword(loginAttempt.password, (err, isMatch) => {
    
                if(err) throw new UnauthorizedException();
    
                if(isMatch){
                    // If there is a successful match, generate a JWT for the user
                    resolve({
                        user : userToAttempt,
                        token: this.createJwtPayload(userToAttempt)
                    });
    
                } else {
                    resolve({ message: "Please check your Email or Password" })
                }
    
            });

        });

    }

    async validateUserByJwt(payload: JwtPayload) { 

        // This will be used when the user has already logged in and has a JWT
        let user = await this.usersService.findOneByEmail(payload.email);

        if(user){
            return this.createJwtPayload(user);
        } else {
            throw new UnauthorizedException();
        }

    }

    createJwtPayload(user){

        let data: JwtPayload = {
            email: user.email
        };

        let jwt = this.jwtService.sign(data);

        return {
            expiresIn: 3600,
            token: jwt            
        }

    }

}
