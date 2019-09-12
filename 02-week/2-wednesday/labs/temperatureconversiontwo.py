#Fahrenheit to Celsius
#The formula to convert a temperature from Fahrenheit to Celsius is:
#C = (F - 32) * 5/9
#Write a function that takes a temperature in Fahrenheit, converts it to Celsius,
#and returns the value.

def fahrtocelc (temp):
    new_temp = ((temp - 32) * (5/9))
    print (f'{temp} degrees fahrenheit is {new_temp} degrees celsius')

fahrtocelc(50)
