const obj = {
    name  :"Bikash",
    age : "22",
    "place" : "varanasi",
    myname : function(){
        console.log(this.name)   //this will refer to obj;
    }
}

console.log(obj);
console.log(obj.place);
obj.myname();

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));