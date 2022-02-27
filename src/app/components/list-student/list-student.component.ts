import { StudentServiceService } from './../../student-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  constructor( private student:StudentServiceService) { }

  studentData:any={};
  ngOnInit(): void {
    this.student.getAllStudent().subscribe(allStudent => {
      console.log(allStudent);
      this.studentData=allStudent
    });

  }

}
