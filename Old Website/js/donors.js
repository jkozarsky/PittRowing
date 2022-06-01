$(function() {
	$.get("data/donor_roll.json", {}, function(data) {
		var donorData = eval(data); // OK, seriously.  You know this by now.
		$("#donoryear").html(donorData.year);
		var i = 0;
		for (; i < donorData.donors.length / 2; i++)
			$("#donorroll-left").append("<li>" + donorData.donors[i]);
		for (; i < donorData.donors.length; i++)
			$("#donorroll-right").append("<li>" + donorData.donors[i]);
	}, "json");
});