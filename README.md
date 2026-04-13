# The Portfolio Nexus (Legacy Phase)

This is the ultimate entry point to the **Alex000115** digital identity. It is more than a portfolio; it is an interactive data visualization of your contributions to the decentralized world. By connecting directly to GitHub APIs and on-chain subgraphs, it proves your expertise through verified code and live protocol performance.

## Core Features
* **Interactive Repo Galaxy:** A Three.js visualization where each of your 100 repositories is a star, categorized by sector (DeFi, AI, ZK, etc.).
* **On-Chain Contribution Graph:** Real-time data fetching of contract deployments and governance participation.
* **Dynamic Forge Stats:** Displays your $ALEX holdings, Juror status, and Reputation Score ($FP$).
* **Flat Architecture:** Single-directory structure for the 3D scene logic, API routes, and glassmorphic UI components.

[Image of a futuristic 3D portfolio dashboard showing a galaxy of code repositories and real-time blockchain stats]

## Logic Flow
1. **Hydrate:** The site fetches the latest metadata from the GitHub GraphQL API for the `Alex000115` account.
2. **Verify:** It queries the `IdentityState` contract (Repo 94) to confirm your ZK-Identity.
3. **Render:** The Three.js engine generates a 3D environment based on your "Forge Power" level.
4. **Interact:** Visitors can click on any "Star" to view the code, read the whitepaper (Repo 99), or interact with the Master Dashboard.

## Setup
1. `npm install`
2. Add `NEXT_PUBLIC_GITHUB_TOKEN` to your environment.
3. `npm run dev`
