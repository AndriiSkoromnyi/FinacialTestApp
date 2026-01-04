# FinTestFE - Financial Dashboard Test Assignment

## 📌 Project Overview
This project implements a high-fidelity UI for a financial dashboard and an account management screen using **Angular 21**. The solution focuses on component reuse, responsive design, and precise layout implementation based on the provided design specifications.

## 📂 Implemented Features

### 1. Dashboard 
- **Navigation Bar**: Responsive top navigation with sticky positioning and active tab states.
- **Work Queue**: Interactive tabbed interface for task management with sortable table columns.
- **Portfolio Goals**: Complex visual progress indicators including gradient bars/rounded markers.
- **Quick Actions**: "C-Suite" style action buttons for rapid navigation.
- **Market Intelligence**: Dynamic news feed with semantic severity indicators (High Impact, Warning, Info).
- **My Accounts**: Data-rich table with status badges, color-coded triage scores, and winnability ratings.

### 2. Account Page 
- **Header**: Comprehensive account overview with key metadata.
- **Performance Metrics**: Key Performance Indicators (KPIs) dashboard with target comparisons.
- **Policies**: Detailed policy breakdown including premiums, renewal dates, and visual icons.
- **Account Status**: Visual stepper component tracking account lifecycle and compliance.
- **Winnability Analytics**: 
  - Interactive "Decision Support" sidebar.
  - SVG-based historical trend graphs with gradients.
  - "Factors" analysis (Increasing vs Decreasing winnability).
  - AI-Powered recommendation cards.
- **Communication Hub**: Threaded message view with attachment indicators and quick actions.

## ✅ Technologies Used
- **Angular 21**: Modern standalone components, signals, and control flow syntax (`@for`, `@if`).
- **TypeScript**: Strict typing for data models and services.
- **CSS3 / Flexbox / Grid**: Pure CSS implementation for layouts (No heavy UI frameworks like Bootstrap).
- **SVG**: Custom vector graphics for charts, icons, and visual elements.
- **RxJS**: Reactive data handling via `MockDataService`.

## 🤖 AI Tools & Workflow
- **Figma AI**: Utilized for generating initial UI concepts, grid layouts, and visual hierarchy to accelerate the design process.
- **Gemini 3**: Served as an advanced AI pair programmer for code generation, architectural decisions, and ensuring Angular best practices.


## 🌐 Deployment
**Live Application**: https://finacial-test-app-vercel.vercel.app

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Angular CLI

### Installation
1. Clone the repository:
   ```bash
   git clone [INSERT_REPO_URL]
   ```
2. Navigate to the project directory:
   ```bash
   cd FinTestFE
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
