## What are your two selected features?

### Login and Access Library

This feature lets users log in using their email and password. Once authenticated, users can access their personal library, which contains all of the books they have uploaded to the application.

### Upload Books

This feature allows users to upload their own books and PDFs to the TookABook app. 
Uploaded files are stored and linked to the user's account, making them available in their personal library and throughout the app.

---

## Why did you select these over the other eight requirements?

These features were selected because they form two of the three core features required for the application to function and are dependencies for most other features. Users must be able to log in so the app can identify them and retrieve their personal data. Users must also be able to upload books, as the application relies on user-provided content rather than supplying its own books. 

Without these features, the application would not fulfil its intended purpose as a personal digital library. 
While other requirements, such as tracking reading progress or bookmarking pages, improve the user experience, they are not essential to the application's basic functionality.

Together with the Open Books feature, these requirements form the system's core workflow, and the remaining requirements serve as quality-of-life improvements.

---

## How do they fit into your overall app architecture?

The Login and Access Library feature is used in the React Native frontend to collect users' login credentials and send them to the Django API.
The Django API authenticates the user against the database and returns a JWT token. Once authenticated, the user can request their library, and the API retrieves only the books associated with their account.

The Upload Books feature allows users to select and upload files through the React Native frontend. Then the Django API validates the uploaded files and ensures they are linked to the correct account. 

Information about the uploaded books is stored in the database. while the book files themselves are stored within the application's file storage system.

---

## What do you expect to be the most challenging part of implementing them?

I expect file uploading to be the most challenging part of implementation. Unlike standard form data, uploaded files require additional handling in both React Native and Django. 

The app must validate supported file types, handle larger file sizes, and ensure uploads are linked to the correct user account. Ensuring this works across multiple devices could also be challenging.

---
