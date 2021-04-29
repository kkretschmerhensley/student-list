import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(
    private location: Location,
    private studentSvc: StudentDataService
  ) { }

  ngOnInit(): void {
  }

  studentName = "";
  degree = "";

  addStudent() {
    this.studentSvc.addStudent({
      name: this.studentName,
      degreeProgram: this.degree
    });

    this.location.back();
  }

}
