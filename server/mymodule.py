import sys

def add_two_numbers(num1, num2):
    sum = num1 + num2
    print(sum)
    return sum

if __name__ == "__main__":
    if len(sys.argv) == 3:
        num1 = int(sys.argv[1])
        num2 = int(sys.argv[2])
        add_two_numbers(num1, num2)
    else:
        print("Please provide two integers as command line arguments.")