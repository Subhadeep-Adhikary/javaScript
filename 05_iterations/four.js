const myobj={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"Swift by apple"
}

for (const key in myobj) {
    console.log(key,"is for",myobj[key]); 
}

const pograming=["js","rb","cpp","py","java"]

for (const key in pograming) {
    console.log(key," is index of ",pograming[key]);
}