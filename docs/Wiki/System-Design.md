## Login and Access Library

<img width="1200" alt="image" src="https://github.com/user-attachments/assets/38b5f4df-3900-465b-9b7f-108c8e6276d1" />

### Summary

I chose a sequence diagram for this feature, as it clearly shows the order of interactions between React Native, the Django API, and the Database during authentication and library access. A component diagram was considered, however, it was rejected because I needed to show the sequence of interactions between each stage of the login process.

The React Native frontend is responsible for collecting the login details, validating user input and sending them to the Django backend API. 
The Django API handles authentication by verifying the user's credentials against the database and generating a JWT Token. 
Once the user is successfully authenticated, the token is used when requesting the user's books from the backend. This makes sure that users can access only books from their own accounts, improving both security and privacy in the application.


---

## Upload Books

<img width="1200" alt="image" src="https://github.com/user-attachments/assets/5e9966e2-c0d6-46d5-89b0-1d740cfb39f3" />

### Summary

I chose an architecture diagram because it provides a clear overview of the relationships among the React Native client, the Django API, the database, and file storage. It provides a clear overview of the components involved in the book upload process and how they interact.

The Django API is responsible for authentication, file validation and upload handling to ensure that only supported file types are accepted.
The database is used to store user accounts, book information, and reading progress, while uploaded PDFs and eBooks are stored separately in the file system. Separating book files from database records helps improve performance and organisation.

A sequence diagram was considered however, it was rejected because this design aimed to demonstrate the overall system structure rather than the detailed order of interactions.