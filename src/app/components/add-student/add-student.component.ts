import { StudentServiceService } from './../../student-service.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  message:boolean=false;
  constructor(private studentService : StudentServiceService) { }

  addStudent = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('' , [Validators.required,Validators.email])
  })

  ngOnInit(): void {
  }

  SaveData()
  {
    //console.log(this.addStudent.value)
    this.studentService.saveStudentData(this.addStudent.value).subscribe(result=>{
      console.log(result)
      this.message=true;
      this.addStudent.reset()
    })
  }

  removeAlert(){
    this.message=false
  }
}
