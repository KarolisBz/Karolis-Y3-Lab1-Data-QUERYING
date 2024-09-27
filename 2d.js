const ages = [25, 31, 42, 77];
let doubledNums = ages.map(
    (x) => {
        // less than 70 is *2
        if (x < 70) {
            return(x * 2)
        }
        // else don't multiply number
        else {
        return x;
        }
    }
)

console.log(doubledNums);