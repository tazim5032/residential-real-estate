# HavenCrest - Residential Real Estate Website

HavenCrest is a residential real estate website designed to help users find their dream homes and connect with top-rated agents. Built with React, Tailwind CSS, DaisyUI, React Router, and Firebase, HavenCrest offers a seamless user experience with a range of features including property listings, agent profiles, contact forms, and user authentication.

## Features

- **Home:** Discover top-rated properties, view customer reviews, and explore frequently asked questions.
- **Properties:** Browse through a wide range of available properties with detailed information.
- **Agents:** Connect with our top-rated agents and explore their profiles to find the perfect match.
- **Contact:** Reach out to us with your questions, feedback, or inquiries using the contact form.
- **About:** Learn more about HavenCrest's history, mission, and vision.
- **Login/Register:** Securely log in or register for an account to access exclusive features.
- **Update Profile:** Update your profile information and personalize your experience.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for creating responsive designs.
- **DaisyUI:** A component library for Tailwind CSS with ready-to-use UI components.
- **React Router:** A routing library for React applications.
- **Firebase:** A platform for building web and mobile applications, providing authentication and database services.
- **Sweet Alert:** A library for creating beautiful and customizable alerts.
- **Swiper Slider:** A mobile touch slider library.
- **Animate.css:** A library for adding animations to HTML elements.
- **Helmet:** A library for managing document head elements in React applications.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/havencrest.git
```

2. Navigate to the project directory:

```bash
cd havencrest
```

3. Install dependencies:

```bash
npm install
```

4. Set up Firebase:

   - Create a Firebase project.
   - Enable authentication and set up sign-in methods (e.g., email/password, Google, GitHub).
   - Set up Firestore database for storing data.

5. Create a `.env` file in the project root and add your Firebase configuration:

```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

6. Start the development server:

```bash
npm start
```

## Additional Information

- Ensure that all routes requiring authentication are protected to prevent unauthorized access.
- Implement form validation for registration, login, and contact forms to improve user experience and security.
- Use responsive design principles to ensure the website looks great on all devices.

## Contributors

- John Doe (@johndoe)
- Jane Smith (@janesmith)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.