# Lab 14 - EmployeeContextApp (React Context API)

## Objective
Refactor an employee management app to share the "theme" value using React Context API (`createContext`, `Provider`, `useContext`) instead of passing it down through props from App -> EmployeesList -> EmployeeCard.

## Steps
```bash
npx create-react-app EmployeeContextApp
cd EmployeeContextApp
```
Copy `ThemeContext.js`, `EmployeeCard.js`, `EmployeesList.js`, `App.js` into `src/`, then:
```bash
npm start
```
