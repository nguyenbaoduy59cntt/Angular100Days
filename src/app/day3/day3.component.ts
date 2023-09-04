import { Component } from '@angular/core';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.scss']
})
export class Day3Component {
  // ngFor
  listUsers = [
    {
      email: 'user1@gmail.com',
      password: '123'
    },
    {
      email: 'user2@gmail.com',
      password: '123'
    },
    {
      email: 'user3@gmail.com',
      password: '123'
    }
  ]
  // One-way binding
    // Interpolation => get data from component to show on UI
    user = {
      name: 'Duy',
      age: 24
    }
    // Property => add style css for element
    // -> add multiple style
    danger = 'color: red; font-weight: bold; background-color: yellow; font-size: 40px';
    warning = 'color: yellow; background-color: red; font-size: 40px';
    // -> add single style
    normal = 30;
    large = 50;
    small = 20;

    // Event => listener event from UI to changes data of component
    increaseAge() {
      this.user.age += 1;
    }

    decreaseAge() {
      this.user.age -= 1;
    }
  // Two-way binding = property binding + event binding
}
