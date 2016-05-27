
from time import gmtime, strftime

def workWithString(name):
    upper = name.upper()
    length = len(name)
    print("- WORK WITH STRING - " + name * 3)
    print(upper)
    print(length)

def workWithNumber(numbers):
    print('- WORK WITH NUMBERS')
    for number in numbers:
        print(number)
        if number >= 0:
            print("--positive val")
        else:
            print("--negative val")

def addItemToDictionary(key,value):
    dictionaryExample = {'name': 'Olia', 'country': 'Ukraine', 'favorite_numbers': [90, 60, 90]}
    dictionaryExample[key] = value
    print('- WORK WITH DICTIONARY')
    print(dictionaryExample)

def workWithFor():
    for x in range(0, 3):
        print("We're in for ")

def workWithWhile():
    x = 1
    while (x < 4):
        print("Were in while")
        x += 1

def showBasicType():
    text = "Its a text"
    number = 3
    bool = True
    date = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())
    print(text)
    print(number)
    print(bool)
    print(date)

def hi(name):
    print('Hi ' + name + '!' + ' Lets show you a few example of Python code')

def init():
    hi('Victor')
    workWithString("Igor")
    workWithNumber([1, 5, 4, -3])
    addItemToDictionary('new', 'child')
    workWithFor()
    workWithWhile()
    showBasicType()
init()