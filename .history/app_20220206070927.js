const tlLeave = gsap.timeline({
	defaults: {
		duration: 0.75,
		ease: "Power2.easeOut",
	},
});
const tlEnter = gsap.timeline({
	defaults: {
		duration: 0.75,
		ease: "Power2.easeOut",
	},
});

const leaveAnimation = function (current, done) {
	const product = current.querySelector(".showcase__img");
	const content = current.querySelector(".showcase__content");
};

barba.init({
	transitions: [
		//showcase transition
		{
			name: "default-transition",
			leave(data) {
				const done = this.async;
				let currentContainer = data.current.container;
				gsap.fromTo(
					currentContainer,
					{ opacity: 1 },
					{ duration: 3, opacity: 0, onComplete: done },
				);
			},
			enter(data) {
				let nextContainer = data.next.container;
				const done = this.async;
				gsap.fromTo(
					nextContainer,
					{ opacity: 0 },
					{ duration: 3, opacity: 1, onComplete: done },
				);
			},
		},
	],
});
