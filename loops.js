function forLoop(array){
  for (var i = 0; i <25; i++){
    if (i === 1){
      array.push(`"I am 1 strange loop."`);
    }
    else{
      array.push(`"I am ${i} srtange loops"`);
    }
}
return array;
}

function whileLoop(a){
  while ( a > 0){
    console.log(--a)
  }
  while(a === 0){
    return 'done'
  }
}

function doWhileLoop(array){
  
}