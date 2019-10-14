import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpassPage } from './userpass.page';

describe('UserpassPage', () => {
  let component: UserpassPage;
  let fixture: ComponentFixture<UserpassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
