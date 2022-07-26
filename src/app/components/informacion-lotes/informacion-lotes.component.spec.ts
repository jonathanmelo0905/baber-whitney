import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionLotesComponent } from './informacion-lotes.component';

describe('InformacionLotesComponent', () => {
  let component: InformacionLotesComponent;
  let fixture: ComponentFixture<InformacionLotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionLotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionLotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
