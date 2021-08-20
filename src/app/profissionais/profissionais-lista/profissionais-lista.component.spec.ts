import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionaisListaComponent } from './profissionais-lista.component';

describe('ProfissionaisListaComponent', () => {
  let component: ProfissionaisListaComponent;
  let fixture: ComponentFixture<ProfissionaisListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfissionaisListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionaisListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
