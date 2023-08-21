import { Inject, Injectable } from '@angular/core';

import { DriverRepository } from '../domain/repositories/driver.repository';
import { DriverInfrastructure } from '../infrastructure/driver.infrastructure';

@Injectable()
export class DriverGetByPageApplication {
  constructor(
    @Inject(DriverInfrastructure) private readonly repository: DriverRepository
  ) {}

  execute(page: number) {
    return this.repository.getByPage(page);
  }
}
