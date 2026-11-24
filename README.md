# TookABook

TookABook is a mobile eBook library app built using React Native, Expo and Django REST Framework. The application allows users to create an account, upload their own books and access them through a personal library.

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

## Documentation

All project documentation can be found in:

[The Wiki](https://github.com/otago-polytechnic-bit-courses/s2-26-karl-young-id608001/wiki) &  the docs/ folder


### Releases

Sprint releases and release notes:

```text
docs/releases/
```

Current releases:

- v0.1.0
- v0.2.0

Included documentation:

- API Design
- System Design
- Sprint Planning
- Wireframes
- Full Requirements List
- Project Management
- Original App Idea
- Design Reflection
- TookABook App Concept
- UAT Testing Plan
- UAT Feedback Form
- v0.1.0 release
- v0.2.0 release

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
- JWT Authentication (SimpleJWT)
- django-cors-headers
- Pillow

### Database

- SQLite (Development)

---

## Author

Karl Young

Bachelor of Information Technology

Intermediate App Development Project
