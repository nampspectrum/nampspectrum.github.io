function map_ordering(){
    layers = layer_pointer();
    //alert('set map');
	for (var key in layers){
		item_layer = layers[key];
        if (typeof(item_layer) != "undefined"){
          	if (item_layer.map == map) {
             	  	item_layer.setMap(map);
            }
        }
	}
		
}

var list_of_class = {
"mar_area":{'id':'1EjrlIY3ts1bGTN4V8PalopuvdjX0Enc6HsAGzsoP','ulid':"mar_area_list",'id_col':'name','name_col':'name','exception':[],'styleId': 2, 'templateId': 2,'styleId': 2, 'templateId': 2,'layer_type':'fusion'},
"comp":{'id':"1VJCLfU2TXnRLDTziifuhzSlcmXn9Ys8m-Nt7g1ik",'ulid':'comp_list','id_col':'name','name_col':'name2','exception':[],'styleId': 2, 'templateId': 2,'layer_type':'geoxml'},
"current_fulltime":{'id':"15ndyj6bUOI8_nEC3kUMf1Uq9YSjI4YNXQxtEIJ22",'ulid':'current_fulltime_list','id_col':'name','name_col':'name','exception':[],'styleId': 2, 'templateId': 2,'layer_type':'geoxml'},
"current_mini":{'id':"1KLyApDE7Lo6kNEhDIZ7_Kn83wGW-9qLsXg84wkvG",'ulid':'current_mini_list','id_col':'name','name_col':'name','exception':[],'styleId': 2, 'templateId': 2,'layer_type':'geoxml'},
"current_sis":{'id':"1XsFMNlf__jC4zcebhAKfXKYu_oN6OFsXkvDzJa09",'ulid':'current_sis_list','id_col':'name','name_col':'name','exception':[],'styleId': 2, 'templateId': 2,'layer_type':'geoxml'},
"upcoming_mini":{'id':"14R_u7YQuoEEA1FL_De4bIp6gm6A-fysZYqS0l63B",'ulid':'upcoming_mini_list','id_col':'name','name_col':'name','exception':[],'styleId': 2, 'templateId': 2,'layer_type':'geoxml'},
"upcoming_sis":{'id':"1vnQu5ahrIVuEd_xD0Ob4HQXrifCWr5Mn-qxQzwhC",'ulid':'upcoming_sis_list','id_col':'name','name_col':'name','exception':[],'styleId': 2, 'templateId': 2,'layer_type':'geoxml'},
"exist_50_1":{'id':"1avbC7olIilZ8yJOPfDRsFSy5U7MBFiA5bci80Pyj",'ulid':'exist_50_list','id_col':'pc_pid','name_col':'pc_pid','exception':[],'styleId': 2, 'templateId': 2,'layer_type':'fusion'},
"exist_50_2":{'id':"1R17oMXGBMowOEx41C02QiXNZn-sCtfb3Kbpbfist",'ulid':'exist_50_list','id_col':'name','name_col':'name','exception':[],'styleId': 2, 'templateId': 2,'layer_type':'fusion'},
"exist_65_1":{'id':"1avbC7olIilZ8yJOPfDRsFSy5U7MBFiA5bci80Pyj",'ulid':'exist_65_list','id_col':'pc_pid','name_col':'pc_pid','exception':[],'styleId': 3, 'templateId': 3,'layer_type':'fusion'},
"exist_65_2":{'id':"1R17oMXGBMowOEx41C02QiXNZn-sCtfb3Kbpbfist",'ulid':'exist_65_list','id_col':'name','name_col':'name','exception':[],'styleId': 3, 'templateId': 3,'layer_type':'fusion'},
"prospect_50_1":{'id':"1avbC7olIilZ8yJOPfDRsFSy5U7MBFiA5bci80Pyj",'ulid':'prospect_50_list','id_col':'pc_pid','name_col':'pc_pid','exception':[],'styleId': 4, 'templateId': 4,'layer_type':'fusion'},
"prospect_50_2":{'id':"1R17oMXGBMowOEx41C02QiXNZn-sCtfb3Kbpbfist",'ulid':'prospect_50_list','id_col':'name','name_col':'name','exception':[],'styleId': 4, 'templateId': 4,'layer_type':'fusion'},
"prospect_65_1":{'id':"1avbC7olIilZ8yJOPfDRsFSy5U7MBFiA5bci80Pyj",'ulid':'prospect_65_list','id_col':'pc_pid','name_col':'pc_pid','exception':[],'styleId': 5, 'templateId': 5,'layer_type':'fusion'},
"prospect_65_2":{'id':"1R17oMXGBMowOEx41C02QiXNZn-sCtfb3Kbpbfist",'ulid':'prospect_65_list','id_col':'name','name_col':'name','exception':[],'styleId': 5, 'templateId': 5,'layer_type':'fusion'},
"trade_60":{'id':"1ldF0DXTiNL3P-QR7acGxib0m1ujdZBkrn1rMWIrF",'ulid':'trade_60_list','id_col':'name','name_col':'name','exception':[],'styleId': 2, 'templateId': 2,'layer_type':'fusion'},
"trade_80":{'id':"1H3zQCxcZnGtq4-aVPamAtmq5LOaSCDi3YFHm2qbW",'ulid':'trade_80_list','id_col':'name','name_col':'name','exception':[],'styleId': 2, 'templateId': 2,'layer_type':'fusion'},
};

function layer_pointer(){
   var layer_list = {"mar_area":marketing_area_layer,

								
					"exist_50_1":existing_age50_layer1,
					"exist_50_2":existing_age50_layer2,
					"exist_65_1":existing_age65_layer1,
					"exist_65_2":existing_age65_layer2,
					"prospect_50_1":prospect_age50_layer1,
					"prospect_50_2":prospect_age50_layer2,
					"prospect_65_1":prospect_age65_layer1,
					"prospect_65_2":prospect_age65_layer2,
					"trade_60":trade_60_layer,
					"trade_80":trade_80_layer,		
					
					
					"blank_pc_1":blank_pc_layer1,
					"blank_pc_2":blank_pc_layer2,	
					"comp":competitor_layer,
					"current_fulltime":current_fulltime_layer,
					"current_mini":current_mini_layer,
					"current_sis":current_sis_layer,
					"upcoming_mini":upcoming_mini_layer,
					"upcoming_sis":upcoming_sis_layer,																					
					};
   return layer_list;
}

function list_pointer(){
   var a_list = {"comp":comp_list,
   	   		  	 "current_fulltime":current_fulltime_list,
   	   		  	 "current_mini":current_mini_list,
   	   		  	 "current_sis":current_sis_list,
				 "upcoming_mini":upcoming_mini_list,
				 "upcoming_sis":upcoming_sis_list,						 				 
                 "mar_area": mar_area_list,
 				 "exist_50_1":existing_age50_list1,
				 "exist_50_2":existing_age50_list2,
 				 "exist_65_1":existing_age65_list1,
				 "exist_65_2":existing_age65_list2,
 				 "prospect_50_1":prospect_age50_list1,
				 "prospect_50_2":prospect_age50_list2,
 				 "prospect_65_1":prospect_age65_list1,
				 "prospect_65_2":prospect_age65_list2,
				 "trade_60":trade_60_list,
				 "trade_80":trade_80_list,					 					 				 						 				 
				 };
   return a_list;
}



var marketing_area_exception = [];
var mar_area_list = [];
var comp_list = [];
var current_fulltime_list = [];
var current_mini_list = [];
var current_sis_list = [];
var upcoming_mini_list = [];
var upcoming_sis_list = [];
var existing_age50_list1 =[];
var existing_age50_list2 =[];
var existing_age65_list1 =[];
var existing_age65_list2 =[];
var prospect_age50_list1 =[];
var prospect_age50_list2 =[];
var prospect_age65_list1 =[];
var prospect_age65_list2 =[];
var trade_60_list =[];
var trade_80_list =[];
var layer_list = new Array();
var test_layer;

function name_id_list(id_col,name_col,TableID, current_list_pointer) {
  var FT_TableID =TableID;
  var col_name = "1";
  var term = "2";
  var queryText = encodeURIComponent("SELECT '"+id_col+"', '" + name_col +"', 'centroidy','centroidx','area' FROM "+FT_TableID);
  var query = 'https://www.googleapis.com/fusiontables/v2/query?key=AIzaSyDfM2G-dd5qJ5A09ffhzyH7YrHinEVE9po&sql='  + queryText;
  //alert('query constructed:' + query);
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',query,true);
  xhttp.send();
  //alert('xhttp ok');
  var a_list = list_pointer()[current_list_pointer];
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      a_list = a_list.concat(JSON.parse(this.responseText)['rows']);
	  for (var i =0; i<a_list.length; i++){
	      var where = "col1\x3e\x3e0 in ('" + a_list[i][0] + "')";
		  //alert('where:' + where);
		  var options= {styleId: list_of_class[current_list_pointer]['styleId'], templateId: list_of_class[current_list_pointer]['templateId']};
		  //alert('options: ' + options);
		  layer_list.push(0);
		  var last_index = layer_list.length - 1 ;
		  //alert('last_index:' + last_index);
		  attach_layer(TableID,where,options,last_index);
		  list_generate([ a_list[i]],list_of_class[current_list_pointer]['ulid'],current_list_pointer,last_index);
	  }
	  //alert("layer_list: " + layer_list.length);
	  //alert('a_list_json: ' + current_list_pointer + "       :" + a_list.length);
	  format_input_box(current_list_pointer); //attach the event listening function into the box
    }  
  };

}

for (var key in list_of_class){
    //alert('key: ' + key);
	name_id_list(list_of_class[key]['id_col'],list_of_class[key]['name_col'],list_of_class[key]['id'],key);
}


function attach_layer(f_TableID, f_where,f_options,f_index){
	layer_list[f_index]= new google.maps.FusionTablesLayer({query: {select: '\'col2\'',from: f_TableID, where: f_where}, options: f_options  });
	//alert('layer_list set');
}

function list_generate(list,ulid,liid,layer_index){
	ul = document.getElementById(ulid);
    for (var i =0; i<list.length; i++){
		var el = document.createElement("li");
		el.innerHTML = "<input type='checkbox' layer_index='"+layer_index+"' querytype='"+liid+"' "+ "query_val = '"+list[i][0]+"' "  +"value='"+list[i][1]+"' checked><span querytype= '"+liid+"' "+"query_val = '"+list[i][0]+"'"  + "centroidy = '"+list[i][2]+"' "+ "centroidx = '"+list[i][3]+"' "+ "area = '"+list[i][4]+"' "  +"class='button query'>"+list[i][1]+"</span>";
		//var ul = document.createElement("ul");
		ul.appendChild(el);
	}

}


//list_generate(mar_area_list,"mar_area_list","mar_area");
//list_generate(comp_list,"comp_list","comp");
//setInterval(map_ordering, 3000);