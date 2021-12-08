import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatElectComponent } from './cat-elect.component';

describe('CatElectComponent', () => {
  let component: CatElectComponent;
  let fixture: ComponentFixture<CatElectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatElectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatElectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
