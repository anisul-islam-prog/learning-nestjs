import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup() { return { messsage: 'hello I have signed up' }; }
    signin() { return { messsage: 'hello I have signed in' }; }

} 