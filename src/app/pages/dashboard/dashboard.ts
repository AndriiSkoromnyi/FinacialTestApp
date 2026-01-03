import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { WorkQueueComponent } from '../../components/dashboard/work-queue/work-queue';
import { PortfolioGoalsComponent } from '../../components/dashboard/portfolio-goals/portfolio-goals';
import { QuickActionsComponent } from '../../components/dashboard/quick-actions/quick-actions';
import { MarketIntelligenceComponent } from '../../components/dashboard/market-intelligence/market-intelligence';
import { MyAccountsComponent } from '../../components/dashboard/my-accounts/my-accounts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    WorkQueueComponent,
    PortfolioGoalsComponent,
    QuickActionsComponent,
    MarketIntelligenceComponent,
    MyAccountsComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {
  dataService = inject(MockDataService);
  data: any = {};

  ngOnInit() {
    this.dataService.getDashboardData().subscribe(res => {
      this.data = res;
    });
  }
}
