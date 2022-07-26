import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaLoteComponent } from './area-lote.component';

describe('AreaLoteComponent', () => {
  let component: AreaLoteComponent;
  let fixture: ComponentFixture<AreaLoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaLoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
