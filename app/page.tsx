"use client";
import { useEffect, useState } from "react";
import { isAndroid, isIOS } from "react-device-detect";

const uniDomain = "";
const androidPackageName = "com.letrungdo.uni";

export default function Home() {
  const [uniLinkPlus, setUniLinkPlus] = useState("");

  useEffect(() => {
    let uniLink = `${uniDomain}/fallback.html`;
    if (isAndroid) {
      uniLink = `intent://${uniDomain}#Intent;package=${androidPackageName};scheme=https;S.browser_fallback_url=https://play.google.com/store/apps/details?id=${androidPackageName};end`;
    } else if(isIOS) {
      uniLink = `${uniDomain}/fallback.html`
    }

    setUniLinkPlus(uniLink);
  }, []);

  return (
    <main className="flex flex-col items-center p-5">
      <a
        className="mt-5 text-white text-two-line"
        href={uniLinkPlus}
      >
        Open app
      </a>
      <div className="mb-auto" />
    </main>
  );
}
