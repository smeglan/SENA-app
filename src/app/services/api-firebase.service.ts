import { Course } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ApiFirebaseService {

  constructor() { }

  getData(){
    firebase.auth().currentUser;
    firebase.database().ref('/training_course/').once('value').then(function (result) {
      let courses = [];
      const response = result.val()
      Object.keys(response).map((key)=>{
        const course:Course = <Course>response[key];
        courses.push(course);
      });
      return courses;
    });
  }
}
