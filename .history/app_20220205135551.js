barba.init({
	preventRunning: true,
	transitions: [
		//showcase transition
		{
			name: "default-transition",
			leave(data) {
				const done = this.async();
				let currentContainer = data.current.container;
				gsap.fromTo(
					currentContainer,
					{ opacity: 1 },
					{ duration: 3, opacity: 0, onComplete: done },
				);
			},
			enter(data) {
				let nextContainer = data.next.container;
				const done = this.async();
				gsap.fromTo(
					nextContainer,
					{ opacity: 0 },
					{ duration: 3, opacity: 1, onComplete: done },
				);
			},
		},
	],
});
