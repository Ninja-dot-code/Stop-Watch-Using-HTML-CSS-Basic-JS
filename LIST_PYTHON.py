mylist = ['lemon',"tumro","tergut","chaicode"]
mylist[2:4] = ["yalaya urkoo","green tea","yellow tea"]
print(mylist[1:2])
print(mylist)
# the common methond to append any element in your desired place is .insert method 
mylist.insert(4,"teachai")
# .append method is to add any element in last of the list 
#.pop method is used to eliminate any element from the last of the list 
#we can append multiple element by inserting [inital-index:final-inital]

print(mylist)

newlist = ['sub1','sub2','sub3','sub4','sub5']



newlist_copy = newlist.copy()
newlist_same = newlist
newlist.append("insert")

print(newlist_copy)
print(newlist)
print(newlist_same)

# we can take multiple input using loop inside list method 
#students_names = input("enter the name of ten students",[x for x in range(10)])

students_names = [input(f"Enter name of student {i+1}: ") for i in range(10) ]
print(students_names)