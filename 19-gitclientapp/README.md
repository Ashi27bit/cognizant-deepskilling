# Lab 19 - gitclientapp (Isolation Testing & Mocking)

## Objective
Create `gitclientapp` that fetches a user's repos from the GitHub API using `axios`, and write a Jest unit test that mocks `axios` so `GitClient.getRepositories()` is tested in isolation without a real network call.

## Steps
```bash
npx create-react-app gitclientapp
cd gitclientapp
npm install axios
```
Copy `GitClient.js`, `App.js`, and `GitClient.test.js` into `src/`.

Run the app:
```bash
npm start
```
Run the tests:
```bash
npm test
```
