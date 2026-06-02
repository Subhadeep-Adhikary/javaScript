const coding=["js",'Ruby',"Java","Cpp","python"]
coding.forEach(i => {
    console.log(i)
});

function printme(item){
    console.log(item)
}
// coding.forEach(printme);

coding.forEach((item,index,array)=>
{
    console.log(item,index,array)
})
const mycoding=[
    {
        languagename:"javaScript",
        languagefile:"javaScript.txt"
    },
    {
        languagename:"java",
        languagefile:"java.txt"
    },
    {
        languagename:"Cpp",
        languagefile:"Cpp.txt"
    }
]
mycoding.forEach(element => {
    console.log(element.languagename)
});