import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Layout() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className=" bg-black/90 w-screen h-screen p-14">
        <div className="my-16 p-4">
          <h1 className="font-office font-bold text-3xl text-text flex justify-center">
            Welcome to Next Kimathi
          </h1>
          <h3 className="text-2xl text-teal font-semibold flex justify-center my-6">
            Admin Dashboard Login
          </h3>
        </div>
        <div className=" flex items-center">
          <div className="text-center w-full">
            <button
              className="bg-teal p-2 rounded-md text-lg font-office hover:scale-105 ease-in duration-150 hover:text-teal hover:bg-primary px-4"
              onClick={() => signIn("google")}
            >
              Login with Google
            </button>
          </div>
        </div>
        <p className="text-lg font-semibold text-gray-600/90 flex justify-center my-8">
          Tenants at your doorstep!
        </p>
      </div>
    );
  }

  return (
    <div className=" min-h-screen bg-black/90 text-text flex">
      <Nav />
      <div className="bg-primary flex-grow mt-2 mr-2 rounded-lg p-4 mb-2">
        Logged in {session?.user?.email}
      </div>
    </div>
  );
}
