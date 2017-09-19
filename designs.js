// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$('#btn').click(function(){

	const h = document.getElementById('input_height').value;	//to store the value of height entered into a variable.

	const w = document.getElementById('input_width').value;		//to store the value of width entered into a variable.

	if (h==0 || w==0) {
		alert("Please provide height and width greater than or equal to one");	//to alert that minimum height and width should be one.
	}

	$(':input[type="submit"]').prop('disabled', true);		//to disable submit button when the values of height and width are set and clicked the submit button.

	$('#input_height').click(function(){		//to enable submit button and erase old grid incase if user wants to change the number of height.
		$('tr').remove();
		$('td').remove();
		$(':input[type="submit"]').prop('disabled', false);
	});

	$('#input_width').click(function(){		//to enable submit button and erase old grid incase if user wants to change the number of width.
		$('tr').remove();
		$('td').remove();
		$(':input[type="submit"]').prop('disabled', false);
	});

	makeGrid(h, w);		//to call makeGrid function in order to build a grid with desired rows and columns.
	alert('You have selected ' + h + " rows and " + w + " columns");	//to alert by indicating the number of rows and columns chosen.
});

function makeGrid(m, n){
	for (let i = 0; i < m; i++) {		//to create m number of rows by appending tr tag to the table tag.
		$('table').append("<tr></tr>");
		$('table tr').each(function(index){
			$(this).attr('class', "row "+[index]);
		});
	}

    for (let j = 0; j < n; j++) {		//to create n number of columns by appending td tag to the tr tag or particular rows.
      	$("tr").append("<td></td>");
    }

    $("tr td").click(function(){		//to get the color from colorpicker and add the selected color to the desired grid element or box.
    	let color = document.getElementById('colorPicker').value;
    	$(this).css("background-color", color);
	});
}