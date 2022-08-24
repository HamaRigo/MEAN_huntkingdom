import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterModeLivraisonComponent } from './ajouter-mode-livraison.component';

describe('AjouterModeLivraisonComponent', () => {
  let component: AjouterModeLivraisonComponent;
  let fixture: ComponentFixture<AjouterModeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterModeLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterModeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
