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
    </div>
  );
}
