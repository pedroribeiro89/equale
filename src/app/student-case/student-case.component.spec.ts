import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCaseComponent } from './student-case.component';

describe('StudentCaseComponent', () => {
  let component: StudentCaseComponent;
  let fixture: ComponentFixture<StudentCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
