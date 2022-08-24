import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEtatPanierComponent } from './ajouter-etat-panier.component';

describe('AjouterEtatPanierComponent', () => {
  let component: AjouterEtatPanierComponent;
  let fixture: ComponentFixture<AjouterEtatPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEtatPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEtatPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
