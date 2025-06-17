// app/(auth)/layout.tsx
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex  items-center justify-center px-4">
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
