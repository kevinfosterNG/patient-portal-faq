//Show/Hide onClick
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
	addFaqToggleListener(faq[i]);
}
var search = location.search.substring(1);
var preOpenFaq = new URLSearchParams(search).get("q");

if(preOpenFaq != null) {
	f1 = document.getElementById(preOpenFaq);
	if(f1 != null) {
		//console.log(f1);
		//console.log(f1.firstElementChild);
		f1.firstElementChild.classList.toggle("active");
		f1.firstElementChild.nextElementSibling.style.display = "block";
	} else {
		console.log("Invalid FAQ in url. Manual navigation required.");
	}
}

//add listener to call the toggleFaq function
function addFaqToggleListener (faq) {
	faq.addEventListener("click", toggleFaq);
}

//expand any param faq item
function toggleFaq() {
	/* Toggle between adding and removing the "active" class,
	to highlight the button that controls the panel */
	this.classList.toggle("active");

	/* Toggle between hiding and showing the active panel */
	var body = this.nextElementSibling;
	if (body.style.display === "block") {
		body.style.display = "none";
	} else {
		body.style.display = "block";
	}
}