a = int(input())
l=[int(x) for x in input().split()] 
for i in range(len(l)):
    if(i%2==0):
        print(l[i], end=" ")