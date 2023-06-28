import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return;
  return (
    <Layout>
      <div className="text-text flex justify-between">
        <h1>
          Hello, <span className="font-bold">{session?.user?.name}</span>
        </h1>
        <div className="flex gap-1 bg-black/60 p-1 pr-2 rounded-lg overflow-hidden">
          <img
            src={session?.user?.image}
            alt={session?.user?.name}
            className="w-8 h-8 rounded"
          />
          <h1 className="">{session?.user?.name}</h1>
        </div>
      </div>
    </Layout>
  );
}
