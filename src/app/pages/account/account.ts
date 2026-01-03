import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { AccountHeaderComponent } from '../../components/account/account-header/account-header';
import { PerformanceMetricsComponent } from '../../components/account/performance-metrics/performance-metrics';
import { PoliciesWidgetComponent } from '../../components/account/policies-widget/policies-widget';
import { AccountStatusComponent } from '../../components/account/account-status/account-status';
import { WinnabilityWidgetComponent } from '../../components/account/winnability-widget/winnability-widget';
import { CommunicationWidgetComponent } from '../../components/account/communication-widget/communication-widget';
import { PoliciesTableComponent } from '../../components/account/policies-table/policies-table';

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [
    CommonModule,
    AccountHeaderComponent,
    PerformanceMetricsComponent,
    PoliciesWidgetComponent,
    AccountStatusComponent,
    WinnabilityWidgetComponent,
    CommunicationWidgetComponent,
    PoliciesTableComponent
  ],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class AccountComponent implements OnInit {
  dataService = inject(MockDataService);
  accountData: any = {};

  ngOnInit() {
    this.dataService.getAccountData().subscribe(res => {
      this.accountData = res;
    });
  }
}
