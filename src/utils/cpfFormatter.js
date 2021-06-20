export default (cpf) => {
  if (!cpf) return cpf;

  const cleanCpf = cpf.replace(/[^\d]/g, '');

  if (cleanCpf.length < 4) return cleanCpf;
  if (cleanCpf.length < 7) {
    return `${cleanCpf.slice(0, 3)}.${cleanCpf.slice(3)}`;
  }
  if (cleanCpf.length < 10) {
    return `${cleanCpf.slice(0, 3)}.${cleanCpf.slice(3, 6)}.${cleanCpf.slice(6)}`;
  }

  return `${cleanCpf.slice(0, 3)}.${cleanCpf.slice(3, 6)}.${cleanCpf.slice(6, 9)}-${cleanCpf.slice(9)}`;
};
