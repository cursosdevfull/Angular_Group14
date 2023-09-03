export class Auth {
  private readonly email: string;
  private readonly password: string;
  private readonly recaptcha: string;

  constructor(email: string, password: string, recaptcha: string) {
    this.email = email;
    this.password = password;
    this.recaptcha = recaptcha;
  }

  properties() {
    return {
      email: this.email,
      password: this.password,
      recaptcha: this.recaptcha,
    };
  }
}
