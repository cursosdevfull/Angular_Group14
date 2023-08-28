import { Inject, Injectable } from '@angular/core';

import { MedicRepository } from '../domain/repositories/medic.repository';
import { MedicInfrastructure } from '../infrastructure/medic.infrastructure';

@Injectable()
export class MedicDeleteApplication {
  constructor(
    @Inject(MedicInfrastructure) private readonly repository: MedicRepository
  ) {}

  execute(id: number) {
    return this.repository.delete(id);
  }
}
