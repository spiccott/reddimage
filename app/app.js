$(document).ready(function(){
	$("#search-term").submit(function(event){
		event.preventDefault();
		$('#images').html('');
		var searchTerm = $("#query").val();
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm){
	$.getJSON("http://www.reddit.com/r/" + searchTerm + "/.json?limit=100", function(data) { 
		$.each(data.data.children, function(i,item){
			img = item.data.url;
			if (img.match(/\.(jpg|jpeg|png|gif)$/)){
				$('#images').append('<a href="' + img + '"><div class="image"><img class="fill-box" src="' + img + '"/></div></a>');
				$(".fill-box").fillBox();
			}
			// else if (img.search("imgur") != -1) {
			// 	console.log(img)
			// 	img = img+".jpg"
			// 	$('#images').append('<a href="' + img + '"><div class="image"><img class="fill-box" src="' + img + '"/></div></a>');
			// 	$(".fill-box").fillBox();
			// }
	    });
	});
};

