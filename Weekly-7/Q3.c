#include <stdio.h>
main()
{
    int num_1, num_2, num_3;
    printf("Enter a 1st number: ",num_1);
    scanf("%d",&num_1);
    printf("Enter a 2st number: ",num_2);
    scanf("%d",&num_2);
    printf("Enter a 3st number: ",num_3);
    scanf("%d",&num_3);

    if (num_1 > num_2)
    {
        if (num_1 > num_3)
        {
            printf("%d is the largest number.",num_1);
        }
        else{

            printf("%d is the largest number.",num_3);
        }
        
    }
    else if (num_2 > num_3)
    {
        printf("%d is the largest number.",num_2);
    }
    else{
        printf("%d is the largest number.",num_3);

    }
    
    
}