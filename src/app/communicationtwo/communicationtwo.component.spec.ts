import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationtwoComponent } from './communicationtwo.component';

describe('CommunicationtwoComponent', () => {
  let component: CommunicationtwoComponent;
  let fixture: ComponentFixture<CommunicationtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationtwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
