alert(null === undefined); // false
alert(0 == false); // true
alert("" == false); // true

// Strict equality
alert(null == undefined); // true
alert(0 === false); // false, because the types are different
alert(null === undefined); // false

// strange results
alert(null > 0); // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true

// an incomparable undefined
alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)
