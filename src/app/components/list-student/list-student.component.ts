import { StudentServiceService } from './../../student-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  constructor( private student:StudentServiceService) { }

  studentData:any=[];
  dtOptions:DataTables.Settings={};
  ngOnInit(): void {
    this.dtOptions={
      pagingType:'full_numbers',
      pageLength:5,
      lengthMenu:[5,10,15,50],
      processing:true
    }
    this.student.getAllStudent().subscribe((allStudent :any) => {
      console.log(allStudent);
      this.studentData=allStudent
    });
  }

  deleteStudent(id:number){
    this.student.DeleteStudentData(id).subscribe(result=>{
      console.log(result);
      this.ngOnInit()
    })
  }
}
