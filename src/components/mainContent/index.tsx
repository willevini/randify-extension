import React from "react";

import { Button } from "@components/button";

import '@styles/global.scss';

const MainContent = () => {
	return (
		<main className="container">
			<div>
				<Button label="Gerar CPF" />
				<input type="text" id="cpf" readOnly/>
			</div>
			<div>
				<Button label="Gerar CNPJ" />
				<input type="text" id="cnpj" readOnly/>
			</div>
		</main>
	);
}

export { MainContent }