TodoMVC Automation Framework
A robust end-to-end testing framework for the [demo.playwright.TodoMVC](https://demo.playwright.dev/todomvc/#/) application, built with Playwright using the Page Object Model (POM) design pattern

Technology	Version	Description
- Node.js	^18.0.0+	JavaScript/TypeScript runtime
- Playwright	^1.42.0	Core test automation framework
- TypeScript	^5.0.0	Strictly typed programming language
- Allure Report	^2.27.0	Professional HTML reporting & analytics
- GitHub Actions	—	CI/CD automation and report hosting

Getting Started
1. Clone the Repository
- git clone https://github.com/Arturovich98/TodoMVC-demo-app.git
- cd TodoMVC-demo-app

2. Install Dependencies
- npm install
- npx playwright install --with-deps

Running Tests Locally:
You can execute tests using the following pre-configured scripts (package.json.scripts):

Headless Mode (Standard):
- npm test

Headed Mode (Visual):
- npm run test:headed

Debug Mode:
- npm run test:debug

Playwright UI Mode (Interactive):
- npx playwright test --ui

Environment Variables:
"baseUrl" set up in .env file, and configured in playwright.config as baseURL: process.env.URL

Test Reports:
Local Allure Report:
- npm run allure:generate
- npm run allure:open

CI/CD Reports (GitHub Actions):
Every Push or Pull Request triggers the automation pipeline. The results are automatically deployed to [GitHub Pages](https://arturovich98.github.io/TodoMVC-demo-app).

Project Structure:
- pages/ — Page Object classes (Selectors and Actions).
- tests/ — Test specifications.
- .github/workflows/ — CI/CD pipeline definitions.
- playwright.config.ts — Global configuration settings.