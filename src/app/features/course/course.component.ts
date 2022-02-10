import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
    ValidateAuthorName,
} from 'src/app/shared/directives/author-name-validator.directive';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
    courseForm = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        newAuthor: new FormControl('', ValidateAuthorName),
        authors: new FormArray([], Validators.required),
        duration: new FormControl('', Validators.required),
    });
    constructor() {}

    ngOnInit(): void {}

    get authors() {
        return this.courseForm.get('authors') as FormArray;
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
