import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcardComponent } from './newcard.component';

describe('NewcardComponent', () => {
  let component: NewcardComponent;
  let fixture: ComponentFixture<NewcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcardComponent]
    });
    fixture = TestBed.createComponent(NewcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
