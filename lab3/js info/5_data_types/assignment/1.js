let user = {
    name_: "John",
    years: 30
  };
  
  let {name_, years: age, isAdmin = false} = user;
  
  alert( name_); // John
  alert( age ); // 30
  alert( isAdmin ); // false