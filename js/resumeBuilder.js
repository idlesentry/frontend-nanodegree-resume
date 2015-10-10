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
		"employer" : "Western Washington University",
		"title" : "Research Assistant",
		"location" : "Bellingham, WA",
		"dates" : "2013-2014",
		"description" : "Responsible for compiling annotated bibliographies using databases such as EBSCOhost and JSTOR to compile annotated bibliographies for a sole professor's potential research. Also included assembling classroom materials such as powerpoints or lists of potential class reading material based on cost and content."
	},
	{
		"employer" : "Western Washington University",
		"title" : "Instructor",
		"location" : "Bellingham, WA",
		"dates" : "2014-2015",
		"description" : "Responsible for a sense of professionalism in regards to lesson planning three times per week, researching and assembling classroom materials (activities, readings, etc.), and facilitating classroom discussion. Largely autonomous but guided by Director of Composition Donna Qualley."
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

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedLocation=HTMLworkLocation.replace("%data%", work.jobs[job].city);
	var formattedDates=HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription=HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedWorkEntry = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

	$(".work-entry:last").append(formattedWorkEntry);
}
