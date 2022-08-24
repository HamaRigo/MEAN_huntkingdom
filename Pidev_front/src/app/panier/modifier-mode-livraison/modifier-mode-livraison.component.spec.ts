import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierModeLivraisonComponent } from './modifier-mode-livraison.component';

describe('ModifierModeLivraisonComponent', () => {
  let component: ModifierModeLivraisonComponent;
  let fixture: ComponentFixture<ModifierModeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierModeLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierModeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
