// javascript library for simple game development

document.getElementById('option1').innerHTML = 'Klik hier om te starten';
document.getElementById('level_title').innerHTML = '';
document.getElementById('status').innerHTML = 'Je word wakker. Je kijkt rond en probeert dingen te vinden die je kunnen helpen herinneren waar je bent en wat er gebeurt is. Je kijkt om je heen en je weet het weer, er is een zombie apocalypse. Je moet proberen te overleven. <br><br>Er zijn steeds een of meerdere knoppen met opties te zien. Maak de juiste keuze om verder te komen.';

var HasBrick = false;
var HasKnife = false;

// jquery variant
//$('#option1').html('Dit is keuze 1');


// https://www.youtube.com/watch?v=4ba1BqJ4S2M

function Level1()
{
	console.log("Level1()");


	document.getElementById('level_title').innerHTML = 'Level 1';
	document.getElementById('level_image').src = 'img/level1.jpg';
	document.getElementById('status').innerHTML = 'Je ziet een weg voor je liggen, een steegje rechts en bedrijfspanden links. Waar ga je naartoe?';


	var opt1 = document.getElementById('option1');
	opt1.style.display = 'inline-block'
	opt1.innerHTML = 'Ga naar het bedrijfspand';
	opt1.setAttribute("onClick", "javascript:Level2();");


	var opt2 = document.getElementById('option2');
	opt2.style.display = 'inline-block'
	opt2.innerHTML = 'Ga over de weg voor je';
	opt2.setAttribute("onClick", "javascript:Level9();");
 

	var opt3 = document.getElementById('option3');
	opt3.style.display ='inline-block'
	opt3.innerHTML = 'Ga rechts van je het steegje in';
	opt3.setAttribute("onClick", "javascript:Level11();");

}

function Level2() 
{
	console.log("Level2()");

	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'img/level2.jpg';
	document.getElementById('status').innerHTML = 'Je komt aan bij het bedrijfspand. Het is van een woningverhuurbedrijf. Er is nog een schoonmaker binnen maar hij is niet alleen, er zitten zombies achter de schoonmaker aan. Inmiddels hoor je achter je ook zombies aan komen. Er staat een container voor het gebouw. Wat doe je nu?';

	var opt1 = document.getElementById('option1');
	opt1.style.display ='inline-block'
	opt1.innerHTML = 'Probeer de deur van het pand te openen om hem te redden';
	opt1.setAttribute("onClick", "javascript:Level3();");

	var opt2 = document.getElementById('option2');
	opt2.style.display ='inline-block'
	opt2.innerHTML = 'Kijk of er in de container iets ligt';
	opt2.setAttribute("onClick", "javascript:Level6();");

	var opt3 = document.getElementById('option3');
	opt3.style.display ='inline-block'
	opt3.innerHTML = 'Ga terug';
	opt3.setAttribute("onClick", "javascript:Level1();");
}

function Level3()
{
	console.log("Level3()");

	document.getElementById('level_title').innerHTML = 'Level 3';
	document.getElementById('level_image').src = 'img/level3.jpg';
	document.getElementById('status').innerHTML = 'Je probeert de deur te openen maar het lukt niet. De deur zit op slot en de zombies die achter je waren zijn inmiddels heel erg dichtbij gekomen. De man binnen heeft je gezien en smeekt dat je op moet schieten en hem uit het gebouw moet krijgen. Wat doe je nu?';

	var opt1 = document.getElementById('option1');
	opt1.style.display ='inline-block'
	opt1.innerHTML = 'Gooi iets tegen het raam';
	opt1.onclick = function()
	{
		if(HasBrick)
		{
			Level4();
		} else {
			alert('Je hebt niks');
		}
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display ='inline-block'
	opt2.innerHTML = 'Probeer nog bij de container te komen.';
	opt2.setAttribute("onClick", "javascript:Level6();");

	var opt3 = document.getElementById('option3');
	opt3.style.display ='inline-block'
	opt3.innerHTML = 'Ga terug';
	opt3.setAttribute("onClick", "javascript:LevelLose2();");
}

function Level4()
{
	console.log("Level4()");

	document.getElementById('level_title').innerHTML = 'Level 4';
	document.getElementById('level_image').src = 'img/level4.jpg';
	document.getElementById('status').innerHTML = 'Je hebt het raam kapot gegooit waardoor de man snel naar buiten kan. De man heeft een brandblusser waarmee hij nog een paar zombies weg slaat. Waar doe je nu?';

	var opt1 = document.getElementById('option1');
	opt1.style.display ='inline-block'
	opt1.innerHTML = 'Probeer door de zombies te vechten en terug te gaan naar waar je vandaan kwam';
	opt1.setAttribute("onClick", "javascript:LevelLose1();");

	var opt2 = document.getElementById('option2');
	opt2.style.display ='inline-block'
	opt2.innerHTML = 'Probeer alle zombies te vermoorden';
	opt2.setAttribute("onClick", "javascript:LevelLose2();");

	var opt3 = document.getElementById('option3');
	opt3.style.display ='inline-block'
	opt3.innerHTML = 'Ren de berm op naar de autoweg';
	opt3.setAttribute("onClick", "javascript:Level5();");
}

function Level5()
{
	console.log("Level5()");

	document.getElementById('level_title').innerHTML = 'Level 5';
	document.getElementById('level_image').src = 'img/Win1.jpg';
	document.getElementById('status').innerHTML = 'Op de weg rijdt een auto met vluchtende mensen, zodra je seint voor hulp stoppen de mensen en kan je met hen meerijden naar een veilig gemaakte plek.';

	var opt1 = document.getElementById('option1');
	opt1.style.display ='none'

	var opt2 = document.getElementById('option2');
	opt2.style.display ='none'

	var opt3 = document.getElementById('option3');
	opt3.style.display ='none'
}

function Level6()
{
	console.log("Level6()");

	document.getElementById('level_title').innerHTML = 'Level 6';
	document.getElementById('level_image').src = 'img/Level6.jpg';
	document.getElementById('status').innerHTML = 'Je kijkt in de container terwijl zombies steeds dichterbij komen. Er ligt een Baksteen en een mes. Wat neem je mee?';
	
	var opt1 = document.getElementById('option1');
	if(HasKnife)
	{
		opt1.style.display = ('none')
	}else
	{
		opt1.style.display = ('inline-block')
	}
	opt1.innerHTML = 'Pak het mes';
	opt1.onclick = function()
	{
		if(HasBrick)
		{
			alert("je kan niet meer dragen")
		}else
		{
			HasKnife = true;
			console.log("Knife");
			Level7();
		}
	}

	var opt2 = document.getElementById('option2');
	if(HasBrick)
	{
		opt2.style.display = ('none')
	}else
	{
		opt2.style.display = ('inline-block')
	}
	opt2.innerHTML = 'Pak de baksteen';
	opt2.onclick = function()
	{
		if(HasKnife)
		{
			alert("je kan niet meer dragen")
		}else
		{
			HasBrick = true;
			console.log("Baksteen");
			Level7();
		}
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display ='inline-block'
	opt3.innerHTML = 'Ga terug';
	opt3.setAttribute("onClick", "javascript:Level7();");
}

function Level7()
{
	console.log("Level7()");

	document.getElementById('level_title').innerHTML = 'Level 7';
	document.getElementById('level_image').src = 'img/Level3.jpg';
	document.getElementById('status').innerHTML = 'De zombies zijn direct achter je als je nu niks doet overleef je het niet';

	var opt1 = document.getElementById('option1');
	opt1.style.display ='inline-block'
	opt1.innerHTML = 'Gooi iets tegen het raam';
	opt1.onclick = function()
	{
		if(HasBrick)
		{
			Level4();
		} else if(HasKnife)
		{
			alert("Het heeft geen zin om het mes tegen het raam te gooien");
		}

		 else {
			alert('Je hebt niks');
		}
	}

	var opt2 = document.getElementById('option2');
	opt2.style.display ='inline-block'
	opt2.innerHTML = 'Vermoord de zombies';
	opt2.onclick = function()
	{
		if(HasKnife)
		{
			Level8();
		}
		else
		{
			LevelLose2();
		}
	}

	var opt3 = document.getElementById('option3');
	opt3.style.display ='inline-block'
	opt3.innerHTML = 'Ga terug';
	opt3.setAttribute("onClick", "javascript:LevelLose1();");
}

function Level8()
{
	console.log("Level8()");


	document.getElementById('level_title').innerHTML = 'Level 8';
	document.getElementById('level_image').src = 'img/level1.jpg';
	document.getElementById('status').innerHTML = 'Je hebt de zombies neergestoken en bent weer terug bij het begin. Wat doe je nu?';


	var opt1 = document.getElementById('option1');
	opt1.style.display = 'inline-block'
	opt1.innerHTML = 'Ga terug naar het bedrijfspand';
	opt1.setAttribute("onClick", "javascript:Level2();");


	var opt2 = document.getElementById('option2');
	opt2.style.display = 'inline-block'
	opt2.innerHTML = 'Ga over de weg voor je';
	opt2.setAttribute("onClick", "javascript:Level9();");


	var opt3 = document.getElementById('option3');
	opt3.style.display ='inline-block'
	opt3.innerHTML = 'Ga rechts van je het steegje in';
	opt3.setAttribute("onClick", "javascript:Level11();");

}

function Level9()
{
	console.log("Level8()");

	document.getElementById('level_title').innerHTML = 'Level 9';
	document.getElementById('level_image').src = 'img/Level9.jpg';
	document.getElementById('status').innerHTML = 'je bent rechtdoor gelopen. Verderop zie je een groep zombies op een brug staan. Je gaat de zombies niet aankunnen zonder wapen of hulp. Achter de groep lijkt er licht te zijn en je weet niet precies wat het is, maar je moet wel over de brug met zombies om er te komen.';

	var opt1 = document.getElementById('option1');
	opt1.style.display = 'inline-block'
	opt1.innerHTML = 'Ga over de brug';
	opt1.onclick = function()
	{
		if(HasKnife)
		{
			Level10();
		}
		else
		{
			LevelLose1();
		}
	}


	var opt2 = document.getElementById('option2');
	opt2.style.display = 'inline-block'
	opt2.innerHTML = 'Ga terug';
	opt2.setAttribute("onClick", "javascript:Level1();");


	var opt3 = document.getElementById('option3');
	opt3.style.display ='none'
}
function Level10()
{
	console.log("Level8()");

	document.getElementById('level_title').innerHTML = 'Level 10';
	document.getElementById('level_image').src = 'img/Level10.jpg';
	document.getElementById('status').innerHTML = 'Je bent over de brug gekomen. Er is een autoweg. Je kan naar links en naar rechts. Links en achter van je hoor je zombies.'

	var opt1 = document.getElementById('option1');
	opt1.style.display ='inline-block'
	opt1.innerHTML = 'Ga naar links';
	opt1.setAttribute("onClick", "javascript:LevelLose1();");

	var opt2 = document.getElementById('option2');
	opt2.style.display ='inline-block'
	opt2.innerHTML = 'Ga naar rechts';
	opt2.setAttribute("onClick", "javascript:Level12();");

	var opt3 = document.getElementById('option3');
	opt3.style.display ='inline-block'
	opt3.innerHTML = 'Ga terug';
	opt3.setAttribute("onClick", "javascript:LevelLose1();");
}
function Level11()
{
	console.log("Level11()");


	document.getElementById('level_title').innerHTML = 'Level 11';
	document.getElementById('level_image').src = 'img/level11.jpg';
	document.getElementById('status').innerHTML = 'Je loopt het steegje in maar het is geblokkeerd door zombies. Ook achter je hoor je ze aankomen. Wat doe je nu?';

	var opt1 = document.getElementById('option1');
	opt1.style.display = 'inline-block'
	opt1.innerHTML = 'Ga rechtdoor naar de zombies voor je';
	opt1.setAttribute("onClick", "javascript:LevelLose1();");


	var opt2 = document.getElementById('option2');
	opt2.style.display ='inline-block'
	opt2.innerHTML = 'Ga terug';
	opt2.onclick = function()
	{
		if(HasKnife)
		{
			Level8();
		}
		else
		{
			LevelLose1();
		}
	}


	var opt3 = document.getElementById('option3');
	opt3.style.display ='none'
}

function Level12()
{
	console.log("Level12()");

	document.getElementById('level_title').innerHTML = 'Level 12';
	document.getElementById('level_image').src = 'img/Win2.jpg';
	document.getElementById('status').innerHTML = 'Je bent naar rechts gegaan. Na een tijdje zie je een warenhuis waar de lichten branden en mensen lopen. Je bent welkom en je overleeft het.';

	var opt1 = document.getElementById('option1');
	opt1.style.display ='none'

	var opt2 = document.getElementById('option2');
	opt2.style.display ='none'

	var opt3 = document.getElementById('option3');
	opt3.style.display ='none'
}

function LevelLose1()
{
	console.log("LevelLose1()");


	document.getElementById('level_title').innerHTML = 'LevelLose1';
	document.getElementById('level_image').src = 'img/LevelLose1.jpg';
	document.getElementById('status').innerHTML = 'Je probeert door de zombies voor je te komen maar het zijn er veel te veel. Je overleeft niet.';

	var opt1 = document.getElementById('option1');
	opt1.style.display ='none'

	var opt2 = document.getElementById('option2');
	opt2.style.display ='none'

	var opt3 = document.getElementById('option3');
	opt3.style.display ='none'
}

function LevelLose2()
{
	console.log("LevelLose2()");

	document.getElementById('level_title').innerHTML = 'LevelLose2';
	document.getElementById('level_image').src = 'img/LevelLose1.jpg';
	document.getElementById('status').innerHTML = 'De zombies hebben je en je overleeft het niet';

	var opt1 = document.getElementById('option1');
	opt1.style.display ='none'

	var opt2 = document.getElementById('option2');
	opt2.style.display ='none'

	var opt3 = document.getElementById('option3');
	opt3.style.display ='none'
}


function pickup(item)
{
	console.log(items);
	items[item] = true;
	console.log(items);
}