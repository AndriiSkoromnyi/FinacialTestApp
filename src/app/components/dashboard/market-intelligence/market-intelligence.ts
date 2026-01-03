import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-market-intelligence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-intelligence.html',
  styleUrls: ['./market-intelligence.css']
})
export class MarketIntelligenceComponent {
  @Input() data: any[] = [];
}
