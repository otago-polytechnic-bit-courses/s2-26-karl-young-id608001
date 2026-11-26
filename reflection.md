# Design and Implementation Reflection

## What changed?

One major change happened during Sprint 2 when implementing the book reader. My original design assumed that PDF files would be rendered directly in the app using a PDF-viewing library. 
However, I discovered that many PDF rendering solutions required native modules that were incompatible with Expo Go.

After looking at several approaches, I was unable to find a solution that worked reliably without introducing significant complexity. As a result, I changed the design of the reader feature. 
Instead of rendering PDFs directly on the device, the Django API uses PyMuPDF to convert PDF pages into images, which the React Native app then displays using a FlatList.

Even though this was not part of the original design, it allowed me to meet the requirement to open and read books in the app. 
This experience taught me the importance of considering framework limitations during the design phase. 
I could have searched more when deciding what kind of app to make with Expo Go, as a valid solution on paper may not always be practical in the chosen development environment.

---

## What was harder than expected?

The most difficult technical problem was implementing book uploads. I originally expected uploading files from React Native to the Django API to be relatively straightforward. 
However, larger files often failed to upload reliably, and some would crash the app completely.

To solve this, I experimented with several approaches, including blob uploads and file-system-based uploads. 
Eventually, I settled on a simpler approach that worked reliably for most expected book sizes and reduced the upload size limit as a precaution.

One lesson I learned was that file uploads are more complex than I initially expected. My original design was to store books on the user's device and only send metadata to the API. 
If I were redesigning the feature, I would revisit that approach, as it would significantly reduce the amount of data being transferred.

---

### Patterns and principles

I used the Facade pattern through the apiFetch helper in booksApi.tsx. This lets screens call functions such as getBooks() and uploadBook() without requiring them to handle authentication tokens or retry requests themselves. 

An alternative would have been to place API requests directly on each screen, but that would have resulted in duplicated code and violated the DRY principle. 
While this places more responsibility on the helper, I found it effective because it simplified communication with the backend.

I also used a simple Strategy-style approach in the backend when opening books. The get_book_pages function chooses a different conversion method depending on whether the file is a PDF or CBZ. 
The alternative would have been keeping all conversion logic in a single function, which would have become harder to maintain as more file types were added.

For programming principles, I applied Separation of Concerns by keeping components such as ComicReader responsible for displaying content, while booksApi.tsx handles API communication. 
I also applied DRY through the apiFetch helper, which centralises token handling, headers and retry logic instead of repeating the same code across multiple API requests.

---

### What are you most confident about?

The part of the project I am most confident about is the book upload functionality. 
Although it was the hardest feature to implement, it also taught me the most. Getting files from React Native to the Django API required testing different upload approaches and working through unexpected crashes and reliability issues caused by large files. 

While the final solution changed from my original design, it did help me better understand mobile file handling and how design decisions can affect implementation later in a project.

---

# AI Usage Declaration

## Tools Used

- ChatGPT
- GitHub Copilot

## Usage

These tools were used to assist with debugging, code generation, design discussions and drafting documentation throughout the project.

## Example Where AI Helped

One example where AI helped was generating boilerplate code and helping debug issues with API requests between React Native and Django. 
This decreased the amount of repetitive code I needed to write and helped identify issues more quickly during development.

## Example Where AI Was Wrong or Had To Be Rejected

During development, AI-generated suggestions sometimes recommended approaches that did not work correctly within the constraints of Expo Go. 
One example was a suggested approach to PDF rendering that relied on libraries incompatible with my development environment. 

After reviewing the documentation, these suggestions had to be investigated, tested, and ultimately rejected in favour of a different implementation using PyMuPDF and image rendering.

All AI-generated suggestions were reviewed, tested and adapted before being incorporated into the project.