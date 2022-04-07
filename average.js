const list1 = [
    100,
    200,
    300,
    500,
];


function calculateAverage(list){
    let sumlist =0;
    // for(let i=0;i<list.length;i++){
    //     sumlist+=list[i];
    // }

    sumlist = list.reduce(
        function (acumulate = 0, newElement){
            return acumulate + newElement;
        }
    )
    const averageList = sumlist/list.length;

    return averageList;
}