
for (let i =1; i<=100; i++){

//*Formula fizz
     if (i % 3 === 0){
        console.log('Fizz');

    }
   
//*Formula Buzz      
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
 //* Formula FizzBuzz 
    else    if (i % 15 === 0){
        console.log('FizzBuzz');
    }
}