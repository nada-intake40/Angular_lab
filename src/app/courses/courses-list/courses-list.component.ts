import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses=[
    {
      id:1 ,
      title:'NodeJs',
      instructor:"Ali",
      isAvailable:true
    },
    {
      id:2 ,
      title:'Angular',
      instructor:"Gnedy",
      isAvailable:true
    },
    {
      id:3,
      title:'Laravel',
      instructor:"Ahmed",
      isAvailable:false
    },
     {
      id:1 ,
      title:'NodeJs',
      instructor:"Ali",
      isAvailable:true
    }

  ]
  clickedCourseTitle;
  constructor(private _courseService: CoursesService) { }

  ngOnInit(): void {
  }

  onCourseClick(data){
    console.log(data);
    this.clickedCourseTitle=data;
  }

  clickCourseIten(data)
  {
    this._courseService.changeCourseData(data); 
  }
}
