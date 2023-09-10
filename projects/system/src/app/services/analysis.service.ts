import { Injectable } from '@angular/core';

@Injectable()
export class AnalysisService {
  constructor() {}

  register() {
    console.log('analysis service registered');
  }
}
