#1 variant
x = [2, 4, 6, 2, 4, 7, 2, 9] 
x.remove(4)
x.remove(4)
print(x)

# 2 variant
x = [2, 4, 6, 2, 4, 7, 2, 9,] 
while (4) in x:
    x.remove(4)
print(x)

#3 varianti
Old_list = [2, 4, 6, 2, 4, 7, 2, 9,] 
New_list = []
for num in Old_list:
    if num != 4 :
        New_list.append(num)
print(New_list)



family = ["sofo", "temo", "gio", "dati"]
age = [38, 6, 14, 12]
full_sentence = "My mom's name is: {} and she is: {} years old,My 1st brother's name is: {} and he is: {} years old, My 2nd brother's name is: {} and he is: {} years old,  My name is: {} and I am: {} years old".format(
    family[0], age[0], family[1], age[1], family[2], age[2], family[3], age[3]
)

print(full_sentence)
print("my family now!!!!")



family_after_10years = ["sofo", "temo", "gio", "dati"]
age_after_10years = [10+38,10+6,10+14,10+12]
full_sentence = "My mom's name is: {} and she is: {} years old, My 1-st brother's name is: {} and he is: {} years old,My 2-nd brother's name is: {} and he is: {} years old,  My name is: {} and I am: {} years old".format(
    family_after_10years[0], age_after_10years[0], family_after_10years[1], age_after_10years[1], family_after_10years[2], age_after_10years[2], family_after_10years[3], age_after_10years[3]
)

print(full_sentence)
print("my family after 10 years")