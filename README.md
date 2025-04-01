# Angular Counter App with NgRx

## Overview
This project is a simple counter application built using Angular and NgRx. It demonstrates the basics of using signals in NgRx for state management within an Angular application. The counter allows users to increment and decrement a value, which is managed through a centralized state.

## Project Structure
- **app**:
  - **components/counter**:
    - `counter.component.html`: The HTML template displaying the counter.
    - `counter.component.scss`: Styling for the counter component.
    - `counter.component.ts`: Angular component handling the logic for incrementing and decrementing the counter.
  - **store**:
    - `counter.store.ts`: Contains the NgRx store logic for the counter, using signals to manage state changes.
  - `app.component.html`: Main application template.
  - `app.component.scss`: Main application styling.
  - `app.component.ts`: Root component for the application.

## Features
- Increment and decrement counter.
- Uses NgRx signals for state management to keep track of the counter's value.

## Setup
To run this project, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/) and the [Angular CLI](https://angular.io/cli) installed.
2. Clone the repository
```
git clone git@github.com:themane04/signal-store.git
```
3. Navigate to the project directory
4. Install dependencies
```
npm install
```
5. Start the development server
```
ng serve
```
6. Open a web browser and navigate to `http://localhost:4200/` to view the app.
