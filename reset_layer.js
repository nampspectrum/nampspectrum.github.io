function reset_layer(){
	layers = layer_pointer();
	for (var key in layers){
		layers[key].setMap(null);
	}
	$("span[id='show']").text("Show");
	for (var i= 0; i<layer_list.length;i++){
		layer_list[i].setMap(null);
	}
	$('input[type=checkbox]').prop('checked',false);
	
	
}

$("span[id='checkall']").click(function() {
   	var ulid = $(this).attr('ul');
	if ($(this).text() == "Check All") {
	    $(this).text("Uncheck All");
		$("ul[id='"+ulid+"']").find("input[type=checkbox]").prop('checked',true);
	}else{
	    $(this).text("Check All");	
		$("ul[id='"+ulid+"']").find("input[type=checkbox]").prop('checked',false);	
	}
	var querytype_list = [ulid.replace("_list",""),ulid.replace("_list","_1"),ulid.replace("_list","_2")];

	for (var i=0; i<querytype_list.length; i++){
		var querytype = querytype_list[i];
		if (typeof(list_of_class[querytype]) != "undefined"){
			setQuery(querytype);
		}
	}
	//alert(querytype_list + "<br>");
	
});



function setQuery_xml(querytype){
	//querytype = "comp";
	var layer = layer_pointer()[querytype];
	for (var i=0; i < layer.docs[0].placemarks.length; i++) {
		var query_val = layer.docs[0].placemarks[i].name;
		//alert(i+": "+ query_val);
		var input = document.querySelector("input[query_val='"+query_val+"']");
		if (input.checked == true){
			//alert('true');
			layer.docs[0].placemarks[i].marker.setMap(map);
		} else{
			//alert('false');
			layer.docs[0].placemarks[i].marker.setMap(null);
		}
        
	}
	map_ordering();
}

function hide_afterparse(){
	//var geoXmlDoc = doc[0];
	//alert(geoXmlDoc.placemarks.length);
	for (var i=0; i < competitor_layer.docs[0].placemarks.length; i++) {
		competitor_layer.docs[0].placemarks[i].marker.setMap(map);
	}
    alert('parse'); 
	//competitor_layer.hideDocument();
}

//$("#checkall").click(
//setInterval(hide_afterparse,3000);

function kmz_fetch(){
	kml = "http://befreeaccess.weebly.com/uploads/9/1/0/6/91067460/au___all_competitors_clinics_2017_5_9_11_55.kmz";
	var xhttp = new XMLHttpRequest();
	xhttp.open('GET',kml,true);
	xhttp.setRequestHeader('Host','befreeaccess.weebly.com');
	xhttp.setRequestHeader('Referer','http://befreeaccess.weebly.com/');
	xhttp.send();
	xhttp.onreadystatechange = function() {
		alert(this.readyState);
		if (this.readyState == 4 && this.status == 200) {
			document.innerHTML = this.responseText;
		}  
	};
}
//kmz_fetch();