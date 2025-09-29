 

```markdown
# 🍔 Food View - MERN Project

Food View is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows food partners to share food, and users to explore and save food items. The app provides authentication, food partner management, and a simple feed with navigation.

---

## 🚀 Features

- **User Authentication**
  - User Registration & Login
  - Food Partner Registration & Login
  - Role-based access (User / Partner)

- **Food Partner**
  - Create food items
  - Manage profile
  - Upload & display food-related content

- **Users**
  - Browse food feed
  - Save food items
  - Profile management

- **General**
  - Bottom navigation for quick access
  - Reel-style feed for food items
  - Responsive UI with modern design


## 🛠️ Tech Stack

- **Frontend:** React.js, React Router, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT + Bcrypt
- **Other:** Nodemon (development), Vite (React build tool)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/food-view.git
cd food-view
````

### 2️⃣ Setup Backend

```bash
cd backend
npm install
nodemon server.js
```

Backend will run on **[http://localhost:5000](http://localhost:5000)** (or your configured port).

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on **[http://localhost:5173](http://localhost:5173)** (Vite default).

---

## 🔑 Environment Variables

Create a `.env` file inside **backend/** with the following:

```env
 JWT_SECRET =  
MONGODB_URI = 
IMAGEKIT_PUBLIC_KEY = 
IMAGEKIT_PRIVATE_KEY =  
IMAGEKIT_URL_ENDPOINT =  
```

 
---

 
