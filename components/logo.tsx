import Link from "next/link";
import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center group shrink-0" aria-label="ANCAPA Global Partners home">
      <Image
        src="/ancapa-logo.png"
        alt="ANCAPA Global Partners"
        width={1294}
        height={1294}
        priority
        className={compact ? "h-8 w-auto object-contain" : "h-14 md:h-[84px] w-auto object-contain"}
      />
    </Link>
  );
}
