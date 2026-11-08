
## Sprint 1 - Core User Access

### Goal
Users can create an account, log in and upload books to their personal library.

### Requirements
- Login and Access Library #1
- Upload Books #2

### Supporting Tasks
- Create a React Native project
- Configure Django project
- Create User model
- Registration page
- Configure JWT authentication

### Estimates
- Login and Access Library = 3 Points
- Upload Books = 5 Points

Total: 8 Points

### Sequencing
1. Configure Django and React Native projects
2. Create User model and Registration page
3. Configure JWT authentication
4. Implement Login and Access Library
5. Implement Upload Books

### Rationale
Sprint 1 focuses on the functionality required for the app to operate. Registration and login are completed first because users must be authenticated before any personal data can be accessed.
Implementing authentication early allows uploaded books to be associated with the correct user account and retrieved from the user's library. 

The Upload Books feature follows because the application relies entirely on user-provided content, making it one of the most important features in the system. 

Completing these requirements first reduces risk by establishing the application's foundation. It enables future features, such as opening books, bookmarking pages and tracking reading progress, to be developed and tested using real user data. Bringing these requirements together creates a usable app that lets users securely upload and store their own books, which is the project's primary purpose.

---

