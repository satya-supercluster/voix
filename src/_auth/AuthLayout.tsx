import { Outlet, Navigate } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <section className="hidden xl:block h-screen w-1/2 justify-center items-center pr-10 relative top-1/2 -translate-y-1/3"  >
          <div>
            <video
              src="/assets/images/side-img.mp4"
              autoPlay
              muted
              loop
              className="hidden xl:block h-1/2 w-screen object-cover bg-no-repeat rounded-3xl "
            />
          </div>
          </section>
        </>
      )}
    </>
  );
}
