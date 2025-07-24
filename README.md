# Boilerplate

## Purpose
This is a minimal **frontend boilerplate** created as a learning exercise to better understand boilerplate structures and frontend tooling. The goal is to explore how pre-configured project setup improves development efficiency and provides a deeper understanding of the topic.

The main objective of this project is to create and configure the boilerplate, while the end result will be a simple employee list application. With time, project will evolve with backend and MVC architecture.

Additionally, this project utilizes **Gulp** as a build tool. The idea behind this choice is to explore older technologies and understand the evolution of frontend workflows, especially as Gulp was widely used before more modern tools like Webpack. By learning Gulp, I may appreciate more how task automation has evolved over time :)

## Tech Overview
This boilerplate comes pre-configured with the following tools:
* **Node Version Manager (NVM)(.nvmrc)** - ensures consistency in Node.js versions across different environments
* **Gulp (gulpfile.js)** - A task runner to automate development tasks like compiling CSS and JS.
* **Babel** - Transpiles modern JavaScript (ES6+) into backward-compatible versions for older browsers
* **ESLint** - Ensures code quality and enforces best practises
* **Autoprefixer** - Adds vendor prefixes to CSS for better browser support
* **BrowserSync** - Enables live-reloading for a better development experience
* **Package Manager (package.json)** - Manages project dependencies and scripts
* **EditorConfig (.editorconfig)** - Standardizes coding styles across different editors
* **Git Ignore (.gitignore)** - Prevents unnecessary files from being tracked in Git
* **Browserlist (browserlist)** - Defines target browsers for transpiling and prefixing

## Project Structure
```
├── dist/               # Compiled output (after build process)
├── src/                # Source files (HTML, SCSS, JS)
|──── scss/             # SCSS stylesheets
|      |── abstracts/   # Variables, mixins, functions
|      |── components/  # Reusable UI components
|      |── main.scss    # Main SCSS entry file
├── .nvmrc              # Node.js version specification
├── .gulpfile.js        # Gulp task runner config
├── package.json        # Project dependencies and scripts
├── .editorconfig       # Code style configuration
├── .gitignore          # Ignored files for Git
├── browserlist         # Target browsers specification
```

## Installation
1. Make sure you have **Node.js** installed. Then, install project dependencies with command:
```
npm install
```
2. Run the following command to start the development server with live reloading:
```
npm run dev
```
3. In order to generate optimized files for production, run:
```
npm run build
```

## My Learning Goals
* Gain experience with **boilerplate** concepts
* Learn how to automate tasks with usage of **Gulp**
* Get familiar with **Babel**, **ESLint** and potentially other essential web development tools

This project serves as a valuable educational point for me to deepen my understanding of frontend development, configuration, and the tools used in real-world projects :)
