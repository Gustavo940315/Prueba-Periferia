import { TestBed } from '@angular/core/testing';

import { ActualizarUsuarioService } from './actualizar-usuario.service';

describe('ActualizarUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActualizarUsuarioService = TestBed.get(ActualizarUsuarioService);
    expect(service).toBeTruthy();
  });
});
