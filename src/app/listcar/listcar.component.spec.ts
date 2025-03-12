import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcarComponent } from './listcar.component';

describe('ListcarComponent', () => {
  let component: ListcarComponent;
  let fixture: ComponentFixture<ListcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListcarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
