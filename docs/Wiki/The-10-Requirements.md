# Req 1 - Login and Access Library (M)
 
## User Story
As a reader, I want to be able to log in and see my uploaded books so that I know they are safe and in one place. 

**Priority:** M 

## Priority and Selection

### Why was this selected?

Logging in and accessing the library are essential to the core functionality of the application, users must be able to log in so that the system knows which books to show each user. Without authentication, users could access other users books or data, creating security and privacy issues. When a user logs in, their unique ID is used to retrieve their uploaded books from the database, allowing them access to their own personal library. That's why this feature has been prioritised as a must-have requirement.

### What value does it provide?
The feature provides security and ensures that users can access only their own books. It also allows users to build a library of their own uploaded books, which only they can see.

### Why is it this priority?
It is an integral part of how the app functions, which is why it's a Must Have.

### Prioritisation Method
MoSCoW prioritisation was used, and this requirement has been made a must-have because users need to be able to log in for the app to function correctly and access their own data.

## Risks, Assumptions and Dependencies

### Risk
Users might forget their passwords or login details, preventing them from logging in.

### Assumption
It's assumed that users will create an account before trying to upload or access books.

### Impact
Users who cannot log in will be unable to access their books. Being able to register or create an account on the login screen will help with a forgot password button, just in case.

## Acceptance Criteria

- Given a user has created an account, when they enter valid login credentials, then they should be successfully logged into the application.
- Given a user is logged in, when they access their library, then they should only see books associated with their account.
- Given a user enters incorrect login credentials, when they attempt to log in, then an appropriate error message should be displayed.

### Verification
- Create a test account and verify that login is successful
- Log in with two different accounts and confirm they only see their own books
- Enter incorrect login details and verify

## Non-Functional Requirements

### Performance
Users should be able to log in and access their library in less than 10 seconds 

### Security
Users should only be able to access books linked to their own account 

---

# Req 2 - Upload Books (M)

## User Story
As a reader, I want to upload books so I can have all my reading in one place.

**Priority:** M 

## Priority and Selection

### Why was this selected?
Uploading books and PDFs is one of the core functions of this app. Without this feature, users would have no content to store or read within the app. Since this app does not provide books or PDFs, the user must be able to upload them. A user should be able to log in and upload any books they want to store in this app's database. This feature is a must-have because the app would not fulfil its purpose without it.

### What value does it provide?
This feature allows users to store and access their books and PDFs in a single location through the application. It is the foundation for all other aspects of the app.

### Why is it this priority?
This is one of the core loops of the application. Without this feature, the app would not function as it's a storage and content-reading app. 

### Prioritisation Method
MoSCoW prioritisation was used, and this requirement has been made a must-have because it's part of the app's core functionality.

## Risks, Assumptions and Dependencies

### Risk
A user might upload something other than a book, which could break the app

### Assumption
Users will be logged in when trying to upload a book.

### Impact
If users can upload unsupported file types, the application may fail to display content or may experience errors. To reduce the risk of this file type validation should be implemented, so only supported file types can be uploaded.

If users are not logged in and try to upload a book, the app will redirect them to the login page before they can proceed.

## Acceptance Criteria

- Given that a user is logged in, when they try to upload a book or PDF, the app should display a success alert.
- Given that a user is not logged in, when they attempt to upload a book, they should be redirected to the login page.
- Given a user is logged in, when they attempt to upload an unsupported file type, then the application should display an error message and prevent the upload.

### Verification
- Log in with a test account and verify that you can upload a book
- When not logged in, trying to upload a file should redirect you to the login page 
- When logged in with a test account, try to upload an unsupported file type. Verify that the app rejects it and shows an error message.

## Non-Functional Requirements

### Performance
Users should be able to upload a supported file in less than 2 minutes, depending on file size and network connection speed.

### Security
Users should not be able to upload unsupported file types.

### Reliability
Users should be able to upload multiple books without upload failures or data loss.

---

# Req 3 - Open Books (M)

## User Story
As a reader, I want to be able to open my books in the app so that I can read them easily.

**Priority:** M 

## Priority and Selection

### Why was this selected?
Opening books is one of the main functions of the application. If users cannot open the books they uploaded, there would be no reason for them to use the app. This feature allows users to access and read the content they have stored in their library.

### What value does it provide?
This feature allows users to read their books directly within the application. It makes the app useful by giving users access to their uploaded content whenever they need it.

### Why is it this priority?
This is part of the application's core user experience, as the main goal is to read books and PDFs in the app. Without it, users would not be able to read any of the books they upload.

### Prioritisation Method
MoSCoW prioritisation was used because this feature is essential to the main purpose of the application and has been classified as a Must Have requirement.

## Risks, Assumptions and Dependencies

### Assumption
It is assumed that users have already uploaded at least one supported book or PDF.

### Dependency
This feature depends on the file upload system and PDF reader functionality being implemented first.

### Impact
If files cannot be opened correctly, users will not be able to read their books.

## Acceptance Criteria

- Given a user has uploaded a book or PDF, when they select the file from their library, then the book should open successfully.
- Given a user has opened a book, when the content is displayed, then they should be able to read the pages.
- Given a user selects a book from their library, when the file is missing or corrupted, then an error message should be displayed.


### Verification
- Upload a valid PDF and verify it opens correctly.
- Check that pages can be viewed and read.
- Attempt to open a corrupted file and verify that an appropriate error message is displayed.

## Non-Functional Requirements

### Performance
Books should open within 5 seconds under normal conditions.

### Usability
Users should be able to open a book with a single tap from their library.

### Compatibility
The reader should work on both Android and iOS devices.

---

# Req 4 - Remember Reading Progress (S)

## User Story
As a reader, I want the app to remember my progress so that I can continue where I left off.

**Priority:** S

## Priority and Selection

### Why was this selected?
Remembering reading progress is a useful feature because it allows users to resume reading where they left off. Without it, users would need to find their place each time they reopen a book. If this were not implemented, users wouldn't use or recommend the app, making it necessary for the app's survival, but not for it to be functional software.

### What value does it provide?
This feature improves the reading experience by saving users time and making the app more convenient to use.

### Why is it this priority?
This feature improves the user experience, but users can still read books without it. And this makes it a Should-Have rather than a Must-Have.

### Prioritisation Method
MoSCoW was used because this feature is important but not essential to the application's core functionality.

## Risks, Assumptions and Dependencies

### Risk
Reading progress may not save correctly if the app closes unexpectedly.

### Assumption
It is assumed that users want to continue reading from where they previously stopped.

### Dependency
This feature depends on users being logged in and books being accessible through the app.

### Impact
If progress is not saved correctly, users may lose their place in a book and become frustrated with the application.

## Acceptance Criteria

- Given a user is reading a book, when they close the application, then their current page should be saved.
- Given a user has previously read a book, when they reopen it, then they should be taken back to the page they last viewed.
- Given a user reads further on through a book, when their progress is saved, then the previous saved page should be updated.

### Verification
- Open a book, close the app, and verify that the current page has been saved and shown in the book's details.
- Reopen the same book and verify that it opens on the last page viewed.
- Read more pages, reopen the book, and verify that the saved progress has been updated.

## Non-Functional Requirements

### Performance
Reading progress should be saved within a few seconds of leaving a page.

### Reliability
User progress should be saved accurately without losing data.

### Usability
Users should not need to save their progress manually.

---

# Req 5 - Bookmark Pages (S)

## User Story
As a student, I want to be able to bookmark a page so that I don't lose an important note.

**Priority:** S 

## Priority and Selection

### Why was this selected?
Bookmarking pages is useful for students and readers who want to return to an important page quickly. It makes it easier to keep track of useful information without having to remember page numbers. 

### What value does it provide?
This feature saves time and improves the reading experience by allowing users to return to important pages whenever needed. It could help make important notes easy for students to get back to.

### Why is it this priority?
This feature improves usability but is not essential for reading books. Users can still use the app without bookmarks.

### Prioritisation Method
MoSCoW was used because bookmarking improves the user experience but is not required for the application's core functionality.

## Risks, Assumptions and Dependencies

### Risk
Bookmarks may not save correctly, causing users to lose important pages.

### Assumption
It is assumed that users will want to save pages for later review.

### Dependency
This feature depends on users being able to open and read books within the application.

### Impact
If bookmarks are not saved correctly, users may become frustrated and have difficulty finding important pages again.

## Acceptance Criteria

- Given a user has opened a book, when they select the bookmark option, then the current page should be saved as a bookmark.
- Given a user has a saved bookmark, when they select it, then the book should open at the bookmarked page.
- Given a user has a bookmark, when they delete it, then it should be removed from their saved bookmarks.

### Verification
- While reading a book, save a bookmark and verify it appears in the bookmark list.
- Select a saved bookmark and verify the correct page opens.
- Delete a bookmark and verify it no longer appears in the bookmark list.

## Non-Functional Requirements

### Reliability
Bookmarks should remain saved after the user closes and reopens the application.

### Usability
Users should be able to create and access bookmarks with minimal steps.

### Performance
Bookmarks should save and load within at least 3 seconds.

---

# Req 6 - Adjust Text Size (S)

## User Story
As a reader, I want to adjust the text size to make reading easier on my eyes.

**Priority:** S

## Priority and Selection

### Why was this selected?
Because many different users have different reading preferences and may find some text sizes difficult to read. Allowing users to adjust the text size makes the books or PDFs in the app more accessible to a broader range of users.

### What value does it provide?
This would allow users to customise their reading experience. It can help with eye strain by letting users adjust the text size to suit their needs.

### Why is it this priority?
This feature improves the reading experience, but it isn't required for the app to function.

### Prioritisation Method
MoSCoW was used, and this is a Should Have since it's a user improvement but not required for the app's core function.

## Risks, Assumptions and Dependencies

### Risk
Changing the text size may cause formatting issues or make some content display incorrectly.

### Assumption
It is assumed that users will want different text size options based on their preferences.

### Dependency
This feature depends on books being successfully opened and displayed in the reader.

### Impact
If text resizing is not implemented correctly, users may have difficulty reading content, or pages may not display properly.

## Acceptance Criteria

- Given a user has a book open, when they increase the text size, then the text should become larger.
- Given a user has a book open, when they decrease the text size, then the text should become smaller.
- Given a user changes the text size, when they continue reading, then the content should remain readable and properly displayed.

### Verification
- Increase the text size and verify that the text becomes larger.
- Decrease the text size and verify that the text becomes smaller.
- Test different text sizes and verify that the content remains readable.

## Non-Functional Requirements

### Usability
Users should be able to adjust the text size while in the book.

### Performance
Text size changes should be applied within 1-2 seconds.

---

# Req 7 - Search Books (S)

## User Story
As a reader, I want to be able to search through my books so I can find one when I have lots of them.

**Priority:** S

## Priority and Selection

### Why was this selected?
Searching is useful when users have uploaded many books and want a quick, convenient way to find a specific book. Without a search feature, users would need to scroll through all their books to find a single book. 

### What value does it provide?
This feature saves users time and makes their library easier to manage. It improves the overall user experience, especially for users with a large library.

### Why is it this priority?
This feature is a Should-have since it's a convenience, it makes users' libraries easier to go through, but it isn't needed for the app to function. Users can still see all their books without this, but it would be beneficial to be included. 

### Prioritisation Method
MoSCoW was used because searching improves usability, but is not essential for the application to function, so it's a Should have.

## Risks, Assumptions and Dependencies

### Risk
Search results may not return the correct books if book information is stored incorrectly.

### Assumption
It is assumed that users will upload enough books for a search feature to be useful.

### Dependency
This feature depends on uploaded books being stored with searchable data, such as a title or author.

### Impact
If searching does not work correctly, users may struggle to find books in larger libraries and may become frustrated.

## Acceptance Criteria

- Given a user has books in their library, when they enter a book title into the search bar, then matching books should be displayed.
- Given a user enters a search that does not match any books, when the search is performed, then a message showing no results should pop up.
- Given a user clears the search bar, when the search is reset, then all books in the library should show up again.

### Verification
- Search for an existing book title and verify that matching books are displayed.
- Search for a title that does not exist and verify that a no-results message appears.
- Clear the search field and verify that the full library is displayed again.

## Non-Functional Requirements

### Performance
Search results should be displayed within 2 seconds.

### Usability
The search bar should be clearly visible and easy to use.

### Reliability
Search results should consistently return the correct books.

---

# Req 8 - Read PDFs Horizontally and Vertically (C)

## User Story
As a student, I want to be able to read PDFs both horizontally and vertically so that I can read different types of PDFs.

**Priority:** C

## Priority and Selection

### Why was this selected?
Some PDFs are easier to read in portrait mode, while others work better in landscape mode. Giving users the option to switch between the two makes the app more flexible and better suited to different types of documents, such as instructional PDFs that need to be read horizontally.

### What value does it provide?
This feature gives users more control over how they read their PDFs. It can make certain documents easier to view, especially PDFs with large tables, diagrams, graphs or slides.

### Why is it this priority?
Users can still read PDFs without this feature. Still, it might be difficult if the PDF's text is sideways or isn't formatted correctly.

### Prioritisation Method
MoSCoW was used for this feature, and it was set as a Could Have priority as it's not needed for the app to work properly, but it would be good to have. 

## Risks, Assumptions and Dependencies

### Risk
Switching between horizontal and vertical viewing may cause some PDFs to display incorrectly, causing errors.

### Assumption
It is assumed that some users will read PDFs more easily horizontally.

### Dependency
This feature depends on books and PDFs already being able to open and display correctly in the reader.

### Impact
If PDF rotation does not work correctly, users may struggle to view certain PDFs, and the reading experience could be worse.

## Acceptance Criteria

- Given a user has opened a PDF, when they switch viewing angle to landscape mode, then the PDF should display horizontally.
- Given a user has opened a PDF, when they switch to portrait mode, then the PDF should display vertically.
- Given a user changes the orientation, when they continue reading, then the current page should remain open.

### Verification
- Open a PDF and verify it displays correctly in landscape mode.
- Switch back to portrait mode and verify the PDF displays correctly.
- Change orientation while reading and verify that the same page remains open.

## Non-Functional Requirements

### Performance
The orientation should change within 1-2 seconds.

### Usability
Users should be able to switch between portrait and landscape using clear controls.

### Reliability
Changing orientation should not cause the app to crash or lose the user's place in the PDF.

---

# Req 9 - Filter by Genre (C)

## User Story
As a reader, I want to filter by genre to see which books I have in that genre.

**Priority:** C

## Priority and Selection

### Why was this selected?
If a reader has lots of books, it can be difficult to find books from different genres. So, adding a genre filter makes it easier and more convenient for readers to browse their books.

### What value does it provide?
This feature would make the reader's library feel more organised and easier to use, helping the reader find books more quickly.

### Why is it this priority?
Readers can still find and read books without a genre filter, so it is not a core feature of the application. It has been given a Could Have priority because it improves convenience rather than functionality.

### Prioritisation Method
MoSCoW was used because this feature is useful, but is not necessary for the app's main purpose of uploading and reading books.

## Risks, Assumptions and Dependencies

### Risk
Books may be assigned to the wrong genre, leading to incorrect filtering results.

### Assumption
It is assumed that users will upload enough books for genre filtering to be useful.

### Dependency
This feature depends on genre information being stored with the books.

### Impact
If genres are not stored correctly, users may not see the books they expect when using the filter.

## Acceptance Criteria

- Given a user has books from multiple genres, when they select a genre filter, then only books from that genre should be displayed.
- Given a user has applied a genre filter, when they remove the filter, then all books should show up again.
- Given a user selects a genre that contains no books, when the filter is applied, then a message should be displayed showing that no books were found.

### Verification
- Add books from different genres and verify the filter displays the correct books.
- Apply a genre, then remove it from the filter and verify all books reappear.
- Select a genre with no books and check that a suitable message is displayed.

## Non-Functional Requirements

### Performance
Filtered results should be displayed within 1-2 seconds.

### Reliability
The correct books should always be displayed for the selected genre.

### Usability
Genre filters should be easy to find and use.

---

# Req 10 - View Reading Statistics (W)

## User Story
As a reader, I want to view my reading stats to see if I'm reading enough per month.

**Priority:** W

## Priority and Selection

### Why was this selected?
Reading statistics could help users track how much they read and encourage them to read more often. There could be a section showing how much a reader has read in a month, which books they have read, and tracking their reading habits. It is a feature that some users may find interesting and motivating.

### What value does it provide?
This feature gives users insights into their reading habits, such as how many books they have read, how much they have read in a month, and what types of books/PDFs they have been reading.

### Why is it this priority?
This doesn't align with the app's purpose of uploading, storing, and reading books. Users can still use all of the main features without reading statistics.

### Prioritisation Method
MoSCoW was used because this feature has been classified as a Won't have " requirement and will be left for a future version of the application, and judged as out of scope for this project.

## Risks, Assumptions and Dependencies

### Risk
Reading statistics may be inaccurate if reading progress is not being tracked correctly.

### Assumption
It is assumed that users like keeping track of their reading habits.

### Dependency
This feature depends on reading progress being tracked and stored correctly.

### Impact
If the data being read is inaccurate, users may not trust the data the application provides.

## Acceptance Criteria

- Given a user has read books, when they view their reading statistics, then the number of books read should be displayed.
- Given a user has tracked reading progress, when they open the statistics page, then their reading activity should be shown.
- Given a user has no reading activity, when they view their statistics, then a message should show that they haven't read anything yet.

### Verification
- Read through part of a book and verify that statistics are generated correctly.
- Look at the tracked progress and compare it against the displayed statistics.
- Create a user with no reading history and verify that the statistics show that they haven't read anything yet.

## Non-Functional Requirements

### Performance
The statistics page should load within 3-4 seconds.

### Reliability
Reading statistics should accurately reflect user activity.

### Usability
Statistics should be easy to understand and read.
