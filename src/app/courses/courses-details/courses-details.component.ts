import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {
   course;
   courseSubscription :Subscription ;
  constructor(private _courseService:CoursesService) { }

  ngOnInit(): void {
    this.courseSubscription =this._courseService.courseSubjectObserval.subscribe((data)=>{
      if(data && typeof data === 'object')
      { this.course=data;}
    });
  }

  ngOnDestroy()
  {
    this.courseSubscription.unsubscribe();
  }
}
