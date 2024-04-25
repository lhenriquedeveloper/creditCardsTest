export const insertMaskInDate = (date: string) => {
  const noMask = date.replace(/\D/g, "");
  const { length } = noMask;

  // Verifica se a data não excede o comprimento máximo
  if (length <= 8) {
    // Aplica a máscara no formato AAAA/MM/DD
    return noMask.replace(/(\d{4})(\d{2})(\d{2})/, "$1/$2/$3").slice(0, 10); // Limita o comprimento da string para AAAA/MM/DD
  }

  return date;
};
