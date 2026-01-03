# Project Walkthrough

## Overview
This project implements the requested Dashboard and Account pages using Angular 17+ (Standalone Components).

## Pages
1.  **Dashboard** (`/dashboard`):
    - **Top Navigation**: Includes Search, User Profile, and Main Navigation links.
    - **Work Queue**: Tabbed interface for tasks (Assigned, Pending, Referrals).
    - **Portfolio Goals**: Visual progress bars with targets and markers.
    - **Quick Actions**: Action buttons for common tasks.
    - **Market Intelligence**: News feed.
    - **My Accounts**: Detailed table with sorting/filtering UI.

2.  **Account Page** (`/account`):
    - **Header**: Account details ("Maritime Logistics Corp").
    - **Performance Metrics**: Key KPIs (Winnability, Loss Ratio, Premium Growth).
    - **Policies**: Grid of policy cards.
    - **Account Status**: Step-by-step status tracker and compliance checklist.
    - **Winnability**: Detailed analysis with score, trends, and AI recommendations.
    - **Communication**: Recent messages and attachments.
    - **Policies Table**: Detailed policy list.

## Technical Details
- **Standalone Components**: All components are standalone.
- **CSS Variables**: Theme colors are defined in `src/styles.css` for easy maintenance.
- **Mock Data**: All data is served via `MockDataService` (`src/app/services/mock-data.service.ts`).
- **Responsive**: Uses CSS Grid and Flexbox for responsiveness.

## How to Run
1.  Run `npm install` (if not already done).
2.  Run `npm start` (or `ng serve`).
3.  Navigate to `http://localhost:4200`.
