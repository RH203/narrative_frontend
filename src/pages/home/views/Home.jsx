import { Helmet } from "react-helmet";
import TypeIt from "typeit-react";
import { Buttons, CardProducts } from "../../../components";

export default function Home() {
  const title = ["Endless Web Novels.", "World of Web Novels."];

  const tempCategory = ["Romance", "Action"];
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
              style={"bg-white text-gray-800 sm:w-auto shadow-md"}
            />
            <Buttons
              link={""}
              title={"Try it out"}
              style={"bg-gray-800 text-gray-200 sm:w-auto shadow-md"}
            />
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3 lg:block hidden md:hidden sm:hidden">
          <img
            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
            className="w-full mx-auto lg:w-full"
          />
        </div>
      </section>
      {/* Hero page End */}

      <hr className="border border-gray-300 my-10" />

      {/* Header content Start */}
      <div className="max-w-screen-md mx-auto flex justify-between items-center">
        <p className="font-semibold text-xl text-gray-600">Explore Our Picks</p>
        <Buttons
          link={""}
          title={"More"}
          style={"font-medium text-gray-800 text-xl underline"}
        />
      </div>
      {/* Header content End */}

      {/* Content Start */}
      <div className="max-w-screen-md mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-3 gap-4">
        <div className="grid lg:grid-rows-5 lg:block md:block sm:grid-rows-1 gap-3">
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
        </div>
        <div className="grid lg:grid-rows-5 lg:block md:block sm:hidden gap-3">
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
        </div>
        <div className="grid lg:grid-rows-5 lg:block md:hidden sm:hidden gap-3">
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
        </div>
      </div>
      {/* Content End */}

      <hr className="border border-gray-300 my-10" />

      {/* Header category Start */}
      <div className="max-w-screen-md mx-auto flex justify-between items-center">
        <p className="font-semibold text-xl text-gray-600">Top category</p>
        <Buttons
          link={""}
          title={"More"}
          style={"font-medium text-gray-800 text-xl underline"}
        />
      </div>
      {/* Header category End */}

      {/* Content Start */}
      <div className="max-w-screen-md mx-auto grid lg:grid-rows-2 gap-4 mt-3">
        <div className="grid grid-cols-6">
          <a
            href=""
            className="text-gray-800 font-semibold p-5 mx-auto bg-gray-300 rounded-lg shadow-lg hover:bg-gray-800 hover:text-gray-300 transition duration-500"
          >
            Romance
          </a>
          <a
            href=""
            className="text-gray-800 font-semibold p-5 mx-auto bg-gray-300 rounded-lg shadow-lg hover:bg-gray-800 hover:text-gray-300 transition duration-500"
          >
            Romance
          </a>
          <a
            href=""
            className="text-gray-800 font-semibold p-5 mx-auto bg-gray-300 rounded-lg shadow-lg hover:bg-gray-800 hover:text-gray-300 transition duration-500"
          >
            Romance
          </a>
          <a
            href=""
            className="text-gray-800 font-semibold p-5 mx-auto bg-gray-300 rounded-lg shadow-lg hover:bg-gray-800 hover:text-gray-300 transition duration-500"
          >
            Romance
          </a>
          <a
            href=""
            className="text-gray-800 font-semibold p-5 mx-auto bg-gray-300 rounded-lg shadow-lg hover:bg-gray-800 hover:text-gray-300 transition duration-500"
          >
            Romance
          </a>
          <a
            href=""
            className="text-gray-800 font-semibold p-5 mx-auto bg-gray-300 rounded-lg shadow-lg hover:bg-gray-800 hover:text-gray-300 transition duration-500"
          >
            Romance
          </a>
        </div>

        <div className="grid grid-cols-6 ">
          <a
            href=""
            className="text-gray-800 font-semibold p-5 mx-auto bg-gray-300 rounded-lg shadow-lg hover:bg-gray-800 hover:text-gray-300 transition duration-500"
          >
            Romance
          </a>
          <a
            href=""
            className="text-gray-800 font-semibold p-5 mx-auto bg-gray-300 rounded-lg shadow-lg hover:bg-gray-800 hover:text-gray-300 transition duration-500"
          >
            Romance
          </a>
          <a
            href=""
            className="text-gray-800 font-semibold p-5 mx-auto bg-gray-300 rounded-lg shadow-lg hover:bg-gray-800 hover:text-gray-300 transition duration-500"
          >
            Romance
          </a>
          <a
            href=""
            className="text-gray-800 font-semibold p-5 mx-auto bg-gray-300 rounded-lg shadow-lg hover:bg-gray-800 hover:text-gray-300 transition duration-500"
          >
            Romance
          </a>
          <a
            href=""
            className="text-gray-800 font-semibold p-5 mx-auto bg-gray-300 rounded-lg shadow-lg hover:bg-gray-800 hover:text-gray-300 transition duration-500"
          >
            Romance
          </a>
          <a
            href=""
            className="text-gray-800 font-semibold p-5 mx-auto bg-gray-300 rounded-lg shadow-lg hover:bg-gray-800 hover:text-gray-300 transition duration-500"
          >
            Romance
          </a>
        </div>
      </div>
      {/* Content End */}
    </div>
  );
}
