// enum - store constants; duplicate value is not allowed here
// enum types: numeric, string, hetergenous
// numeric enum
var RequestType;
(function (RequestType) {
    //ReadData = 1,
    RequestType[RequestType["ReadData"] = 0] = "ReadData";
    RequestType[RequestType["SaveData"] = 1] = "SaveData";
    RequestType[RequestType["DeleteData"] = 2] = "DeleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType[1]);
console.log(RequestType.ReadData);
console.log(RequestType['DeleteData']);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["Fruite"] = "Mango";
    RequestType2["Vagetables"] = "Tomato";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2.Vagetables);
// hetergenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "READ_DATA";
    RequestType3["deleteData"] = "DELETE_DATA";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3.id);
