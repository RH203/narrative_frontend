import { Helmet } from "react-helmet";
import TypeIt from "typeit-react";
import {
  Buttons,
  CardCategory,
  CardProducts,
  ScrollToTopButton,
} from "../../../components";
import { motion } from "framer-motion";

export default function HomePage() {
  const title = ["Endless Web Novels.", "World of Web Novels."];

  const category = [
    { title: "Romance", href: "" },
    { title: "Adventure", href: "" },
    { title: "Science Fiction", href: "" },
    { title: "Mystery", href: "" },
    { title: "Horror", href: "" },
    { title: "Fantasy", href: "" },
  ];

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l7.5-7.5L18 12H3z"
          />
        </svg>
      ),
      title: "Vast Library",
      desc: "Explore a diverse collection of web novels across various genres. From romance to sci-fi, discover your next great read.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 6h13m0 0v13M21 6L3 18"
          />
        </svg>
      ),
      title: "High Quality",
      desc: "All our web novels are carefully curated to ensure high-quality reading experiences, with well-written plots and characters.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12l-9 6V6l9 6z"
          />
        </svg>
      ),
      title: "Offline Reading",
      desc: "Download your favorite web novels to read offline at any time, without the need for an internet connection.",
    },
  ];

  return (
    <div className="w-10/12 mx-auto font-poppins">
      <Helmet>
        <title>Home - Narrative</title>
      </Helmet>

      {/* Hero page Start */}
      <section className="mt-24 max-w-screen-xl items-center lg:flex ">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-black font-semibold text-4xl xl:text-5xl">
            <TypeIt
              options={{ loop: true, loopDelay: 1500, speed: 100 }}
              getBeforeInit={(instance) => {
                title.forEach((title) =>
                  instance.type(title).pause(5000).delete(title.length),
                );
                return instance;
              }}
            />{" "}
            <br />
            <span className="text-indigo-400"> Narrative</span>
          </h1>
          <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Dive into captivating stories and immersive worlds with our
            extensive collection of web novels. Whether you&apos;re into
            fantasy, romance, or sci-fi, there&apos;s something for every
            reader.
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <Buttons
              link={""}
              title={"Get started"}
              style={
                "bg-white py-3 px-4 text-gray-800 sm:w-auto font-medium shadow-md"
              }
            />
            <Buttons
              link={""}
              title={"Try it out"}
              style={
                "block py-3 px-5 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
              }
            />
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 2 }}
          className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3 hidden lg:block md:hidden sm:hidden"
        >
          <img
            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
            className="w-full mx-auto lg:w-full"
          />
        </motion.div>
      </section>
      {/* Hero page End */}

      <hr className="border border-gray-300 my-14" />

      {/* Header content Start */}
      <div className=" mx-auto flex justify-between items-center">
        <p className="font-semibold text-xl text-gray-600">Explore Our Picks</p>
        <Buttons
          link={"/novels"}
          title={"More"}
          style={"font-medium text-gray-800 text-xl underline"}
        />
      </div>
      {/* Header content End */}

      {/* Content recomendation Start */}
      <div className="grid lg:grid-rows-1 mt-3 gap-4">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2  gap-3">
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
        </div>
      </div>
      {/* Content recomendation End */}

      <hr className="border border-gray-300 my-14" />

      {/* Header category Start */}
      <motion.div
        className=" mx-auto flex justify-between items-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, ease: "easeInOut", duration: 5 }}
        viewport={{ once: true }}
      >
        <p className="font-semibold text-xl text-gray-600">Top category</p>
        <Buttons
          link={"/category"}
          title={"More"}
          style={"font-medium text-gray-800 text-xl underline"}
        />
      </motion.div>
      {/* Header category End */}

      {/* Category Start */}
      <motion.div
        className=" mx-auto grid lg:grid-rows-1 gap-4 mt-3"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, ease: "easeInOut", duration: 5 }}
        viewport={{ once: true }}
      >
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-3">
          {category.map((category, index) => {
            return (
              <CardCategory
                key={index}
                style={
                  "text-white font-semibold bg-indigo-600 hover:bg-indigo-500 hover:text-white active:bg-indigo-700"
                }
                title={category.title}
                href={category.href}
              />
            );
          })}
        </div>
      </motion.div>
      {/* Category End */}

      <hr className="border border-gray-300 my-14" />

      {/* Banner Start */}
      <div className="mx-auto artboard artboard-horizontal phone-5 flex justify-center items-center bg-gray-700 mt-20 rounded-lg lg:flex md:hidden sm:hidden">
        896×414
      </div>
      {/* Banner End */}

      <hr className="border border-gray-300 my-14 lg:block md:hidden sm:hidden" />

      {/* Feature Start */}
      <section className="my-24">
        <div className=" mx-auto px-4 text-center text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Dive into the World of Web Novels
            </h3>
            <p className="mt-3">
              Discover a universe of stories and adventures. Whether you&apos;re
              into romance, fantasy, or sci-fi, we have something for everyone.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li key={idx} className="space-y-3">
                  <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Feature End */}

      <ScrollToTopButton />
    </div>
  );
}
