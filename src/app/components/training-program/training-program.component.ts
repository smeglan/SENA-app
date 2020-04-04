import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-training-program',
  templateUrl: './training-program.component.html',
  styleUrls: ['./training-program.component.scss'],
})
export class TrainingProgramComponent implements OnInit {
  @Input() course: Course;
  @Input() indice: number;
  constructor() { }
  
  ngOnInit() {}

}
