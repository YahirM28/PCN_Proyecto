/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CestaComponent } from './cesta.component';

describe('CestaComponent', () => {
  let component: CestaComponent;
  let fixture: ComponentFixture<CestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
