import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-service/task-service.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  searckTaskForm : FormGroup;
  
  constructor(private formBuilder : FormBuilder, private router : Router,
    private taskService : TaskServiceService ) { }

  ngOnInit() {
    this.searckTaskForm = this.formBuilder.group({
      task: ['', Validators.required],
      parentName: ['', Validators.required],
      priorityFrom : ['', Validators.required],
      priorityTo: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }


  searchTask(){
    this.taskService.searchTask(this.searckTaskForm.value)
    .subscribe( data => {
      this.router.navigate(['view-task']);
    });
}

}
