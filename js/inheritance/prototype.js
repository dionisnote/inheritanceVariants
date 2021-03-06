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

Male.prototype = new Man(); // 2. , 3. we can't set years, if we don't know it yet 
Female.prototype = new Man(WomanProps); // here is no properties for Female object, but later...

var TheMan = new Male();

var Woman = new Female(WomanProps);

var otherWoman = new Female({name: 'Maria'}); // 4. name already set, Jesica ;)


console.log( TheMan );
console.log( TheMan.getManInfo() );
console.log( Woman );
console.log( Woman.getManInfo() );
console.log( otherWoman );
console.log( otherWoman.getManInfo() );