import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { TeachersService } from '../services/teachers.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers:[CoursesService, TeachersService]
})
export class CoursesComponent implements OnInit {
  courses;
  coures;
  teachers;
  constructor(private coursesService: CoursesService, private teachersService: TeachersService) { }
  getAll() {
    return this.coursesService.getAll().then(res => this.courses = res);
  }
  getall()
  {
    this.teachersService.getAll().then(res=> this.teachers = res);
  }
  // getById(id : number)
  // {
  //   return this.coursesService.getById(id).then(res => this.courses = res);

  // }
  ngOnInit() {
    this.getAll();
    this.getall();
  }

}
