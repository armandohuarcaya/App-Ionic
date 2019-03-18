import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarapotoPage } from './tarapoto.page';

describe('TarapotoPage', () => {
  let component: TarapotoPage;
  let fixture: ComponentFixture<TarapotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarapotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarapotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
