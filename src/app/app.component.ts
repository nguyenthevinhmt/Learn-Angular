import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  check = 'true';
  user = [
    {
      name: 'Nguyen The Vinh',
      address: 'HaNoi',
      age: 15,
    },
    {
      name: 'Nguyen The vinh1',
      address: 'HaNoi',
      age: 15,
    },
    {
      name: 'Nguyen The Vinh2',
      address: 'HaNoi',
      age: 15,
    },
  ];

  // handler() {
  //   console.log(this.user.name);
  // }
}
