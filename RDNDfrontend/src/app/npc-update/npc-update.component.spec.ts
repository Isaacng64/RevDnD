import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcUpdateComponent } from './npc-update.component';

describe('NpcUpdateComponent', () => {
  let component: NpcUpdateComponent;
  let fixture: ComponentFixture<NpcUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
