import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StorageRecoveryTokenApplication } from '../../../auth/application/storage-recover-token';

@Component({
  selector: 'amb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  username: string = '';
  constructor(
    private readonly router: Router,
    private recoveryFieldInToken: StorageRecoveryTokenApplication
  ) {
    this.username = this.recoveryFieldInToken.execute('name') as string;
  }

  logout() {
    this.router.navigate(['/']);
  }
}
