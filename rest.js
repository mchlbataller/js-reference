// The rest parameter takes unlimited input and parses it into an array.
function echo(...args) {
    console.log(args);
    // outputs '[1,2,3,4,5]'

    // These are useful for taking sums of an unlimited value.
    console.log(args.reduce((acc, value) => acc + value));
}

echo(1,2,3,4,5);