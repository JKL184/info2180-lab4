window.onload = function () {
	var searchbtn = document.getElementsByTagName("button")[0];
	searchbtn.addEventListener("click", Avengers);
};
function Avengers(e) {
	e.preventDefault();
	var request = new XMLHttpRequest();
	var url = "superheroes.php";
	request.onreadystatechange = function () {
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var avenger = request.responseText;
				alert(avenger);
			} else {
				alert("Nope");
			}
		}
	};
	request.open("GET", url, true);
	request.send();
}
