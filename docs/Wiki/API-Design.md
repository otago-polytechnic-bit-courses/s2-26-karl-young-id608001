## API Endpoints

| HTTP Method | URL | Description | Authentication | Roles | Body Parameters |
|-------------|-----|-------------|----------------|-------|-----------------|
| POST | `/api/login/` | Authenticate a user and return a JWT token | No | Any | `email`, `password` |
| GET  | `/api/books/` | Retrieve all books belonging to the authenticated user | Yes | Authenticated User | - |
| GET  | `/api/books/{id}/` | Retrieve details of a specific book | Yes | Owner Only | - |
| POST | `/api/books/upload/` | Upload a PDF or eBook to the user's library | Yes | Authenticated User | `file` |

---

## POST /api/login/

### Authentication
Not required.

### Authorisation
Any user can access this endpoint.

### Validation
- Email must exist in the database.
- Password must match the stored password.
- Email and password fields cannot be empty.

### Success Response

200 OK

```json
{
  "token": "jwt_token",
  "user_id": 1
}
```

### Error Responses

400 Bad Request

```json
{
  "detail": "Email and password are required."
}
```

401 Unauthorized

```json
{
  "detail": "Invalid email or password."
}
```

---

## GET /api/books/

### Authentication
JWT token required.

### Authorisation
Authenticated users can only view books associated with their own account.

### Returned Data

200 OK

```json
[
  {
    "id": 1,
    "title": "Thunder Road",
    "author": "Ted Dawe"
  }
]
```

### Error Responses

401 Unauthorized

```json
{
  "detail": "Please log in to view your library."
}
```

---

## POST /api/books/upload/

### Authentication
JWT token required.

### Authorisation
Authenticated users only.

### Validation
- User must be logged in.
- File must be a supported type (PDF or EPUB).
- File cannot be empty.
- File size must not exceed the maximum upload limit.

### Success Response

201 Created

```json
{
  "id": 15,
  "title": "Thunder Road",
  "detail": "Book uploaded successfully."
}
```

### Error Responses

400 Bad Request

```json
{
  "detail": "Only PDF and EPUB files are supported."
}
```

401 Unauthorized

```json
{
  "detail": "Please log in before uploading a book."
}
```

---

## GET /api/books/{id}/

### Authentication
JWT token required.

### Authorisation
Only the owner of the book can access this resource.

### Returned Data

200 OK

```json
{
  "id": 1,
  "title": "Thunder Road",
  "author": "Ted Dawe",
  "file": "/media/books/thunder_road.pdf"
}
```

### Error Responses

401 Unauthorized

```json
{
  "detail": "Please log in before uploading a book."
}
```

403 Forbidden

```json
{
  "detail": "You do not have permission to perform this action."
}
```

404 Not Found

```json
{
  "detail": "Book not found."
}
```