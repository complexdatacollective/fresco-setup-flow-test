"use client";

import { createUser } from "~/src/app/actions";

export const ConfigFlow = () => {
  const handleClick = () => {
    createUser();
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Finish Configuring Fresco
      </h1>
      <p>Please create a user account to finish your app configuration</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Create account
      </button>
    </div>
  );
};
