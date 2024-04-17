# HavenCrest

- [Live Link](https://residential-b3feb.web.app/)

HavenCrest is a residential real estate website designed to help users find their dream homes and connect with top-rated agents. Built with React, Tailwind CSS, DaisyUI, React Router, and Firebase, HavenCrest offers a seamless user experience with a range of features including property listings, agent profiles, contact forms, and user authentication.

## Features

- **Home:** Discover top-rated properties, view customer reviews, and explore frequently asked questions.
- **Properties:** Browse through a wide range of available properties with detailed information.
- **Agents:** Connect with our top-rated agents and explore their profiles to find the perfect match.
- **Contact:** Reach out to us with your questions, feedback, or inquiries using the contact form.
- **About:** Learn more about HavenCrest's history, mission, and vision.
- **Login/Register:** Securely log in or register for an account to access exclusive features.
- **Update Profile:** Update your profile information and personalize your experience.

Sure, here's the README file without mentioning the version numbers:

---

# Packages Used in Project

## 1. [daisyui](https://www.npmjs.com/package/daisyui)
DaisyUI is a component library for Tailwind CSS with ready-to-use UI components. It provides a collection of customizable and responsive components that can be easily integrated into Tailwind CSS projects.

## 2. [eslint](https://www.npmjs.com/package/eslint)
ESLint is a popular JavaScript linter that helps identify and fix code errors, enforce coding conventions, and improve code quality. It provides customizable rules and plugins for detecting potential issues in JavaScript code.

## 3. [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
eslint-plugin-react is a plugin for ESLint that provides additional rules and configurations for working with React applications. It helps identify common issues and best practices for React development.

## 4. [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
eslint-plugin-react-hooks is a plugin for ESLint that provides rules for enforcing the Rules of Hooks in React applications. It helps ensure that hooks are used correctly and consistently in React functional components.

## 5. [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
eslint-plugin-react-refresh is a plugin for ESLint that provides rules for working with React Fast Refresh. It helps detect and fix issues related to React component hot reloading and error handling.

## 6. [postcss](https://www.npmjs.com/package/postcss)
PostCSS is a tool for transforming CSS with JavaScript plugins. It provides a flexible and efficient way to process CSS, including features like autoprefixing, minification, and more.

## 7. [tailwindcss](https://www.npmjs.com/package/tailwindcss)
Tailwind CSS is a utility-first CSS framework for creating responsive designs. It provides a set of pre-defined utility classes that can be used to style HTML elements without writing custom CSS.

## 8. [vite](https://www.npmjs.com/package/vite)
Vite is a fast build tool for modern web development. It provides instant server start, hot module replacement, and blazing fast builds for JavaScript applications. Vite is commonly used with frameworks like React, Vue.js, and Svelte.

---

# Packages Used in Project

## 1. [animate.css](https://www.npmjs.com/package/animate.css)
Animate.css is a library for adding animations to HTML elements. It provides a collection of pre-made CSS animations that can be easily applied to elements.

## 2. [firebase](https://www.npmjs.com/package/firebase)
Firebase is a platform for building web and mobile applications. It provides authentication, real-time database, cloud storage, and other services to developers.

## 3. [localforage](https://www.npmjs.com/package/localforage)
LocalForage is a fast and simple storage library for web browsers. It provides a consistent API for storing data offline using various storage backends.

## 4. [match-sorter](https://www.npmjs.com/package/match-sorter)
Match-sorter is a library for sorting and filtering arrays of items based on a search query. It provides flexible and customizable options for matching and sorting items.

## 5. [react](https://www.npmjs.com/package/react)
React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage component state efficiently.

## 6. [react-dom](https://www.npmjs.com/package/react-dom)
React-DOM is a package that provides DOM-specific methods for working with React elements. It is used for rendering React components in the browser.

## 7. [react-helmet](https://www.npmjs.com/package/react-helmet)
React-Helmet is a library for managing document head elements in React applications. It allows developers to dynamically update meta tags, titles, and other head elements.

## 8. [react-hook-form](https://www.npmjs.com/package/react-hook-form)
React Hook Form is a library for managing form state and validation in React applications. It provides a simple and efficient way to work with forms using React hooks.

## 9. [react-hot-toast](https://www.npmjs.com/package/react-hot-toast)
React Hot Toast is a library for displaying toast notifications in React applications. It provides customizable toast components that can be easily integrated into any React project.

## 10. [react-icons](https://www.npmjs.com/package/react-icons)
React Icons is a library that provides a collection of popular icon sets as React components. It allows developers to easily add icons to their React applications without the need for external libraries.

## 11. [react-router-dom](https://www.npmjs.com/package/react-router-dom)
React Router DOM is a package that provides routing capabilities for React applications. It allows developers to define routes, handle navigation, and pass parameters between different components in the application.

## 12. [sort-by](https://www.npmjs.com/package/sort-by)
Sort-By is a small utility library for sorting arrays of objects in JavaScript. It provides a simple and efficient way to sort objects based on a specified key.

## 13. [sweetalert2](https://www.npmjs.com/package/sweetalert2)
SweetAlert2 is a library for creating beautiful and customizable alert dialogs in JavaScript. It provides a simple API for displaying alerts, confirmations, and prompts with custom styling and animations.

## 14. [swiper](https://www.npmjs.com/package/swiper)
Swiper is a modern mobile touch slider library for web and mobile applications. It provides a powerful and flexible API for creating responsive and interactive sliders, carousels, and galleries.

---

Feel free to click on the package names to view their documentation and learn more about how to use them in your project.
## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/havencrest.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd havencrest
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up Firebase:**
   - Create a Firebase project.
   - Enable authentication and set up sign-in methods (e.g., email/password, Google, GitHub).
   - Set up Firestore database for storing data.

5. **Create a `.env` file in the project root and add your Firebase configuration:**
   ```
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

6. **Start the development server:**
   ```bash
   npm start
   ```

Here are the setup steps for React Router, Tailwind CSS, DaisyUI, and GitHub:

### React Router

1. Install React Router:

```bash
npm install react-router-dom
```

2. Set up routing in your `index.js` or `App.js` file:

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Add more routes here */}
      </Switch>
    </Router>
  );
}
```

3. Define route components (e.g., `Home`, `Properties`, `Agents`, etc.) and export them.

### Tailwind CSS

1. Install Tailwind CSS:

```bash
npm install tailwindcss
```

2. Create a Tailwind configuration file:

```bash
npx tailwindcss init
```

3. Include Tailwind CSS in your project:

```css
/* src/index.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

4. Add Tailwind directives to your HTML or JSX files:

```jsx
<div className="bg-blue-500 text-white p-4">Hello Tailwind!</div>
```

### DaisyUI

1. Install DaisyUI:

```bash
npm install daisyui
```

2. Import DaisyUI in your Tailwind configuration file:

```js
// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false,
  plugins: [
    require('daisyui'),
  ],
};
```

3. Use DaisyUI components in your project:

```jsx
<Button size="large" color="primary">Click me</Button>
```

### GitHub

1. Set up a GitHub repository for your project.
2. Initialize a Git repository in your project directory:

```bash
git init
```

3. Add your GitHub repository as a remote:

```bash
git remote add origin <repository-url>
```

4. Commit your initial code changes:

```bash
git add .
git commit -m "Initial commit"
```

5. Push your code to GitHub:

```bash
git push -u origin master
```

That's it! You're now set up with React Router, Tailwind CSS, DaisyUI, and GitHub for your project. Feel free to customize and enhance your project further.

## Additional Information

- Ensure that all routes requiring authentication are protected to prevent unauthorized access.
- Implement form validation for registration, login, and contact forms to improve user experience and security.
- Use responsive design principles to ensure the website looks great on all devices.

## Contributors

- Mohammad Fakhrul Islam
- Programming Hero

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.