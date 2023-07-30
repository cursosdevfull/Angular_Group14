import { Component } from '@angular/core';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  listItemsMenu = [
    { path: '/dashboard', title: 'DASHBOARD', icon: 'dashboard' },
    { path: '/driver', title: 'DRIVER', icon: 'folder' },
    { path: '/medic', title: 'MEDIC', icon: 'settings_accesibility' },
    { path: '/history', title: 'HISTORY', icon: 'storage' },
    { path: '/user', title: 'USER', icon: 'face' },
  ];
}
