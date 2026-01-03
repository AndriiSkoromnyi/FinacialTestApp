import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  getDashboardData() {
    return of({
      user: {
        name: 'Arthur',
        openTasks: 12
      },
      workQueue: [
        { originator: 'Sam Masters', client: 'NAMEX Tech Solutions', type: 'Underwriter Referral', status: 'New', created: '04/16/2025' },
        { originator: 'Annalise Willis', client: 'Maritime Logistics Corp', type: 'Underwriter Referral', status: 'New', created: '04/20/2025' },
        { originator: 'Patrick Devenport', client: 'GreenField Energy Ltd', type: 'Loss Control Request', status: 'New', created: '04/16/2025' },
        { originator: 'Ana Killian', client: 'NorthStar Financial Group', type: 'Underwriter Referral', status: 'Pending Review', created: '04/22/2025' },
        { originator: 'Ana Killian', client: 'Alliance Healthcare Systems', type: 'Email', status: 'Completed', created: '04/28/2025' },
        { originator: 'Me', client: 'QuantumTech Industries', type: 'Email', status: 'Completed', created: '04/20/2025' }
      ],
      portfolioGoals: {
        lossRatio: { current: 48.2, target: 55, change: -6.5 },
        retention: { current: 88, target: 85 }
      },
      marketIntelligence: [
        { type: 'danger', text: 'Rate hardening in Cyber market - +15% YoY' },
        { type: 'warning', text: 'New capacity entering Marine market' },
        { type: 'info', text: 'Environmental regulatory changes in CA' }
      ],
      myAccounts: [
        { name: 'NAMEX Tech Solutions', line: 'D&O Liability', broker: 'Willis Towers', renewal: '04/16/2025', premium: 2.3, rated: 2.8, lossRatio: 32, appetite: 'HIGH', status: 'Active', triage: 180, winnability: 'Very Strong' },
        { name: 'Alliance Healthcare Systems', line: 'Medical Malpractice', broker: 'Aon Risk', renewal: '06/30/2025', premium: 1.7, rated: 1.9, lossRatio: 38, appetite: 'MEDIUM', status: 'Under review', triage: 165, winnability: 'Strong' },
        { name: 'Maritime Logistics Corp', line: 'Marine Cargo', broker: 'Marsh McLennan', renewal: '09/05/2025', premium: 0.875, rated: 0.92, lossRatio: 25, appetite: 'HIGH', status: 'Active', triage: 182, winnability: 'Very Strong' },
        { name: 'GreenField Energy Ltd', line: 'Environmental Liability', broker: 'Aon Risk', renewal: '07/22/2025', premium: 1.2, rated: 1.4, lossRatio: 67, appetite: 'CAUTIOUS', status: 'Under review', triage: 158, winnability: 'Medium' }
      ]
    });
  }

  getAccountData() {
    return of({
      id: 'maritime-logistics',
      name: 'Maritime Logistics Corp',
      address: '45 Governor Boulevard, Suite 500 Seattle, WA 98164',
      broker: 'Marsh McLennan',
      underwriter: 'Kate Johnson',
      metrics: {
        winnability: 'Very Strong',
        lossRatio: { value: 25, target: 42 },
        premiumGrowth: { value: 12.4, target: 15.0 },
        exposure: [
          { label: 'Marine Cargo', value: 71.4 },
          { label: 'General Liability', value: 20 },
          { label: 'Workers Comp', value: 8.6 }
        ]
      },
      policies: [
        { name: 'Marine Cargo', premium: 925500, date: '6/30/2025', icon: 'ship' },
        { name: 'General Liability', premium: 325000, date: '1/01/2025', icon: 'shield' },
        { name: 'Workers Comp', premium: 175000, date: '---', icon: 'helmet' },
        { name: 'Property', premium: 644529.43, date: '---', icon: 'building' },
        { name: 'Umbrella', premium: 225000, date: '11/01/2025', icon: 'umbrella' }
      ],
      compliance: {
        kyc: true,
        docs: true,
        regulatory: true,
        financial: true
      },
      winnabilityDetails: {
        score: 82,
        increasing: [
          { factor: 'Brokers relationship', value: 20 },
          { factor: 'Loss history', value: 22 },
          { factor: 'Industry growth', value: 15 },
          { factor: 'Multi-line opportunity', value: 11 }
        ],
        decreasing: [
          { factor: 'Premium pricing', value: -24 },
          { factor: 'Total exposure', value: -18 },
          { factor: 'Loss ratio trend', value: -15 },
          { factor: 'Market competition', value: -5 }
        ]
      },
      communication: [
        { type: 'Renewal', subject: 'Policy Renewal - Auto Insurance 5/15/25', sender: 'Michael Robertson', date: 'Apr 5', content: 'Hello Arthur, I am reaching out regarding the upcoming auto policy renewal...', attachments: 2, action: 'Reply' },
        { type: 'Submission', subject: 'Fwd: New Submission - BPM Real Estate - EFF 4/1/24', sender: 'Joshua Gummer', date: 'Mar 24', content: 'Arthur, attached please find our submission...', responded: true },
        { type: 'Quote', subject: 'New Quote Request - Workers Comp Insurance', sender: 'Sarah Chen', date: 'Apr 6', content: 'Hi Arthur, Real Estate Group has expressed interest...', attachments: 3, action: 'Reply' }
      ]
    });
  }
}
