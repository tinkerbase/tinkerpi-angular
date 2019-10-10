import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphQLTestComponent } from './graph-qltest.component';

describe('GraphQLTestComponent', () => {
  let component: GraphQLTestComponent;
  let fixture: ComponentFixture<GraphQLTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphQLTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphQLTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
