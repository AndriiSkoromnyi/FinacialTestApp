import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-work-queue',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './work-queue.html',
    styleUrls: ['./work-queue.css'],
    styles: [`
        :host {
            display: block;
            height: 100%;
        }
    `]
})
export class WorkQueueComponent {
    @Input() data: any[] = [];

    tabs = [
        { label: 'Assigned to me', count: 12, id: 'assigned' },
        { label: 'Pending Review', count: 8, id: 'pending' },
        { label: 'Referrals', count: 3, id: 'referrals' }
    ];
    activeTab = 'assigned';
}
