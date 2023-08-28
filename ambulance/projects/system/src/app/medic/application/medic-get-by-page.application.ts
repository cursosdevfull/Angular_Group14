import { Inject, Injectable } from '@angular/core';

import { MedicRepository } from '../domain/repositories/medic.repository';
import { MedicInfrastructure } from '../infrastructure/medic.infrastructure';

@Injectable()
export class MedicGetByPageApplication {
  constructor(
    @Inject(MedicInfrastructure) private readonly repository: MedicRepository
  ) {}

  execute(page: number) {
    return this.repository.getByPage(page);
  }
}
