import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-policies-table',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './policies-table.html',
    styleUrls: ['./policies-table.css']
})
export class PoliciesTableComponent {
    @Input() data: any[] = []; // Reuse policies data or separate

    // Hardcoding table data from screenshot for demo as mock service might not have detailed table data
    tableData = [
        { line: 'Marine Cargo', eff: '6/30/2026', exp: '6/30/2027', status: 'Active', est: 925500, und: 925500, renewal: 950000, change: 1.05, loss: 38 },
        { line: 'General Liability', eff: '6/01/2026', exp: '6/01/2027', status: 'Active', est: 350000, und: 335000, renewal: 345000, change: -1.2, loss: 12 },
        { line: 'Workers Comp', eff: 'Pending', exp: 'Pending', status: 'Pending', est: 0, und: 0, renewal: 156000, change: 0, loss: 0 },
        { line: 'Umbrella', eff: '11/01/2026', exp: '11/01/2027', status: 'Active', est: 225000, und: 225000, renewal: 225000, change: 10.5, loss: 55 }
    ];
}
