import { redirect } from "next/navigation";
import configStatus from "~/utils/configStatus";

export default async function Home() {
  const status = await configStatus();
  if (!status.configured) {
    console.log("Not configured, redirecting to setup", status);
    redirect("/setup");
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold text-center">
        Fresco Initial Setup Flow Test
      </h1>
      <p>This app has been configured!</p>
      <div>{status ? <p>{JSON.stringify(status)}</p> : <p>Loading...</p>}</div>
    </main>
  );
}
