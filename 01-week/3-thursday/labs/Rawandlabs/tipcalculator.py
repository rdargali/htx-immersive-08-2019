bill_amt = int((input)('What was the total bill amount?'))
service = (input)(f'How was the service? (good, fair, or bad)')
if service == 'good': 
    print (f'You should tip 20%')
    print ('Your total bill is int({bill_amt}*1.2))')
elif service == 'fair':
    print (f'You should tip 15%')
elif service == 'bad':
    print (f'You should tip 10%')
