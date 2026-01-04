
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-policies-table',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './policies-table.html',
    styleUrl: './policies-table.css'
})
export class PoliciesTableComponent {
    rows = [
        { type: 'Marine Cargo', id: '11252062', effDate: '6/20/2026', expDate: '6/20/2027', status: 'Active', gross: '$162,500', comm: '$165,000', taxes: '$130,000', fees: '$160,000', net: '$165,000', rateChange: '1.2%', loss: '35%', lossClass: 'green', color: 'blue' },
        { type: 'General Liability', id: '11252062', effDate: '6/20/2026', expDate: '6/20/2027', status: 'Active', gross: '$150,000', comm: '$145,000', taxes: '$170,000', fees: '$172,500', net: '$175,000', rateChange: '6.1%', loss: '50%', lossClass: 'yellow', color: 'green' },
        { type: 'Workers Comp', id: '11252062', effDate: 'Pending', expDate: 'Pending', status: 'Pending', gross: '$0', comm: '$0', taxes: '$73,500', fees: '$15,000', net: '$15,000', rateChange: 'N/A', loss: 'N/A', lossClass: 'gray', color: 'purple' },
        { type: 'Umbrella', id: '11252062', effDate: '10/02/2026', expDate: '10/02/2027', status: 'Active', gross: '$240,010', comm: '$390,010', taxes: '$287,500', fees: '$270,100', net: '$278,400', rateChange: '18.1%', loss: '95%', lossClass: 'red', color: 'orange' },
    ];
}
