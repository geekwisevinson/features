import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseTestComponent } from './database-test.component';

describe('DatabaseTestComponent', () => {
  let component: DatabaseTestComponent;
  let fixture: ComponentFixture<DatabaseTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
