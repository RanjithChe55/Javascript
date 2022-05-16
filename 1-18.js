const arr = "Csharp is best";
const aaa= arr.split(" ");
for (i =0 ;i<aaa.length;i++)
{
    const result = aaa[i]
    const res=result.slice(1).concat(result.slice(0,1))
    const final = res + "ra" ;
    console.log(final)
}