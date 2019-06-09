// adds/removes items to/from an array, and returns the removed item(s)
// array.splice(index, howmany, item1, ....., itemX)



Parameter				Description
index					Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
howmany					Optional. The number of items to be removed. If set to 0, no items will be removed
item1, ..., itemX		Optional. The new item(s) to be added to the array


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log("splice",fruits); //  ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]