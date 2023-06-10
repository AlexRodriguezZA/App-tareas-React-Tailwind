import React from "react";

const ErrorForm = () => {
  return (
    <>
      <div
        className="p-2 ring-2 ring-red-700 mb-4 text-sm text-green-500 rounded-lg"
        role="alert"
      >
        <span className="text-red-700 font-bold">Error! </span>
        Cargue todos los campos solicitados!
      </div>
    </>
  );
};

export default ErrorForm;
