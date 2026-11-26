# TookABook

TookABook is a mobile eBook library app built using React Native, Expo and Django REST Framework. The application allows users to create an account, upload their own books and access them through a personal library.

---

## Features

- User registration and login
- JWT authentication
- Personal library management
- Upload books and PDFs
- Open and read uploaded books
- Support for PDF and CBZ files
- Recently Added section

---

## Documentation

Project documentation is located in the `docs` folder.

### Design Documentation

- App Concept
- Full Requirements List
- The 10 Requirements
- System Design
- API Design
- Wireframes
- Design Reflection

### Project Management

- Sprint Planning
- Project Management

### User Acceptance Testing

- UAT Testing Plan
- UAT Feedback Form
- UAT Reflection

### Releases

Release notes can be found in:

docs/releases/

**Current Releases**

- v0.1.0 - Sprint 1
- v0.2.0 - Sprint 2

### Additional setup and development documentation can be found in:

- api-documentation.md
- app-documentation.md

---

## Running the Project

### Backend

```bash
cd TookABook_backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver 0.0.0.0:8000
```

### Frontend

```bash
cd TookABook-app

npm install

npx expo start -c
```

### Run Using

- Android Emulator
- Expo Go
- Physical Android Device

---

## Tech Stack

### Frontend

- React Native
- Expo
- Expo Router
- TypeScript

### Backend

- Django
- Django REST Framework
- SimpleJWT
- Django CORS Headers
- Pillow

### Database

- SQLite (Development)

---

## Project Structure

```
TookABook/
├── TookABook-app/
├── TookABook-backend/
├── docs/
│   ├── releases/
│   └── Wiki/
├── api-documentation.md
├── app-documentation.md
├── reflection.md
└── README.md
```

---


## Author

Karl Young

Bachelor of Information Technology

Intermediate App Development Project
