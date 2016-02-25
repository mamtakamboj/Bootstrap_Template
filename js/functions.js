//******** Java Script validation function for form validation **********
function CheckFields()
{
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var msg = document.getElementById("message").value;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(name=="" || name.trim()=="" && email=="" || email.trim()=="" && msg==""|| msg.trim()=="")
	{
		document.getElementById('ErrorMsg').innerHTML="Fill all the values";
		return false;
	}
	else if (!filter.test(email))
	{
		document.getElementById("ErrorMsg").innerHTML="Enter valid email id";
		return false;
	}
	else
		document.getElementById("ErrorMsg").innerHTML=""
		document.getElementById('SuccessMsg').innerHTML="Thank You !!! Your Message has been Submitted... ";
		$("#SuccessMsg").fadeOut(5000);
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
		return false;
}
//********* Ajax function for content on About Us page *********
var xhttp;
if (window.XMLHttpRequest) 
{
	// code for modern browsers
	xhttp = new XMLHttpRequest();
} 
else 
{
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
function loadDoc()
 {
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("shipping").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "shipping.html", true);
  xhttp.send();
}

//************ Ajax function for Videos ***********
//var xmlhttp = new XMLHttpRequest();
var url = "js/videos.js";

xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var myArr = JSON.parse(xhttp.responseText);
        myFunction(myArr);
    }
};
xhttp.open("GET", url, true);
xhttp.send();

function myFunction(arr) 
{
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<li style="margin-top:20px; font-weight:bold;"><a href="' + arr[i].url + '" style="color:#CC580C; text-decoration:none;">' + 
        arr[i].display + '</a></li>';
    }
   // document.getElementById("videoList").innerHTML = out;
	writeContentToPage("videoList", out);
}

// ****************  Google Map APIs ******************

function initialize()
{
	var myCenter=new google.maps.LatLng(53.324019, -6.367666);
	var map = null;
	var mapProp = 
	{
		center:myCenter,
		zoom:5,
		mapTypeId:google.maps.MapTypeId.HYBRID
	};

	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var marker=new google.maps.Marker(
	{
	position:myCenter,
	});

	marker.setMap(map);
	//google.maps.event.addDomListener(window, 'load', initialize);
}

