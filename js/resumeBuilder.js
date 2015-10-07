var name="Ryan Rittenhouse"
var role="Web Developer"
var awesomeThoughts="My name is Ryan Rittenhouse and I am awesome!";

var funThoughts = awesomeThoughts.replace("awesome", "fun");
var formattedName = HTMLheaderName.replace("%data%", name)
var formattedRole = HTMLheaderName.replace("%data%", role)
var skills = ["awesomeness", "teaching", "research", "formal writing"];
var bio = {
	"name" : "Ryan Rittenhouse",
	"age" : "33",
	"skills" : ["Teaching and Research of English Literature, Formal Writing, Web Development"],
	"contactInfo" : "idlesentry@gmail.com",
	"welcomeMessage" : "welcome message"
};

bio.city = "Bellingham, WA";

var work = {};
work.name = "Western Washington University";
work.years = "2013-2015";
work.city = "Bellingham, WA";

var school = {};
school["name"] = "Western Washington University";
school["years"] = "2013-2015";
school["city"] = "Bellingham, WA";

console.log(awesomeThoughts);
console.log(funThoughts);


// $("#main").append(name);
//$("#main").append(funThoughts);
$("#header").append(formattedName);
$("#header").append(formattedRole);
//$("#main").append(skills[1]);
$("#main").append(bio.name);
$("#main").append(bio.age);
$("#main").append(bio.contactInfo);
$("#main").append(bio.skills);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.city);

$("#main").append(work.name);
$("#main").append(work.years);
$("#main").append(work.city);

$("#main").append(school["name"]);
$("#main").append(school["years"]);
$("#main").append(school["city"]);
