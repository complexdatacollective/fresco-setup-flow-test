import configStatus from "~/utils/configStatus";

const status = await configStatus();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Fresco Initial Setup Flow Test
      </h1>
      <div>{status ? <p>{status}</p> : <p>Loading...</p>}</div>
      <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbuckhalt%2Ffresco-setup-test&env=DATABASE_URL,NEXTAUTH_SECRET,NEXTAUTH_URL&envDescription=Environment%20variables%20needed%20for%20configuring%20Fresco.&envLink=https%3A%2F%2Fdocumentation.networkcanvas.com%2F&project-name=fresco&repository-name=fresco&redirect-url=https%3A%2F%2Fdocumentation.networkcanvas.com%2F&demo-title=Fresco&demo-description=Deploy%20Network%20Canvas%20interviews%20in%20the%20web%20browser.&demo-url=https%3A%2F%2Fnetworkcanvas.com%2F&demo-image=https%3A%2F%2Fframerusercontent.com%2Fimages%2FUvNFzJTlj8T2Tn8zWSNGpnrkOI.svg">
        <img src="https://vercel.com/button" alt="Deploy with Vercel" />
      </a>
    </main>
  );
}
