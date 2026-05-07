# RootUP_frontend


Structure (Not sure all are needed or anything missing. But use as a framework and build the rest step by step )


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
│   ├── variables.css
│   ├── reset.css
│   ├── animations.css
│   │
│   ├── layouts/
│   │   ├── navbar.css
│   │   ├── sidebar.css
│   │   ├── dashboard-layout.css
│   │   └── auth-layout.css
│   │
│   ├── components/
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── modals.css
│   │   ├── forms.css
│   │   ├── progress.css
│   │   ├── notifications.css
│   │   └── badges.css
│   │
│   └── pages/
│       ├── dashboard.css
│       ├── roadmap.css
│       ├── employer.css
│       ├── profile.css
│       ├── auth.css
│       └── pods.css
│
├── js/
│   ├── main.js
│   ├── router.js
│   ├── config.js
│   │
│   ├── state/
│   │   ├── store.js
│   │   ├── authState.js
│   │   ├── userState.js
│   │   └── roadmapState.js
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
│   │   │   ├── navbar.js
│   │   │   └── navbar.html
│   │   │
│   │   ├── sidebar/
│   │   │   ├── sidebar.js
│   │   │   └── sidebar.html
│   │   │
│   │   ├── cards/
│   │   │   ├── roadmapCard.js
│   │   │   ├── skillCard.js
│   │   │   └── employerCard.js
│   │   │
│   │   ├── modals/
│   │   ├── charts/
│   │   ├── forms/
│   │   └── forest/
│   │
│   ├── views/
│   │   ├── landing/
│   │   │   └── landingView.js
│   │   │
│   │   ├── auth/
│   │   │   ├── loginView.js
│   │   │   ├── registerView.js
│   │   │   └── forgotPasswordView.js
│   │   │
│   │   ├── dashboard/
│   │   │   ├── dashboardView.js
│   │   │   ├── analyticsView.js
│   │   │   └── readinessView.js
│   │   │
│   │   ├── roadmap/
│   │   │   ├── roadmapView.js
│   │   │   ├── phasesView.js
│   │   │   └── skillsView.js
│   │   │
│   │   ├── employer/
│   │   │   ├── employerDashboardView.js
│   │   │   ├── candidatesView.js
│   │   │   └── thresholdsView.js
│   │   │
│   │   ├── pods/
│   │   │   ├── podsView.js
│   │   │   └── leaderboardView.js
│   │   │
│   │   ├── profile/
│   │   │   ├── profileView.js
│   │   │   └── settingsView.js
│   │   │
│   │   └── errors/
│   │       ├── notFoundView.js
│   │       └── unauthorizedView.js
│   │
│   └── templates/
│       ├── layout.html
│       └── loading.html
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
