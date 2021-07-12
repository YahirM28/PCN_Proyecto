/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ManuelsanchezComponent } from './manuelsanchez.component';

describe('ManuelsanchezComponent', () => {
  let component: ManuelsanchezComponent;
  let fixture: ComponentFixture<ManuelsanchezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManuelsanchezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuelsanchezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
