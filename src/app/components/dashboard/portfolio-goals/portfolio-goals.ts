import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Goal {
    label: string;
    type: 'gradient' | 'progress';
    // Gradient properties
    colors?: string[];
    percentages?: number[];
    marker?: number;
    statusText?: string;
    statusColor?: string;
    // Progress properties
    current?: string;
    target?: string;
    progress?: number;
}

@Component({
    selector: 'app-portfolio-goals',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio-goals.html',
    styleUrls: ['./portfolio-goals.css'],
    styles: [`
        :host {
            display: block;
            height: 100%;
        }
    `]
})
export class PortfolioGoalsComponent {
    @Input() data: any;

    goals: Goal[] = [
        {
            label: 'PORTFOLIO LOSS RATIO TARGET',
            type: 'gradient',
            colors: ['bg-green-500', 'bg-yellow-500', 'bg-red-500'],
            percentages: [48.2, 30, 21.8],
            marker: 48.2,
            statusText: '-6.8% (GOOD)',
            statusColor: 'text-green-400'
        },
        {
            label: 'RENEWAL RETENTION',
            type: 'gradient',
            colors: ['bg-red-500', 'bg-yellow-400', 'bg-green-500', 'bg-yellow-400'],
            percentages: [15, 20, 50, 15],
            marker: 88,
            statusText: 'ON TARGET',
            statusColor: 'text-green-400'
        },
        {
            label: 'NEW BUSINESS TARGET',
            type: 'progress',
            current: '$8.1M',
            target: '$12M',
            progress: 67,
        },
        {
            label: 'ANNUAL GWP TARGET',
            type: 'progress',
            current: '$28.4M',
            target: '$42M',
            progress: 68,
        },
    ];
}
