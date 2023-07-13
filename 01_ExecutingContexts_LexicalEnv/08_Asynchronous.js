// Asynchronous - more than one at a time

function wait3Sec() {
    var ms = 3000 + new Date().getTime();
    while(new Date < ms) {}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event');
}

document.addEventListener('click', clickHandler);

wait3Sec();
console.log('finished execution');


/* 

Javascript engine has,

1)Event queue(loop)

    Any event that happens outside the engine is placed in queue

    when the execution step is done(i.e, ES is empty), JS looks into event queue for any remaining events
    event like click() or httpRequest()

    then processes the click() event - creates a execution context
    and executes the handler() for the click event

    Event queue is not processed until ES is empty
    Here, clickHandler is not processed till wait3Sec() is done 
    Therefore JS allows asynchronous callbacks by running synchronously via event loop

    INPUT :
        click on the page

    OUTPUT:
        finished function
        finished execution
        click event
*/