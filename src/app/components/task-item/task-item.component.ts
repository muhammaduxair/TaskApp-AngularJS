import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskInt } from 'src/app/Task.interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  FaTimes = faTimes;
  @Output() deleteTask: EventEmitter<TaskInt> = new EventEmitter();
  @Output() toggleTask: EventEmitter<TaskInt> = new EventEmitter();

  @Input() task!: TaskInt;

  constructor() {}

  ngOnInit(): void {}

  handleDelete(task: TaskInt) {
    this.deleteTask.emit(task);
  }

  toggleHandler(task: TaskInt) {
    this.toggleTask.emit(task);
  }
}
