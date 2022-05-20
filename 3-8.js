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

Person1 = new Person("Ranjith","Kumar",25,['java','c#'],"30/07/1998",{city:"Chittoor",pincode:517002},"false","AnalystA4");
Person2 = new Person("Jeya","Mohan",36,[".ruby","c++"],"12/04/1999",{city:"Katpadi",pincode:600988},"true","AnalystA5");

print=function()       //printing the object using Global print method.
{
    console.log(Person1);
    console.log(Person2);
}();//function call
