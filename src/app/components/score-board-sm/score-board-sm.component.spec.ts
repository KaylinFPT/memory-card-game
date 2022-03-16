import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreBoardSmComponent } from './score-board-sm.component';

describe('ScoreBoardSmComponent', () => {
  let component: ScoreBoardSmComponent;
  let fixture: ComponentFixture<ScoreBoardSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreBoardSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreBoardSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
