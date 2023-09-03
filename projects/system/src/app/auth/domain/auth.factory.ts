import { Auth } from './auth';

export class AuthFactory {
  static create(email: string, password: string, recaptcha: string) {
    const patternEmailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (email.trim() === '') throw new Error('Email is required');
    if (!email.match(patternEmailRegEx)) throw new Error('Invalid email');
    if (password.trim() === '') throw new Error('Password is required');

    return new Auth(email, password, recaptcha);
  }
}
