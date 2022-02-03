import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharactherComponent } from './add-characther.component';

describe('AddCharactherComponent', () => {
  let component: AddCharactherComponent;
  let fixture: ComponentFixture<AddCharactherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCharactherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCharactherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
