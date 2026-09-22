# Diagnosis

I have reviewed the code and identified the following issues:


## 1
No serializers 

Location: sheds/views.py line 10 where view logic starts.

There is no serializer to translate between the database and the outside world; use the Adapter pattern with a data transfer object (serializer) to reduce the amount of code needed to read the data for every JSON transfer.
Instead of using the model directly in the views, using a serializer would allow better separation and make the code easier to understand and maintain.

This violates the separation of concerns principle, as the views are doing too much and should be separated into different layers.

The severity is **medium** because it will function, but makes future changes more error-prone and reduces maintainability. 


## 2
Admin file 

Location: sheds/admin.py from line 4 onwards 

The admin file is basic and could be improved to use the Django admin interface to manage the data. This could be done by adding more fields to the admin interface, such as search fields, list filters, and ordering options.

This violates the Django admin customisation pattern, as the admin page could be improved to provide more functionality and make data management easier.

This is a **low severity** issue, as the app will function as intended without the additional functionality of the admin page. But it makes it harder to manage the data in the long run.


## 3
The Views

Location: sheds/views.py file, from line 10 onwards where view logic starts.

The views use the explicit version of views, which goes against the DRY principle by using functions over classes. This could be improved by refactoring the views to use viewsets, which reduce the amount of code needed to read data. 

The principle being violated is DRY (Don't Repeat Yourself), as using explicit view versions adds more code than necessary, making it harder to maintain. 

The severity is **medium** as it makes the code harder to maintain and understand, but it will function as intended.


## 4
Helper file

Location: sheds/helper.py file 1-19

The helper file (helper.py) seems to be unused dead code. It has functions to extract attributes into a dict, build XML strings and build a CSV row, which could have been used as a data transfer object but are not.

The principles violated are YAGNI (You Aren't Gonna Need It) and KISS (Keep It Simple), as they add unnecessary complexity to the codebase.

The severity is **low** as it's unused code that does not affect the app's functionality and could be removed to reduce confusion and improve maintainability.


## 5
ENV file missing

Location: toolshed_backend/settings.py on lines 23 - 28

No env file, which means all the app's secrets are exposed on GitHub and the internet. Allowed hosts are set in the file to all, which means the site is open to attacks. This is a security risk and should be fixed by using an env file to store secrets and setting allowed hosts in the settings file.
This violates the principle of least privilege and exposes secrets to the internet.

This has a **high severity** because it is a security risk and could leave the app vulnerable to attacks. 


## 6
The sheds/views.py file, from line 10 onward

Violates the single responsibility principle by currently being responsible for validation, saving, and formatting the response.
This could cause issues if a new validation or a field changes, then you would need to refactor most of the views, and the serializer should be validating, but there is none. 
This is too many jobs for a single file and should be split into a viewset and a serializer. 

This has a **high severity** because the code would be hard to maintain if the validation rules are not followed or if a field changes; large parts of the code would need to change, increasing the risk of errors or bugs.


## 7
Location: toolshed_backend/settings.py Under line 54

Without CORS_ALLOWED_ORIGINS some browsers may block requests to the backend preventing the app from working from different origins 

With this missing it might mess with having a secure api design. 

This is a **medium severity** as the app will still function but could break depending on the setup.

## 8
Auth

Location: sheds/views.py file lines 45-48, 94-97, 123-126.

The same auth check appears in 3 different functions throughout the views. This could be split into a single function and called instead, or changed to implement IsAuthenticated using the rest_framework's permissions.

This violates DRY and misses the Strategy pattern, since the auth logic should be interchangeable rather than copied and pasted. and ignoring the main benefit of DRF's permission system. 

This is **medium severity** since the app still works but has duplicated the auth code, which requires changes in multiple places and leaves room for errors. 

## 9
Gitignore file
Location: /.gitignore

The .gitignore file is missing. This would be a security issue, as any secrets held in an env file would be available on GitHub and the internet. This would violate the principle of least privilege, as API keys, passwords, and other secrets would be available to the public.

This is a **high severity** issue, as it is a security risk that would expose the entire app, user accounts, and any data.