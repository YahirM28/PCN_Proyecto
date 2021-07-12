/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChiriquiComponent } from './chiriqui.component';

describe('ChiriquiComponent', () => {
  let component: ChiriquiComponent;
  let fixture: ComponentFixture<ChiriquiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiriquiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiriquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
