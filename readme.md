# Project Setup Guide

This guide will help you set up and run the project, including both the backend (FastAPI) and the frontend (Next.js).

## 📌 Prerequisites

Ensure you have the following installed on your system:
- **Python** (>= 3.8)
- **Node.js** (>= 16.x)
- **Yarn** (recommended for frontend package management)

---

## 🛠️ Backend Setup (FastAPI)

```sh
cd backend
```

### 1️⃣ Create a Virtual Environment
Run the following command based on your OS:

**For macOS/Linux:**
cd backend
python3 -m venv env
source env/bin/activate
```

**For Windows:**
```sh
python -m venv env
env\Scripts\activate
```

### 2️⃣ Install Dependencies
```sh
pip install -r requirements.txt
```

### 3️⃣ Start the Backend Server
```sh
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The FastAPI backend will be running at: [http://localhost:8000](http://localhost:8000)

---

## 🎨 Frontend Setup (Next.js)

### 1️⃣ Install Dependencies
Navigate to the frontend folder and install packages:
```sh
cd frontend
yarn install
```

### 2️⃣ Start the Frontend Server
```sh
yarn dev
```

The Next.js frontend will be running at: [http://localhost:3000](http://localhost:3000)

---

## 📂 Folder Structure
```
project-root/
│-- backend/          # FastAPI backend
│   ├── main.py       # Entry point for FastAPI
│   ├── requirements.txt  # Python dependencies
│   └── uploads/      # Uploaded files directory
│-- frontend/         # Next.js frontend
│   ├── pages/        # Next.js pages
│   ├── components/   # Reusable React components
│   ├── public/       # Static assets
│   ├── package.json  # Frontend dependencies
│-- .gitignore        # Ignore unnecessary files
│-- README.md         # Setup guide
```

---

## 🚀 API Endpoints

### **1️⃣ Upload Folder**
**POST** `/upload-folder`
- **Request:** `multipart/form-data`
- **Response:** `{ "message": "Folder uploaded successfully" }`

---

## ✅ Next Steps
- Ensure your backend is running before the frontend.
- If needed, update `.env` files for both backend and frontend.

---

Happy coding! 🚀

