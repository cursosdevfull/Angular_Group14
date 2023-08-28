import { Inject, Injectable } from '@angular/core';

import { DriverRepository } from '../domain/repositories/driver.repository';
import { DriverInfrastructure } from '../infrastructure/driver.infrastructure';

@Injectable()
export class DriverDeleteApplication {
  constructor(
    @Inject(DriverInfrastructure) private readonly repository: DriverRepository
  ) {}

  execute(id: number) {
    return this.repository.delete(id);
  }
}
