import secrets

def random_hex_color():
    string = secrets.token_hex(3)
    return string

if __name__ == '__main__':
    print(random_hex_color())