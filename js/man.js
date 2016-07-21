function Man( params )
{
    this.name = 'John';
    this.age = 23;
    this.weight = 70;

    if( params !== undefined) {
        this.name = (params.name)?(params.name):this.name; 
        this.age = (params.age)?(params.age):this.age; 
        this.weight = (params.weight)?(params.weight):this.weight; 
    }
    
}

Man.prototype.getManInfo = function()
{
    return 'Name: ' + this.name + ' Age: ' + this.age + ' Weight: ' + this.weight;
}