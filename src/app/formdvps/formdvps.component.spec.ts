import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdvpsComponent } from './formdvps.component';

describe('FormdvpsComponent', () => {
  let component: FormdvpsComponent;
  let fixture: ComponentFixture<FormdvpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdvpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdvpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
