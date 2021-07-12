/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PorproductoComponent } from './porproducto.component';

describe('PorproductoComponent', () => {
  let component: PorproductoComponent;
  let fixture: ComponentFixture<PorproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
