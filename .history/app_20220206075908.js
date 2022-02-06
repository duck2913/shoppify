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

const leaveAnimation = (currentContainer, done) => {
	const product = currentContainer.querySelector(".showcase__img");
	const content = currentContainer.querySelector(".showcase__content");
	const circles = currentContainer.querySelectorAll(".circle");
	const btnArrow = currentContainer.querySelector(".btn--arrow");
	return (
		tlLeave.fromTo(btnArrow, { y: 0, opacity: 1 }, { y: 50, opacity: 0 }),
		tlLeave.to(product, { y: 50, opacity: 0 }, "<"),
		tlLeave.to(content, { x: 50, opacity: 0, onComplete: done }, "<20%"),
		tlLeave.to(circles, { y: -200, opacity: 0, stagger: 0.15 }, "<10%")
	);
};

barba.init({
	preventRunning: true,
	transitions: [
		//showcase transition
		{
			name: "default",
			leave(data) {
				// const done = this.async();
				let currentContainer = data.current.container;
				// leaveAnimation(currentContainer, done);
				tlLeave.fromTo(currentContainer, { opacity: 1 }, { duration: 1, opacity: 0 });
			},
			enter(data) {
				let nextContainer = data.next.container;
				// const done = this.async();
				tlEnter.fromTo(nextContainer, { opacity: 0 }, { duration: 1, opacity: 1 });
			},
		},
	],
});
