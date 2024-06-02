import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOrdComponent } from './details-ord.component';

describe('DetailsOrdComponent', () => {
  let component: DetailsOrdComponent;
  let fixture: ComponentFixture<DetailsOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsOrdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
