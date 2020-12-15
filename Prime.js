function prime(n)
{
        for(var x=2; x<n; x++)
        {
            if(n%x===0){
                return false;
            }
        }
        return n>1;
}

console.log(prime(1));