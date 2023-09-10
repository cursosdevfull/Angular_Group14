import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CutPipe } from '../pipes/cut.pipe';
import { AnalysisService } from '../services/analysis.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'amb-new-app',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule, CutPipe],
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.css'],
})
export class NewAppComponent {
  paragraph =
    'loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  constructor(private readonly analysisService: AnalysisService) {}

  showMessageInConsole() {
    this.analysisService.register();
  }
}
