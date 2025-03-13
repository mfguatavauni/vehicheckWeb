import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfamilygroupComponent } from './addfamilygroup.component';

describe('AddfamilygroupComponent', () => {
  let component: AddfamilygroupComponent;
  let fixture: ComponentFixture<AddfamilygroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddfamilygroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddfamilygroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
