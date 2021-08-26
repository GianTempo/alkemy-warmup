import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodospageComponent } from './todospage.component';

describe('TodospageComponent', () => {
  let component: TodospageComponent;
  let fixture: ComponentFixture<TodospageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodospageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodospageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
