function AlphabetSoup(str) { 
    str = str.toLowerCase();
    const arr = str.split(' ');
    let unicodeArr = new Array();
    for(let i = 0; i < str.length; i++){
      unicodeArr.push(str.charCodeAt(i)) 
    }
    for(let i = 0; i < str.length; i++){
      sorter(unicodeArr);
    };
    str = changeToLetter(unicodeArr);
  
    // code goes here  
    return str; 
  
  }
  function sorter(unicodeArr){
    for(let i = 0; i < unicodeArr.length; i++){
      if( unicodeArr[i] > unicodeArr[i+1]){
        const number = unicodeArr[i];
        unicodeArr[i] = unicodeArr[i+1];
        unicodeArr[i+1] = number;
        ;
      }
    }
  }
  function changeToLetter(unicodeArr){
    let arr = [];
    for(let i = 0; i<unicodeArr.length; i++){
      if(unicodeArr[i] !== 32 ){
         arr.push(String.fromCharCode(unicodeArr[i])) }
    }
    return arr.join('');
  }
  // keep this function call here 
  console.log(AlphabetSoup(readline()));