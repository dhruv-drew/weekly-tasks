#include<stdio.h>

 struct student
    {
        int id;
        int name[100];
        int age;
        char course[100];
        char city[100];
        int standard;
        char school[100];
    }s1[100];


main(){
    
    int n;
    printf("Enter stdent number : ");
    scanf("%d",&n);


    for (int i = 0; i < n; i++)
    {
        printf("Enter student ID : ");
        scanf("%d",&s1[i].id);
        
        printf("Enter student name : ");
        scanf("%s",&s1[i].name);

        printf("Enter student age : ");
        scanf("%d",&s1[i].age);

        printf("Enter student course : ");
        scanf("%s",&s1[i].course);

        printf("Enter student city name : ");
        scanf("%s",&s1[i].city);

        printf("Enter student standard : ");
        scanf("%d",&s1[i].standard);

        printf("Enyter student school : ");
        scanf("%s",&s1[i].school);

    }


    for (int i = 0; i < n; i++)
    {
        printf("ID : %d\n",s1[i].id);
        printf("NAME : %s\n",s1[i].name);
        printf("AGE : %d\n",s1[i].age);
        printf("COURSE : %s\n",s1[i].course);
        printf("CITY : %s\n",s1[i].city);
        printf("STANDARD : %d\n",s1[i].standard);
        printf("SCHOOL : %s\n",s1[i].school);

    }
    
    
    
}