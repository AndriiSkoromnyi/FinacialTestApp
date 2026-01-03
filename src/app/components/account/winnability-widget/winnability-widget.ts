import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-winnability-widget',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './winnability-widget.html',
    styleUrls: ['./winnability-widget.css']
})
export class WinnabilityWidgetComponent {
    @Input() data: any = {};

    menuItems = ['Winnability', 'Exposure Review & Suggested Coverage', 'Portfolio Strategy Alignment', 'Broker Analytics'];
    activeMenu = 'Winnability';
}
