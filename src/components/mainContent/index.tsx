import React, { useState } from "react";


import { Button } from "@components/button";

import '@styles/global.scss';
import {generateCNPJ, generateCPF} from "@utils/generators/cpfCnpj";

const MainContent = () => {
	const [cpf, setCpf] = useState('');
	const [cnpj, setCnpj] = useState('');

	const generateRandomCPF = () => {
		return setCpf(generateCPF());
	}

	const generateRandomCNPJ = () => {
		return setCnpj(generateCNPJ());
	}

	return (
		<main className="container">
			<div>
				<Button label="Gerar CPF" onClick={() => generateRandomCPF()} />
				<input type="text" id="cpf" value={cpf} readOnly />
			</div>
			<div>
				<Button label="Gerar CNPJ" onClick={() => generateRandomCNPJ()} />
				<input type="text" id="cnpj" value={cnpj} readOnly />
			</div>
		</main>
	);
}

export { MainContent }