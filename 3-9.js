function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
Asif = new Person("Ranjith","Kumar",23,['java','c#'],"30/07/1998",{city:"Chittoor",pincode:517002},"false","AnalystA4");
Twinkle = new Person("RRK",22,["html","css"],"05/07/1999","false","JrAnalyst");


var RRK = Object.create(Ranjith); //inheriting the common properties/storing Akshay object in Twinkle
print = function()
{
    console.log(Arun);
    console.log(RRK.lastName);
    console.log(RRK.address);
    console.log(Ganesh.lastName);
    console.log(Ganesh.skills);
    console.log(Ganesh.address);
    console.log(Ganesh.firstName);
}();