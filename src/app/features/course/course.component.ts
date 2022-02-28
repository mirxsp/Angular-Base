import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
    ValidateAuthorName,
} from 'src/app/shared/directives/author-name-validator.directive';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
    courseForm = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        newAuthor: new FormControl('', ValidateAuthorName),
        authors: new FormArray([]),
        duration: new FormControl('', Validators.required),
    });
    constructor() {}

    ngOnInit(): void {}

    get authors() {
        return this.courseForm.get('authors') as FormArray;
    }

    get title(){
        return this.courseForm.get('title');
    }

    get description(){
        return this.courseForm.get('description');
    }

    get duration(){
        return this.courseForm.get('duration');
    }

    addAuthor() {
        this.authors.push(
            new FormControl(this.courseForm.get('newAuthor')?.value),
        );
    }
    deleteAuthor(index: number) {
        this.authors.removeAt(index);
    }
}
