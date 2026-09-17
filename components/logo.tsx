import Link from "next/link";
import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center group shrink-0" aria-label="ANCAPA Global Partners home">
      <Image
        src="/ancapa-logo.jpeg"
        alt="ANCAPA Global Partners"
        width={1294}
        height={1294}
        priority
        className={compact ? "h-10 w-auto object-contain" : "h-[78px] md:h-24 w-auto object-contain"}
      />
    </Link>
  );
}
