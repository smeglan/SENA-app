import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent implements OnInit {
  @Input() courses: Course[];
  constructor() { }

  ngOnInit() {}

}
