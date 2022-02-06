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
	return (

	);
};

barba.init({
	transitions: [
		//showcase transition
		{
			name: "default-transition",
			leave(data) {
				const done = this.async;
				let currentContainer = data.current.container;
				const product = currentContainer.querySelector(".showcase__img");
				const content = currentContainer.querySelector(".showcase__content");
				const btnArrow = currentContainer.querySelector(".btn--arrow");
                		tlLeave.fromTo(btnArrow, { y: 0, opacity: 1 }, { y: 50, opacity: 0 }),
		console.log("Hello"),
		tlLeave.to(product, { y: 0 }, { y: 50, opacity: 0 }, "<"),
		tlLeave.to(content, { x: 0 }, { x: 50, opacity: 0, onComplete: done }, "<50%")
			},
			enter(data) {
				// let nextContainer = data.next.container;
				// const done = this.async;
				// gsap.fromTo(
				// 	nextContainer,
				// 	{ opacity: 0 },
				// 	{ duration: 3, opacity: 1, onComplete: done },
				// );
			},
		},
	],
});
