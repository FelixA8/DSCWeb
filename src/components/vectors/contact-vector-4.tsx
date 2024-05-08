function Icon() {
	return (
		<svg
			width="100vw"
			height="175"
			fill="none"
			className="-z-10 absolute bottom-8 left-0 w-full"
		>
			<path
				fill="#41ABC3"
				fillRule="evenodd"
				d="M0 29.65l17.917-10.383C35.833 8.885 71.667-11.88 107.5 8.885c35.833 20.764 71.667 83.057 107.5 93.44 35.833 10.382 71.667-31.147 107.5-55.372s71.667-31.147 89.583-34.608L430 8.885V175H0V29.65z"
				clipRule="evenodd"
				style={{
					transform: "scaleX(5)",
				}}
			></path>
		</svg>
	);
}

export default Icon;
