$(function() {
	$.get("data/latest_news.json", {}, function(data) {
		var newsData = eval(data); // I trust the source.  I wrote it.  So I can do this if I want.  Nyeh.
		for (var i = 0; i < newsData.news.length; i++)
			$("#newslist").append("<li><span class=\"newsdate\">" + newsData.news[i].date + "</span> - <span class=\"newsentry\">" + newsData.news[i].description + "</span> <a href=\"" + newsData.news[i].url + "\" class=\"newslink\">(" + newsData.news[i].link + ")</a></li>");
	}, "json");
});