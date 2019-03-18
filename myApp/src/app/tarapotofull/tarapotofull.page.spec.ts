import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarapotofullPage } from './tarapotofull.page';

describe('TarapotofullPage', () => {
  let component: TarapotofullPage;
  let fixture: ComponentFixture<TarapotofullPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarapotofullPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarapotofullPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
