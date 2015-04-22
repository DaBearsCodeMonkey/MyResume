var bio = {
	"name" : "Carlos Carrillo",
	"role" : "Web Developer",
	"welcomeMessage" : "Thank you for visiting my webpage",
	"contacts" : {
		"mobile" : "224-489-0123",
		"email" : "ccarril1@hawk.iit.edu",
		"github" : "DaBearsCodeMonkey",
		"twitter" : "Carc369",
		"location" : "Arlington Heights, IL"
	},
	"skills" : ["HTML", "CSS", "JavaScript", "C/C++", "Java", "Python", "SQL", "jQuery", "Twitter-Bootstrap",
				"Windows", "Linux", "MSVS", "IDLE", "Sublime Text", "Eclipse", "VIM", "GCC"],
	"bioPic" : "images/Nicole.jpg"
};

var education = {
	"name" : "Illinois Institute of Technology",
	"location" : "Chicago, Illinois",
	"degree" : "Bachelor",
	"major" : "Computer Science",
	"date" : 2015
};

var work = {
	"employer" : "Rosin Eyecare",
	"title" : "Medical Biller",
	"dates" : "July 2010- August 2012",
	"location": "Berwyn, Illinois",
	"description" : "Billed eyecare patients through their insurance. I also handled and resolved patient inquires via telephone. I was able to quickly learn ICD-9 and CPT-4 coding. I also handled administrative duties such as scanning and faxing important documents"
};

var projects = [{
	"title" : "Portfolio",
	"dates" : "April 2015",
	"description" : "Used HTML, twitter bootstrap, and JavaScript/jQuery to make a portfolio website for my projects"
	},
	{
	"title" : "Fresh Tomatoes",
	"dates" : "March 2015",
	"description" : "Wrote server side Python code to make a web application that displays my favorite movies and their trailers"
	},
	{
	"title" : "Mancala",
	"dates" : "November 2012",
	"description" : "African board game done in C/C++ imperative programming"
	},
	{
	"title" : "My Resume",
	"dates" : "April 2015",
	"description" : "An interactive version of my resume using HTML, CSS, and JavaScript (jQuery library)"
	}
];


var displayBio = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedImage);
	$("#header").append(formattedMsg);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGitHub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);


	$("#header").append(HTMLskillsStart);
	for(items in bio.skills){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[items]);
		$("#skills").append(formattedSkills);
	}
}

var displayWork = function(){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedworkDates = HTMLworkDates.replace("%data%", work.dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.description);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.location);
	$(".work-entry:last").append(formattedworkDates);
	$(".work-entry:last").append(formattedWorkLocation);
	$(".work-entry:last").append(formattedDescription);
}

var displayProjects = function(){
	$("#projects").append(HTMLprojectStart);

	for(project in projects){
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects[project].title);
		var formattedProjectDate = HTMLprojectDates.replace("%data%", projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects[project].description);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDate);
		$(".project-entry:last").append(formattedProjectDescription);
	}
}

var displayEducation = function(){
	$("#education").append(HTMLschoolStart);

	var formattedSchool = HTMLschoolName.replace("%data%", education.name);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.location);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.degree);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.major);
	var formattedYear = HTMLschoolDates.replace("%data%", education.date);
	$(".education-entry:last").append(formattedSchool + formattedDegree);
	$(".education-entry:last").append(formattedYear);
	$(".education-entry:last").append(formattedLocation);
	$(".education-entry:last").append(formattedMajor);
}

var displayMap = function(){
	$("#mapDiv").append(googleMap);
}

displayBio();
displayWork();
displayProjects();
displayEducation();
displayMap();