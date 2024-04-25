import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { APP_ROUTES } from "@/constants/app-routes";
import { checkUserAutenticated } from "@/function/check-user-autenticated";

type PrivateRouteProps = {
  children: ReactNode;
};
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { push } = useRouter();
  const isUserAuthenticated = checkUserAutenticated();

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTES.public.login);
    }
  }, [isUserAuthenticated, push]);

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
};

export default PrivateRoute;
