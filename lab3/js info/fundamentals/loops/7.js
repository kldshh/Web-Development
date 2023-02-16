let n = 10;

function1:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue function1; 
  }

  alert( i ); // a prime
}