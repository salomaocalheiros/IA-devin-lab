# The Daily Harvest - Devin Hands-on Lab

The Daily Harvest is a frontend e-commerce demo built with React, TypeScript, and Vite. It simulates a small online fruit shop where users can browse products, add them to a shopping cart, leave product reviews, and complete a mock checkout flow.

This project is intended as a learning and demo application for **Devin**, an AI-powered development assistant. It focuses on storefront behavior and client-side UI patterns rather than a full production-ready backend, payment processing, or database-backed commerce system.

> **Note**: This lab has been adapted from the original GitHub Copilot Hands-on Lab to work with Devin. The exercises in the `Instructions/Labs/` directory have been modified to use Devin's capabilities instead of GitHub Copilot's features.

## Lab Structure

This repository contains a series of hands-on lab exercises designed to teach developers how to use Devin effectively throughout the software development lifecycle. The labs are located in the `Instructions/Labs/` directory:

1. **Lab 1 - Getting Started**: Set up your development environment with Devin
2. **Lab 2 - Understanding Project**: Use Devin to explore and understand unfamiliar codebases
3. **Lab 3 - Code Editing**: Leverage Devin's code editing capabilities for testing
4. **Lab 4 - Agent Mode**: Use Devin's autonomous mode for goal-oriented development
5. **Lab 5 - Agentic Coding**: Scale development with parallel subagents
6. **Lab 6 - MCP Integration**: Extend Devin's capabilities with Model Context Protocol servers
7. **Lab 7 - Customizing Devin**: Create custom skills and configuration for organizational workflows

> **Adaptation Notice**: These labs have been adapted from the original GitHub Copilot Hands-on Lab to demonstrate equivalent functionality using Devin's command-line interface and autonomous capabilities.

## Purpose

The app demonstrates common e-commerce storefront behaviors such as:
- product listing
- add-to-cart functionality
- cart quantity management
- checkout flow
- product reviews
- admin discount controls
- client-side routing

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Vitest
- Testing Library
- JavaScript/JSX
- HTML and CSS

## Features

- Home page with brand presentation
- Product catalog loaded from local JSON files
- Add-to-cart functionality with quantity tracking
- Shopping cart summary and checkout modal
- Order confirmation screen after purchase
- Product review modal with user comments
- Admin login screen
- Admin discount page for store-wide sales
- SPA-style shopping experience

## Project Structure

```text
.
├── README.md
├── masterdoc.json
├── AdditionalLearning/
├── Instructions/
├── media/
└── eCommApp/
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── index.html
    ├── public/
    │   └── products/
    └── src/
        ├── App.tsx
        ├── components/
        ├── context/
        ├── test/
        ├── types/
        ├── utils/
        ├── App.css
        ├── index.css
        └── main.tsx
```

## Getting Started with the Lab

1. **Set up Devin**: Ensure you have Devin installed and configured on your system
2. **Navigate to the lab instructions**: Start with `Instructions/Labs/Lab-1-Getting-Started.md`
3. **Follow the exercises**: Each lab builds upon the previous one, teaching different Devin capabilities
4. **Work with the application**: The `eCommApp` directory contains the sample e-commerce application used throughout the labs

## Running the Application

1. Navigate to the app folder:

```bash
cd eCommApp
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in the browser at:

```text
http://localhost:3000
```

## Common Commands

```bash
npm run dev
npm run build
npm run preview
npm run test
npm run test:run
npm run test:ui
npm run test:coverage
npm run lint
```

## Important Files to Know

- [eCommApp/package.json](eCommApp/package.json) — project scripts and dependencies
- [eCommApp/vite.config.ts](eCommApp/vite.config.ts) — Vite configuration, test setup, and build config
- [eCommApp/src/App.tsx](eCommApp/src/App.tsx) — app routes and main layout
- [eCommApp/src/context/CartContext.tsx](eCommApp/src/context/CartContext.tsx) — cart state and shopping behavior
- [eCommApp/src/components/ProductsPage.tsx](eCommApp/src/components/ProductsPage.tsx) — product catalog UI
- [eCommApp/src/components/CartPage.tsx](eCommApp/src/components/CartPage.tsx) — cart and checkout flow
- [eCommApp/src/components/LoginPage.tsx](eCommApp/src/components/LoginPage.tsx) — admin login
- [eCommApp/src/components/AdminPage.tsx](eCommApp/src/components/AdminPage.tsx) — admin discount controls
- [eCommApp/src/components/CartPage.test.tsx](eCommApp/src/components/CartPage.test.tsx) — example test suite
- [Instructions/Labs/](Instructions/Labs/) — hands-on lab exercises for learning Devin
- [eCommApp/public/products](eCommApp/public/products) — product data files and assets

## Notes

- There is no real backend or database in this project.
- Product data is served from local JSON files in the public folder.
- The app is a front-end demo intended for learning, UI practice, and testing patterns.
- Some installed packages may show dependency warnings or audit alerts, so it is worth checking `npm audit` periodically.

## License

This project is intended for educational and demo purposes.
