function findLogestWord(str){
    var words=str.split(" ");
    var longest="";
    for(word of words)
    {
        if(word.length>longest.length){
            longest=word;
        }
    }
    return longest.length;
}
console.log(findLogestWord("Iam very good girl in the world"));