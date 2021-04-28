import Typewriter from 'react-simple-typewriter';
const imageapi = [
	{
		src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
		thumbnail:
			'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		customOverlay: [
			<Typewriter
				loop
				cursor
				cursorStyle="_"
				typeSpeed={120}
				deleteSpeed={100}
				delaySpeed={1000}
				words={['Capture .', 'Share .', 'Explore .']}
				onLoop={(loopCount) =>
					console.log(`Just completed loop ${loopCount}`)
				}
			/>,
		],

		tags: [{ value: 'Nature', title: 'Nature' }],
		caption: 'After Rain (Jeshu John - designerspics.com)',
	},
	{
		src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
		thumbnail:
			'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		tags: [
			{ value: 'Ocean', title: 'Ocean' },
			{ value: 'People', title: 'People' },
		],
		thumbnailCaption: [
			// <Typewriter
			// 	loop
			// 	cursor
			// 	cursorStyle="_"
			// 	typeSpeed={120}
			// 	deleteSpeed={100}
			// 	delaySpeed={1000}
			// 	words={['Capture .', 'Share .', 'Explore .']}
			// 	onLoop={(loopCount) =>
			// 		console.log(`Just completed loop ${loopCount}`)
			// 	}
			// />,
		],
		caption: 'Boats (Jeshu John - designerspics.com)',
	},

	{
		src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
		thumbnail:
			'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
	},
	{
		src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
		thumbnail:
			'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: '8H (gratisography.com)',
	},
	{
		src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
		thumbnail:
			'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: '286H (gratisography.com)',
	},
	{
		src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
		thumbnail:
			'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: '315H (gratisography.com)',
	},
	{
		src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
		thumbnail:
			'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		// isSelected: true,
		caption: '201H (gratisography.com)',
	},
	{
		src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
		thumbnail:
			'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: 'Big Ben (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg',
		thumbnail:
			'https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
		thumbnail:
			'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: 'Wood Glass (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
		thumbnail:
			'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		// isSelected: true,
		caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
		thumbnail:
			'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		customOverlay: [
			<Typewriter
				loop
				cursor
				cursorStyle="_"
				typeSpeed={120}
				deleteSpeed={100}
				delaySpeed={1000}
				words={['Capture .', 'Share .', 'Explore .']}
				onLoop={(loopCount) =>
					console.log(`Just completed loop ${loopCount}`)
				}
			/>,
		],

		tags: [{ value: 'Nature', title: 'Nature' }],
		caption: 'After Rain (Jeshu John - designerspics.com)',
	},
	{
		src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
		thumbnail:
			'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		tags: [
			{ value: 'Ocean', title: 'Ocean' },
			{ value: 'People', title: 'People' },
		],
		thumbnailCaption: [
			// <Typewriter
			// 	loop
			// 	cursor
			// 	cursorStyle="_"
			// 	typeSpeed={120}
			// 	deleteSpeed={100}
			// 	delaySpeed={1000}
			// 	words={['Capture .', 'Share .', 'Explore .']}
			// 	onLoop={(loopCount) =>
			// 		console.log(`Just completed loop ${loopCount}`)
			// 	}
			// />,
		],
		caption: 'Boats (Jeshu John - designerspics.com)',
	},

	{
		src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
		thumbnail:
			'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
	},
	{
		src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
		thumbnail:
			'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: '8H (gratisography.com)',
	},
	{
		src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
		thumbnail:
			'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: '286H (gratisography.com)',
	},
	{
		src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
		thumbnail:
			'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: '315H (gratisography.com)',
	},
	{
		src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
		thumbnail:
			'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		// isSelected: true,
		caption: '201H (gratisography.com)',
	},
	{
		src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
		thumbnail:
			'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: 'Big Ben (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg',
		thumbnail:
			'https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
		thumbnail:
			'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: 'Wood Glass (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
		thumbnail:
			'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		// isSelected: true,
		caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
		thumbnail:
			'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		customOverlay: [
			<Typewriter
				loop
				cursor
				cursorStyle="_"
				typeSpeed={120}
				deleteSpeed={100}
				delaySpeed={1000}
				words={['Capture .', 'Share .', 'Explore .']}
				onLoop={(loopCount) =>
					console.log(`Just completed loop ${loopCount}`)
				}
			/>,
		],

		tags: [{ value: 'Nature', title: 'Nature' }],
		caption: 'After Rain (Jeshu John - designerspics.com)',
	},
	{
		src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
		thumbnail:
			'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		tags: [
			{ value: 'Ocean', title: 'Ocean' },
			{ value: 'People', title: 'People' },
		],
		thumbnailCaption: [
			// <Typewriter
			// 	loop
			// 	cursor
			// 	cursorStyle="_"
			// 	typeSpeed={120}
			// 	deleteSpeed={100}
			// 	delaySpeed={1000}
			// 	words={['Capture .', 'Share .', 'Explore .']}
			// 	onLoop={(loopCount) =>
			// 		console.log(`Just completed loop ${loopCount}`)
			// 	}
			// />,
		],
		caption: 'Boats (Jeshu John - designerspics.com)',
	},

	{
		src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
		thumbnail:
			'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
	},
	{
		src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
		thumbnail:
			'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: '8H (gratisography.com)',
	},
	{
		src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
		thumbnail:
			'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: '286H (gratisography.com)',
	},
	{
		src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
		thumbnail:
			'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: '315H (gratisography.com)',
	},
	{
		src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
		thumbnail:
			'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		// isSelected: true,
		caption: '201H (gratisography.com)',
	},
	{
		src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
		thumbnail:
			'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: 'Big Ben (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg',
		thumbnail:
			'https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)',
	},
	{
		src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
		thumbnail:
			'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
		thumbnailWidth: 640,
		thumbnailHeight: 320,
		caption: 'Wood Glass (Tom Eversley - isorepublic.com)',
	},
];
export default imageapi;

// const imageapi = [
// 	{
// 		src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
// 		thumbnail:
// 			'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
// 		thumbnailWidth: 320,
// 		thumbnailHeight: 174,
// 		// isSelected: true,
// 		tags: [
// 			{ value: 'Nature', title: 'Nature' },
// 			{ value: 'Flora', title: 'Flora' },
// 		],
// 		caption: 'After Rain (Jeshu John - designerspics.com)',
// 	},
// 	{
// 		src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
// 		thumbnail:
// 			'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
// 		thumbnailWidth: 320,
// 		thumbnailHeight: 212,
// 		tags: [
// 			{ value: 'Ocean', title: 'Ocean' },
// 			{ value: 'People', title: 'People' },
// 		],
// 		caption: 'Boats (Jeshu John - designerspics.com)',
// 	},

// 	{
// 		src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
// 		thumbnail:
// 			'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
// 		thumbnailWidth: 320,
// 		thumbnailHeight: 212,
// 	},
// 	{
// 		src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
// 		thumbnail:
// 			'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg',
// 		thumbnailWidth: 320,
// 		thumbnailHeight: 320,
// 		caption: '8H (gratisography.com)',
// 	},
// 	{
// 		src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
// 		thumbnail:
// 			'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
// 		thumbnailWidth: 320,
// 		thumbnailHeight: 190,
// 		caption: '286H (gratisography.com)',
// 	},
// 	{
// 		src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
// 		thumbnail:
// 			'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
// 		thumbnailWidth: 320,
// 		thumbnailHeight: 148,
// 		caption: '315H (gratisography.com)',
// 	},
// 	{
// 		src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
// 		thumbnail:
// 			'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
// 		thumbnailWidth: 320,
// 		thumbnailHeight: 213,
// 		// isSelected: true,
// 		caption: '201H (gratisography.com)',
// 	},
// 	{
// 		src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
// 		thumbnail:
// 			'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
// 		thumbnailWidth: 248,
// 		thumbnailHeight: 320,
// 		caption: 'Big Ben (Tom Eversley - isorepublic.com)',
// 	},
// 	{
// 		src: 'https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg',
// 		thumbnail:
// 			'https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
// 		thumbnailWidth: 320,
// 		thumbnailHeight: 113,
// 		// isSelected: true,
// 		caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)',
// 	},
// 	{
// 		src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
// 		thumbnail:
// 			'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
// 		thumbnailWidth: 313,
// 		thumbnailHeight: 320,
// 		caption: 'Wood Glass (Tom Eversley - isorepublic.com)',
// 	},
// 	{
// 		src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
// 		thumbnail:
// 			'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
// 		thumbnailWidth: 320,
// 		thumbnailHeight: 213,
// 		// isSelected: true,
// 		caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)',
// 	},
// ];
// export default imageapi;
