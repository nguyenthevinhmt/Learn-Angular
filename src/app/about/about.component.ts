import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  name = 'Nguyen The Vinh';

  public resetName(): void {
    this.name = 'Nguyen The Vinh';
  }
}
