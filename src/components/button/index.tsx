import React from "react";

import styles from "./index.module.scss";

interface Props {
	label: string;
	onClick: () => void;
}

const Button = ({ label, onClick }: Props) => {
	return (
		<button onClick={onClick} className={styles.button}>{label}</button>
	)
}

export { Button }