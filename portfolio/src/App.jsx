import React from "react";
import projectpic1 from "./images/projectpic1.jpg";
import projectpic2 from "./images/projectpic2.jpg";
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
                  href="https://www.google.com"
                  className="cursor-pointer text-2xl px-2 py-1 bg-gradient-to-r from-yellow-700 to-amber-950 text-white rounded-md md:hover:bg-amber-900"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-7xl py-2 text-amber-950 font-medium">
              Yoosuf Ahmad
            </h2>
            <h3 className="text-2xl py-2">Front-End Developer</h3>
            <p className="text-md py-5 leading-8 text-slate-700">
              Welcome to my little corner of the Internet. Here, I share and
              showcase my tinkering on the web. I am passionate about intuitive
              design and love to craft beautiful premium websites for anyone who
              is ready to stand out from the crowd.
            </p>
            
          </div>

          <div className="flex flex-col space-y-6 pb-4">
            {/* <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="max-w-[300px] max-h-[300px] overflow-hidden">
                <img
                  src={projectpic1}
                  class="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                />
              </div>
              <h2 class="px-4 py-3 text-center text-slate-700">
                Welcome to Coffee News! Coffee News is a social news
                    aggregation app similar to Reddit. It's been tailored to
                    give you the perfect amount of news while you sip over your
                    coffee in the morning, allowing you to scroll till you
                    finish your coffee.
              </h2>
            </div> */}


            <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex relative">
                <div class="md:shrink-0 overflow-hidden">
                  <img src={projectpic1} className="object-cover md:max-w-xs hover:scale-110 transition duration-500 cursor-pointer object-cover"/>
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
                  <p class="mt-2 text-slate-500">
                    Welcome to Coffee News! Coffee News is a social news
                    aggregation app similar to Reddit. It's been tailored to
                    give you the perfect amount of news while you sip over your
                    coffee in the morning, allowing you to scroll till you
                    finish your coffee.
                  </p>
                </div>
              </div>
            </div>

            <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex relative">
                <div class="md:shrink-0 overflow-hidden">
                  <img src={projectpic2} className="object-cover md:max-w-xs hover:scale-110 transition duration-500 cursor-pointer object-cover" />
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
                  <p class="mt-2 text-slate-500">
                    Welcome to Coffee News! Coffee News is a social news
                    aggregation app similar to Reddit. It's been tailored to
                    give you the perfect amount of news while you sip over your
                    coffee in the morning, allowing you to scroll till you
                    finish your coffee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
