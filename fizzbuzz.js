for(let i = 1; i < 102; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz')
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0){
        console.log('buzz');
    } else {
        console.log(i);
    }
}