import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharComponent } from './add-char.component';

describe('AddCharComponent', () => {
  let component: AddCharComponent;
  let fixture: ComponentFixture<AddCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
