import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcSheetComponent } from './npc-sheet.component';

describe('NpcSheetComponent', () => {
  let component: NpcSheetComponent;
  let fixture: ComponentFixture<NpcSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
