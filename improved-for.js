let arr = [1,2,3,4,5,5,1,2,3,1,2,4];

// NOT a substitute to for loop.
for(let entry in arr) {
    console.log(entry);
    /* Outputs 
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    */
}