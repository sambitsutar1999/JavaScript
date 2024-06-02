const movements = [200,-450,400,3000,-650,-130,70,1300];
const eurToUsd = 1.1;

const totalDepositsUsd = movents.filter((mov)=> {
    return mov > 0
})
.map((mov)=> {

    return mov * eurToUsd
})
.reduce((acc,mov)=> {
    return acc + mov
},0);

console.log(totalDepositsUsd);
