import React from "react";

import styles from "./index.module.scss";

interface Props {
	label: string;
}

const Button = ({ label }: Props) => {
	return (
		<button className={styles.button}>{label}</button>
	)
}

export { Button }