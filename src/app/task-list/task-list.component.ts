import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskServiceService } from '../task-service/task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService: TaskServiceService, private router: Router) { }

  tasks: Task[];

  ngOnInit() {
    this.taskService.getTask().
      subscribe(
        data => {
          this.tasks = data;
        }
      )
  }

  editTask(task: Task): void {
    window.localStorage.removeItem('editTaskId');
    window.localStorage.setItem('editTaskId', task.taskId.toString());
    this.router.navigate(['/edit-task']);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.taskId)
      .subscribe(data => {
        this.tasks = this.tasks.filter(u => u !== task);
      })

  }

}