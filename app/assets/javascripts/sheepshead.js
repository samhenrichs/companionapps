$(document).ready(function() {
	$('.play').hide(0);
	$('.pick-dropdown').hide(0);
	$('#three').click(function() {
		$('.players').hide(0);
		$('.three-players').fadeIn(250);
	});
	$('#four').click(function() {
		$('.players').hide(0);
		$('.three-players').fadeIn(250);
	});
	$('#five').click(function() {
		$('.players').hide(0);
		$('.three-players').fadeIn(250);
	});
	$('#six').click(function() {
		$('.players').hide(0);
		$('.three-players').fadeIn(250);
	});
	var p1score3P = 0;
	var p2score3P = 0;
	var p3score3P = 0;
	$('#player13P').html(p1score3P);
	$('#player23P').html(p2score3P);
	$('#player33P').html(p3score3P);
	var p1picked3P = 0;
	var p2picked3P = 0;
	var p3picked3P = 0;

	var p1ws3P = 0;
	var p1wns3P = 0;
	var p1wdt3P = 0;
	var p1ls3P = 0;
	var p1lns3P = 0;
	var p1ldt3P = 0;
	var doubler = 0;

	var p2ws3P = 0;
	var p2wns3P = 0;
	var p2wdt3P = 0;
	var p2ls3P = 0;
	var p2lns3P = 0;
	var p2ldt3P = 0;

	var p3ws3P = 0;
	var p3wns3P = 0;
	var p3wdt3P = 0;
	var p3ls3P = 0;
	var p3lns3P = 0;
	var p3ldt3P = 0;

	var p1rapcount3P = 0;
	var p2rapcount3P = 0;
	var p3rapcount3P = 0;
	
	$('#p1ws3P').click(function() {
		if(p1ws3P === 0) {
			$('#p1ws3P').css('color', 'black');
			p1ws3P = 1;
			p1wns3P = 0;
			p1wdt3P = 0;
			p1ls3P = 0;
			p1lns3P = 0;
			p1ldt3P = 0;
			$('#p1wns3P').css('color', '#9DC8C8');
			$('#p1wdt3P').css('color', '#9DC8C8');
			$('#p1ls3P').css('color', '#9DC8C8');
			$('#p1lns3P').css('color', '#9DC8C8');
			$('#p1ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p1ws3P').css('color', '#9DC8C8');
			p1ws3P = 0;
		}
	});
	$('#p1wns3P').click(function() {
		if(p1wns3P === 0) {
			$('#p1wns3P').css('color', 'black');
			p1ws3P = 0;
			p1wns3P = 1;
			p1wdt3P = 0;
			p1ls3P = 0;
			p1lns3P = 0;
			p1ldt3P = 0;
			$('#p1ws3P').css('color', '#9DC8C8');
			$('#p1wdt3P').css('color', '#9DC8C8');
			$('#p1ls3P').css('color', '#9DC8C8');
			$('#p1lns3P').css('color', '#9DC8C8');
			$('#p1ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p1wns3P').css('color', '#9DC8C8');
			p1wns3P = 0;
		}
	});
	$('#p1wdt3P').click(function() {
		if(p1wdt3P === 0) {
			$('#p1wdt3P').css('color', 'black');
			p1wdt3P = 0;
			p1wns3P = 0;
			p1wdt3P = 1;
			p1ls3P = 0;
			p1lns3P = 0;
			p1ldt3P = 0;
			$('#p1wns3P').css('color', '#9DC8C8');
			$('#p1ws3P').css('color', '#9DC8C8');
			$('#p1ls3P').css('color', '#9DC8C8');
			$('#p1lns3P').css('color', '#9DC8C8');
			$('#p1ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p1wdt3P').css('color', '#9DC8C8');
			p1wdt3P = 0;
		}
	});
	$('#p1ls3P').click(function() {
		if(p1ls3P === 0) {
			$('#p1ls3P').css('color', 'black');
			p1wdt3P = 0;
			p1wns3P = 0;
			p1wdt3P = 0;
			p1ls3P = 1;
			p1lns3P = 0;
			p1ldt3P = 0;
			$('#p1wns3P').css('color', '#9DC8C8');
			$('#p1ws3P').css('color', '#9DC8C8');
			$('#p1wdt3P').css('color', '#9DC8C8');
			$('#p1lnss3P').css('color', '#9DC8C8');
			$('#p1ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p1ls3P').css('color', '#9DC8C8');
			p1ls3P = 0;
		}
	});
	$('#p1lns3P').click(function() {
		if(p1lns3P === 0) {
			$('#p1lns3P').css('color', 'black');
			p1wdt3P = 0;
			p1wns3P = 0;
			p1wdt3P = 0;
			p1ls3P = 0;
			p1lns3P = 1;
			p1ldt3P = 0;
			$('#p1wns3P').css('color', '#9DC8C8');
			$('#p1ws3P').css('color', '#9DC8C8');
			$('#p1wdt3P').css('color', '#9DC8C8');
			$('#p1ls3P').css('color', '#9DC8C8');
			$('#p1ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p1lns3P').css('color', '#9DC8C8');
			p1lns3P = 0;
		}
	});
	$('#p1ldt3P').click(function() {
		if(p1ldt3P === 0) {
			$('#p1ldt3P').css('color', 'black');
			p1wdt3P = 0;
			p1wns3P = 0;
			p1wdt3P = 0;
			p1ls3P = 0;
			p1lns3P = 0;
			p1ldt3P = 1;
			$('#p1wns3P').css('color', '#9DC8C8');
			$('#p1ws3P').css('color', '#9DC8C8');
			$('#p1wdt3P').css('color', '#9DC8C8');
			$('#p1ls3P').css('color', '#9DC8C8');
			$('#p1lns3P').css('color', '#9DC8C8');
		}
		else {
			$('#p1ldt3P').css('color', '#9DC8C8');
			p1ldt3P = 0;
		}
	});
	$('#p1au3P').click(function() {
		if(p1rapcount3P === 0 || p1rapcount3P === 1 || p1rapcount3P === 2 || p1rapcount3P === 3) {
			p1rapcount3P = p1rapcount3P + 1;
			$('#p1rapcount3P').html(p1rapcount3P + ' times');
		}
	});
	$('#p1ad3P').click(function() {
		if(p1rapcount3P === 1 || p1rapcount3P === 2 || p1rapcount3P === 3 || p1rapcount3P === 4) {
			p1rapcount3P = p1rapcount3P - 1;
			$('#p1rapcount3P').html(p1rapcount3P + ' times');
		}
	});
	$('#p2ws3P').click(function() {
		if(p2ws3P === 0) {
			$('#p2ws3P').css('color', 'black');
			p2ws3P = 1;
			p2wns3P = 0;
			p2wdt3P = 0;
			p2ls3P = 0;
			p2lns3P = 0;
			p2ldt3P = 0;
			$('#p2wns3P').css('color', '#9DC8C8');
			$('#p2wdt3P').css('color', '#9DC8C8');
			$('#p2ls3P').css('color', '#9DC8C8');
			$('#p2lns3P').css('color', '#9DC8C8');
			$('#p2ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p2ws3P').css('color', '#9DC8C8');
			p2ws3P = 0;
		}
	});
	$('#p2wns3P').click(function() {
		if(p2wns3P === 0) {
			$('#p2wns3P').css('color', 'black');
			p2ws3P = 0;
			p2wns3P = 1;
			p2wdt3P = 0;
			p2ls3P = 0;
			p2lns3P = 0;
			p2ldt3P = 0;
			$('#p2ws3P').css('color', '#9DC8C8');
			$('#p2wdt3P').css('color', '#9DC8C8');
			$('#p2ls3P').css('color', '#9DC8C8');
			$('#p2lns3P').css('color', '#9DC8C8');
			$('#p2ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p2wns3P').css('color', '#9DC8C8');
			p2wns3P = 0;
		}
	});
	$('#p2wdt3P').click(function() {
		if(p2wdt3P === 0) {
			$('#p2wdt3P').css('color', 'black');
			p2wdt3P = 0;
			p2wns3P = 0;
			p2wdt3P = 1;
			p2ls3P = 0;
			p2lns3P = 0;
			p2ldt3P = 0;
			$('#p2wns3P').css('color', '#9DC8C8');
			$('#p2ws3P').css('color', '#9DC8C8');
			$('#p2ls3P').css('color', '#9DC8C8');
			$('#p2lns3P').css('color', '#9DC8C8');
			$('#p2ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p2wdt3P').css('color', '#9DC8C8');
			p2wdt3P = 0;
		}
	});
	$('#p2ls3P').click(function() {
		if(p2ls3P === 0) {
			$('#p2ls3P').css('color', 'black');
			p2wdt3P = 0;
			p2wns3P = 0;
			p2wdt3P = 0;
			p2ls3P = 1;
			p2lns3P = 0;
			p2ldt3P = 0;
			$('#p2wns3P').css('color', '#9DC8C8');
			$('#p2ws3P').css('color', '#9DC8C8');
			$('#p2wdt3P').css('color', '#9DC8C8');
			$('#p2lnss3P').css('color', '#9DC8C8');
			$('#p2ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p2ls3P').css('color', '#9DC8C8');
			p2ls3P = 0;
		}
	});
	$('#p2lns3P').click(function() {
		if(p2lns3P === 0) {
			$('#p2lns3P').css('color', 'black');
			p2wdt3P = 0;
			p2wns3P = 0;
			p2wdt3P = 0;
			p2ls3P = 0;
			p2lns3P = 1;
			p2ldt3P = 0;
			$('#p2wns3P').css('color', '#9DC8C8');
			$('#p2ws3P').css('color', '#9DC8C8');
			$('#p2wdt3P').css('color', '#9DC8C8');
			$('#p2ls3P').css('color', '#9DC8C8');
			$('#p2ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p2lns3P').css('color', '#9DC8C8');
			p2lns3P = 0;
		}
	});
	$('#p2ldt3P').click(function() {
		if(p2ldt3P === 0) {
			$('#p2ldt3P').css('color', 'black');
			p2wdt3P = 0;
			p2wns3P = 0;
			p2wdt3P = 0;
			p2ls3P = 0;
			p2lns3P = 0;
			p2ldt3P = 1;
			$('#p2wns3P').css('color', '#9DC8C8');
			$('#p2ws3P').css('color', '#9DC8C8');
			$('#p2wdt3P').css('color', '#9DC8C8');
			$('#p2ls3P').css('color', '#9DC8C8');
			$('#p2lns3P').css('color', '#9DC8C8');
		}
		else {
			$('#p2ldt3P').css('color', '#9DC8C8');
			p2ldt3P = 0;
		}
	});
	$('#p2au3P').click(function() {
		if(p2rapcount3P === 0 || p2rapcount3P === 1 || p2rapcount3P === 2 || p2rapcount3P === 3) {
			p2rapcount3P = p2rapcount3P + 1;
			$('#p2rapcount3P').html(p2rapcount3P + ' times');
		}
	});
	$('#p2ad3P').click(function() {
		if(p2rapcount3P === 1 || p2rapcount3P === 2 || p2rapcount3P === 3 || p2rapcount3P === 4) {
			p2rapcount3P = p2rapcount3P - 1;
			$('#p2rapcount3P').html(p2rapcount3P + ' times');
		}
	});
	$('#p3ws3P').click(function() {
		if(p3ws3P === 0) {
			$('#p3ws3P').css('color', 'black');
			p3ws3P = 1;
			p3wns3P = 0;
			p3wdt3P = 0;
			p3ls3P = 0;
			p3lns3P = 0;
			p3ldt3P = 0;
			$('#p3wns3P').css('color', '#9DC8C8');
			$('#p3wdt3P').css('color', '#9DC8C8');
			$('#p3ls3P').css('color', '#9DC8C8');
			$('#p3lns3P').css('color', '#9DC8C8');
			$('#p3ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p3ws3P').css('color', '#9DC8C8');
			p3ws3P = 0;
		}
	});
	$('#p3wns3P').click(function() {
		if(p3wns3P === 0) {
			$('#p3wns3P').css('color', 'black');
			p3ws3P = 0;
			p3wns3P = 1;
			p3wdt3P = 0;
			p3ls3P = 0;
			p3lns3P = 0;
			p3ldt3P = 0;
			$('#p3ws3P').css('color', '#9DC8C8');
			$('#p3wdt3P').css('color', '#9DC8C8');
			$('#p3ls3P').css('color', '#9DC8C8');
			$('#p3lns3P').css('color', '#9DC8C8');
			$('#p3ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p3wns3P').css('color', '#9DC8C8');
			p3wns3P = 0;
		}
	});
	$('#p3wdt3P').click(function() {
		if(p3wdt3P === 0) {
			$('#p3wdt3P').css('color', 'black');
			p3wdt3P = 0;
			p3wns3P = 0;
			p3wdt3P = 1;
			p3ls3P = 0;
			p3lns3P = 0;
			p3ldt3P = 0;
			$('#p3wns3P').css('color', '#9DC8C8');
			$('#p3ws3P').css('color', '#9DC8C8');
			$('#p3ls3P').css('color', '#9DC8C8');
			$('#p3lns3P').css('color', '#9DC8C8');
			$('#p3ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p3wdt3P').css('color', '#9DC8C8');
			p3wdt3P = 0;
		}
	});
	$('#p3ls3P').click(function() {
		if(p3ls3P === 0) {
			$('#p3ls3P').css('color', 'black');
			p3wdt3P = 0;
			p3wns3P = 0;
			p3wdt3P = 0;
			p3ls3P = 1;
			p3lns3P = 0;
			p3ldt3P = 0;
			$('#p3wns3P').css('color', '#9DC8C8');
			$('#p3ws3P').css('color', '#9DC8C8');
			$('#p3wdt3P').css('color', '#9DC8C8');
			$('#p3lnss3P').css('color', '#9DC8C8');
			$('#p3ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p3ls3P').css('color', '#9DC8C8');
			p3ls3P = 0;
		}
	});
	$('#p3lns3P').click(function() {
		if(p3lns3P === 0) {
			$('#p3lns3P').css('color', 'black');
			p3wdt3P = 0;
			p3wns3P = 0;
			p3wdt3P = 0;
			p3ls3P = 0;
			p3lns3P = 1;
			p3ldt3P = 0;
			$('#p3wns3P').css('color', '#9DC8C8');
			$('#p3ws3P').css('color', '#9DC8C8');
			$('#p3wdt3P').css('color', '#9DC8C8');
			$('#p3ls3P').css('color', '#9DC8C8');
			$('#p3ldt3P').css('color', '#9DC8C8');
		}
		else {
			$('#p3lns3P').css('color', '#9DC8C8');
			p3lns3P = 0;
		}
	});
	$('#p3ldt3P').click(function() {
		if(p3ldt3P === 0) {
			$('#p3ldt3P').css('color', 'black');
			p3wdt3P = 0;
			p3wns3P = 0;
			p3wdt3P = 0;
			p3ls3P = 0;
			p3lns3P = 0;
			p3ldt3P = 1;
			$('#p3wns3P').css('color', '#9DC8C8');
			$('#p3ws3P').css('color', '#9DC8C8');
			$('#p3wdt3P').css('color', '#9DC8C8');
			$('#p3ls3P').css('color', '#9DC8C8');
			$('#p3lns3P').css('color', '#9DC8C8');
		}
		else {
			$('#p3ldt3P').css('color', '#9DC8C8');
			p3ldt3P = 0;
		}
	});
	$('#p3au3P').click(function() {
		if(p3rapcount3P === 0 || p3rapcount3P === 1 || p3rapcount3P === 2 || p3rapcount3P === 3) {
			p3rapcount3P = p3rapcount3P + 1;
			$('#p3rapcount3P').html(p3rapcount3P + ' times');
		}
	});
	$('#p3ad3P').click(function() {
		if(p3rapcount3P === 1 || p3rapcount3P === 2 || p3rapcount3P === 3 || p3rapcount3P === 4) {
			p3rapcount3P = p3rapcount3P - 1;
			$('#p3rapcount3P').html(p3rapcount3P + ' times');
		}
	});
	$('.doubler').click(function() {
		if(doubler === 0) {
			$('.doubler').css('color', 'black');
			doubler = 1;
		}
		else {
			$('.doubler').css('color', '#9DC8C8');
			doubler = 0;
		}
	});
	$('#p1pick3P').click(function() {
		if(p1picked3P === 0) {
			$('#p1pick3P').css('color', 'black');
			p1picked3P = 1;
			p2picked3P = 0;
			p3picked3P = 0;
			$('#p2pick3P').css('color', '#9DC8C8');
			$('#p3pick3P').css('color', '#9DC8C8');
			$('#p1dd3P').slideDown(250);
			$('#p2dd3P').slideUp(250);
			$('#p3dd3P').slideUp(250);
		}
		else {
			$('#p1pick3P').css('color', '#9DC8C8');
			p1picked3P = 0;
			$('#p1dd3P').slideUp(250);
		}
	});
	$('#p2pick3P').click(function() {
		if(p2picked3P === 0) {
			$('#p2pick3P').css('color', 'black');
			p1picked3P = 0;
			p2picked3P = 1;
			p3picked3P = 0;
			$('#p1pick3P').css('color', '#9DC8C8');
			$('#p3pick3P').css('color', '#9DC8C8');
			$('#p2dd3P').slideDown(250);
			$('#p1dd3P').slideUp(250);
			$('#p3dd3P').slideUp(250);
		}
		else {
			$('#p2pick3P').css('color', '#9DC8C8');
			p2picked3P = 0;
			$('#p2dd3P').slideUp(250);
		}
	});
	$('#p3pick3P').click(function() {
		if(p3picked3P === 0) {
			$('#p3pick3P').css('color', 'black');
			p1picked3P = 0;
			p2picked3P = 0;
			p3picked3P = 1;
			$('#p2pick3P').css('color', '#9DC8C8');
			$('#p1pick3P').css('color', '#9DC8C8');
			$('#p3dd3P').slideDown(250);
			$('#p2dd3P').slideUp(250);
			$('#p1dd3P').slideUp(250);
		}
		else {
			$('#p3pick3P').css('color', '#9DC8C8');
			p3picked3P = 0;
			$('#p3dd3P').slideUp(250);
		}
	});
	$('#score3P').click(function() {
		if($('#p1dd3P').is(':visible')) {
			if(p1ws3P === 1) {
				var p1scorechange3P = 2;
				var p2scorechange3P = -1;
				var p3scorechange3P = -1;
			}
			else if(p1wns3P === 1) {
				var p1scorechange3P = 4;
				var p2scorechange3P = -2;
				var p3scorechange3P = -2;
			}
			else if(p1wdt3P === 1) {
				var p1scorechange3P = 6;
				var p2scorechange3P = -3;
				var p3scorechange3P = -3;
			}
			else if(p1ls3P === 1) {
				var p1scorechange3P = -2;
				var p1scorechange3P = 1;
				var p1scorechange3P = 1;
			}
			else if(p1lns3P === 1) {
				var p1scorechange3P = -4;
				var p2scorechange3P = 2;
				var p2scorechange3P = 2;
			}
			else if(p1ldt3P === 1) {
				var p1scorechange3P = -6;
				var p2scorechange3P = 3;
				var p3scorechange3P = 3;
			}

			if(doubler === 0 && p1rapcount3P === 0) {
				p1score3P = p1scorechange3P + p1score3P;
				p2score3P = p2scorechange3P + p2score3P;
				p3score3P = p3scorechange3P + p3score3P;
				$('#player13P').html(p1score3P);
				$('#player23P').html(p2score3P);
				$('#player33P').html(p3score3P);
			}
			else {
				p1score3P = (p1scorechange3P * ((doubler * 2) + p1rapcount3P)) + p1score3P;
				p2score3P = (p2scorechange3P * ((doubler * 2) + p1rapcount3P)) + p2score3P;
				p3score3P = (p3scorechange3P * ((doubler * 2) + p1rapcount3P)) + p3score3P;
				$('#player13P').html(p1score3P);
				$('#player23P').html(p2score3P);
				$('#player33P').html(p3score3P);	
			}
		}
		else if($('#p2dd3P').is(':visible')) {
			if(p2ws3P === 1) {
				var p2scorechange3P = 2;
				var p1scorechange3P = -1;
				var p3scorechange3P = -1;
			}
			else if(p2wns3P === 1) {
				var p2scorechange3P = 4;
				var p1scorechange3P = -2;
				var p3scorechange3P = -2;
			}
			else if(p2wdt3P === 1) {
				var p2scorechange3P = 6;
				var p1scorechange3P = -3;
				var p3scorechange3P = -3;
			}
			else if(p2ls3P === 1) {
				var p2scorechange3P = -2;
				var p1scorechange3P = 1;
				var p3scorechange3P = 1;
			}
			else if(p2lns3P === 1) {
				var p2scorechange3P = -4;
				var p1scorechange3P = 2;
				var p3scorechange3P = 2;
			}
			else if(p2ldt3P === 1) {
				var p2scorechange3P = -6;
				var p1scorechange3P = 3;
				var p3scorechange3P = 3;
			}
			if(doubler === 0 && p2rapcount3P === 0) {
				p1score3P = p1scorechange3P + p1score3P;
				p2score3P = p2scorechange3P + p2score3P;
				p3score3P = p3scorechange3P + p3score3P;
				$('#player13P').html(p1score3P);
				$('#player23P').html(p2score3P);
				$('#player33P').html(p3score3P);
			}
			else {
				p1score3P = (p1scorechange3P * ((doubler * 2) + p2rapcount3P)) + p1score3P;
				p2score3P = (p2scorechange3P * ((doubler * 2) + p2rapcount3P)) + p2score3P;
				p3score3P = (p3scorechange3P * ((doubler * 2) + p2rapcount3P)) + p3score3P;
				$('#player13P').html(p1score3P);
				$('#player23P').html(p2score3P);
				$('#player33P').html(p3score3P);	
			}
		}
		else if($('#p3dd3P').is(':visible')) {
			if(p3ws3P === 1) {
				var p3scorechange3P = 2;
				var p1scorechange3P = -1;
				var p2scorechange3P = -1;
			}
			else if(p3wns3P === 1) {
				var p3scorechange3P = 4;
				var p1scorechange3P = -2;
				var p2scorechange3P = -2;
			}
			else if(p3wdt3P === 1) {
				var p3scorechange3P = 6;
				var p1scorechange3P = -3;
				var p2scorechange3P = -3;
			}
			else if(p3ls3P === 1) {
				var p3scorechange3P = -2;
				var p1scorechange3P = 1;
				var p2scorechange3P = 1;
			}
			else if(p3lns3P === 1) {
				var p3scorechange3P = -4;
				var p1scorechange3P = 2;
				var p2scorechange3P = 2;
			}
			else if(p3ldt3P === 1) {
				var p3scorechange3P = -6;
				var p1scorechange3P = 3;
				var p2scorechange3P = 3;
			}
			if(doubler === 0 && p3rapcount3P === 0) {
				p1score3P = p1scorechange3P + p1score3P;
				p2score3P = p2scorechange3P + p2score3P;
				p3score3P = p3scorechange3P + p3score3P;
				$('#player13P').html(p1score3P);
				$('#player23P').html(p2score3P);
				$('#player33P').html(p3score3P);
			}
			else {
				p1score3P = (p1scorechange3P*((doubler*2) + p3rapcount3P)) + p1score3P;
				p2score3P = (p2scorechange3P*((doubler*2) + p3rapcount3P)) + p2score3P;
				p3score3P = (p3scorechange3P*((doubler*2) + p3rapcount3P)) + p3score3P;
				$('#player13P').html(p1score3P);
				$('#player23P').html(p2score3P);
				$('#player33P').html(p3score3P);	
			}
		}
		$('.pick-dropdown').slideUp(250);
		$('.picker').css('color', '#58C9B9');
		$('.scoring-attribute').css('color', '#58C9B9');
		 p1picked3P = 0;
		 p2picked3P = 0;
		 p3picked3P = 0;
		 p1ws3P = 0;
		 p1wns3P = 0;
		 p1wdt3P = 0;
		 p1ls3P = 0;
		 p1lns3P = 0;
		 p1ldt3P = 0;
		 doubler = 0;
		 p2ws3P = 0;
		 p2wns3P = 0;
		 p2wdt3P = 0;
		 p2ls3P = 0;
		 p2lns3P = 0;
		 p2ldt3P = 0;
		 p3ws3P = 0;
		 p3wns3P = 0;
		 p3wdt3P = 0;
		 p3ls3P = 0;
		 p3lns3P = 0;
		 p3ldt3P = 0;
		 p1rapcount3P = 0;
		 p2rapcount3P = 0;
		 p3rapcount3P = 0;
	});
});