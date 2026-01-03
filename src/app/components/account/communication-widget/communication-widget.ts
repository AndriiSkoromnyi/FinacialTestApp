import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-communication-widget',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="mb-4">
       <h3>Communication</h3>
    </div>
    <div class="card p-4">
      <div class="flex gap-4 mb-4">
        <input type="text" placeholder="Search..." class="bg-gray-800 border-none rounded px-3 py-1 text-xs w-64 text-white">
        <button class="btn btn-secondary text-xs">Filter</button>
        <button class="btn btn-secondary text-xs">Group</button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div *ngFor="let item of data" class="bg-[#232432] p-4 rounded border border-gray-700">
           <div class="flex justify-between mb-2">
             <span class="badge" [ngClass]="{'bg-blue-600 text-white': !item.responded, 'bg-gray-700 text-gray-300': item.responded}">
               {{ item.responded ? 'Responded' : 'NEW' }}
             </span>
             <span class="text-xs text-muted">{{ item.date }}</span>
           </div>
           
           <div class="font-bold text-white text-sm mb-1">{{ item.subject }}</div>
           <div class="text-xs text-muted mb-2">{{ item.sender }}</div>
           <p class="text-xs text-gray-400 mb-3 line-clamp-2">{{ item.content }}</p>
           
           <div class="flex gap-2">
             <button *ngIf="item.attachments" class="btn btn-secondary text-xs px-2 py-1 flex items-center gap-1">
               📎 {{ item.attachments }} attachments
             </button>
             <button class="btn btn-primary text-xs px-3 py-1">Reply</button>
           </div>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .badge { padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: bold; }
  `]
})
export class CommunicationWidgetComponent {
    @Input() data: any[] = [];
}
