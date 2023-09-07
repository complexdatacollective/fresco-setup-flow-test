import configStatus from "~/utils/configStatus";
import { ConfigFlow } from "~/src/app/setup/ConfigFlow";

const status = await configStatus();

export default function Setup() {
  const configExpired: boolean =
    Date.now() - status.initializedAt.getTime() > 300000;

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      {!configExpired ? (
        <ConfigFlow />
      ) : (
        <p className="text-center">
          Configuration window expired. Please restart the setup process, and
          create an account within five minutes of deploying.
        </p>
      )}
      <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbuckhalt%2Ffresco-setup-test&env=DATABASE_URL,NEXTAUTH_SECRET,NEXTAUTH_URL,UPLOADTHING_SECRET,UPLOADTHING_APP_ID&envDescription=Environment%20variables%20needed%20for%20configuring%20Fresco.&envLink=https%3A%2F%2Fdocumentation.networkcanvas.com%2F&project-name=fresco&repository-name=fresco&redirect-url=https%3A%2F%2Fdocumentation.networkcanvas.com%2F&demo-title=Fresco&demo-description=Deploy%20Network%20Canvas%20interviews%20in%20the%20web%20browser.&demo-url=https%3A%2F%2Fnetworkcanvas.com%2F&demo-image=https%3A%2F%2Fframerusercontent.com%2Fimages%2FUvNFzJTlj8T2Tn8zWSNGpnrkOI.svg">
        <img src="https://vercel.com/button" alt="Deploy with Vercel" />
      </a>
    </div>
  );
}
