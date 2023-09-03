import { Inject, Injectable } from '@angular/core';

import { DriverRepository } from '../domain/repositories/driver.repository';
import { DriverInfrastructure } from '../infrastructure/driver.infrastructure';

@Injectable()
export class DriverGetAllApplication {
  constructor(
    @Inject(DriverInfrastructure) private readonly repository: DriverRepository
  ) {}

  execute() {
    return this.repository.getAll();
  }
}
