import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelipruebaComponent } from './peliprueba.component';

describe('PelipruebaComponent', () => {
  let component: PelipruebaComponent;
  let fixture: ComponentFixture<PelipruebaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PelipruebaComponent]
    });
    fixture = TestBed.createComponent(PelipruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
