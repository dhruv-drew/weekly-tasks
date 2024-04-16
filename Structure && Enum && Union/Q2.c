#include<stdio.h>

 struct student
    {
        int id;
        int name[100];
        int age;
        char role[100];
        char city[100];
        int experience;
        char company_name[100];
    }s1[100];


main(){
    
    int n;
    printf("Enter stdent number : ");
    scanf("%d",&n);


    for (int i = 0; i < n; i++)
    {
        printf("Enter ID : ");
        scanf("%d",&s1[i].id);
        
        printf("Enter name : ");
        scanf("%s",&s1[i].name);

        printf("Enter age : ");
        scanf("%d",&s1[i].age);

        printf("Enter role : ");
        scanf("%s",&s1[i].role);

        printf("Enter city name : ");
        scanf("%s",&s1[i].city);

        printf("Enter experience : ");
        scanf("%d",&s1[i].experience);

        printf("Enyter company name : ");
        scanf("%s",&s1[i].company_name);

    }


    for (int i = 0; i < n; i++)
    {
        printf("ID : %d\n",s1[i].id);
        printf("NAME : %s\n",s1[i].name);
        printf("AGE : %d\n",s1[i].age);
        printf("COURSE : %s\n",s1[i].role);
        printf("CITY : %s\n",s1[i].city);
        printf("STANDARD : %d\n",s1[i].experience);
        printf("SCHOOL : %s\n",s1[i].company_name);

    }
    
    
    
}