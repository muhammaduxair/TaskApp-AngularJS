import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskInt } from '../Task.interface';
import { BehaviorSubject, Observable } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private newTask = new BehaviorSubject<any>({});
  data = this.newTask.asObservable();

  private apiURL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskInt[]> {
    return this.http.get<TaskInt[]>(this.apiURL);
  }

  deleteTask(id: number): Observable<TaskInt> {
    return this.http.delete<TaskInt>(`${this.apiURL}/${id}`);
  }

  toggleReminder(task: TaskInt): Observable<TaskInt> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<TaskInt>(url, task, httpOption);
  }

  addNewTask(task: TaskInt) {
    console.log('DATA ', task);
    this.newTask.next(task);
  }

  addNewtaskToDatabase(task: TaskInt) {
    return this.http.post(this.apiURL, task, httpOption);
  }
}
