// For testing purposes, the function will return an 
// anomaly on false.
function const_req(id){
	console.log("yay i'm being tested " + id)
	$.ajax({
		url: '/init',
		type: 'GET',
		data: 'id=' + id,
		success: function(data){
			$('#table').replaceWith(data);
		}
	})
}

function populate_database(){
	$.ajax({
		url: '/populate_database',
		type: "GET"
	})
}

function begin_analysis(id){
	console.log(id)
	// const_req(id); //Switch lines when you only want to execute once upon button click
	setInterval(function(){const_req(id)}, 60000);
}
