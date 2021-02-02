// Code your solutions in this file

function writeCards(a, event){
    for(let i=0; i<a.length; i++) {
        a[i] = `Thank you, ${a[i]}, for the wonderful ${event} gift!`;
    }
    return a
}

function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int--
    }
}