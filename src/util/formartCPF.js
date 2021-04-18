/*
  Formata o CPF,
  Parametro: String
  Return:
    Se final diferente de 14 digitros : false
    Se final = 41 digitos : cpf formatado    
*/

const formatCPF = (text) => {
	const badchars = /[^\d]/g;
	const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/;
	const replace = text.replace(badchars, "");
	const cpf = replace.replace(mask, "$1.$2.$3-$4");

	if (cpf.length !== 14) return false;

	return cpf;
};

export default formatCPF;
