import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Course } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  getDataCourses() {
    firebase.auth().currentUser;
    let courses: Course[] = [];
    firebase.database().ref('/training_course/').once('value').then((result) => {
      const response = result.val();
      Object.keys(response).map((key) => {
        const course: Course = <Course>response[key];
        courses.push(course);
      });
      return courses;
    });
    console.log(courses);
    return courses;
  }
}
