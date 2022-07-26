import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstruirVivirComponent } from './construir-vivir.component';

describe('ConstruirVivirComponent', () => {
  let component: ConstruirVivirComponent;
  let fixture: ComponentFixture<ConstruirVivirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstruirVivirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstruirVivirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
