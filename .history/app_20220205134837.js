const a = document.querySelectorAll('a');
a.forEach(a => a.addEventListener('click', fucntion(e)))

barba.init({
	transitions: [
		//showcase transition
		{
			name: "default-transition",
			leave(data) {
				let currentContainer = data.current.container;
				gsap.fromTo(currentContainer, { opacity: 1 }, { duration: 3, opacity: 0 });
			},
			enter(data) {
				let nextContainer = data.next.container;
				gsap.fromTo(nextContainer, { opacity: 0 }, { duration: 3, opacity: 1 });
			},
		},
	],
});
