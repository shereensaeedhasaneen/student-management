import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/students';

  getAllStudent(){
   return this.http.get(this.url)
  }

  saveStudentData(data:any){
    console.log('console from service')
    console.log(data);
    return this.http.post(this.url , data)
  }

  DeleteStudentData(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
}
