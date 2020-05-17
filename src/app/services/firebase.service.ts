import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Course } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  // getDataCourses() {
  //   const newLocal = firebase.auth().currentUser;
  //   const courses: Course[] = [];
  //   firebase.database().ref('/training_course/').once('value').then((result) => {
  //     const response = result.val();
  //     Object.keys(response).map((key) => {
  //       const course: Course = response[key] as Course;
  //       courses.push(course);
  //     });
  //     return courses;
  //   });
  //   console.log(courses);
  //   return courses;
  // }
}
