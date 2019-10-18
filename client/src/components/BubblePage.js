import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "./axiosWithAuth";

const BubblePage = () => {
	const [colorList, setColorList] = useState([]);
	const [updateStatus, setUpdateStatus] = useState(false);

	useEffect(() => {
		axiosWithAuth()
			.get("/colors")
			.then(res => {
				setColorList(res.data);
			});
	}, [updateStatus]);

	const updateHandler = () => {
		setUpdateStatus(!updateStatus);
	};

	return (
		<>
			<ColorList
				colors={colorList}
				updateColors={setColorList}
				update={updateHandler}
			/>
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;
