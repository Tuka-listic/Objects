// INSTAGRAM POST
/**
 * Properties - Handle of author, content, an image link posted by the author of the post, number of views, number of likes
 */

/**
 * Constructor function of an Instagrampost()
 */
//Q: Instagram post for 2 users using constructor function.
const InstagramPost = new Object();
InstagramPost.handleofauthor = "Jennifer James";
InstagramPost.content = "Tik-tok video";
InstagramPost.animagelinkbyauthorofpost = "tuka.png";
InstagramPost.numberofviews = "156";
InstagramPost.numberoflikes = "1000";

console.log(InstagramPost);

const InstagramPost2 = new Object();
InstagramPost2.handleofauthor = "Armeria Calos";
InstagramPost2.content = "Armeria make-up video";
InstagramPost2.animagelinkbyauthorofpost = "armcal.png";
InstagramPost2.numberofviews = "200";
InstagramPost2.numberoflikes = "700";

console.log(InstagramPost2);

// creating students detail object with three properties, name, age and location using the factory function
//First, make i will make a literal syntax of these object
const createPerson = new Object();
createPerson.name = "Musa Dawodu";
createPerson.age = "19 years";
createPerson.location = "Lekki";

console.log(createPerson);

// factory function
function createPerson(name, age, location) {
    // literal syntax
    return {
        name: name,
        age: age,
        location: location,
    };
}

const studentdetails = createPerson("Musa Dawodu", "19 years", "Lekki");
console.log(studentdetails);

//creating JAMB scores using factory method
// First, i will create a nested object
const student = {
    firstName: "Musa", 
    lastName: "Dawodu",
    age : 19,
    jambScores: {
            ENG: 70,
            GOVT: 85,
            LIT: 82,
            CRK: 94,
        },
};

console.log(student)
function createJambScores(Eng, Govt, Lit, CRK) {
// nested object
    return{
        ENG: ENG,
        GOVT: GOVT,
        LIT: LIT,
        CRK: CRK,
    };
}

const createJambScores( "70", "85", "82", "94");
console.log(createJambScores);

// we clone an object by using object.assign, spread syntax and JavaScript Object Notation methods
// option a - object.assign()
const firstNovel = {
    title: "Kill fear before fear kills you",
    author: "Neda grey",
    yearPublished: "2000", 
};

console.log(firstNovel);

//option b - spread syntax
const secondNovel = {...firstNovel };
secondNovel.title = "Attitude is everything";
console.log({fiirstNovel });
console.log({secondNovel });

//option c - JSON
const thirdNovel = JSON.parse;
thirdNovel.title = "Compete with yourself";
console.log({firstNovel });
console.log({thirdNovel });