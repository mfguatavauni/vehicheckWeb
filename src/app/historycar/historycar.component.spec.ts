import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorycarComponent } from './historycar.component';

describe('HistorycarComponent', () => {
  let component: HistorycarComponent;
  let fixture: ComponentFixture<HistorycarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorycarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorycarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
