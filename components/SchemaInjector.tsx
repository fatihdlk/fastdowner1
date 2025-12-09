"use client";
import React from "react";

export default function SchemaInjector({ jsonld }: { jsonld: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
    />
  );
}
