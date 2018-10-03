import random

def code_generator(size=6, chars='abcdefghijklmnopqrstuvwxyz'):
    new_code = ''
    for _ in range(size):
        new_code += random.choice(chars)
    return new_code
    
'REFACTORED'
def code_generator(size=6, chars='abcdefghijklmnopqrstuvwxyz'):
    return ''.join(random.choice(chars) for _ in range(size))
