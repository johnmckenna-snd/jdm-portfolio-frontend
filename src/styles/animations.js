export default {
	fadeIn: `
		0% {
			opacity: 0
		}
		30% {
			opacity: .35
		}
		100% {
			opacity: 1
		}
	`,
	timing1: `cubic-bezier(0.1, 0.7, 1.0, 0.1)`,
	moveOnLeft: `
		  0% {
		    transform: scale(0);
		    transform-origin: -2000px 0px;
				opacity: 1
		  }
		  100% {
		    transform: scale(1);
		    transform-origin: 0;
				opacity: 1
		  }
		`,
	timing2: `cubic-bezier(0.390, 0.575, 0.565, 1.000)`,
	timing3: `linear(2)`
};
