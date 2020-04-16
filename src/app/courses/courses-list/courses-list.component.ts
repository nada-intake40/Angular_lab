import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses;
  clickedCourseTitle;
  constructor(private _coursesService: CoursesService,
    private _activeRoute:ActivatedRoute) {
    console.log(_coursesService);
  }

  ngOnInit(): void {
    this._activeRoute.queryParamMap.subscribe((queryParamMap) =>{
       const limit =queryParamMap.get('limit') || 10 ;
      this._coursesService.getCourses({limit}).subscribe((res : any) => {
        if(res.status)
        {
          this.courses=res.data;
        }
      });
    });
  }

  onCourseClick(ev) {
    console.log(ev);
    this.clickedCourseTitle = ev;
  }
  onCourseItemClick(course) {
    this._coursesService.changeCourseData(course);
  }
}
