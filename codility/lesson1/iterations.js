let binary = "10010101000100";

let regex = /10*1/;
let searched = regex.exec( binary );
console.log( searched );

let gaps = [];
while( ( searched = regex.exec( binary ) ) != null ) {
    let gap = searched.toString().length - 2;
    console.log( `### gap : ${gap}` );
    gaps.push( gap );
    binary = binary.replace( searched, `1` );
}

gaps.sort( ( a, b ) => b - a );
if ( gaps.length == 0 ) {
    gaps.push( 0 );
}
console.log( `### The largest gap is ${gaps[ 0 ]}` );

// console.log( binary );