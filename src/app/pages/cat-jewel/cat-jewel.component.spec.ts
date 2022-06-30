import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatJewelComponent } from './cat-jewel.component';

describe('CatJewelComponent', () => {
  let component: CatJewelComponent;
  let fixture: ComponentFixture<CatJewelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatJewelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatJewelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
