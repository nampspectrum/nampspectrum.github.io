function reset_layer(){
	layers = layer_pointer();

	for (var key in layers){
		var list_default = list_of_class[key]['default'];
		var input_check = false;
		if(list_default == 'checked'){
			input_check = true;
		}
		var input_list = document.querySelectorAll("input[querytype='"+key+"']");
		for (var i = 0; i < input_list.length; i++){
			var input = input_list[i];
			if(input_check == true){
				$(input).prop("checked",true);
			}else{
				$(input).prop("checked",false);
			}
		}
		setQuery(key);
		checkall_start();
		show_pc_outline();	
	}
	
	
}

$("span[id='checkall']").click(function() {
   	var ulid = $(this).attr('ul');
	//alert($(this).text().toLowerCase());
	if ($(this).text().toLowerCase() == "check all") {
	    $(this).text("Uncheck all");
		$("ul[id='"+ulid+"']").find("input[type=checkbox]").prop('checked',true);
	}else{
	    $(this).text("Check all");	
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
		if (!input){
			alert("found an null");
			alert(query_val);
		}else{
			if (input.checked == true){
				//alert('true');
				layer.docs[0].placemarks[i].marker.setMap(map);
			} else{
				//alert('false');
				layer.docs[0].placemarks[i].marker.setMap(null);
			}
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

function checkall_start(){
	checkall_list = document.querySelectorAll("span[id='checkall']");
	//alert(checkall_list.length);
	for (var i = 0; i< checkall_list.length; i++){
			var checkall= checkall_list[i];
			//alert(checkall);
			var ulid = checkall.getAttribute('ul');
			var querytype_list = [ulid.replace("_list",""),ulid.replace("_list","_1"),ulid.replace("_list","_2")];
			for (var j=0; j<querytype_list.length; j++){
				var querytype = querytype_list[j];
				if (typeof(list_of_class[querytype]) != "undefined"){
					if(list_of_class[querytype]['default'] == 'checked'){
						checkall.innerHTML = 'Uncheck all';
					}else{
						checkall.innerHTML = 'Check all';
					}
				}
			}
	}
}

checkall_start();
function hide_pc_outline(){
	blank_pc_layer1.setMap(null);

}

function show_pc_outline(){
	blank_pc_layer1.setMap(map);

}	