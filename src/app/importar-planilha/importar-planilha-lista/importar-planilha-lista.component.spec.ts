import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarPlanilhaListaComponent } from './importar-planilha-lista.component';

describe('ImportarPlanilhaListaComponent', () => {
  let component: ImportarPlanilhaListaComponent;
  let fixture: ComponentFixture<ImportarPlanilhaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportarPlanilhaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarPlanilhaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
