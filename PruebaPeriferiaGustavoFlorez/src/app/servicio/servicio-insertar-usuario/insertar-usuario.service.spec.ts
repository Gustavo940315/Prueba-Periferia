import { TestBed } from '@angular/core/testing';

import { InsertarUsuarioService } from './insertar-usuario.service';

describe('InsertarUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertarUsuarioService = TestBed.get(InsertarUsuarioService);
    expect(service).toBeTruthy();
  });
});
