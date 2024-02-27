let admin:string[] = ['Ahmed','Usman','Zahid','Yasir','Bilal','admin']

for(let i=0; i<admin.length;i++ ){

    if(admin[i] === 'admin'){
        console.log(`Hello ${admin[i]}, would you like to see a status report?`);

    }  else{
        console.log(`welcom to sign in ${admin[i]}.`)

    }
    
}
    
    
