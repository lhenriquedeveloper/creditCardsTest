export const formatExpirationDate = (expirationDate: string) => {
  if (
    expirationDate &&
    expirationDate.length === 10 &&
    expirationDate.includes("-")
  ) {
    const [year, month] = expirationDate.split("-");
    return `${month}/${year.slice(2)}`;
  } else {
    return expirationDate;
  }
};
