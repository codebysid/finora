import React from "react";

function Loader() {
  return (
    <main className="flex justify-center items-center h-[80vh]">
      <div className="w-16 h-16 border-8 text-primary text-4xl animate-spin border-secondary flex items-center justify-center border-t-primary rounded-full"></div>
    </main>
  );
}

export default Loader;
