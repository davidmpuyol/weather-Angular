import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPuebloComponent } from './card-pueblo.component';

describe('CardPuebloComponent', () => {
  let component: CardPuebloComponent;
  let fixture: ComponentFixture<CardPuebloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPuebloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPuebloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
