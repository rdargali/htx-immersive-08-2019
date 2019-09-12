#2. Celsius to Fahrenheit conversion
#The formula to convert a temperature from Celsius to Fahrenheit is:
#F = (C * 9/5) + 32
#Write a function that takes a temperature in Celsius, 
#converts it Fahrenheit, and returns the value.

def celsiustofahrenheit(temp):
    far_temp = temp * 9/5 + 32 
    return (f'{temp} degrees is {far_temp} degrees celsius')

print (celsiustofahrenheit(10))


