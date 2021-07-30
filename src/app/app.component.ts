import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task-app';
  addTaskStatus = false;

  changeTaskStatus() {
    this.addTaskStatus = !this.addTaskStatus;
  }
}
