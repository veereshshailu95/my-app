import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularetwoComponent } from './calcularetwo.component';

describe('CalcularetwoComponent', () => {
  let component: CalcularetwoComponent;
  let fixture: ComponentFixture<CalcularetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularetwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcularetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
