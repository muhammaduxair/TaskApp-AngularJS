import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';
import { TaskInt } from '../../Task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  FaTimes = faTimes;

  @Output() closePopUp: EventEmitter<any> = new EventEmitter();
  @Output() addNewTaskHandler: EventEmitter<TaskInt> = new EventEmitter();

  constructor(private taskServices: TaskService) {}

  ngOnInit(): void {}

  closeAddTaskPopUP() {
    this.closePopUp.emit();
  }

  onSubmit() {
    if (!this.text) {
      alert('Plase Enter Text');
      return;
    }

    const newTask: TaskInt = {
      id: 0,
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.taskServices.getTasks().subscribe((res) => {
      newTask.id = res.length + 1;
      this.taskServices.addNewTask(newTask);
    });

    this.closeAddTaskPopUP();
  }
}
