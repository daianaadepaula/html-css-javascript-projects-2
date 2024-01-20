const buttonsEl = document.querySelectorAll('button');

buttonsEl.forEach(button => {
	button.addEventListener('click', () => {
		console.log("You clicked me!", button.id);
	});
});

