# ROOTUP Frontend

ROOTUP is an AI-powered career development platform designed to bridge the gap between learners and employers through personalized learning roadmaps, skill verification, AI-driven career analysis, and employer matching.

This repository contains the frontend application built using:

- HTML5
- CSS3
- Vanilla JavaScript (SPA Architecture)

---

# Project Architecture

ROOTUP is built as a Single Page Application (SPA) using Vanilla JavaScript.

The application consists of 3 major sections:

1. Public Website
2. Job Seeker Application (Green Side)
3. Employer Application (Blue Side)

Views are dynamically rendered without full page reloads.

---

# Application Structure

```txt
rootup-frontend/
│
├── index.html
│
├── assets/
│   ├── icons/
│   ├── images/
│   ├── logos/
│   ├── illustrations/
│   └── fonts/
│
├── css/
│   ├── main.css
│   ├── reset.css
│   ├── variables.css
│   ├── animations.css
│   │
│   ├── layouts/
│   │   ├── public-layout.css
│   │   ├── seeker-layout.css
│   │   └── employer-layout.css
│   │
│   ├── components/
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── forms.css
│   │   ├── modals.css
│   │   ├── navbar.css
│   │   ├── sidebar.css
│   │   ├── charts.css
│   │   ├── progress.css
│   │   └── notifications.css
│   │
│   └── pages/
│       ├── public/
│       │   ├── landing.css
│       │   ├── about.css
│       │   ├── pricing.css
│       │   ├── features.css
│       │   └── auth.css
│       │
│       ├── seeker/
│       │   ├── dashboard.css
│       │   ├── roadmap.css
│       │   ├── profile.css
│       │   ├── ecosystem.css
│       │   └── pods.css
│       │
│       └── employer/
│           ├── employer-dashboard.css
│           ├── candidates.css
│           ├── thresholds.css
│           └── analytics.css
│
├── js/
│   ├── main.js
│   ├── router.js
│   ├── config.js
│   │
│   ├── layouts/
│   │   ├── publicLayout.js
│   │   ├── seekerLayout.js
│   │   └── employerLayout.js
│   │
│   ├── state/
│   │   ├── store.js
│   │   ├── authState.js
│   │   ├── userState.js
│   │   ├── roadmapState.js
│   │   └── employerState.js
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── userService.js
│   │   ├── roadmapService.js
│   │   ├── employerService.js
│   │   └── aiService.js
│   │
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   ├── storage.js
│   │   ├── date.js
│   │   └── notifications.js
│   │
│   ├── components/
│   │   ├── navbar/
│   │   ├── sidebar/
│   │   ├── buttons/
│   │   ├── cards/
│   │   ├── charts/
│   │   ├── forms/
│   │   ├── modals/
│   │   ├── notifications/
│   │   └── forest/
│   │
│   ├── views/
│   │   ├── public/
│   │   │   ├── landing/
│   │   │   │   ├── homeView.js
│   │   │   │   ├── aboutView.js
│   │   │   │   ├── featuresView.js
│   │   │   │   ├── pricingView.js
│   │   │   │   └── contactView.js
│   │   │   │
│   │   │   └── auth/
│   │   │       ├── loginView.js
│   │   │       ├── registerView.js
│   │   │       └── forgotPasswordView.js
│   │   │
│   │   ├── seeker/
│   │   │   ├── dashboard/
│   │   │   ├── roadmap/
│   │   │   ├── profile/
│   │   │   ├── ecosystem/
│   │   │   └── pods/
│   │   │
│   │   ├── employer/
│   │   │   ├── dashboard/
│   │   │   ├── candidates/
│   │   │   ├── thresholds/
│   │   │   └── analytics/
│   │   │
│   │   └── shared/
│   │       ├── errors/
│   │       └── loading/
│   │
│   └── templates/
│       ├── loading.html
│       └── empty-state.html
│
├── data/
│   ├── mockUsers.json
│   ├── mockRoadmaps.json
│   └── mockEmployers.json
│
├── docs/
│   ├── frontend-rules.md
│   ├── naming-conventions.md
│   ├── api-contracts.md
│   └── git-workflow.md
│
└── README.md
