function generateRandomDigits(length: number): number[] {
	return Array.from({ length }, () => Math.floor(Math.random() * 10));
}

function calculateVerifier(digits: number[], multipliers: number[]): number {
	const sum = digits.reduce((acc, digit, index) => acc + digit * multipliers[index], 0);
	const remainder = sum % 11;
	return remainder < 2 ? 0 : 11 - remainder;
}

export function generateCPF(formatted = false): string {
	const cpfBase = generateRandomDigits(9);
	cpfBase.push(calculateVerifier(cpfBase, Array.from({ length: 9 }, (_, i) => 10 - i)));
	cpfBase.push(calculateVerifier(cpfBase, Array.from({ length: 10 }, (_, i) => 11 - i)));

	const cpf = cpfBase.join('');
	return formatted ? `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}` : cpf;
}

export function generateCNPJ(formatted = false): string {
	const cnpjBase = generateRandomDigits(12);
	cnpjBase.push(calculateVerifier(cnpjBase, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]));
	cnpjBase.push(calculateVerifier(cnpjBase, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]));

	const cnpj = cnpjBase.join('');
	return formatted ? `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}` : cnpj;
}
