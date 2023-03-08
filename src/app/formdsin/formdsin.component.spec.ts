import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdsinComponent } from './formdsin.component';

describe('FormdsinComponent', () => {
  let component: FormdsinComponent;
  let fixture: ComponentFixture<FormdsinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdsinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
