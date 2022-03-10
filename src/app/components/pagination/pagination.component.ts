import { StudentServiceService } from './../../student-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  data:Array<any> = new Array<any>();
  totalRecord:string ='';
  page:number=1
  constructor( private random_users:StudentServiceService) {

  }

  ngOnInit(): void {
  }

  getUsers(){
    this.random_users.getDataForPagination().subscribe(result=>{
      console.log(result)
      this.data=result.results
      console.log(this.data)
      this.totalRecord=result.results.length;
      console.log(this.totalRecord)
    })
  }
}
