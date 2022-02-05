barba.init({
	transitions: [
		//showcase transition
		{
			name: "default",
			leave(data) {
				console.log(data);
			},
			enter(data) {},
		},
	],
});
