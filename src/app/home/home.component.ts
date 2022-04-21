import { Component, NgModuleRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('loadingSpinner', {static: false}) loadingSpinner : TemplateRef<any> | undefined;

  constructor(
  ) { }

  ngOnInit(): void {
    
  }

}
