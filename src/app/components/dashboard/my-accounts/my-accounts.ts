import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-my-accounts',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './my-accounts.html',
    styleUrls: ['./my-accounts.css']
})
export class MyAccountsComponent {
    @Input() data: any[] = [];
}
