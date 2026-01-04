
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-account-status',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './account-status.html',
    styleUrl: './account-status.css'
})
export class AccountStatusComponent {
    steps = [
        { label: 'Submitted', completed: true, active: false },
        { label: 'Review', completed: true, active: false },
        { label: 'Quote', completed: true, active: false },
        { label: 'Bind', completed: true, active: false },
        { label: 'Issue', completed: true, active: false },
        { label: 'Renew', completed: false, active: false }
    ];
}
