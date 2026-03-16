import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpracticeComponent } from './allpractice.component';

describe('AllpracticeComponent', () => {
  let component: AllpracticeComponent;
  let fixture: ComponentFixture<AllpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
