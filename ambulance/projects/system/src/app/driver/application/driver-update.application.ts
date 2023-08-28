import { Inject, Injectable } from '@angular/core';

import { DriverRepository } from '../domain/repositories/driver.repository';
import { DriverInfrastructure } from '../infrastructure/driver.infrastructure';

@Injectable()
export class DriverUpdateApplication {
  constructor(
    @Inject(DriverInfrastructure) private readonly repository: DriverRepository
  ) {}

  execute(id: number, driver: any) {
    return this.repository.update(id, driver);
  }
}
