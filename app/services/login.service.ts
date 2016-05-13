import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
    public loggedInAs: string;
    
    public login(username: string, password: string): Promise<string> {
        return new Promise(resolve => {
            this.loggedInAs = username;
            resolve(username);
        });
    }
}