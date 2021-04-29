import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDataService, Student } from '../student-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private studentDataSvc: StudentDataService
  ) { }

  students: Student[] = [];
  ngOnInit(): void {
    this.students = this.studentDataSvc.getStudents().sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
  }

  addStudent() {
    this.router.navigateByUrl("/add-student");
  }

}
