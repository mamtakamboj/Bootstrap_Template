//*********************Video Function ************
$.fn.initList = function()
{
	$("#videoList > li > a").on("click", function(e)
		{
			e.preventDefault();
			// get the url href from the link
			var url = $(this).attr("href");
			// get a reference to the iframe element on the page
			var iframe = $('#player');
			// change the src of the iframe to the new video url
			iframe.attr('src', url);
		});
}	

function writeContentToPage(id, content)
{
	$("#" + id).html(content).initList();
}
//********** jQuery Function to call form validation function  **********8
$(document).ready(function()
{
      $('#submit').click(CheckFields);
});

//********* jQuery Function to call Lode the content function ***********
$(document).ready(function()
{
	  $('#aboutContent > a').on("click", function(e){
			e.preventDefault();
			//alert("hello");
			loadDoc();

});
});
//*********** jQuery Function to call the Map  ************
$(document).ready(function()
{
      //$('#aboutus').click(loadDoc);
	  $('#map > a').on("click", function(e){
			e.preventDefault();
			$('#googleMap').css("height", "380px");
			//alert("hello");
			initialize();

});
});
