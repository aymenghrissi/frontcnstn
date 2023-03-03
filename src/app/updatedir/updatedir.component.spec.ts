import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedirComponent } from './updatedir.component';

describe('UpdatedirComponent', () => {
  let component: UpdatedirComponent;
  let fixture: ComponentFixture<UpdatedirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
