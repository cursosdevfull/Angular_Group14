import { Inject, Injectable } from '@angular/core';

import { Driver } from '../domain/driver';
import { DriverRepository } from '../domain/repositories/driver.repository';
import { DriverInfrastructure } from '../infrastructure/driver.infrastructure';

@Injectable()
export class DriverCreateApplication {
  constructor(
    @Inject(DriverInfrastructure) private readonly repository: DriverRepository
  ) {}

  execute(driver: Driver) {
    return this.repository.create(driver);
  }
}
