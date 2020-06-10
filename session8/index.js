function wait(ms) {
    return new Promise(r => setTimeout(r,ms))
}
 async function main(){
     console.log('ONE');
     await wait(2000);
     console.log('TWO');
    
 }
 main();