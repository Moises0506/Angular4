import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPerfilesComponent } from './catalogo-perfiles.component';

describe('CatalogoPerfilesComponent', () => {
  let component: CatalogoPerfilesComponent;
  let fixture: ComponentFixture<CatalogoPerfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoPerfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
