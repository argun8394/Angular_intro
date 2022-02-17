import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title :string ="header_component";

  constructor() { }

  ngOnInit(): void {
    this.setTitle()
  }


  setTitle(){
    this.title ="new_title for header comp"
  }

}
