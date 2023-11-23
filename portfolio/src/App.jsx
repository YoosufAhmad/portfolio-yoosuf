import React from "react";
import projectpic1 from "./images/projectpic1.jpg";
import projectpic2 from "./images/projectpic2.jpg";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiSupabase,
  SiFigma,
  SiPostgresql,
  SiNodedotjs,
  SiGmail,
  SiLinkedin,
  SiFlutter,
} from "react-icons/si";

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
            <div class="max-w-sm sm:max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl xl:max-w-4xl">
              <div class="md:flex relative">
                <div class="md:shrink-0 overflow-hidden">
                  <img
                    src={projectpic1}
                    alt="coffee picture by farza mohamadi "
                    className="object-cover md:max-w-xs hover:scale-110 transition duration-500 cursor-pointer object-cover"
                  />
                </div>
                <div class="p-8 flex-col">
                  <div class="uppercase tracking-wide text-sm text-amber-800 font-semibold">
                    Full-Stack Project
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
                  <p className="pt-4 text-amber-950 font-medium">
                    React - JavaScript - Axios
                  </p>
                  <a
                    href="https://coffee-news-nc.netlify.app"
                    className="block text-1xl text-center mt-8 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/YoosufAhmad/nc-news"
                    className="block text-1xl text-center my-2 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            <div class="max-w-sm sm:max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl xl:max-w-4xl">
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
                    Full-Stack Project
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
                  <p className="pt-4 text-amber-950 font-medium">
                    PostgreSQL - Express.js - JavaScript
                  </p>
                  <a
                    href="https://coffeenews.onrender.com/api/"
                    className="block text-1xl text-center mt-8 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/YoosufAhmad/be-news-project"
                    className="block text-1xl text-center my-2 px-4 py-2 bg-amber-950 text-white rounded-md md:hover:bg-amber-900"
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
            <h3 className="text-3xl text-center py-2 text-amber-950 font-medium mt-4">
              Skills
            </h3>
            <div className="uppercase flex flex-wrap justify-center gap-16 py-10 text-5xl">
              <figure className="group">
                <SiHtml5 className="mx-auto group-hover:text-[#E34F26]" />
                <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
                  Html5
                </figcaption>
              </figure>
              <figure className="group">
                <SiCss3 className="mx-auto hover:text-[#1572B6]" />
                <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
                  Css3
                </figcaption>
              </figure>
              <figure className="group">
                <SiJavascript className="mx-auto hover:text-[#F7DF1E]" />
                <figcaption className="text-sm font-medium text-white group-hover:text-black">
                  JavaScript
                </figcaption>
              </figure>
              <figure className="group">
                <SiReact className="mx-auto hover:text-[#61DAFB]" />
                <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
                  React
                </figcaption>
              </figure>
              <figure className="group">
                <SiSupabase className="mx-auto hover:text-[#3FCF8E]" />
                <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
                  Supabase
                </figcaption>
              </figure>
              <figure className="group">
                <SiPostgresql className="mx-auto hover:text-[#4169E1]" />
                <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
                  Psql
                </figcaption>
              </figure>
              <figure className="group">
                <SiGithub className="mx-auto " />
                <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
                  Github
                </figcaption>
              </figure>
              <figure className="group">
                <SiFlutter className="mx-auto hover:text-[#02569B]" />
                <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
                  Flutter
                </figcaption>
              </figure>
              <figure className="group">
                <SiFigma className="mx-auto hover:text-[#F24E1E]" />
                <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
                  Figma
                </figcaption>
              </figure>
              <figure className="group">
                <SiNodedotjs className="mx-auto hover:text-[#339933]" />
                <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
                  Node.js
                </figcaption>
              </figure>
              <figure className="group">
                <SiTailwindcss className="mx-auto hover:text-[#06B6D4]" />
                <figcaption className="text-sm text-center font-medium text-white group-hover:text-black">
                  Tailwind
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section>
          <div className="m-4">
            <h3 className="text-3xl text-center py-2 text-amber-950 font-medium mt-4">
              Contact
            </h3>
            <p className="text-lg text-center py-2 font-medium mt-4">
              Say Hello!
            </p>
            <div className="uppercase flex justify-center text-5xl mt-10 gap-16 text-gray-600">
              <a href="yoosufahmad1998@gmail.com" className="group">
                <SiGmail className="mx-auto group-hover:text-[#EA4335]" />
                <p className="text-sm text-center font-medium text-white group-hover:text-black">
                  Gmail
                </p>
              </a>
              <a
                href="http://www.linkedin.com/in/yoosuf-ahmad"
                className="group"
              >
                <SiLinkedin className="mx-auto group-hover:text-[#0A66C2]" />
                <p className="text-sm text-center font-medium text-white group-hover:text-black">
                  Linkedin
                </p>
              </a>
              <a href="https://github.com/YoosufAhmad" className="group">
                <SiGithub className="mx-auto" />
                <p className="text-sm text-center font-medium text-white group-hover:text-black">
                  Github
                </p>
              </a>
            </div>
            <p className="text-lg text-center py-2 font-medium mt-4">Thank you for visiting my website😁</p>

          </div>
        </section>
      </main>
    </div>
  );
}
