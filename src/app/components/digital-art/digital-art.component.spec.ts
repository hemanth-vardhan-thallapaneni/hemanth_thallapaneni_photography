import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalArtComponent } from './digital-art.component';

describe('DigitalArtComponent', () => {
  let component: DigitalArtComponent;
  let fixture: ComponentFixture<DigitalArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalArtComponent]
    });
    fixture = TestBed.createComponent(DigitalArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
