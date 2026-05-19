import Link from "next/link";

export default function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const external = href?.startsWith("http");
  const styles =
    variant === "secondary"
      ? "border border-white/15 bg-white/[0.07] text-white hover:border-electric/60 hover:bg-electric/10"
      : "border border-electric/60 bg-electric text-midnight shadow-glow hover:bg-cyanGlow";

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition duration-300 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
