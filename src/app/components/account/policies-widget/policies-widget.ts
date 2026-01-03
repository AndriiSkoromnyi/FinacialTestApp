import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-policies-widget',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="mb-4">
      <h3>Policies</h3>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      <div *ngFor="let item of data" class="card p-4 flex flex-col gap-2 hover:bg-gray-800 transition cursor-pointer border-l-4" 
           [ngClass]="{'border-blue-500': item.name === 'Marine Cargo', 'border-green-500': item.name === 'General Liability', 'border-purple-500': item.name === 'Workers Comp', 'border-yellow-500': item.name === 'Property', 'border-red-500': item.name === 'Umbrella'}" >
         <div class="text-sm font-bold text-white flex items-center gap-2">
           <span class="icon">{{ getIcon(item.icon) }}</span> {{ item.name }}
         </div>
         <div class="text-xs text-muted">Premium: \${{ item.premium | number }}</div>
         <div class="text-xs text-muted">Eff Date: {{ item.date }}</div>
      </div>
    </div>
  `,
    styles: [`
    .border-l-4 { border-left-width: 4px; border-top: none; border-right: none; border-bottom: none; }
    .border-blue-500 { border-color: #3b82f6; } /* Marine */
    .border-green-500 { border-color: #10b981; } /* General */
    .border-purple-500 { border-color: #8b5cf6; } /* Work */
    .border-yellow-500 { border-color: #f59e0b; } /* Property */
    .border-red-500 { border-color: #ef4444; } /* Umbrella */
  `]
})
export class PoliciesWidgetComponent {
    @Input() data: any[] = [];

    getIcon(icon: string) {
        // Return emoji for simplicity as requested "icon on click" via vanilla. 
        // Or just simple text mapping.
        const map: any = { 'ship': '🚢', 'shield': '🛡️', 'helmet': '⛑️', 'building': '🏢', 'umbrella': '☂️' };
        return map[icon] || '📄';
    }
}
