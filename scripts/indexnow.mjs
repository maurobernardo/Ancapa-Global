// Notify IndexNow search engines (Bing, Yandex, Seznam, Naver...) of every URL in the sitemap.
// Run AFTER deploying, so the key file is live: node scripts/indexnow.mjs
const host = "ancapaglobal.com";
const key = "f8fc6ebdc02fb18bb762e30e49280f8f";
const xml = await (await fetch(`https://${host}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(res.status, res.statusText, urlList.length + " URLs");
