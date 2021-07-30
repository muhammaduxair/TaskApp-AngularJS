import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() changeTaskStatus: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addHandler() {
    this.changeTaskStatus.emit();
  }
}
