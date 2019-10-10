import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mstPeopleComponent } from './mst-people.component';

describe('mstPeopleComponent', () => {
  let component: mstPeopleComponent;
  let fixture: ComponentFixture<mstPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mstPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mstPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
