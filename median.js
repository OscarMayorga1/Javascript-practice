const list1 = [
    100,
    200,
    20000,
    3000,
    300,
    500,
];


function isPair(num){
    if(num%2 === 0)
    {
        return true;
    }else{
        return false;
    }
}


function calculateMedian(list){
    let median;
    list.sort((a,b)=>a-b);
    
    const midList = parseInt(list.length/2);
    if(isPair(midList)){
        median = list[midList] + list[midList-1];
        median = median/2;
    }else{
        median = list[midList];
    }
    return median;
}