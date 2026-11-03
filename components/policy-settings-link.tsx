"use client";

// Footer link: lets visitors change their privacy choice later
export function PolicySettingsLink() {
  return <button type="button" onClick={() => window.dispatchEvent(new Event("ancapa-policy-open"))} className="hover:text-white underline-offset-2 hover:underline">Privacy choices</button>;
}
