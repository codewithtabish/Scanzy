"use client";

import React from "react";
import dynamic from "next/dynamic";

const RichRenderer = dynamic(() => import("./rich-renderer"), { ssr: false });

export default function RichRenderWrapper({ blocks }: { blocks: any[] }) {
  return <RichRenderer blocks={blocks} />;
}
