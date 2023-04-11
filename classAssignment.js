class Job {
    //Class Syntax
    constructor(name, industry, requiresDegree, field, salary, location) {
        this.name = name;
        this.industry = industry;
        this.requiredsegree = requiresDegree;
        this.field = field;
        this.salary = salary;
        this.location = location;
    }

//Method Syntax
getName ()
{
    return this.name;
}

getFieldAndIndustry ()
{
    return `${this.nam} from the ${this.field} field is from the ${this.industry} industry.`
}

getSalary ()
{
    return this.salary;
}

getlocation ()
{
    return this.location;
}
getDegree()
{
    return this.requiredsegree;
}

}

//Creation of new job class

let softwareEngineer = new Job("Software Engineer", "Tech", "None", "Development", 85000, "Detroit")

let testEngineer = new Job("Test Engineer", "Tech", "None", "Qaulity Assurance", 75000, "San Antonio")

let cocoMelonWatcher = new Job("CocoMelon Reviewer", "Entertainment", "None",  "Qaulity Assurance", 500000, "Remote")

//calling the class

console.log("The Software Egineering Job is in " + softwareEngineer.getlocation() + " and pays " + softwareEngineer.getSalary() + ".")
console.log("")
console.log("Being a " + testEngineer.getName() + " will pay " + testEngineer.getSalary() +" in the " + testEngineer.getFieldAndIndustry())
console.log("")
console.log("Go be a " + cocoMelonWatcher.getName() + " under the required Degree section it says " + cocoMelonWatcher.getDegree() + ".")
console.log("")

class Temp extends Job{
    constructor (name, industry, requiresDegree, field, salary, location, timeframe) {
        super (name, industry, requiresDegree, field, salary, location);
        this.timeframe = timeframe;
    }

    getTimeframe()
    {

    return this.timeframe;
    }
}



let juniorDeveloper = new Temp("Junior Developer", "Tech", "None", "Development", 60000, "Houston", "Year")
console.log("In " + juniorDeveloper.getlocation() +" you can be a " + juniorDeveloper.getName() + " that pays " + juniorDeveloper.getSalary() + " for a " + juniorDeveloper.getTimeframe() + "." )