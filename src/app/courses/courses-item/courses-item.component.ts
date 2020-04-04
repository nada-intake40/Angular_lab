import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.css']
})
export class CoursesItemComponent implements OnInit {
  @Input('courseObj') course;
  
  
  @Output() courseClick = new EventEmitter();  

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.courseClick.emit(this.course.title);
  }
}
