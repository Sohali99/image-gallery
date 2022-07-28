import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/service/service.service'; 
// import { ListPageComponent } from 'src/app/pages/list-page/list-page.component';
// import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imgcards',
  templateUrl: './imgcards.component.html',
  styleUrls: ['./imgcards.component.css']
})
export class ImgcardsComponent implements OnInit {

  data: any;
  @Input()
  imgUrl?:string='';

  constructor(
  ) { }

  ngOnInit(): void {

  }

}
