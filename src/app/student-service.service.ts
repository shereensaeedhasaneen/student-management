import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/students'
  getAllStudent(){
   return this.http.get(this.url)
  }
}
