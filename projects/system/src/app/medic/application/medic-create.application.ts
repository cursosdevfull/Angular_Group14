import { Inject, Injectable } from '@angular/core';

import { Medic } from '../domain/medic';
import { MedicRepository } from '../domain/repositories/medic.repository';
import { MedicInfrastructure } from '../infrastructure/medic.infrastructure';

@Injectable()
export class MedicCreateApplication {
  constructor(
    @Inject(MedicInfrastructure) private readonly repository: MedicRepository
  ) {}

  execute(medic: Medic) {
    return this.repository.create(medic);
  }
}
