import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdComponent } from './list-ord.component';

describe('ListOrdComponent', () => {
  let component: ListOrdComponent;
  let fixture: ComponentFixture<ListOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOrdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
