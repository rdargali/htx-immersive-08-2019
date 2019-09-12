testline = (input('Say a word'))

freq = {}

for letter in testline:
    if letter in freq:
        freq[letter] += 1
    else: 
        freq [letter] = 1

print (freq)