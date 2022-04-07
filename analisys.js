const salaryList = colombia.map(
    function(person){
        return person.salary;
    }
);

const sortedSalaries = salaryList.sort(
  function (salaryA,salaryB){
      return(salaryA-salaryB);
  }  
);

function isPair(number){
    return number%2 === 0;
}

function medianSalary(list){
    const half = parseInt(list.length/2);
    if(isPair(half)){
        const halfP1 = list[half];
        const halfP2 = list[half-1];
        const median = halfP1 + halfP2;
        median = median /2;
        return median;


    }else{
        const halfP = list[half];
        return halfP;
    }

}

const globalMedian = medianSalary(salaryList);


//top 10%
const spliceStart = (sortedSalaries.length * 90)/100;
const spliceCount = sortedSalaries.length - spliceStart;

const salaryTop10 = sortedSalaries.slice(
    spliceStart,
    spliceCount,
);

const top10Median = medianSalary(salaryTop10);
console.log({
    globalMedian,
    top10Median,
});