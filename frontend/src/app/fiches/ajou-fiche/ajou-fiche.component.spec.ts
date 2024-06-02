import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouFicheComponent } from './ajou-fiche.component';

describe('AjouFicheComponent', () => {
  let component: AjouFicheComponent;
  let fixture: ComponentFixture<AjouFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouFicheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
