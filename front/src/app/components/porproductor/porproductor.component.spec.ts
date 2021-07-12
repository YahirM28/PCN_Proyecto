/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PorproductorComponent } from './porproductor.component';

describe('PorproductorComponent', () => {
  let component: PorproductorComponent;
  let fixture: ComponentFixture<PorproductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorproductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
