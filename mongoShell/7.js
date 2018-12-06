function GetRandomNum(min,max){
    let range = max-min;   
    let rand = Math.random(); 
    return (min + Math.round(rand *range)); 
}
//console.log(GetRandomNum(10000,99999));

function GetRadomUserName(min,max){
    let tempStringArray= "123456789qwertyuiopasdfghjklzxcvbnm".split("");
    let outPuttext = ""; 
   
    for(let i=1 ;i<GetRandomNum(min,max);i++){
        
        outPuttext=outPuttext+tempStringArray[GetRandomNum(0,tempStringArray.length)]
    }
    return outPuttext;
}
// console.log(GetRadomUserName(7,16))
let db=connect('test');

let tempInfo=[];
let startTime=(new Date()).getTime()
for(let i=0;i<=9000000;i++){
    tempInfo.push({
        username:GetRadomUserName(8,17),
        regedittime:new Date(),
        random:GetRandomNum(10000,999999),
    })
}

db.test.insert(tempInfo)
let runTime=(new Date()).getTime()-startTime;
print('it takes '+runTime+'ms');