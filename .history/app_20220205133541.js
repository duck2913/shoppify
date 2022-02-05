barba.init({
	transitions: [
		//showcase transition
		{
			name: "default",
			leave(data) {
				let currentContainer = data.current.container;
				gsap.fromTo(currentContainer, { opacity: 1 }, { duration: 1, toVars });
			},
			enter(data) {
				let nextContainer = data.next.container;
			},
		},
	],
});
