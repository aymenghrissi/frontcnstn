import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdscComponent } from './formdsc.component';

describe('FormdscComponent', () => {
  let component: FormdscComponent;
  let fixture: ComponentFixture<FormdscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
