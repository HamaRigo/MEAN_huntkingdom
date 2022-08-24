import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeModeLivraisonComponent } from './liste-mode-livraison.component';

describe('ListeModeLivraisonComponent', () => {
  let component: ListeModeLivraisonComponent;
  let fixture: ComponentFixture<ListeModeLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeModeLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeModeLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
