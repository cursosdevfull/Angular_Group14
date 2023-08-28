import { Inject, Injectable } from '@angular/core';

import { MedicRepository } from '../domain/repositories/medic.repository';
import { MedicInfrastructure } from '../infrastructure/medic.infrastructure';

@Injectable()
export class MedicGetAllApplication {
  constructor(
    @Inject(MedicInfrastructure) private readonly repository: MedicRepository
  ) {}

  execute() {
    return this.repository.getAll();
  }
}
