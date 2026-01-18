// enum - store constants; duplicate value is not allowed here

// enum types: numeric, string, hetergenous

// numeric enum
enum RequestType {
    //ReadData = 1,
    ReadData,
    SaveData ,
    DeleteData,
}
console.log(RequestType)
console.log(RequestType[1])
console.log(RequestType.ReadData)
console.log(RequestType['DeleteData'])

// string enum
enum RequestType2 {
    Fruite = 'Mango',
    Vagetables = 'Tomato'
}
console.log(RequestType2.Vagetables)

// hetergenous enum
enum RequestType3 {
    readData = 'READ_DATA',
    deleteData = 'DELETE_DATA',
    id = 101
}
console.log(RequestType3.id)