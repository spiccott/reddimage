$(document).ready(function(){
	$("#search-term").submit(function(event){
		event.preventDefault();
		var searchTerm = $("#query").val();
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm){

	$.getJSON("http://www.reddit.com/r/" + searchTerm + "/.json?jsonp=?", function(data) { 
		$.each(data.data.children, function(i,item){
			img = item.data.url;
			console.log(item.data);
			if (img.match(/\.(jpg|jpeg|png|gif)$/)){
				$('#images').append('<a href="' + img + '"><div class="image"><img class="fill-box" src="' + img + '"/></div></a>');
				$(".fill-box").fillBox();
			}
			else if (img.search("imgur") != -1) {
				img = img+".jpg"
				$('#images').append('<a href="' + img + '"><div class="image"><img class="fill-box" src="' + img + '"/></div></a>');
				$(".fill-box").fillBox();
			}
	    });
	});
};
