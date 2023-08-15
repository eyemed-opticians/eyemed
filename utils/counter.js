function copunter(){

    let count = 0;

    console.log(`Starting counter with the initial count ${count}`)

    const limit = 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;

    while (count < limit){
        console.log(`Count number : ${count + 1}, count value : ${count}`);
        count += 1
    } 
    
    if (count = limit) {
        console.log('Ended count. with vales : ')
        console.log(`Counter number : ${count + 1}`)
        console.log(`Count value : ${count}`);
        console.log(`Count limit : ${limit}`)
    }


} 

copunter();