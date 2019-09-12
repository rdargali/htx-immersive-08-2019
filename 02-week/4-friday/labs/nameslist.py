# Given a list of names, create a function to check the list for duplicates. 
# Return a new list with those names removed.

nameslist = ["Alex", "John", "Mary", "Steve", "John", "Steve"]

def remove_duplicates(list):    
    newlist = []
    for name in list:
        if name not in list:
            newlist.append(name)
    return newlist

print (remove_duplicates(nameslist))
