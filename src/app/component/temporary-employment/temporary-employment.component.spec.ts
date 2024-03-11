import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryEmploymentComponent } from './temporary-employment.component';

describe('TemporaryEmploymentComponent', () => {
  let component: TemporaryEmploymentComponent;
  let fixture: ComponentFixture<TemporaryEmploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemporaryEmploymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemporaryEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
