import Image from "next/image";

// Branded stand-in for articles that have no cover photo: navy panel with the ANCAPA mark.
export function CoverFallback() {
  return <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_80%_15%,rgba(185,151,88,.3),transparent_45%),linear-gradient(160deg,#0e3555,#061826_75%)]">
    <span className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-[#fbfaf7] shadow-[0_0_0_10px_rgba(185,151,88,.15)]">
      <Image src="/ancapa-logo.webp" alt="" width={500} height={500} className="h-14 md:h-16 w-auto" />
    </span>
  </div>;
}
