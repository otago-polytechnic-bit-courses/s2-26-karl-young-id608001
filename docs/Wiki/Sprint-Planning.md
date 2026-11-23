
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

## Sprint 2 - Book Management

### Goal

Users can upload books directly from the application and open books from their personal library for reading.

### Requirements
- Upload Books #2
- Open Books #3

### Supporting Tasks
- Create Upload Book Screen
- Implement File Picker
- Connect Upload Screen to API
- Validate Uploaded File Types
- Update Library After Upload
- Create Reader Screen
- Open books from library
- Display Content
- Handle Reader Errors

### Estimates
- Upload Books = 5 Points
- Open Books = 8 Points

Total: 13 Points

### Sequencing
1. Create Upload Book Screen
2. Implement File Picker
3. Connect Upload Screen to API
4. Validate Uploaded File Types
5. Update Library After Upload
6. Create Reader Screen
7. Open books from library
8. Display Content
9. Handle Reader Errors

### Rationale
Sprint 2 focuses on completing the application's book management flow, uploading and reading books. While books can currently be added through the Django backend established in Sprint 1, users cannot yet upload books directly from the react native frontend. Adding upload functionality lets users manage their own content without admin intervention and keep their books organised, thereby completing the Upload Books requirement.

Once books can be uploaded via the app's frontend, users must be able to open and read them. 
The reader functionality is necessary afterwards, as it is part of the application's primary purpose: to upload, read, and organise books.

Completing these requirements creates a complete user flow where users can upload a book, view it in their library, and open it for reading. 
This reduces project risk by validating the application's most important functionality before adding future enhancements such as reading progress, bookmarks, and search features.

---

## Sprint 3 - Reading Experience

### Goal
Users can continue reading from where they left off on the home page and save important pages as bookmarks as needed.

### Requirements
Remember Reading Progress #4
Bookmark Pages #5

### Supporting Tasks
1. Implement reading progress functionality
2. Implement bookmark functionality
3. Implement Continue Reading section
4. Test and verify reading progress and bookmarks

### Estimates
- Remember Reading Progress = 3 Points
- Bookmark Pages = 5 Points

Total: 8 Points

### Sequencing
- Implement reading progress saving and loading
- Implement bookmark creation and deletion
- Implement Continue Reading section
- Test and verify both requirements

### Rationale

Sprint 3 focuses on making the reading experience more practical for users. 
Users can upload and open books, but they still need to manually find their place every time they return to a book.

Remembering reading progress is implemented first because it builds on the existing reader functionality, allows users to continue from where they left off and makes the app more usable. This also supports the Continue Reading section planned for the Home screen.

Bookmarking pages is included because it gives users a quick way to return to important pages without having to remember page numbers or search through an entire book. This is especially useful for students using the application for study purposes.

Together, these features make the application more convenient to use and build on the core reading functionality completed in Sprint 2. They also provide a more complete reading experience.

---


