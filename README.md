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

---

## Packages Used in Project

### Core Libraries and Tools:
1. **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
2. **[React DOM](https://reactjs.org/docs/react-dom.html)**: Provides DOM-specific methods for working with React elements.
3. **[React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**: Provides routing capabilities for React applications.
4. **[Firebase](https://firebase.google.com/)**: A platform for building web and mobile applications, providing authentication, real-time database, and cloud storage services.
5. **[PostCSS](https://github.com/postcss/postcss)**: A tool for transforming CSS with JavaScript plugins.
6. **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for creating responsive designs.
7. **[Vite](https://github.com/vitejs/vite)**: A fast build tool for modern web development.

### Additional Libraries and Plugins:
1. **[Animate.css](https://github.com/animate-css/animate.css)**: A library for adding animations to HTML elements.
2. **[React Helmet](https://github.com/nfl/react-helmet)**: Manages document head elements in React applications.
3. **[React Hook Form](https://github.com/react-hook-form/react-hook-form)**: Manages form state and validation in React applications using React hooks.
4. **[React Icons](https://github.com/react-icons/react-icons)**: Provides a collection of popular icon sets as React components.
5. **[SweetAlert2](https://github.com/sweetalert2/sweetalert2)**: Creates beautiful and customizable alert dialogs in JavaScript.
6. **[Swiper Slider](https://swiperjs.com/)**: A modern mobile touch slider library for web and mobile applications.
7. **[LocalForage](https://github.com/localForage/localForage)**: A storage library for web browsers, providing offline data storage.
8. **[Match-sorter](https://github.com/kentcdodds/match-sorter)**: Sorts and filters arrays of items based on a search query.
9. **Sort-By**: Couldn't find an official link, but it's commonly available on package registries like npm.
10. **[React Hot Toast](https://github.com/timolins/react-hot-toast)**: Displays toast notifications in React applications.

### Development Dependencies:
1. **[ESLint](https://eslint.org/)**: Identifies and fixes code errors, enforces coding conventions, and improves code quality.
2. **[ESLint Plugin React](https://github.com/yannickcr/eslint-plugin-react)**: Provides additional rules and configurations for working with React applications.
3. **[ESLint Plugin React Hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)**: Provides rules for enforcing the Rules of Hooks in React applications.
4. **ESLint Plugin React Refresh**: Couldn't find an official link, but it's likely part of React Refresh.
5. **[@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react)**: TypeScript types for React library.
6. **[@types/react-dom](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-dom)**: TypeScript types for React DOM library.
7. **[@vitejs/plugin-react](https://github.com/vitejs/vite/tree/main/packages/plugin-react)**: Vite plugin for React applications.
8. **[Autoprefixer](https://github.com/postcss/autoprefixer)**: Automatically adds vendor prefixes to CSS rules.

These links should provide more information about each package and how to use them in your project.

Click on the package names to view their documentation and learn more about how to use them in your project.

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