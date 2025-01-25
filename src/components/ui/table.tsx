import React from "react";

export function Table({ children, className }: { children: React.ReactNode; className?: string }) {
  return <table className={`w-full border-collapse ${className || ""}`}>{children}</table>;
}

export function Thead({ children, className }: { children: React.ReactNode; className?: string }) {
  return <thead className={`bg-gray-200 dark:bg-gray-900 ${className || ""}`}>{children}</thead>;
}

export function Tbody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <tbody className={`text-gray-800 dark:text-gray-200 ${className || ""}`}>{children}</tbody>;
}

export function Tr({ children, className }: { children: React.ReactNode; className?: string }) {
  return <tr className={`border-b ${className || ""}`}>{children}</tr>;
}

export function Th({ children, className }: { children: React.ReactNode; className?: string }) {
  return <th className={`p-4 border-b text-left ${className || ""}`}>{children}</th>;
}

export function Td({ children, className }: { children: React.ReactNode; className?: string }) {
  return <td className={`p-4 border-b ${className || ""}`}>{children}</td>;
}
