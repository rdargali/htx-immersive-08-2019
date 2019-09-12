'''# 1. Find the smallest number
Write a function smallest that accepts a List of numbers as an argument.
It should return the smallest number in the List.'''

test_list = [3, 9, 15, -435, 67, 4848]

def smallest_number_in_list(list_of_numbers):
    smallest_number = list_of_numbers[0]
    for number in list_of_numbers:
        if number <= smallest_number:
            smallest_number = number
    return smallest_number

print(smallest_number_in_list(test_list))



'''# 2. Find the largest number
Write a function largest that accepts a List of numbers as an argument.
It should return the largest number in the List.'''

test_list_two = [23, 444, -45, 392, 1005]

def biggest_number_in_list(list_of_numbers):
    biggest_number = list_of_numbers[0]
    for number in list_of_numbers:
        if number >= biggest_number:
            biggest_number = number
    return biggest_number

print(biggest_number_in_list(test_list_two))
            




'''# 3. Find the shortest String
Write a function shortest that accepts a List of Strings as an argument.
It should return the shortest String in the List.'''

list_of_strings_one = ['four', 'fifteen', 'there', 'science', 'is']

def shortest_string_in_list(list_of_strings):
    shortest_string = list_of_strings[0]
    for string in list_of_strings:
        if len(shortest_string) >= len(string):
            shortest_string = string
    return shortest_string

print(shortest_string_in_list(list_of_strings_one))

'''# 4. Find the longest String
Write a function longest that accepts a List of Strings as an argument.
It should return the longest String in the List.'''

list_of_strings_two = ['this', 'rawandrawandrawandrawandrawand', 'hasjhsdfgkhsdfkhsdfg', 'a lot', 'of', 'small', 'wordskjhgskfhd']

def longest_string_in_list(list_of_strings):
    longest_string = list_of_strings[0]
    for string in list_of_strings:
        if len(string) >= len(longest_string):
            longest_string = string 
    return longest_string

print(longest_string_in_list(list_of_strings_two))