import configStatus from "~/utils/configStatus";

const status = configStatus();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Fresco Initial Setup Flow Test
      </h1>
      <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbuckhalt%2Ffresco-setup-test.git&env=NEXTAUTH_SECRET,NEXTAUTH_URL,UPLOADTHING_SECRET,UPLOADTHING_APP_ID,DATABASE_URL&envDescription=Environment%20Variables%20needed%20for%20the%20application&envLink=https%3A%2F%2Fdocumentation.networkcanvas.com%2F">
        <img src="https://vercel.com/button" alt="Deploy with Vercel" />
      </a>
      <div>
        {status ? (
          <p className="text-center">configstatus: {status}</p>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
      <div>
        <p className="text-center">
          This app has not yet been configured. To finish the setup process,
          please create a user.
        </p>
      </div>
      <div>
        <p className="text-center">
          This app has been configured and is ready to use.
        </p>
      </div>
    </main>
  );
}
