import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CourseCardData } from './course-card/course-card-data';
import { CourseListMock } from './course-list/course-list-mock';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {
  courses: CourseCardData[] = CourseListMock;
  showModal: boolean = false;
  lastModalResult: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  setModalResult(event: boolean){
    this.showModal = false;
    this.lastModalResult = event ? "Ok" : "Cancel"
  }

  showModalWindow(){
    this.showModal = true;
  }
}
