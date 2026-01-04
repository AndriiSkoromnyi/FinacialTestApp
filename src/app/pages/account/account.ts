
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountHeaderComponent } from '../../components/account/account-header/account-header';
import { PerformanceMetricsComponent } from '../../components/account/performance-metrics/performance-metrics';
import { PoliciesSummaryComponent } from '../../components/account/policies-summary/policies-summary';
import { AccountStatusComponent } from '../../components/account/account-status/account-status';
import { ComplianceDocsComponent } from '../../components/account/compliance-docs/compliance-docs';
import { AccountDetailsComponent } from '../../components/account/account-details/account-details';
import { CommunicationComponent } from '../../components/account/communication/communication';
import { PoliciesTableComponent } from '../../components/account/policies-table/policies-table';

@Component({
    selector: 'app-account-page',
    standalone: true,
    imports: [
        CommonModule,
        AccountHeaderComponent,
        PerformanceMetricsComponent,
        PoliciesSummaryComponent,
        AccountStatusComponent,
        ComplianceDocsComponent,
        AccountDetailsComponent,
        CommunicationComponent,
        PoliciesTableComponent
    ],
    templateUrl: 'account.html',
    styleUrls: ['account.css']
})
export class AccountPage { }
