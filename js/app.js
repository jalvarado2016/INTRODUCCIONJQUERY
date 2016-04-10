//ESCONDE SPOILER
$(".spoiler span").hide();

//AGREGA BOTON
$(".spoiler").append("<button>Mostrar Spoiler</button>");

//CUANDO SE PRESIONA EL BOTTON

$(".spoiler button").click(function(){
	$(".spoiler span").show();

	$(this).remove();
})
function enviarAdvertencia()
{
	jQuery(".spoiler").hide().show("slow");
}
$(document).ready(enviarAdvertencia);