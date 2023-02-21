import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showHideSideBar : boolean = false;


  constructor( private appService : AppService,
               private router : Router) { }



  onShowSideBarChange(showHideSideBar: boolean) {
    this.showHideSideBar = showHideSideBar;

    }

}
