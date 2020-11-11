window.onload = function () {
	var searchbtn = document.getElementsByTagName("button")[0];
	searchbtn.addEventListener("click", Avengers);
};
function Avengers(e) {
	e.preventDefault();
	var request = new XMLHttpRequest();
	let submission = document.getElementById("hero").value;
	var url = "superheroes.php?query=" + submission;
	request.onreadystatechange = function () {
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var avenger = request.responseText;
				var msg = document.getElementById("result");
				msg.innerHTML = avenger;
			} else {
				alert("Nope");
			}
		}
	};
	request.open("GET", url, true);
	request.send();
}
