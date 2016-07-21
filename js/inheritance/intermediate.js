/**
 *  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 */


function Male( params )
{
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

var WomanProps = {
    name: "Jesica",
    skirtColor: 'red'
}

Female.prototype = Object.create( Man.prototype );
Female.prototype.constructor = Female;

// in the end has Methods of prototype

var Woman = new Female(WomanProps);

var otherWoman = new Female({name: 'Maria'});


console.log( Woman );
console.log( Woman.getManInfo() );
console.log( otherWoman );
console.log( otherWoman.getManInfo() );