import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnilistComponent } from './alumnilist.component';

describe('AlumnilistComponent', () => {
  let component: AlumnilistComponent;
  let fixture: ComponentFixture<AlumnilistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnilistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
