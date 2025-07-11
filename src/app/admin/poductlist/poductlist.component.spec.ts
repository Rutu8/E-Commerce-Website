import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductlistComponent } from './poductlist.component';

describe('PoductlistComponent', () => {
  let component: PoductlistComponent;
  let fixture: ComponentFixture<PoductlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoductlistComponent]
    });
    fixture = TestBed.createComponent(PoductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
