#include <stdio.h>
int main()
{

    // part 1 taking user input for row and col
    int row, col;
    scanf("%d %d", &row, &col);
    // printf("%d %d\n",row,col);

    // making a 2d array name Arr
    int marks[row][col];
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            scanf("%d", &marks[i][j]);
        }
    }

    // printing the 2d array
    //  for(int i=0;i<row;i++){
    //      for(int j =0;j<col;j++){
    //          printf("%d ",Arr[i][j]);
    //      }
    //      printf("\n");
    //  }

    // sum of each row
    int rowSum[row];
    for (int i = 0; i < row; i++)
    {
        int sum = 0;
        for (int j = 0; j < col; j++)
            sum += marks[i][j];
        rowSum[i] = sum;
    }
  
    // sum of each col
    int colSum[col];
    for (int i = 0; i < col; i++)
    {
        int sum = 0;
        for (int j = 0; j < row; j++) 
            sum += marks[j][i];
        colSum[i] = sum;
    }

    printf("output :\n");
    printf("row sum   : ");
    for (int i = 0; i < row; i++)
    {
        printf("%d ", rowSum[i]);
    }
    printf("\nColumn sum : ");
    for (int i = 0; i < col; i++)
    {
        printf("%d ", colSum[i]);
    }
    return 0;
}


// input 
// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12

// output :
// row sum   : 10 26 42 
// Column sum : 15 18 21 24 


