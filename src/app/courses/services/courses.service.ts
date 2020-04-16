import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CoursesService {
  private _apiUrl='https://afternoon-falls-30227.herokuapp.com/api/v1/courses';
  private _courseSubject = new BehaviorSubject(null);
  
  constructor(private _http: HttpClient ) {}

  changeCourseData(data) {
    this._courseSubject.next(data);
  }

  get courseSubjectObservable() {
    return this._courseSubject.asObservable();
  }

  getCourses(params ={}) {
    return this._http.get(this._apiUrl , {params});
    
  }

  getCourseById(id) {
    return this._http.get(`${this._apiUrl}/${id}`)
  }

  addCourse(course)
  {
    return this._http.post(this._apiUrl , course);
  }
}
