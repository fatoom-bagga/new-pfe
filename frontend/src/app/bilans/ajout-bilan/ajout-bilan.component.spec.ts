import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBilanComponent } from './ajout-bilan.component';

describe('AjoutBilanComponent', () => {
  let component: AjoutBilanComponent;
  let fixture: ComponentFixture<AjoutBilanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutBilanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutBilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
