# 1 - Crea un programa que pida dos número enteros al usuario y diga si alguno de ellos es múltiplo del otro.
print("\n - - - - - - - - - - - - EJERCICIO 1 - - - - - - - - - - - - ")

num1 = int(input("Ingrese un numero: "))
num2 = int(input("Ingrese otro numero: "))

if num1 % num2 == 0:
    print("Son multiplo")
else:
    print("No son multiplo")

#2 - Crear una función que calcule la temperatura media de un día a partir de la temperatura máxima y mínima.
print("\n - - - - - - - - - - - - EJERCICIO 2 - - - - - - - - - - - - ")

tempMax = 20
tempMin = 3

def tempMedia(max, min):
    print(f"La temperatura media de {max} grados y {min} grados es {(max+min)/2} grados \n")

tempMedia(tempMax, tempMin)

#3 - Crear un programa principal, que utilizando la función anterior, vaya pidiendo la temperatura máxima y mínima
# de cada día y vaya mostrando la media. El programa pedirá el número de días que se van a introducir.
print("\n - - - - - - - - - - - - EJERCICIO 3 - - - - - - - - - - - - ")

cantDias = int(input("Ingrese la cantidad de dias a analizar: "))

for dia in range(cantDias):
    max = int(input("Ingrese temperatura maxima: "))
    min = int(input("Ingrese temperatura minima: "))
    tempMedia(max, min)

#4 - Crea una función “calcularMaxMin” que recibe una lista con valores numéricos y devuelve el valor máximo y el mínimo.
print("\n - - - - - - - - - - - - EJERCICIO 4 - - - - - - - - - - - - ")

numeros = [2, 4, 7, 9, 20, 43, 1, 90, 3, 54]

def calcularMaxMin(listaNum):
    print(f"{max(listaNum)} es el maximo") 
    print(f"{min(listaNum)} es el minimo")

calcularMaxMin(numeros)

#6 - Diseñar una función que calcule el área y el perímetro de una circunferencia.
print("\n - - - - - - - - - - - - EJERCICIO 6 - - - - - - - - - - - - ")
import math #agrego libreria math
from math import pi

def areaPerim(radio):
    area = pi * pow(radio, 2)
    perim = radio * 2 * pi 
    #round(decimalNumber, significantDigits)
    print(f"El area es {round(area, 2)}")
    print(f"El perimetro es {round(perim, 2)}")

areaPerim(3) 

#7 - Crear una subrutina llamada “Login”, que recibe un nombre de usuario y una contraseña y te devuelve Verdadero 
# si el nombre de usuario es “usuario1” y la contraseña es “asdasd”.
print("\n - - - - - - - - - - - - EJERCICIO 7 - - - - - - - - - - - - ")

user = input("Ingrese su nombre de usuario: ")
password = input("Ingrese su contrasena: ")

def login(usuario, contra):
    if usuario == "usuario1" and contra == "asdasd":
        return True
    else:
        return False

print(login(user, password))

#8 - Crear un programa principal donde se pida un nombre de usuario y una contraseña y se intente hacer login, 
# solamente tenemos tres oportunidades para intentarlo.
print("\n - - - - - - - - - - - - EJERCICIO 8 - - - - - - - - - - - - ")

def login3tries():
    tries = 1;
    condition = False;
    while tries <= 3 and condition == False:
        user = input("Ingrese su nombre de usuario: ")
        password = input("Ingrese su contrasena: ")
        condition = login(user, password)
        #caso True
        if (condition == True):
            print("Ingresaste sesion correctamente")
        #caso False
        if (condition == False):
            print("Intente de nuevo")
            tries = tries + 1
        
        if (tries == 3):
            print("Bloqueste tu cuenta bolu")


login3tries()

#9 - Crear una función que permita calcular el factorial de un número.
print("\n - - - - - - - - - - - - EJERCICIO 9 - - - - - - - - - - - - ")

def factorial(num):
    factorial = 1
    for number in range(num, 1, -1): #range(start, stop, step)
        factorial = factorial*number
    print(f"El factorial de {num} es {factorial}")

factorial(3) #6
factorial(6) #720