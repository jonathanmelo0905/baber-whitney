import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionLoteComponent } from './ubicacion-lote.component';

describe('UbicacionLoteComponent', () => {
  let component: UbicacionLoteComponent;
  let fixture: ComponentFixture<UbicacionLoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacionLoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicacionLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
