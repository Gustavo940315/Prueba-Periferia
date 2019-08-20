import { TestBed } from '@angular/core/testing';

import { ConsultarUsuarioService } from './consultar-usuario.service';

describe('ConsultarUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultarUsuarioService = TestBed.get(ConsultarUsuarioService);
    expect(service).toBeTruthy();
  });
});
