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

const leaveAnimation = (current, done) => {
	const product = current.querySelector(".image-container");
	const text = current.querySelector(".showcase-text");
	const circles = current.querySelectorAll(".circle");
	const arrow = current.querySelector(".showcase-arrow");
	return (
		tlLeave.fromTo(arrow, { opacity: 1, y: 0 }, { opacity: 0, y: 50, onComplete: done }),
		tlLeave.fromTo(product, { y: 0, opacity: 1 }, { y: 100, opacity: 0 }, "<"),
		tlLeave.fromTo(text, { y: 0, opacity: 1 }, { opacity: 0, y: 100 }, "<"),
		tlLeave.fromTo(
			circles,
			{ y: 0, opacity: 1 },
			{
				y: -200,
				opacity: 0,
				stagger: 0.15,
				ease: "back.out(1.7)",
				duration: 1,
			},
			"<",
		)
	);
};

barba.init({
	preventRunning: true,
	transitions: [
		//showcase transition
		{
			name: "default",
			once(data) {
				const done = this.async();
				let next = data.next.container;
				enterAnimation(next, done);
			},
			leave(data) {
				const done = this.async();
				let currentContainer = data.current.container;
				// leaveAnimation(currentContainer, done);
				tlLeave.fromTo(
					currentContainer,
					{ opacity: 1 },
					{ duration: 1, opacity: 0, onComplete: done },
				);
			},
			enter(data) {
				const done = this.async();
				let nextContainer = data.next.container;
				tlEnter.fromTo(
					nextContainer,
					{ opacity: 0 },
					{ duration: 1, opacity: 1, onComplete: done },
				);
			},
		},
	],
});
