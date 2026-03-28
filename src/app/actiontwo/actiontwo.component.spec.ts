import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiontwoComponent } from './actiontwo.component';

describe('ActiontwoComponent', () => {
  let component: ActiontwoComponent;
  let fixture: ComponentFixture<ActiontwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiontwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiontwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
