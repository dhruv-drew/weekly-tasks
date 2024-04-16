#include<stdio.h>
main(){
    int n;
    printf("Enter an number: ");
    scanf("%d",&n);

    if (n % 2 == 0)
    {
        printf("%d is a even number.",n);
    }
    else{
        printf("%d is a odd number.",n);
    }
    
}