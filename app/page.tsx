"use client";

import Image from "next/image";
import ChromeInstallButton from "@/components/ChromeInstallButton";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState<boolean>(false);
  const contentRefFirst = useRef(null);
  const contentRefSecond = useRef(null);
  const contentRefThird = useRef(null);

  useEffect(() => {
    setIsDarkModeEnabled(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-x-full");
          entry.target.classList.add("opacity-100", "translate-x-0");
          observer.unobserve(entry.target);
        }
      });
    });

    if (contentRefThird.current) {
      observer.observe(contentRefThird.current);
    }

    if (contentRefSecond.current) {
      observer.observe(contentRefSecond.current);
    }

    if (contentRefFirst.current) {
      observer.observe(contentRefFirst.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <main className="overflow-x-hidden">
        <div className="grid place-items-center w-full">
          <section className="w-full h-screen grid place-items-center px-6 pt-24 md:pt-48 pb-12 md:pb-24">
            <div className="grid justify-items-center max-w-3xl text-center">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl 4k:text-10xl font-semibold drop-shadow-lg">
                  Style Enhancer for
                </h1>
                <h1 className="text-6xl md:text-8xl 4k:text-12xl font-bold text-teal-500 drop-shadow-lg">
                  ChatGPT
                </h1>
              </div>
              <p className="text-lg md:text-3xl 4k:text-8xl text-center font-medium">
                Meet{" "}
                <span className="text-xl md:text-3xl 4k:text-9xl font-bold text-teal-500 drop-shadow-lg">
                  ChatGPT Styler
                </span>{" "}
                - the ultimate Chrome extension to effortlessly enhance
                ChatGPT&apos;s look and feel!
              </p>
              <div className="hidden md:grid gap-1">
                <ChromeInstallButton />
                <p className="text-lg">Windows and MacOS</p>
              </div>
              <h2 className="text-xl font-semibold drop-shadow-lg md:hiddenm">
                Switch to Desktop to Download!
              </h2>
            </div>
          </section>
          <section className="w-full h-fit grid gap-10 px-6 md:px-10 py-12 md:py-24 bg-[#05211C] text-white shadow-2xl shadow-black">
            <div className="grid gap-10 md:grid-cols-2 max-w-screen-2xl w-full mx-auto">
              <div
                ref={contentRefFirst}
                className="grid order-2 place-items-center md:py-40 opacity-0 transform translate-x-full transition-all duration-1000"
              >
                <div className="md:place-items-start grid gap-6">
                  <h2 className="text-2xl font-bold md:text-5xl">
                    Fully Transform Your User Experience!
                  </h2>
                  <p className="text-xl md:text-3xl 4k:text-5xl">
                    Our project aims to fully revitalize the ChatGPT user
                    experience by unlocking extra utility and customization
                    options.
                  </p>
                </div>
              </div>
              <div className="grid gap-10 place-items-center">
                <div>
                  <h2 className="text-xl font-semibold pb-2 md:text-2xl">
                    Default ChatGPT Layout
                  </h2>
                  <Image
                    src={
                      isDarkModeEnabled
                        ? "/assets/demos/darkmode_default.png"
                        : "/assets/demos/lightmode_default.png"
                    }
                    alt="Default Demo"
                    width={1500}
                    height={1500}
                    unoptimized={true}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold pb-2 md:text-2xl 4k:text-5xl">
                    With ChatGPT Styler
                  </h2>
                  <Image
                    src={
                      isDarkModeEnabled
                        ? "/assets/demos/darkmode_styler.png"
                        : "/assets/demos/lightmode_styler.png"
                    }
                    alt="Styled Demo"
                    width={1500}
                    height={1500}
                    unoptimized={true}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full h-fit grid px-6 md:px-10 py-12 md:py-24 bg-[#0A3C33] text-white shadow-2xl shadow-black">
            <div className="grid lg:grid-cols-2 gap-10 max-w-screen-2xl w-full mx-auto">
              <div
                ref={contentRefSecond}
                className="grid place-items-center gap-10 order-2 opacity-0 transform translate-x-full transition-all duration-1000"
              >
                <div className="grid gap-6 md:place-items-start">
                  <div className="grid gap-2">
                    <h2 className="text-2xl font-bold md:text-5xl 4k:text-8xl">
                      Endless Customization Possibilities!
                    </h2>
                    <p className="text-xl md:text-3xl 4k:text-5xl">
                      Our extension allows users to take FULL advantage of their
                      space by alllowing customization for:
                    </p>
                  </div>
                  <div className="grid">
                    <ul className="list-disc text-xl 4k:text-5xl pl-6">
                      <li>Message bubbles with custom colors</li>
                      <li>Extra message width to use full space</li>
                      <li>Message Bubble corner rounding</li>
                      <li>Extra space to type your chat prompts</li>
                      <li>
                        New button to scroll to the top of the message thread
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid place-items-center">
                <Image
                  src={
                    isDarkModeEnabled
                      ? "/assets/demos/darkmode_edits.gif"
                      : "/assets/demos/lightmode_edits.gif"
                  }
                  alt="Demo gif"
                  width={1500}
                  height={1500}
                  unoptimized={true}
                  className="rounded-xl"
                />
              </div>
            </div>
          </section>
          <section className="w-full h-fit  px-6 md:px-10 py-12 md:py-24 bg-[#4B9C8C] text-white shadow-xl shadow-black">
            <div className="grid gap-10 md:grid-cols-2 max-w-screen-2xl w-full mx-auto">
              <div
                ref={contentRefThird}
                className="grid gap-2 place-items-center order-2 md:py-40 opacity-0 transform translate-x-full transition-all duration-1000"
              >
                <div className="grid gap-6 md:place-items-start">
                  <h2 className="text-2xl font-bold md:text-5xl 4k:text-8xl">
                    Do any Coding?
                  </h2>
                  <p className="text-xl md:text-3xl 4k:text-5xl">
                    Worry no longer about having to scroll to read code
                    snippets! Our extension will let you preview code without
                    any extra effort!
                  </p>
                </div>
              </div>
              <div className="grid gap-10 place-items-center">
                <div>
                  <h2 className="text-xl font-semibold pb-2 md:text-2xl 4k:text-5xl">
                    Default ChatGPT Layout
                  </h2>
                  <Image
                    src={
                      isDarkModeEnabled
                        ? "/assets/demos/darkmode_code_default.gif"
                        : "/assets/demos/lightmode_code_default.gif"
                    }
                    alt="Demo gif"
                    width={800}
                    height={800}
                    unoptimized={true}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold pb-2 md:text-2xl 4k:text-5xl">
                    With ChatGPT Styler
                  </h2>
                  <Image
                    src={
                      isDarkModeEnabled
                        ? "/assets/demos/darkmode_code_styler.gif"
                        : "/assets/demos/lightmode_code_styler.gif"
                    }
                    alt="Demo gif"
                    width={800}
                    height={800}
                    unoptimized={true}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
