import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComminicationComponent } from './comminication.component';

describe('ComminicationComponent', () => {
  let component: ComminicationComponent;
  let fixture: ComponentFixture<ComminicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComminicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComminicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
