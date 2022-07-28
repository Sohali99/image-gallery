import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Output()
  onSearch=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  searchImage(e:any){
    this.onSearch.emit(e.target.value);
  }
}
