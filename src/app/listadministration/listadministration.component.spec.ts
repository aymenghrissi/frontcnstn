import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadministrationComponent } from './listadministration.component';

describe('ListadministrationComponent', () => {
  let component: ListadministrationComponent;
  let fixture: ComponentFixture<ListadministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadministrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
