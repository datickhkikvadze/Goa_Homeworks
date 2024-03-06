 #davaleba 1


user_score1 = float(input("enter score N1: "))
user_score2 = float(input("enter score N2: "))
user_score3 = float(input("enter score N3: "))
user_score4 = float(input("enter score N4: "))
avg_score = (user_score1 + user_score2 + user_score3 + user_score4) / 4
if avg_score>=9 and avg_score<=10: print("გილოცავ, მატრიცელო. შენი ქულაა: " +str(avg_score) + " შენ გადმოგეცა 300 ლარიანი ბანძი ტოსტერი, რასაც შეალიე შენიცხოვრების წლები")
elif avg_score <=5 and avg_score >= 0: print("შენი ქულაა: " + str(avg_score) + "გილოცავ გაექეცი მატრიცას")
elif avg_score >5 and avg_score <9: print("შენი ქულაა: " + str(avg_score) + " YOU ARE MID")
else: print("შენი ქულაა: " + str(avg_score) + " there is something wrong with you")



#davaleba 2

user_salary = float(input("how much is your salary?: "))
if user_salary > 10000:
    print("გოაში სწავლობდი?? რაღაც საეჭვო ხარ!!")
if user_salary >=1000 and user_salary <=10000:
    print("you mid!!")
if user_salary <1000:
    print("შემოსულიყავი გოაში, მატრიცელო!!!!")   





# მომხმარებელს შეეკითხეთ ხელფასი თუ 10000ზე მეტია, დაუპრინტეთ,
# გოა-ში სწავლობდი? თუ 1000----10000 -ია , დაუპრინტეთ you mid თუ 1000-ზე
# დაბალია, დაუპრინტეთ, შემოსულიყავი გოაში, მატრიცელო
