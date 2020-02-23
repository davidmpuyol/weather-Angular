import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatospuebloComponent } from './datospueblo.component';

describe('DatospuebloComponent', () => {
  let component: DatospuebloComponent;
  let fixture: ComponentFixture<DatospuebloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatospuebloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatospuebloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
