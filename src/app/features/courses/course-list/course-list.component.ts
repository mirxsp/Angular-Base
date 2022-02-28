import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseCardData } from '../course-card/course-card-data';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent implements OnInit {
  @Input() courses: CourseCardData[] = [];
  @Input() editable: boolean = false;

  @Output() onCourseShow = new EventEmitter<Number>();
  @Output() onCourseEdit = new EventEmitter<Number>();
  @Output() onCourseDelete = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteCourse(id: number){
    this.onCourseDelete.emit(id);
  }

  editCourse(id: number){
    this.onCourseEdit.emit(id);
  }

  showCourse(id: number){
    this.onCourseShow.emit(id);
  }

  trackByCourseId(index: number, course: CourseCardData){
      return course.id;
  }
}
