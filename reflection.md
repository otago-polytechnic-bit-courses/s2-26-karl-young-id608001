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

# UAT Reflections

The UAT scenarios were designed directly from the acceptance criteria defined during Phase 1 for the Login and Access Library and Upload Books features. 
Rather than giving participants step-by-step instructions, the scenarios were written as realistic tasks based on the acceptance criteria and intended user workflows. 
This allowed participants to interact with the application naturally and helped identify issues that may not have been found through functional testing alone.

The scenarios mapped well to the acceptance criteria because each task had a clear expected outcome that could be verified during testing. Participants were asked to sign in, attempt an invalid login, upload a book and attempt to upload an unsupported file. These tasks directly corresponded to the acceptance criteria for both features.

All three participants rated the Login and Access Library feature 5/5 for ease of use, clarity and confidence. 
The Upload Books feature also received positive feedback, with upload success scores of 5/5 from Participants 1 and 2 and 4/5 from Participant 3.

The Upload Books feature generated the most useful feedback. Participant 1 rated the upload process 4/5 and commented that the available genre selections felt limited. 
Participant 2 rated the upload process 3/5 and felt that manually entering a title before selecting a file was disconnected from the upload process. They suggested automatically populating information from the filename. 
Participants 1 and 2 also noted that previous success messages remained visible when attempting another upload, making it unclear whether the message related to the current or previous upload.

Based on the feedback, I would prioritise issues raised by multiple participants or those that directly affected usability. Upload success messages that remain visible between uploads would be addressed first, as two participants identified them and they could easily cause confusion. 
I would also add a "Forgot Password" option after Participant 2 specifically asked where this feature was located. Theme customisation and interface personalisation would also be considered because multiple participants suggested them.

Suggestions such as ISBN lookups and automatic metadata retrieval would not be prioritised immediately, as they introduce new functionality beyond the scope of the original requirements. They would instead be added to the project backlog.

One limitation of the test plan was that not every acceptance criterion could be tested equally. 
For example, redirecting unauthenticated users to the login page was difficult to evaluate because authentication was already required to access the upload feature.

Based on the feedback, these changes would likely improve the clarity and usability of both features. 
If I were to run another round of UAT, I would provide a wider variety of books and file types and include participants with less technical experience, as they may identify usability issues that more technical users overlook

---

# Final Reflection

### Biggest difference between design and implementation

The biggest difference between my original design and the actual implementation was how books were opened and read. 
Originally, I planned to render books directly in the app, allowing users to select text and customise the reading experience. However, once implementation began, I discovered that many PDF rendering solutions relied on native modules incompatible with Expo Go, which I used throughout development.

To work around this, I changed the design so the Django API uses PyMuPDF to convert PDF pages into images. The React Native application then displays those images using a FlatList. Although this was not my original design, it still met the requirement of allowing users to open and read books. 
This experience taught me that just because something seems like a good idea during the design phase does not mean it will be practical once implementation begins.

### What did the React Native client reveal about your API design?

Building the React Native client revealed that my API design worked well for authentication and managing books, but not for large file uploads. 
Sending complete book files to the API caused more issues than I expected, particularly with larger PDFs. Looking back, I think I focused too much on storing everything in the backend and not enough on how the mobile app would actually transfer those files. 
If I were redesigning it, I would strongly consider keeping books on the device and sending only metadata via the API.

### Single most significant improvement to your development process

The single most significant improvement I would make to my development process is to spend more time researching and planning before beginning implementation. 
Several of the issues I encountered, mainly around PDF rendering and file uploads, could have been identified earlier if I had spent more time investigating Expo Go's technical limitations and the project's requirements. 

Being unwell during the semester also affected my ability to follow the original timeline, making it harder to distribute work evenly across the planned sprints. 
Looking back, I would spend more time reviewing the project requirements, researching technical approaches and creating more realistic sprint plans. This would also have given me more time to implement automated API tests, which would have improved confidence in the backend functionality as the project grew.

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