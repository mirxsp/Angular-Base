import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CourseCardData } from './course-card-data';

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit, OnChanges {
    @Input() data!: CourseCardData;
    durationPostfix: string = '';
    creationDate: string = 'unknown';

    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(): void {
        if (this.data) {
            if (this.data.creationDate) {
                this.creationDate = this.data.creationDate.toDateString();
            }
        }
    }
}
