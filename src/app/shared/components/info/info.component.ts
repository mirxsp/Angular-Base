import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnChanges {
  @Input() title = '';
  @Input() text = '';

  constructor() { }

  ngOnInit(): void {
    this.checkRequieredFields();
  }

  ngOnChanges(): void { 
    this.checkRequieredFields();
  }

  checkRequieredFields(){
    if(this.title == null || this.title == ''){
      throw new Error("Attribute 'title' is required");
    }
  }

}
