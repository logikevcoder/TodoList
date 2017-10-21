// Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event) {
	// Stop the span from bubbling up and effecting parent elements
	event.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

$("input[type ='text']").keypress(function() {
	if (event.which === 13) {
		// Grabbing new todo text from input
		let todoText = $(this).val();
		// Create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});