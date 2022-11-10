import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const TOKEN_REST='auth-rest-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    console.log(window.sessionStorage.getItem(TOKEN_KEY));
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }


  public getRestToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_REST);
  }
  public saveRestToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_REST);
    window.sessionStorage.setItem(TOKEN_REST, token);
  }

}
