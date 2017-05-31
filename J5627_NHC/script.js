
function format_input_box(liid){
        $("input[type=checkbox][querytype = '" + liid + "']").change(
            function(){
				//alert($(this).attr('query_val'));
        	    var querytype = $(this).attr('querytype');
				setQuery(querytype);

            });

        $(".query").click(function(){
			var lat = $(this).attr("centroidy");
			var long = $(this).attr("centroidx");
			var area = $(this).attr("area");
			zoomTo_latlong(lat,long,area);
        });//end of change query

}
function setQuery(querytype){
	var layer_type = list_of_class[querytype]['layer_type'];

	//var exception_list = list_of_class[querytype]['exception'];
	if (layer_type == 'fusion'){
		setQuery_fusion(querytype);
	}
	if (layer_type == 'geoxml'){
		setQuery_xml(querytype);
	}

}

function setQuery_fusion(querytype){
	//alert('querytype'+querytype);
	var layer = layer_pointer()[querytype];
	var tableid = list_of_class[querytype]['id'];
	var id_col = list_of_class[querytype]['id_col'];
	id_col = "\x27" + id_col + "\x27";
	var no_check= 0;
	var no_uncheck=0;
	var where_function = "in";
	//var ul = document.getElementById(ulid);

	no_check = document.querySelectorAll("input[querytype='"+querytype+"']:checked").length;
	no_uncheck = document.querySelectorAll("input[querytype='"+querytype+"']").length - no_check;
	if (no_check >= 1){
		layer.setMap(map);
	}
	if (no_check == 0) {
		layer.setMap(null);
	}
	if (no_check> no_uncheck){
		where_function = "not in";
	}
	var exception_list = [];
	var check_test=true;
	if (where_function == "not in"){
		check_test = false;
	}
	//alert(where_function + " ;   "+ check_test);
	var input_list = document.querySelectorAll("input[querytype='"+querytype+"']");
	for (var i = 0; i< input_list.length; i++){
		if (input_list[i].checked == check_test){
			exception_list.push(input_list[i].getAttribute('query_val'));
		}
	}
	//alert(exception_list);
	var exception_string = "'" + exception_list.join("','") + "'";
	//where = "col1\x3e\x3e0 " + where_function + " (" + exception_string + ")";
	where = id_col + " " + where_function + " (" + exception_string + ")";
	//alert("where: " + where);
	layer.setOptions({query: {select: "col2\x3e\x3e0", from: tableid,	where:  where       }    });
	map_ordering();
}