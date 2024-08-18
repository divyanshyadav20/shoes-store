import React from "react";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return (
    <main vaul-drawer-wrapper="" className="min-h-[100vh] bg-white">
      {children}
    </main>
  );
}

export default Providers;
