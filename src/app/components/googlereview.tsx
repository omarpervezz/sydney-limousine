"use client";
import { useEffect } from "react";

export default function GoogleReviewSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="elfsite_google_review_section py-8">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -mx-5">
          <div className="w-full">
            <div
              className="elfsight-app-8f896f1a-8865-48f3-baba-2e3cc5f5a338"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
