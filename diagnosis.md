# Diagnosis

# 1
No serializers 
There is no serializer to translate between the database and the outside world.
by using the Adapter pattern with a data transfer object (serializer) to reduce the amount of code needed to read the data for every JSON transfer.


# 2
Admin file 
no classes in here 
The admin is basic it could have more options like filtering search fields, inline adding of classes eg tabularinline


# 3
The Views
In The views.py file From line 10 onwards
The views are using the explicit version of views which go against DRY principle by using functions over classes. This could be improved by refactoring the views to use viewsets.


# 4
Helper file
The helper file (helper.py) seems to be unused dead code. It has functions to extract attributes into a dict, build xml strings and build a CSV row cold have been used as a data transfer object.


# 5
No env file which means all the secrets in the app eg line 23 of the settings file is exposed to github. 


# 6



the location, as a file and approximate line;
the problem, in one or two sentences;
the principle or pattern it violates or is missing; and
a severity (High / Medium / Low) with a one-line reason — severity means maintainability impact, not difficulty to fix.


Describing symptoms rather than causes will score in the lower band. "The view is messy" is a symptom; "the view validates, saves and formats the response, so three unrelated requirements would each send you to the same method" is a diagnosis.