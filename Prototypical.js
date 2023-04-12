function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods, family){
   { this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
    
    //added this
    this.family = [];
   }
   
}


Person.prototype.fullName = function()
{
    return (this.firstName + " " + this.lastName);
}

Person.prototype.toString = function ()
{
    console.log(`${peter.fullName()} Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`);
}

Person.prototype.addToFamily = function (fam)
{
    if (fam instanceof Person && !this.family.includes(fam))
    {
        this.family.push(fam);
    }

    console.log(this.family.length)
}


let peter = new Person("Peter", "Oleary", "Green", 42, ['pasta', 'pizza']);
let Alexander = new Person("Alexander", "Forward", "Forrest Green", 9, ['fruit', 'More fruit']);

peter.toString();

peter.addToFamily(Alexander);
peter.addToFamily(Alexander);
peter.addToFamily("Hector");
console.log(peter.family);