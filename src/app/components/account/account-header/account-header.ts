import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
      <div class="flex items-start gap-4">
        <div class="logo-box">
           <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
             <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-4h8v4" />
           </svg>
        </div>
        <div>
          <h1>{{ data.name }}</h1>
          <p class="text-secondary text-sm mb-2">{{ data.address }}</p>
          <div class="flex gap-6 text-xs text-secondary uppercase tracking-wider">
            <div>
               <span class="block text-muted mb-0.5">EXISTING ACCOUNT</span>
               <span class="text-white font-medium">54353</span>
            </div>
            <div>
               <span class="block text-muted mb-0.5">BROKER</span>
               <span class="text-white font-medium">{{ data.broker }}</span>
            </div>
            <div>
               <span class="block text-muted mb-0.5">UNDERWRITER</span>
               <span class="text-white font-medium">{{ data.underwriter }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="needs-attention-card p-4 rounded-lg bg-[#2a1810] border border-orange-500/20">
         <div class="flex items-center gap-2 mb-3 text-orange-400 font-medium border-b border-orange-500/20 pb-2">
           <span class="icon-warning">⚠️</span> Needs Attention
         </div>
         <div class="flex gap-6 text-xs">
           <div class="flex-1">
             <div class="text-white font-medium mb-0.5">Marine Survey Required</div>
             <div class="text-secondary mb-2">Expected by 08/25/2025</div>
             <a href="#" class="text-blue-400 hover:text-blue-300">Review details -></a>
           </div>
           <div class="w-px bg-white/10"></div>
           <div class="flex-1">
             <div class="text-white font-medium mb-0.5">Loss Control Complete</div>
             <div class="text-secondary mb-2">Last inspection 11/15/2024</div>
             <a href="#" class="text-blue-400 hover:text-blue-300">View report -></a>
           </div>
           <div class="w-px bg-white/10"></div>
            <div class="flex-1">
             <div class="text-white font-medium mb-0.5">Claim Review Required</div>
             <div class="text-secondary mb-2">2 open claims > $50k</div>
             <a href="#" class="text-blue-400 hover:text-blue-300">View claims -></a>
           </div>
         </div>
      </div>
    </div>
  `,
  styles: [`
    .logo-box {
      width: 64px; 
      height: 64px; 
      background: white; 
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logo-box svg { stroke: #0f172a; }
    .text-warning { color: #f59e0b; }
    .bg-orange-900\\/20 { background-color: rgba(124, 45, 18, 0.2); }
    .border-orange-500\\/30 { border-color: rgba(249, 115, 22, 0.3); }
    .text-secondary { color: #94a3b8; }
    .text-muted { color: #64748b; font-size: 0.7rem; }
    .border-l { border-left-width: 1px; }
    .border-white\\/10 { border-color: rgba(255, 255, 255, 0.1); }
  `]
})
export class AccountHeaderComponent {
  @Input() data: any = {};
}
