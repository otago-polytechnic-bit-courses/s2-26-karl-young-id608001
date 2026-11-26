# App Documentation

## Project Description

TookABook is a mobile eBook library application built using React Native and Expo. The application allows users to create an account, upload books and PDFs, store them in a personal library and access them from their mobile device.

The project was developed as part of ID608001 Intermediate Application Development Concepts and follows an agile development process including backlog management, sprint planning, user acceptance testing and versioned releases.

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

### Navigate to the Application

```bash
cd TookABook-app
```

### Install Dependencies

```bash
npm install
```

### Start Expo

```bash
npx expo start -c
```

---

### To Run on Android Emulator

Press:

```text
a
```

from the Expo CLI.

### Run Using Expo Go

1. Install Expo Go on a mobile device.
2. Scan the QR code displayed by Expo.
3. The application will load on the device.

### Build Dependencies

Install new packages using:

```bash
npm install <package-name>
```

or

```bash
npx expo install <package-name>
```

where appropriate.

---

## Releases

### v0.1.0 - Sprint 1

Features Delivered:

- User registration
- Login and authentication
- Access Library functionality
- Project setup and navigation

Run this release:

```bash
git checkout v0.1.0
npm install
npx expo start -c
```

---

### v0.2.0 - Sprint 2

Features Delivered:

- Upload books (Filesize Under 60mb)
- Open uploaded books
- PDF, CBZ support
- Library screen
- Recently Added section

Run this release:

```bash
git checkout v0.2.0
npm install
npx expo start -c
```

---

## Documentation

Additional project documentation is available in:

```text
docs/Wiki/
```

Including:

- App Concept
- Requirements
- System Design
- API Design
- Sprint Planning
- UAT Documentation
- Release Notes