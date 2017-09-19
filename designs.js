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
	
});