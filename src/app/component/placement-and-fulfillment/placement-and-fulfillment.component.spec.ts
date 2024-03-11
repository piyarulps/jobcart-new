import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementAndFulfillmentComponent } from './placement-and-fulfillment.component';

describe('PlacementAndFulfillmentComponent', () => {
  let component: PlacementAndFulfillmentComponent;
  let fixture: ComponentFixture<PlacementAndFulfillmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementAndFulfillmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacementAndFulfillmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
