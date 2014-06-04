$(document).ready(function() {

	var playGame = function () {

		var number = $('#entry').val();

		if (+number <= 0) {
			alert ("Number's gotta be positive!");
			$('#entry').val('');
			$('#entry').focus();
		}

		for (var x = 1; x <= number; x++) {

			if (x % 3 === 0 && x % 5 === 0) {
				$('#data').append('FizzBuzz');

			} else if (x % 3 === 0) {
				$('#data').append('Fizz');

			} else if (x % 5 === 0) {
				$('#data').append('Buzz');

			} else {
				$('#data').append(x);
			}

			$('#data').append('<br />');
			$('#entry').val('');
		}
	};

	$('#entry').focus();
	$('button').click(playGame);
	$('#entry').keyup(function(event) {
		if (event.keyCode == 13) {
			$('button').click();
		}
	});
});

