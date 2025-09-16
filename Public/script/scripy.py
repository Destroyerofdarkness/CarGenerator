import random

def getCar():
    Cars = ["KIA", "Toyota", "Lamborgini"]
    car = random.choice(Cars)
    Randomplate = str(random.randint(1000, 9999))
    Licenseplate = "DB" + Randomplate
    seats = random.randint(4, 6)
    print("Your car is ",car )
    print("Your license plate is", Licenseplate)
    print("There is", seats, "seats")
getCar()