# 🔐 React Auth Context API

A simple and clean authentication system built using React Context API, demonstrating how to manage global authentication state (login/logout) without prop drilling.

## ✨ Features

- Global authentication state using Context API
- Login and Logout functionality
- Authentication state persists using localStorage
- Conditional rendering based on login status
- Clean and modular component structure
- No prop drilling

## 🧠 Why Context API?
In real-world React applications:

- Many components need access to the logged-in user
- Passing props through multiple levels becomes messy (prop drilling)

The Context API allows us to:
- Store auth data in a global place
- Access it from any component directly
- Keep code clean and maintainable

🏗️ Project Structure

src/
 ┣ Context/
 
  ┃ ┗ AuthContext.jsx
 
 ┣ components/
 
   ┃ ┣ Test.jsx
 
   ┃ ┣ Loginbtn.jsx
 
   ┃ ┗ Logoutbtn.jsx
 
 ┣ App.jsx
 
 ┣ index.css

## ⚙️ How It Works
1️⃣ Auth Context

AuthContext stores:
  - user state
  - login() function
  - logout() function
- Auth state is shared globally using a Provider

2️⃣ Login

- Clicking Login sets user data
- User data is saved to localStorage
- UI updates automatically

3️⃣ Logout

- Clears user state
- Removes data from localStorage
- UI updates instantly

4️⃣ Persistence

- On page refresh, user data is restored from localStorage
- Ensures a smooth user experience

## 🧪 Example Logic
```javascript
const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : null;
});
```
- This ensures the user stays logged in even after a refresh.

## 🚀 Getting Started
- Clone the repository
     git clone https://github.com/utpanna-pradhan/Auth-Context.git

- Install dependencies
    npm install

- Run the app
    npm run dev
