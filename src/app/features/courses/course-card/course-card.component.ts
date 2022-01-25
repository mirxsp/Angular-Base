import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CourseCardData } from './course-card-data';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit, OnChanges {
  @Input() data!: CourseCardData;  
  duration: string = "unset";
  authors: string = "unknown";
  creationDate: string = "unknown";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() : void {
    if(this.data){
      if(this.data.duration !== null && this.duration !== undefined){
        const hours = (this.data.duration / 60).toFixed(0);
        const minutes = this.data.duration % 60;
        const hourString = this.data.duration < 120 ? "hour" : "hours";
        this.duration = `${hours}:${minutes} ${hourString}`
      }
      if(this.data.authors){
        this.authors = this.data.authors.join(', ');
      }
      if(this.data.creationDate){
        this.creationDate = this.data.creationDate.toDateString();
      }
    }
  }

}
