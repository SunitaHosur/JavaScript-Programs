function largestNumberArray(arr){
    var maximum=[];
    for(var i=0; i<arr.length; i++)
    {
        var tempmax=arr[i][0];
        for(var j=0; j<arr[i].length; j++)
        {
            var currentElement=arr[i][j];
            if(currentElement>=tempmax)
            {
               tempmax=currentElement; 
            }

        }
        maximum.push(tempmax);
    }
    return maximum;
}
console.log(largestNumberArray([[4,5,6,7],[44,55,66,77],[48,54,62,72],
    [84,85,86,87],]));