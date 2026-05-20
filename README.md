# Grade Tracker

A full-stack Grade Tracker web application that allows students to manage courses, track assessments, and automatically calculate final grades.

This project is inspired by modern student portals and academic dashboards, featuring course management, assessment tracking, weighted grade calculations, and a clean UI built with React.

---

# Features

## Current Features

### Dashboard
- View all courses
- Student profile summary card
- Dynamic course table
- Navigate to individual course pages

### Courses
- Add new courses using a modal popup
- Store courses in PostgreSQL
- View course information

### Assessments
- Add assessments to courses
- Track:
  - Assessment name
  - Grade (%)
  - Weight (%)
- Automatic weighted final grade calculation

### Grade Calculation
- Live weighted average calculation
- Course grades update dynamically based on assessments

### Frontend
- React-based SPA
- React Router navigation
- Modal-based interactions
- Responsive card/table layout
- Modern dashboard UI

### Backend
- Node.js + Express API
- PostgreSQL database integration
- REST API structure
- Modular route organization

---

# Tech Stack

## Frontend
- React
- React Router DOM
- Lucide React Icons
- CSS

## Backend
- Node.js
- Express.js

## Database
- PostgreSQL
- pg library

---

# Project Structure

grade-tracker/
│
├── backend/
│   ├── db.js
│   ├── server.js
│   │
│   ├── routes/
│   │   ├── courses.js
│   │   └── assessments.js
│   │
│   ├── utils/
│   │   └── calculateGrade.js
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │
│   │   ├── api/
│   │   │   └── api.js
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── StudentCard.js
│   │   │   ├── CourseTable.js
│   │   │   ├── CourseRow.js
│   │   │   ├── AddCourseModal.js
│   │   │   ├── AddAssessmentModal.js
│   │   │   ├── AssessmentTable.js
│   │   │   └── GradeBanner.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   └── CoursePage.js
│   │   │
│   │   ├── styles/
│   │   │   └── global.css
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
└── README.md

---

# Database Schema

## Courses Table
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    name TEXT,
    code TEXT
);

## Assessments Table
CREATE TABLE assessments (
    id SERIAL PRIMARY KEY,
    course_id INTEGER REFERENCES courses(id),
    name TEXT,
    weight FLOAT,
    grade FLOAT
);

---

# API Endpoints

## Courses

### Get All Courses
GET /courses

### Create Course
POST /courses

Body:

{
  "name": "Linear Algebra",
  "code": "MATH102"
}

---

# Assessments

## Get Assessments for a Course
GET /assessments/:courseId

## Add Assessment
POST /assessments

Body:

{
  "course_id": 1,
  "name": "Midterm",
  "weight": 30,
  "grade": 88
}

---

# Grade Calculation Logic

Final grades are calculated using weighted averages.

Example:

Midterm: 88% worth 30%
Homework: 95% worth 20%

Final Grade =
(88 × 30 + 95 × 20) / 50
= 90.8%

---

# Installation

## Clone Repository
git clone <repo-url>
cd grade-tracker

# Backend Setup

## Install Dependencies
cd backend
npm install

## Required Packages
npm install express cors pg nodemon

## Start Backend
npm run dev

Server runs on:

http://localhost:5000

---

# Frontend Setup

## Install Dependencies
cd frontend
npm install

## Required Packages
npm install react-router-dom lucide-react

## Start Frontend
npm start

Frontend runs on:

http://localhost:3000

# Current Application Flow
React Frontend
       ↓
Express API
       ↓
PostgreSQL Database
       ↓
Grade Calculation Logic
       ↓
Updated UI

---

# Screens Implemented

## Dashboard
- Student card
- Course table
- Add course modal

## Course Page
- Grade banner
- Assessment table
- Add assessment modal

---

# Current Limitations
- No authentication system yet
- No user-specific data
- No assessment deletion backend
- No course editing
- No persistent GPA calculation
- No validation for assessment weights exceeding 100%
- Minimal mobile responsiveness

---

# Planned Features

## Authentication
- JWT login system
- User registration
- Protected routes

## Database Improvements
- Users table
- Foreign key relationships
- User-owned courses

## CRUD Improvements
- Delete assessments
- Edit assessments
- Delete courses
- Edit course information

## UI Improvements
- Improved responsiveness
- Better animations
- Toast notifications
- Confirmation modals

## Analytics
- GPA calculation
- Semester tracking
- Progress visualization
- Charts/graphs

## Deployment
- Deploy frontend to Vercel
- Deploy backend to Render/Railway
- Hosted PostgreSQL database

---

# Future Architecture
Frontend (React)
       ↓
Protected API (Express + JWT)
       ↓
PostgreSQL
       ↓
Cloud Deployment

---

# Learning Goals

This project is being built to practice:

- Full-stack development
- REST APIs
- PostgreSQL integration
- React architecture
- State management
- CRUD operations
- Backend/frontend integration
- Real-world application structure

# Author
Built by Nat L.