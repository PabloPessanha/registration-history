export default (number) => {
  if (!number) return number;

  const cleanNumber = number.replace(/[^\d]/g, '');

  if (cleanNumber.length < 3) return cleanNumber;
  if (cleanNumber.length < 7) {
    return `(${cleanNumber.slice(0, 2)}) ${cleanNumber.slice(2)}`;
  }
  if (cleanNumber.length < 11) {
    return `(${cleanNumber.slice(0, 2)}) ${cleanNumber.slice(2, 6)}-${cleanNumber.slice(6)}`;
  }

  return `(${cleanNumber.slice(0, 2)}) ${cleanNumber.slice(2, 7)}-${cleanNumber.slice(7)}`;
};
