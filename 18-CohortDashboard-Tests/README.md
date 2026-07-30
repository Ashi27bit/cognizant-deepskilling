# Lab 18 - Unit Testing with Jest & Enzyme

## Objective
Write unit tests for the `CohortDetails` component using Enzyme's `shallow`/`mount`, covering: component creation, props initialization, finding the `h3` cohort code, and snapshot testing.

## Steps
```bash
npx create-react-app CohortDashboard-Tests
cd CohortDashboard-Tests
npm install --save enzyme @wojtekmaj/enzyme-adapter-react-17 react-test-renderer
```
> Note: use `@wojtekmaj/enzyme-adapter-react-17` since the official `enzyme-adapter-react-16` doesn't support React 17/18. If your CRA version uses React 16, install `enzyme-adapter-react-16` instead and adjust `setupTests.js` accordingly.

Copy `Cohort.js`, `CohortDetails.js`, `CohortDetails.test.js`, `setupTests.js`, and `App.js` into `src/`, then:
```bash
npm test
```
