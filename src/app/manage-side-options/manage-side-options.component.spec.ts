import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSideOptionsComponent } from './manage-side-options.component';

describe('ManageSideOptionsComponent', () => {
  let component: ManageSideOptionsComponent;
  let fixture: ComponentFixture<ManageSideOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSideOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageSideOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
