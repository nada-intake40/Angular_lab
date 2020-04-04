import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesService } from './services/courses.service';


@NgModule({
  declarations: [CoursesComponent,
     CoursesListComponent,
      CoursesItemComponent,
       CoursesDetailsComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  providers:[CoursesService],
  exports: [
    CoursesComponent
    ],
})
export class CoursesModule { }
