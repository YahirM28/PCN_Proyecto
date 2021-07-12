/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PorprovinciaComponent } from './porprovincia.component';

describe('PorprovinciaComponent', () => {
  let component: PorprovinciaComponent;
  let fixture: ComponentFixture<PorprovinciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorprovinciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorprovinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
