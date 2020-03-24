let arr = [1,2,3,4,5];

function iterate(arg, action) {
    for(let i = 1; i <= arg.length; i++) {
        action(i);
    }
}

iterate(arr, i => console.log(i));