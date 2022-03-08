import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentServiceService } from 'src/app/student-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  message:boolean=false;
  constructor(private studentService : StudentServiceService , private router :ActivatedRoute) { }

  editStudent = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('' , [Validators.required,Validators.email])
  })

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.studentService.GetStudentDataByID(this.router.snapshot.params.id).subscribe((result:any)=>{
      console.log(result)

      this.editStudent.patchValue({
        name:result['name'],
        email:result['email']
      })

    })
  }

  UpdateData()
  {
    //console.log(this.addStudent.value)
    this.studentService.EditStudentData(this.editStudent.value , this.router.snapshot.params.id).subscribe(result=>{
      console.log(result)
      this.message=true;
      this.editStudent.reset()
    })
  }

  removeAlert(){
    this.message=false
  }

}
