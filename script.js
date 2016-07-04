var container = document.getElementById("container");
var childTitle = ""

$.getJSON("https://www.reddit.com/hot.json", function(object) {
	var data = object["data"]
	var children = data["children"]

	for (var i = 0; i < 4; ++i) {
		var child = children[i];	
		childData = child["data"];
		var childTitle = childData["title"];
		$(container).append("<br>")
		$(container).append(childTitle);
		$(container).append("</br>")
	}
});

$("#button").click(function() {
	$(container).html("");

	var input = $("#textBox").val();
	var url = "http://www.reddit.com/r/" + input + "/hot.json";
	$.getJSON(url, function(object) {
	
	var data = object["data"]
	var children = data["children"]

	for (var i = 0; i < 4; ++i) {
		var child = children[i];	
		childData = child["data"];
		var childTitle = childData["title"];
		$(container).append("<br>")
		$(container).append(childTitle);
		$(container).append("</br>")
		};
	});
});
