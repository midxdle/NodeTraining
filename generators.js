function* Add(x) {
    yield x + 1;

    let y = yield(null);
    y=9
    return x + y; 
}

let gen = Add(6);

console.log(gen.next());

gen.next();

//gen.next();

console.log(gen.next());

function Timedelay(ptime, callback) {
    setTimeout(function() {
        callback("paused after " + ptime);
    });
}

Timedelay(1000, function(msg) {
    console.log(msg);
    Timedelay(2000, function(msg) {
        console.log(msg);
        Timedelay(3000, function(msg) {
            console.log(msg);
        })
    })
})

function* Messages() {
    console.log(yield(Timedelay(1000, function() {})));

    console.log(yield(Timedelay(2000, function() {})));

    console.log((yield(Timedelay(3000, function() {}))));
}