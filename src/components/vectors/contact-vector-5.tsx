import React from "react";

function Icon() {
	return (
		<svg
			width="100vw"
			height="175"
			fill="none"
			className="absolute -bottom-3 left-0 w-full"
		>
			<path
				fill="#4C58A4"
				fillRule="evenodd"
				style={{
					transform: "scaleX(5)",
				}}
				d="M0 0l14.333 20.875C28.667 41.75 57.333 83.5 86 90.458c28.667 6.959 57.333-20.875 86-24.354 28.667-3.479 57.333 17.396 86 27.834 28.667 10.437 57.333 10.437 86 3.479 28.667-6.959 57.333-20.875 71.667-27.834L430 62.625V167H0V0z"
			></path>
		</svg>
	);
}

export default Icon;
