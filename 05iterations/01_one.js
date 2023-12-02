//for

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        // console.log('5 is here')
    }
    // console.log(i)
}

for (let i = 1; i <= 15; i++) {
    // console.log(`table of ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`)
    }
    
}

let myArray = ["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
    
}

//breake //continue

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
        // console.log('5 is here')
        break;
    }
    // console.log(i)
    
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
        console.log('5 is here')
        continue;
    }
    console.log(i)
    
}