import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance-metrics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-4">
      <h3>Performance Metrics</h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <!-- Winnability -->
      <div class="card p-5">
        <div class="text-xs text-muted font-bold uppercase mb-2">Winnability <span class="text-blue-400">●●●●</span></div>
        <div class="text-4xl font-thin text-white mb-4">{{ data.winnability }}</div>
        <a href="#" class="text-xs text-primary">See all factors -></a>
      </div>

      <!-- Loss Ratio -->
      <div class="card p-5">
        <div class="text-xs text-muted font-bold uppercase mb-2">Loss Ratio</div>
        <div class="flex items-baseline gap-2 mb-4">
           <span class="text-4xl font-thin text-white">{{ data.lossRatio?.value }}%</span>
           <span class="text-xs text-muted">vs {{ data.lossRatio?.target }}% target</span>
        </div>
        <a href="#" class="text-xs text-primary">View history -></a>
      </div>

      <!-- Premium Growth -->
      <div class="card p-5">
        <div class="text-xs text-muted font-bold uppercase mb-2">Premium Growth</div>
        <div class="flex items-baseline gap-2 mb-1">
           <span class="text-4xl font-thin text-white">{{ data.premiumGrowth?.value }}%</span>
           <span class="text-xs text-muted">YoY Increase</span>
        </div>
        <div class="text-xs text-muted mb-4">$123M vs $150M Target</div>
        <a href="#" class="text-xs text-primary">View trend -></a>
      </div>

      <!-- Exposure Distribution -->
       <div class="card p-5">
        <div class="text-xs text-muted font-bold uppercase mb-2">Exposure Distribution</div>
        <div class="flex flex-col gap-2 mt-2">
           <div *ngFor="let item of data.exposure" class="flex items-center gap-2">
             <div class="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
               <div class="h-full bg-blue-500" [style.width.%]="item.value"></div>
             </div>
             <div class="text-xs text-white whitespace-nowrap">{{ item.label }}: {{ item.value }}%</div>
           </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .text-primary { color: var(--primary); }
    .text-muted { color: var(--text-muted); }
  `]
})
export class PerformanceMetricsComponent {
  @Input() data: any = {};
}
