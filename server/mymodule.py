import sys

if len(sys.argv) != 3:
    print("Error: Expected two integer arguments")
    sys.exit(1)

try:
    num1 = int(sys.argv[1])
    num2 = int(sys.argv[2])
except ValueError:
    print("Error: Expected integer arguments")
    sys.exit(1)

result = num1 + num2
print(result)
