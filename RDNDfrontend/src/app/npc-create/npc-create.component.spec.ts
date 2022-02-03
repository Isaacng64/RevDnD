import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcCreateComponent } from './npc-create.component';

describe('NpcCreateComponent', () => {
  let component: NpcCreateComponent;
  let fixture: ComponentFixture<NpcCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
