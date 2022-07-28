import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageRoutingModule } from './list-page-routing.module';
import { ListPageComponent } from './list-page.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
//import components
import { SearchbarModule } from 'src/app/component/searchbar/searchbar.module';
import { ImgcardsModule } from 'src/app/component/imgcards/imgcards.module';


@NgModule({
  declarations: [
    ListPageComponent
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    InfiniteScrollModule,
    //components
    ImgcardsModule,
    SearchbarModule
  ]
})
export class ListPageModule { }
