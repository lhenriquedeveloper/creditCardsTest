export const checkUserAutenticated = () => {
  const userToken = localStorage.getItem("token");
  return !!userToken;
};
