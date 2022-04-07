const list1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,  
];

//CREATE AN OBJECT TO COUNT EACH NUMBER IN THE LIST

const list1count = {};

list1.map(
    function(element){
        if(list1count[element]){
            list1count[element] += 1;
        }else{
            list1count[element] = 1;
        }
        
    }
);

//FIND THE MOST REPEATED ELEMENT

//CONVERT THE OBJECT TO ARRAY
const listArray = Object.entries(list1count).sort(
    function(accumulated,newValue){
        return accumulated[1] - newValue[1];
    }
);

//SAVE THE MODE
const mode = listArray[listArray.length -1];



//METHOD CALCULATE MODE
function calculateMode(list){
    const listC = {};
    list.map(
        function(element){
            if(listC[element]){
                listC[element] += 1;
            }else{
                listC[element] = 1;
            }
        }
    );

    const Arr = Object.entries(listC).sort(
        function(val1,val2){
            return val1[1] - val2[1];
        }
    );
    return Arr[Arr.length -1];
}