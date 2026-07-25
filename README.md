Karl Young - karl-young

**Task 1**
A screenshot of the summary functions.

<img src="./Screenshots/Task1.png" alt="Screenshot of the summary functions" width="400"/>

---

**Task 2**
A video of the with Context manager
The code for the video:
```
# Task 2
print("\nTask 2")
# using with -- with is a context manager that automatically handles opening and closing files.
# using with closes the file automatically after the code has run.
# by using 2 methods behind the scene unlike using open by itself which needs you to close the file manually with close.

with open("notes.txt", "w") as file:
    
    file.write("Hello, file!")

with open("notes.txt", "a") as file:
    file.write("\nAdding some more text to the file.")

with open("notes.txt", "r") as file:
    content = file.read()
    print(content)


someText = "This is some text that will be added to the new.txt file."
someMoreText = "This is some more text."


print("\nnew file")
# Creating a new file called new.txt and writing some text to it
with open("new.txt", "w") as file:
   file.write("This is a new file created using Python.")
   file.write("\n" + someText)

# Appending some text to the new.txt file
with open("new.txt", "a") as file:
   file.write("\n" + someMoreText)

# Reading the content of the new.txt file
with open("new.txt", "r") as file:
    content = file.read()
    print(content)

print("\nlooping through the lines of the file")

# looping through the lines of the file
with open("new.txt", "r") as file:
    for line in file:
        print(line)
```

[Link to the video](https://www.youtube.com/watch?v=NS7Ruf9UTPs)

---

**Task 3**

A screenshot of the welcome function and the output in the console with venv.
<img src="./Screenshots/Task3Welcome.png" alt="Screenshot of the welcome function" width="600"/>

---

**Module 2**

**Task 3**

I opened the Django admin and when to the studio section. then used the search bar to search for Andersons Bay which worked because i added the studio_suburb to the search_fields in my ClassAdmin 
the admin search filtered the list and only showed the classes with the studio in Andersons Bay.

<img src="./Screenshots/FilteredAdmin.png" alt="Screenshot of the admin search" width="600"/>

---

