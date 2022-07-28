import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http:HttpClient
  ) { }
  getData(searchText:string,page:number) {
    let url='https://pixabay.com/api/?key=28470179-37586a99bc8d8e7511db772eb&q='+searchText+'&image_type=photo&pretty=true&page='+page;
    return this.http.get(url);
   }

  //  getSearchData(searchText: string) {
  //   let url='https://pixabay.com/api/?key=28470179-37586a99bc8d8e7511db772eb&q='+searchText+'&image_type=photo&pretty=true';
  //   return this.http.get(url);
  //  }
}
