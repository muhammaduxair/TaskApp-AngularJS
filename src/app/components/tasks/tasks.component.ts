import { Component, OnInit, Input } from '@angular/core';
import { TaskInt } from 'src/app/Task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  @Input() tasks!: TaskInt[];

  constructor(private taskServices: TaskService) {
    this.taskServices.data.subscribe((x) => {
      if (this.tasks && this.tasks !== undefined) {
        this.taskServices.addNewtaskToDatabase(x).subscribe();
        this.tasks.push(x);
      }
    });
  }

  ngOnInit(): void {
    this.taskServices.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: TaskInt) {
    this.taskServices
      .deleteTask(task.id!)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleTask(task: TaskInt) {
    task.reminder = !task.reminder;
    this.taskServices.toggleReminder(task).subscribe();
  }
}
