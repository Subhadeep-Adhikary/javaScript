// switch(key){
//     case value:

//         break;
//     default:

//         break;
// }

const month=5
const segment=Math.floor(month/2);

switch(segment){
    case 1:
      console.log("This is probably winter")
      break;
    case 2:
        console.log("This is maybe Spring")
        break;
    case 3:
        console.log("This is maybe summer")
        break;
    case 4:
        console,log("It's maybe raining today")
        break;

    default:
        console.log("its maybe anything")
}