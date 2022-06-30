import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatMenComponent } from './cat-men.component';

describe('CatMenComponent', () => {
  let component: CatMenComponent;
  let fixture: ComponentFixture<CatMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatMenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
