function addTwoDigits(n) {
  //create an output array
    var sum = 0;
  //make number into string
    var nums = n.toString();
  //loop through string and add each digit to the array
    for(var i = 0; i < nums.length; i++) {
        sum += parseInt(nums[i]);
    }
//add array num 0 and array num 1
    return sum;

}

n = 29;
console.log(addTwoDigits(n));

n = 48;
console.log(addTwoDigits(n));
