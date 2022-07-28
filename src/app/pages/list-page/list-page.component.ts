import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/service/service.service';
import { Router} from '@angular/router';
// import { NgxInfiniteScrollService } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  
  pageNo:number=1;
  data: any;
  searchkey:string='';

  constructor(
    private router:Router,
    private http:HttpClient,
    private user: ServiceService
  ) {
    
   }

  ngOnInit(): void {
    this.user.getData('',this.pageNo).subscribe((data : any) => {
      console.warn(data);
      this.data=data?.hits;
    })
  }

  onSubmit(event:any){
    console.log(event.target.value)
  }


  onImageSearch(value:any){
    this.searchkey = value;
    this.user.getData(this.searchkey,this.pageNo).subscribe((data:any)=>{
      this.data=data?.hits;
    })
  }
  setNextPage(){
    console.log(this.pageNo);
    this.pageNo = this.pageNo + 1;
    this.user.getData(this.searchkey,this.pageNo).subscribe((data:any)=>{
      this.data=data?.hits;
    })
  }
  setPrevPage(){
    console.log(this.pageNo);
    this.pageNo = this.pageNo - 1;
    this.user.getData(this.searchkey,this.pageNo).subscribe((data:any)=>{
      this.data=data?.hits;
    })
  }
  onScroll(){
    this.pageNo = this.pageNo + 1;
    const prevdata = [...this.data];
    this.user.getData(this.searchkey,this.pageNo).subscribe((data:any)=>{
      this.data = prevdata.concat(data?.hits);
      console.log("data",this.data);
    })
    console.log(this.pageNo);
  }
}
