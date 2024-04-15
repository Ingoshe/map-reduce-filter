let numbers = [1,2,3,4,5,12,15,20];

const manipulateArray = () => {
    const doubled = numbers.map((num)=>{
        return num * 2
    })
    console.log(doubled);

    const greaterThanTen = numbers.filter((num)=>{
        return num > 10
    })
    console.log(greaterThanTen);

    const sum = greaterThanTen.reduce((accumulator,currentValue) =>{

        return accumulator + currentValue
    },0);

    console.log(sum);
};
manipulateArray();

