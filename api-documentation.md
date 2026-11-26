# API Documentation

## Project Description

The TookABook API is built using Django REST Framework and provides authentication, library management, book upload and reading functionality for the TookABook mobile application.

---

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/otago-polytechnic-bit-courses/s2-26-karl-young-id608001.git
```

### Switch to the Project Branch

```bash
git switch project
```


### Navigate to the Backend

```bash
cd TookABook_backend
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Virtual Environment

Linux
```bash
source venv/bin/activate
```

Windows
```bash
source venv/Scripts/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Apply Migrations

```bash
python manage.py migrate
```

### Run the API

```bash
python manage.py runserver 0.0.0.0:8000
```

---

## Environment Variables

Create a `.env` file in the backend directory.

Example:

```env
SECRET_KEY=your_secret_key
DEBUG=True
ALLOWED_HOSTS=localhost,plus_any_others
```

---

## Development Instructions

When making model changes:

```bash
python manage.py makemigrations
python manage.py migrate
```

The API uses Django REST Framework and JWT authentication through SimpleJWT.

---

## Testing Instructions

Automated API tests have not been implemented yet.

Testing was carried out manually during development using:

- The React Native client
- Django development server
- Direct interaction with API endpoints
- curl in terminal

Future development would include automated Django test cases for endpoint validation and authentication.

---

## Technology Stack

- Django
- Django REST Framework
- SimpleJWT
- Django CORS Headers
- Pillow
- SQLite