barba.init({
	transitions: [
		//showcase transition
		{
			name: "default",
			leave(data) {
				let currentContainer= data.current.container;
			},
			enter(data) {},
		},
	],
});
