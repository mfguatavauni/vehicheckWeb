import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilygroupComponent } from './familygroup.component';

describe('FamilygroupComponent', () => {
  let component: FamilygroupComponent;
  let fixture: ComponentFixture<FamilygroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilygroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamilygroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
