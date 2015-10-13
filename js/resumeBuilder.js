var bio = {
	"name" : "Ryan Rittenhouse",
	"role" : "Web Development",
	"age" : "33",
	"image" : "http://placehold.it/500x500",
	"contacts" : [ {
		"mobile" : "111-111-1111",
		"location" : "Bellingham, WA",
		"email" : "idlesentry@gmail.com",
		"github" : "idlesentry"
		}
		],

	"skills" : ["Teaching English Literature", "Teaching Composition", "Formal Writing", "Web Development", "Homebrewing"],
	"welcomeMessage" : "Hello! My name is Ryan and I am an educator in Bellingham, Washington. In my free time I read a great deal of science-fiction, fantasy, and horror. I also find a suprising amount of time to work on honing my skills in web development, and homebrew among other things. Welcome to my resume!"
};

var work = {
	"jobs" : [
	{
		"employer" : "Bellingham Technical College",
		"title" : "Tutor",
		"location" : "Bellingham, WA",
		"dates" : "2015-present",
		"description" : "Responsible for maintaining a focused work environment in both the writing and math turoring centers. Attending to the needs of students in regards to assisting with study skills or more specific problems that arise."
	},
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
		"location" : "Walla Walla, WA",
		"degree" : "Associate of Arts",
		"major" :"Transfer Degree",
		"dates" : "2007-2009",
		"url" : "http://www.wwcc.edu/"
	},
	{
		"name" : "Western Washington University",
		"location" : "Bellingham, WA",
		"degree" : "Bachelor of Arts",
		"major" :"English Literature",
		"dates" : "2009-2012",
		"url" : "http://www.wwu.edu/"
	},
	{
		"name" : "Western Washington University",
		"location" : "Bellingham, WA",
		"degree" : "Master of Arts",
		"major" :"English Literature",
		"dates" : "2013-2015",
		"url" : "http://www.wwu.edu/"
	}
	],

	"online courses" : [
  	{
		"title" : "Javascript Syntax",
		"name" : "Udacity",
		"date" : "2015",
		"url" : "http://www.udacity.com/course/ud804"
	}
	]
};

var projects = {
	"projects" : [
	{
		"title" : "Portofolio",
		"dates" : "August 2015 - September 2015",
		"description" : "An online portfolio to display all of the other projects that I complete over the course of my nanodegree",
		"images" : ""
	}
	]
};



bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);
	var formattedImage = HTMLbioPic.replace("%data%", bio.image);
	$("#header").append(formattedImage);
	

	for (contact in bio.contacts) {
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
		$("#header").append(formattedEmail);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
		$("#header").append(formattedMobile);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
		$("#header").append(formattedGitHub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
		$("#header").append(formattedLocation);
	}

	if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (i = 0; i < bio.skills.length; i++) {
		var formattedSkill=HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}

	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);
}
};

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName=HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree=HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates=HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation=HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor=HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedEducationEntry = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;

		$(".education-entry:last").append(formattedEducationEntry);
  }
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle=HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates=HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription=HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation=HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates=HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription=HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedWorkEntry = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

		$(".work-entry:last").append(formattedWorkEntry);
  }
};


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

bio.display();
education.display();
work.display();
projects.display();


function inName(name) {
	name = window.name;
	name = name.split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name[0] + " " + name[1];
}
var name = $("#name").text();
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
