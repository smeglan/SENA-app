import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapageoPage } from './mapageo.page';

describe('MapageoPage', () => {
  let component: MapageoPage;
  let fixture: ComponentFixture<MapageoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapageoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapageoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
