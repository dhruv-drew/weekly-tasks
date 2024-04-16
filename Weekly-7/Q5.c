#include<stdio.h>
main(){
    int mark;
    printf("Enter your marks: ");
    scanf("%d",&mark);

    if (mark >= 40)
    {
        printf("Congratulations you are pass.");
    }
    else{
        printf("You are failed.");
    }
}