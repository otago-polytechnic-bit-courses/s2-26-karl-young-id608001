The UAT scenarios were designed directly from the acceptance criteria defined during Phase 1 for the Login and Access Library and Upload Books features. Rather than giving participants step-by-step instructions, the scenarios were written as realistic tasks based on the original acceptance criteria and how users would use the app. This allowed participants to interact with the application naturally and helped identify areas of confusion that may not have been found through functional testing alone.

The scenarios mapped well to the acceptance criteria because each task had a clear expected outcome that could be verified during testing. For example, participants were asked to sign in and access their books, attempt to sign in using incorrect account details, add a book to their library and attempt to upload an unsupported file. These tasks directly corresponded to the acceptance criteria for both features.

All three participants rated the Login and Access Library feature 5/5 for ease of use, clarity and confidence that they had accessed the correct library. The Upload Books feature also received generally positive feedback, with upload success scores of 5/5 from Participants 1 and 2 and 4/5 from Participant 3.

The Upload Books feature generated the most useful feedback. While all participants were able to upload a book successfully, some found the process less intuitive than other parts of the application. 
Participant 1 rated the upload process 4/5 and commented that the available genre selections felt limited. 
Participant 2 rated the upload process 3/5 and suggested that manually entering a title before selecting a file felt disconnected from the actual upload process. 
This participant also suggested automatically populating information from the filename to reduce manual data entry. 
Participants 1 and 2 also noted that previous success messages remained visible when attempting another upload. This made it unclear whether the message related to the current upload or a previous upload.

Based on the feedback received, I would prioritise changes identified by multiple participants or those that directly affected usability. 
The issue of upload success messages remaining visible between uploads would be addressed first, as two participants independently raised it and it could easily cause confusion during the upload process.

I would also add a "Forgot Password" option after Participant 2 specifically asked where this feature was located. Without it, users who forget their password may be unable to access the application. 
While it was not part of the original acceptance criteria, account recovery is an important usability feature for any application that requires authentication.
Theme customisation and interface personalisation would also be considered for future development, as multiple participants raised these suggestions and could improve the overall user experience.

Suggestions such as ISBN lookups and automatic metadata retrieval would not be prioritised immediately. While these features could improve the app in the future, they introduce new functionality beyond the scope of the original requirements. They would therefore be added to the project backlog for future consideration.

One limitation of the test plan was that not every acceptance criterion could be tested equally. For example, the requirement to redirect users to the login page when not authenticated was difficult to evaluate through user testing because the application already requires authentication to access the upload feature. This criterion was therefore more suited to functional testing than UAT.

Based on the feedback, these changes would likely improve the clarity and usability of both the Upload Books and Login features. Reducing confusion around upload feedback and improving account recovery would directly address issues raised during testing. 
A future round of testing would then be used to re-verify the affected acceptance criteria and confirm that the identified usability issues had been resolved.
If I were to run another round of UAT, I would provide participants with a wider variety of books and file types to test with. I would also include participants with less technical experience, as they may identify usability issues that more technical users overlook.