import React from "react";
import projectpic1 from "./images/projectpic1.jpg";
import projectpic2 from "./images/projectpic2.jpg";
import htmlLogo from "./images/html5.svg";
import cssLogo from "./images/css3.svg";
import javascriptLogo from "./images/javascript.svg";
import nodeLogo from "./images/nodedotjs.svg";
import tailwindLogo from "./images/tailwindcss.svg";
import supabaseLogo from "./images/supabase.svg";
import flutterLogo from "./images/flutter.svg";
import postgresqlLogo from "./images/postgresql.svg";
import figmaLogo from "./images/figma.svg";
import githubLogo from "./images/github.svg";
import reactLogo from "./images/react.svg";


export default function App() {
  return (
    <div>
      <main className="px-10">
        <section className="min-h-screen">
          <nav className="mb-12 flex flex-wrap items-center justify-between mx-auto p-4">
            <h1 className="text-xl">Yoosuf Ahmad Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <a
                  href="#"
                  className="text-1xl px-4 py-2 bg-gradient-to-r from-yellow-700 to-amber-950 text-white rounded-md md:hover:bg-amber-900"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-amber-950 font-medium md:text-7xl lg:text-8xl">
              Yoosuf Ahmad
            </h2>
            <h3 className="text-2xl py-2">Front-End Developer</h3>
            <p className="text-md py-5 leading-8 max-w-3xl mx-auto">
              Welcome to my little corner of the Internet. Here, I share and
              showcase my tinkering on the web. I am passionate about intuitive
              design and love to craft beautiful premium websites for anyone who
              is ready to stand out from the crowd.
            </p>
            <h3 className="text-3xl py-2 text-amber-950 font-medium mt-4">
              Projects
            </h3>
          </div>

          <div className="space-y-6 pb-4">
            <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex relative">
                <div class="md:shrink-0 overflow-hidden">
                  <img
                    src={projectpic1}
                    alt="coffee picture by farza mohamadi "
                    className="object-cover md:max-w-xs hover:scale-110 transition duration-500 cursor-pointer object-cover"
                  />
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-amber-800 font-semibold">
                    FULL-STACK PROJECT
                  </div>
                  <a
                    href="https://coffee-news-nc.netlify.app"
                    class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  >
                    Coffee News (Front-End)
                  </a>
                  <p class="mt-2 text-slate-700">
                    Welcome to Coffee News! Coffee News is a social news
                    aggregation app similar to Reddit. It's been tailored to
                    give you the perfect amount of news while you sip over your
                    coffee in the morning, allowing you to scroll till you
                    finish your coffee.
                  </p>
                  <p className="pt-4 text-amber-950 font-medium">React - JavaScript - Axios</p>

                  <a
                    href="https://coffee-news-nc.netlify.app"
                    className="block text-1xl text-center mt-8 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="block text-1xl text-center my-2 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex relative">
                <div class="md:shrink-0 overflow-hidden">
                  <img
                    src={projectpic2}
                    alt="coffee and newspaper picture by celine ylmz"
                    className="object-cover md:max-w-xs hover:scale-110 transition duration-500 cursor-pointer object-cover"
                  />
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-amber-800 font-semibold">
                    FULL-STACK PROJECT
                  </div>
                  <a
                    href="https://coffeenews.onrender.com/api/"
                    class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  >
                    Coffee News (Back-End)
                  </a>
                  <p class="mt-2 text-slate-700">
                    Welcome to Coffee News! Coffee News is a social news
                    aggregation app similar to Reddit. It's been tailored to
                    give you the perfect amount of news while you sip over your
                    coffee in the morning, allowing you to scroll till you
                    finish your coffee.
                  </p>
                  <p className="pt-4 text-amber-950 font-medium">PostgreSQL - Express.js - JavaScript</p>
                  <a
                    href="https://coffeenews.onrender.com/api/"
                    className="block text-1xl text-center mt-8 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="block text-1xl text-center mt-2 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </section>     
        <section>
          <div className="m-4">
          <h3 className="text-3xl text-center py-2 mt-4 text-amber-950 font-medium mt-4">
              Skills
            </h3>
          <div className="flex flex-wrap justify-center gap-16 py-10">
            <img src={htmlLogo} className="object-scale-down h-10 w-50" alt="HTML Logo"/>
            <img src={cssLogo} className="object-scale-down h-10 w-50" alt="CSS Logo"/>
            <img src={javascriptLogo} className="object-scale-down h-10 w-10" alt="JavaScript Logo"/>
            <img src={reactLogo} className="object-scale-down h-10 w-10" alt="React Logo"/>
            <img src={postgresqlLogo} className="object-scale-down h-10 w-10" alt="PostgreSQL Logo"/>
            <img src={flutterLogo} className="object-scale-down h-10 w-10" alt="Flutter Logo"/>
            <img src={supabaseLogo} className="object-scale-down h-10 w-10" alt="Supabase Logo"/>
            <img src={githubLogo} className="object-scale-down h-10 w-10" alt="GitHub Logo"/>
            <img src={figmaLogo} className="object-scale-down h-10 w-10" alt="Figma Logo"/>
            <img src={nodeLogo} className="object-scale-down h-10 w-10" alt="Node Logo"/>
            <img src={tailwindLogo} className="object-scale-down h-10 w-10" alt="Tailwind Logo"/>
          </div>
          </div>
        </section>

      </main>
    </div>
  );
}
