import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

import { LayoutService } from '../../../config/modules/layout/layout.service';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  passwordHide = true;
  fg!: FormGroup;
  patternEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  patternEmailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  fb: FormBuilder = new FormBuilder();

  domainsAllowed = ['company1.com', 'company2.com', 'company3.com'];

  options: AnimationOptions = {
    path: '/assets/lottiefiles/animation.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '80%',
    maxHeight: '100vh',
  };

  constructor(
    private readonly layout: LayoutService,
    private readonly router: Router
  ) {
    this.setForm();
    this.layout.configuration = { menu: false, toolbar: false };
  }

  setVisibility() {
    this.passwordHide = !this.passwordHide;
  }

  setForm() {
    const controls = {
      email: [
        null,
        [Validators.required, Validators.pattern(this.patternEmailRegEx)],
      ],
      password: [
        null,
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
      recaptcha: [null, Validators.required],
    };

    this.fg = this.fb.group(controls);
  }

  login() {
    if (this.fg.valid) {
      this.router.navigate(['/dashboard']);
    }
  }
}
