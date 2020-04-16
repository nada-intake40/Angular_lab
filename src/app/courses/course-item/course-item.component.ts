import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  @Input('courseData') course;
  @Output() courseClick = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.courseClick.emit(this.course.title);
  }
}
