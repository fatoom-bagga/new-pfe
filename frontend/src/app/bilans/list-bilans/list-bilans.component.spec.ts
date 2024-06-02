import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBilansComponent } from './list-bilans.component';

describe('ListBilansComponent', () => {
  let component: ListBilansComponent;
  let fixture: ComponentFixture<ListBilansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBilansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListBilansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
