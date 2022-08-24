import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtatPanierComponent } from './list-etat-panier.component';

describe('ListEtatPanierComponent', () => {
  let component: ListEtatPanierComponent;
  let fixture: ComponentFixture<ListEtatPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEtatPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEtatPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
