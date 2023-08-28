import { Inject, Injectable } from '@angular/core';

import { MedicRepository } from '../domain/repositories/medic.repository';
import { MedicInfrastructure } from '../infrastructure/medic.infrastructure';

@Injectable()
export class MedicUpdateApplication {
  constructor(
    @Inject(MedicInfrastructure) private readonly repository: MedicRepository
  ) {}

  execute(id: number, medic: any) {
    return this.repository.update(id, medic);
  }
}
