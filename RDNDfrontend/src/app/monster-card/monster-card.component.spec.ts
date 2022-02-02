import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterCardComponent } from './monster-card.component';

describe('MonsterCardComponent', () => {
  let component: MonsterCardComponent;
  let fixture: ComponentFixture<MonsterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
