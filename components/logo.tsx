import Link from "next/link";
import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center group shrink-0" aria-label="ANCAPA Global Partners home">
      <Image
        src="/ancapa-logo.png"
        alt="ANCAPA Global Partners"
        width={1450}
        height={1092}
        priority
        className={compact ? "h-10 w-auto object-contain" : "h-20 md:h-28 w-auto object-contain"}
      />
    </Link>
  );
}
