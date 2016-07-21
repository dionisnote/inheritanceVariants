/**
 *  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 */


function Male( params )
{
    Man.apply(this, [params]);
    this.hasBeard = true;
    this.beardLength = 3;
    if( params ) {
        this.beardLength = (params.beardLength)?(params.beardLength):(this.beardLength);
    }
}

Male.prototype.shaveBeard = function()
{
    this.beardLength = 0;
}

function Female( params )
{
    Man.apply(this, [params]);
    this.wearsSkirt = true;
    this.skirtColor = 'blue';
    if( params ) {
        this.skirtColor = (params.skirtColor)?(params.skirtColor):(this.skirtColor);
    }
}

Female.prototype.changeSkirtColor = function( sColor )
{
    this.skirtColor = sColor;
}

/**
 *  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
 */

// ********* Just Apply

// var TheMan = new Male({name: 'Alex'});

// console.log(TheMan);
// console.log(TheMan.getManInfo()); // method does'nt exist

// ******* Apply and Set Prototype

// ?? The question is - why we must use new Object, but not Man.prototype
Male.prototype = new Man(); 
Female.prototype = new Man();
var TheMan = new Male({name: 'Alex'});

console.log(TheMan);
console.log(TheMan.getManInfo()); // method exist now