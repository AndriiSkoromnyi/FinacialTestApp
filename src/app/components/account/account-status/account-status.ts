import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-account-status',
   standalone: true,
   imports: [CommonModule],
   template: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Account Status -->
      <div>
         <div class="mb-4"><h3>Account Status</h3></div>
         <div class="card p-6">
            <div class="flex items-center justify-between relative mt-2">
               <!-- Line behind -->
               <div class="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 -z-0"></div>
               
               <div class="step z-10 bg-card" *ngFor="let step of steps">
                  <div class="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center bg-card text-green-500 mb-2 mx-auto">
                    ✓
                  </div>
                  <div class="text-xs text-center text-gray-300 font-medium">{{ step }}</div>
               </div>
               
               <!-- Current step (simulated) -->
               <div class="step z-10 bg-card">
                  <div class="w-8 h-8 rounded-full border-2 border-gray-600 flex items-center justify-center bg-card text-gray-500 mb-2 mx-auto">
                    ○
                  </div>
                  <div class="text-xs text-center text-gray-500">Renew</div>
               </div>
            </div>
         </div>
      </div>

      <!-- Compliance -->
      <div>
         <div class="mb-4 flex justify-between items-center">
            <h3>Compliance & Documentation</h3>
            <a href="#" class="text-xs text-blue-400">See history -></a>
         </div>
         <div class="card p-6 grid grid-cols-2 gap-4">
            <div class="flex items-center gap-2">
              <span class="text-green-500">✓</span> <span class="text-xs text-gray-300">KYC verification</span>
            </div>
             <div class="flex items-center gap-2">
              <span class="text-green-500">✓</span> <span class="text-xs text-gray-300">Required Documentation</span>
            </div>
             <div class="flex items-center gap-2">
              <span class="text-green-500">✓</span> <span class="text-xs text-gray-300">Regulatory approval</span>
            </div>
             <div class="flex items-center gap-2">
              <span class="text-green-500">✓</span> <span class="text-xs text-gray-300">Financial verification</span>
            </div>
         </div>
      </div>
    </div>
  `,
   styles: [`
    .step { min-width: 60px; background-color: var(--bg-card); }
    .bg-card { background-color: var(--bg-card); }
  `]
})
export class AccountStatusComponent {
   steps = ['Submitted', 'Review', 'Quote', 'Bind', 'Issue'];
}
