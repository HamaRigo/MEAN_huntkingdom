import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEtatPanierComponent } from './modifier-etat-panier.component';

describe('ModifierEtatPanierComponent', () => {
  let component: ModifierEtatPanierComponent;
  let fixture: ComponentFixture<ModifierEtatPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierEtatPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierEtatPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
