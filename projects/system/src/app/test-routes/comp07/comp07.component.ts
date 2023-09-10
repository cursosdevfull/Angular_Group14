import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'amb-comp07',
  templateUrl: './comp07.component.html',
  styleUrls: ['./comp07.component.css'],
})
export class Comp07Component {
  listUsers = signal<string[]>(['user01', 'user02', 'user03']);
  totalUsers = signal<number>(3);
  currentDate = signal<Date>(new Date());

  labelTotalUsers = computed(() => `Total users: ${this.totalUsers()}`);

  addUser() {
    //this.listUsers.unshift(`user0${this.totalUsers + 1}`);
    //this.listUsers.set([...this.listUsers(), `user0${this.totalUsers + 1}`])
    this.totalUsers.set(this.totalUsers() + 1);
    const total = this.totalUsers();

    this.listUsers.update((currentValue) => [...currentValue, `user0${total}`]);
    //this.totalUsers++;
  }
}
