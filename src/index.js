module.exports = function toReadable (number) {
  let s=Math.floor(number/100);
  let d=Math.floor((number%100)/10); 
  let e=Math.floor((number%100)%10);
  let stre;
  let strd;
  let strs;
  let result;
  if (e != 0 && d>1 || d==0){
    switch (e){
    case 1: stre='one';
    break;
    case 2: stre='two';
    break;
    case 3: stre='three';
    break;
    case 4: stre='four';
    break;
    case 5: stre='five';
    break;
    case 6: stre='six';
    break;
    case 7: stre='seven';
    break;
    case 8: stre='eight';
    break;
    case 9: stre='nine';
    break;
    }
  } else{
    stre='';
  }
  if (d==1){
    switch(e){
        case 1: strd='eleven';
        break;
        case 2: strd='twelve';
        break;
        case 3: strd='thirteen';
        break;
        case 4: strd='fourteen';
        break;
        case 5: strd='fifteen';
        break;
        case 6: strd='sixteen';
        break;
        case 7: strd='seventeen';
        break;
        case 8: strd='eighteen';
        break;
        case 9: strd='nineteen';
        break;
    }
    stre='';
  }
 if (d==0){
  stred='';
  }
  if (d==1 && e==0){
    strd='ten';
  }
  if (d>1){
    switch(d){
      
        case 2: strd='twenty';
        break;
        case 3: strd='thirty';
        break;
        case 4: strd='forty';
        break;
        case 5: strd='fifty';
        break;
        case 6: strd='sixty';
        break;
        case 7: strd='seventy';
        break;
        case 8: strd='eighty';
        break;
        case 9: strd='ninety';
        break;
    }
  }
if (s>=1){
    switch(s){
        case 1: strs='one hundred';
        break;
        case 2: strs='two hundred';
        break;
        case 3: strs='three hundred';
        break;
        case 4: strs='four hundred';
        break;
        case 5: strs='five hundred';
        break;
        case 6: strs='six hundred';
        break;
        case 7: strs='seven hundred';
        break;
        case 8: strs='eight hundred';
        break;
        case 9: strs='nine hundred';
        break;
        
    }
}

if (number==0){
  result='zero'
} else if (number<10){
  result=stre
 } else if(number<20){
  result=strd
 } else if (number<100 && e==0){
  result=strd
 } else if (number<100 && e!=0){
  result=strd+' '+stre
 } else if (d==0 && e==0){
  result=strs
 } else if (d!=0 && e==0){
  result=strs+' '+strd
 } else if (d==0 && e!=0){
  result=strs+' '+stre
 } else if (d==1){
  result=strs+' '+strd
 } else if (number>100 && e!=0 && d!=0){
  result=strs+' '+strd+' '+stre
 }

return result;
 
  
}
//let res=toReadable(439)
//console.log(res);



