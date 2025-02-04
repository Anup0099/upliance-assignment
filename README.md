Project Name: Uplance App

Table of Contents

Introduction

Technologies Used

Project Structure

State Management

Component Breakdown

Routing and Authentication

Installation and Setup

Usage

Key Features

Contributing

License

Introduction

Uplance App is a React-based application that integrates Google authentication, private/public routes, Redux for state management, Material UI for styling, and React Quill for rich text editing. It features user authentication, a form system, a rich text editor, and other functionalities like a user profile and counter.

Technologies Used

React (Vite-based setup)

Redux (State management for UserForm)

Context API (Google authentication handling)

React Router (Navigation and protected routes)

Material UI (UI Components and Styling)

React Spring (Animations)

React Quill (Rich text editing)

Firebase (Authentication via Google Sign-In)

Project Structure

/project-root
├── src
│   ├── components
│   │   ├── Counter.jsx
│   │   ├── UserForm.jsx
│   │   ├── UserProfile.jsx
│   │   ├── UserEditor.jsx
│   ├── pages
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   ├── context
│   │   ├── AuthContext.jsx
│   ├── redux
│   │   ├── Store.js
│   │   ├── userSlice.js
│   ├── routes
│   │   ├── PrivateRoute.jsx
│   │   ├── PublicRoute.jsx
│   ├── firebase.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css

State Management

Redux (For UserForm State Management)

userSlice.js contains Redux reducers and actions to manage form state.

The Redux store (Store.js) holds the global state.

Components like UserForm use Redux hooks (useSelector, useDispatch) to retrieve and modify form data.

Context API (For Google Authentication)

AuthContext.jsx provides authentication state and functions (signInWithGoogle, logout).

useAuth is used throughout components like Navbar and PrivateRoute to check login state.

Component Breakdown

Main Components

UserForm.jsx: A form managed via Redux.

UserEditor.jsx: Uses React Quill for rich text editing.

UserProfile.jsx: Displays authenticated user details.

Counter.jsx: A simple counter component.

Login.jsx: Handles Google sign-in.

Navbar.jsx: Shows login/logout and navigation buttons.

Routing Components

PrivateRoute.jsx: Protects routes from unauthorized access.

PublicRoute.jsx: Restricts access to the login page when already authenticated.

Routing and Authentication

The app uses react-router-dom for navigation.

After logging in via Google, users are redirected to /userForm.

Unauthorized users trying to access protected routes are redirected to /login.

Installation and Setup

Clone the repository:

git clone https://github.com/upliance-assignment.git
cd upliance-assignment

Install dependencies:

npm install

Configure Firebase:

Update firebase.js with your Firebase credentials.

Start the development server:

npm run dev

Usage

Open the app in the browser (http://localhost:5173).

Click on Login with Google.

After logging in, navigate to the available sections (UserForm, Editor, Profile, Counter).

Click Logout to clear authentication and form data.

Key Features

Google Authentication using Firebase.

Protected Routes using PrivateRoute/PublicRoute.

State Management with Redux for form handling.

Material UI for a professional UI.

React Spring animations.

Rich Text Editing via React Quill.

Persistent Auth State using Firebase onAuthStateChanged.

Contributing

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Commit your changes (git commit -m 'Add feature').

Push the branch (git push origin feature-branch).

Open a Pull Request.

License

This project is licensed under the MIT License.

