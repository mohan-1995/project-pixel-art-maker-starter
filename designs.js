// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$('#btn').click(function(){
	//$('tr td').remove();
	const h = document.getElementById('input_height').value;

	const w = document.getElementById('input_width').value;

	if (h==0 || w==0) {
		alert("Please provide height and width greater than or equal to one");
	}
	
	$(':input[type="submit"]').prop('disabled', true);

	$('#input_height').click(function(){
		$('tr').remove();
		$('td').remove();
		$(':input[type="submit"]').prop('disabled', false);
	});

	$('#input_width').click(function(){
		$('tr').remove();
		$('td').remove();
		$(':input[type="submit"]').prop('disabled', false);
	});
	
	makeGrid(h, w);
	alert('You have selected ' + h + " rows and " + w + " columns");	
});

function makeGrid(m, n){
	for (let i = 0; i < m; i++) {
		$('table').append("<tr></tr>");
		$('table tr').each(function(index){
			$(this).attr('class', "row "+[index]);
		});
	}

    for (let j = 0; j < n; j++) {
      	$("tr").append("<td></td>");
    }
}
