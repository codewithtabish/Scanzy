// app/(auth)/layout.tsx
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex  items-center justify-center px-4">
      <div className="w-full max-w-md my-44  rounded-2xl border shadow-sm bg-card p-6">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
