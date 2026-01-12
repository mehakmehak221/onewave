"use client";

import { useState } from "react";
import WhoWeAre from "./components/WhoWeAre";
import Hero from "./components/hero";
import Wrapper from "./components/ui/Wrapper";
import InnovativeUtilities from "./components/InnovativeUtilities";
import Roadmap from "./components/Roadmap";
import RWA from "./components/RWA";
import Newsletter from "./components/Newsletter";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

const features = [
  {
    id: "feature-1",
    badge: "New",
    title: "The Core of The OneWave Fintech S.A. (in formation, Republic of Panama) Ecosystem",
    description:
      "Fast, scalable, and fully integrated, our blockchain is built to manage high-performance demands across diverse use cases. With complete EVM compatibility, developers can deploy smart contracts and dApps seamlessly using trusted tools and frameworks.",
    buttonText: "Learn More",
    buttonHref: "/learn",
    mediaUrl: "/features/1.webm",
    mediaType: "video" as const,
    fullBackground: true,
    mediaClassName: "transform -translate-x-[00px] scale-x-[1.1]",
  },
  {
    id: "feature-2",
    badge: "New",
    title: "Redefine Connection with AI-Powered Calling",
    description:
      "Make fast, natural voice calls without saying a word. Whether you're busy, quiet, or multitasking, our AI manages every call easily and instantly.",
    buttonText: "Learn More",
    buttonHref: "/learn",
    mediaUrl: "/features/2.webm",
    mediaType: "video" as const,
    fullBackground: false,
    mediaClassName: "transform -translate-x-[150px] scale-[0.98]",
  },
  {
    id: "feature-3",
    badge: "New",
    title: "Step Into the Future of Finance with Smarter Crypto Trading",
    description:
      "A complete exchange built for every trader. Low Fees. High Speed. Fully Secure. Whether you're learning, trading, or growing wealth, we make every move seamless and safe.",
    buttonText: "Learn More",
    buttonHref: "/learn",
    mediaUrl: "/features/3.webm",
    mediaType: "video" as const,
    fullBackground: true,
    mediaClassName: "",
  },
  {
    id: "feature-4",
    badge: "New",
    title: "Accept Crypto Everywhere",
    description:
      "From payments to platforms, transact anytime with trusted security. Systems that truly pay off, literally.",
    buttonText: "Learn More",
    buttonHref: "/learn",
    mediaUrl: "/features/4.webm",
    mediaType: "video" as const,
    fullBackground: false,
    mediaClassName: "transform -translate-x-[150px]",
  },
  {
    id: "feature-5",
    badge: "New",
    title: "Crypto Gaming on Wave Where Play Meets Profit",
    description:
      "Gaming just got smarter. With Wave, your skills now transform into real digital rewards.",
    buttonText: "Learn More",
    buttonHref: "/learn",
    mediaUrl: "/features/5.webm",
    mediaType: "video" as const,
    fullBackground: false,
    mediaClassName: "transform -translate-x-[150px]",
  },
];

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const openFeatureModal = (featureIndex: number) => {
    setSelectedFeature(featureIndex);
  };

  const closeFeatureModal = () => {
    setSelectedFeature(null);
  };

  return (
    <Wrapper>
      <Hero />
      <WhoWeAre />
      <InnovativeUtilities onFeatureClick={openFeatureModal} />

      {selectedFeature !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md"
          onClick={closeFeatureModal}
        >
          <div
            className="relative w-full h-full overflow-y-auto flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeFeatureModal}
              className="fixed top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200"
              aria-label="Close modal"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <FeatureSection
              badge={features[selectedFeature].badge}
              title={features[selectedFeature].title}
              description={features[selectedFeature].description}
              buttonText={features[selectedFeature].buttonText}
              buttonHref={features[selectedFeature].buttonHref}
              mediaUrl={features[selectedFeature].mediaUrl}
              mediaType={features[selectedFeature].mediaType}
              fullBackground={features[selectedFeature].fullBackground}
              mediaClassName={features[selectedFeature].mediaClassName}
            />
          </div>
        </div>
      )}

      <Roadmap />
      <RWA />
      <Newsletter />
      <Footer />
    </Wrapper>
  );
}
