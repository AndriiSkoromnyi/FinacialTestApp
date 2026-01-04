
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-policies-summary',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './policies-summary.html',
    styleUrl: './policies-summary.css'
})
export class PoliciesSummaryComponent {
    policies = [
        { name: 'Marine Cargo', premium: '$125,000', date: '6/15/2026', colorClass: 'blue', icon: 'pi pi-ship' },
        { name: 'General Liability', premium: '$85,000', date: '6/15/2026', colorClass: 'green', icon: 'pi pi-shield' },
        { name: 'Workers Comp', premium: '$75,000', date: '---', colorClass: 'purple', icon: 'pi pi-users' },
        { name: 'Property', premium: '$145,229.43', date: '---', colorClass: 'orange', icon: 'pi pi-building' },
        { name: 'Umbrella', premium: '$25,000', date: '11/01/2026', colorClass: 'red', icon: 'pi pi-umbrella' },
    ];
}
