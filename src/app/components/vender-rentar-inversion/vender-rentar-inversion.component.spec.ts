import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderRentarInversionComponent } from './vender-rentar-inversion.component';

describe('VenderRentarInversionComponent', () => {
  let component: VenderRentarInversionComponent;
  let fixture: ComponentFixture<VenderRentarInversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderRentarInversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenderRentarInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
