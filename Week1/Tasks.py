# Task 1
# "CityFit has 6 classes"

def __init__ (self, name, class_count):
  self.name = name
  self.class_count = class_count


def studio_summary(name, class_count):
  
  return f"{name} has {class_count} classes"


print(studio_summary("Teams", 7))
print(studio_summary("CityFit", 22))


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

# Just creating a file with open and x  
anotherFile = open("anotherFile.txt", "x")