var name = "Ryan Rittenhouse";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderName.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Ryan Rittenhouse",
	"city" : "Bellingham, WA",
	"age" : "33",
	"skills" : ["Teaching and Research of English Literature", "Formal Writing", "Web Development"],
	"interests" : ["Homebrewing, Hiking and Camping, Reading"],
	"contactInfo" : "idlesentry@gmail.com",
	"welcomeMessage" : "Welcome to my resume!"
};

var work = {
	"jobs" : [
	{
		"name" : "Western Washington University",
		"title" : "Research Assistant",
		"city" : "Bellingham, WA",
		"date" : "2013-2014"
	},
	{
		"name" : "Western Washington University",
		"title" : "Instructor",
		"city" : "Bellingham, WA",
		"date" : "2014-2015"
	}
	]
};

var education = {
	"schools" : [
	{
		"name" : "Walla Walla Community College",
		"city" : "Walla Walla, WA",
		"degree" : "Associate of Arts",
		"major" :"n/a",
		"date" : "2007-2009",
		"url" : "http://www.wwcc.edu/"
	},
	{
		"name" : "Western Washington University",
		"city" : "Bellingham, WA",
		"degree" : "Bachelor of Arts",
		"major" :"English Literature",
		"date" : "2009-2012",
		"url" : "http://www.wwu.edu/"
	},
	{
		"name" : "Western Washington University",
		"city" : "Bellingham, WA",
		"degree" : "Master of Arts",
		"major" :"English Literature",
		"date" : "2013-2015",
		"url" : "http://www.wwu.edu/"
	}
	]
	};
//	"online courses" : [
//	{
//		"title" : "Javascript Syntax",
//		"school" : "Udacity",
//		"date" : "2015",
//		"url" : "http://www.udacity.com/course/ud804"
//	}
//};

var projects = {
	"projects" : [
	{
		"project1" : ""
	}
	]
};

console.log(bio.skills);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill=HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}
	