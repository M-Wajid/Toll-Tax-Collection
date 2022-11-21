arr = [
    {
        "id": 234,
        "number_plate":"abc123",
        "station":"pims" 
    },
    {
        "id": 567,
        "number_plate":"123abc",
        "station":"faizabad" 
    }
];


var index = arr.findIndex(item => item.number_plate === "123abc");

console.log(index);  // Prints: 1
console.log(arr[index].station);  // Prints: Peter