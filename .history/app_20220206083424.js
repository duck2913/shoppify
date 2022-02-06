const tlLeave = gsap.timeline({
	defaults: { duration: 0.75, ease: "Power2.easeOut" },
});
const tlEnter = gsap.timeline({
	defaults: { duration: 0.75, ease: "Power2.easeOut" },
});

//Make the functions for the leave and enter animations
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

const enterAnimation = (current, done, gradient) => {
	const product = current.querySelector(".image-container");
	const text = current.querySelector(".showcase-text");
	const circles = current.querySelectorAll(".circle");
	const arrow = current.querySelector(".showcase-arrow");
	return (
		tlEnter.fromTo(arrow, { opacity: 0, y: 50 }, { opacity: 1, y: 0, onComplete: done }),
		tlEnter.fromTo(product, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, "<"),
		tlEnter.to(
			"body",
			{
				duration: 1,
				attr: {
					backgroundColor: gradient,
				},
			},
			"<",
		),
		tlEnter.fromTo(text, { y: 100, opacity: 0 }, { opacity: 1, y: 0 }, "<"),
		tlEnter.fromTo(
			circles,
			{ y: -200, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.15,
				ease: "back.out(1.7)",
				duration: 1,
			},
			"<",
		)
	);
};

//Run animations
barba.init({
	preventRunning: true,
	transitions: [
		//showcase transitions
		{
			name: "default",
			leave(data) {
				const done = this.async();
				let current = data.current.container;
				leaveAnimation(current, done);
			},
			enter(data) {
				const done = this.async();
				let next = data.next.container;
				let gradient = data.next.namespace;
				getGradient(gradient);
				enterAnimation(next, done, gradient);
			},
		},
	],
});

function getGradient(name) {
	switch (name) {
		case "handbag":
			return "linear-gradient(260deg, #b75d62,#754d4f)";
		case "hat":
			return "linear-gradient(260deg, #5d8cb7,#4c4f70)";
		case "boot":
			return "linear-gradient(260deg, #b27a5c,#7f5450)";
	}
}