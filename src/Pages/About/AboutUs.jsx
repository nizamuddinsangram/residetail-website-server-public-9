// import client1 from "../../../public/client1.jpg";
import client2 from "../../../public/client2.jpeg";
import client3 from "../../../public/client3.JPG";
// import client4 from "../../../public/client4.jpeg";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import client5 from "../../../public/client5.jpeg";
import client6 from "../../../public/client6.jpeg";
import {
  default as backgroundImage,
  default as manImage,
} from "../../../public/image6.avif";
const AboutUs = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Residential | About Us</title>
      </Helmet>
      <section className="relative h-[40vh] lg:h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 opacity-50"></div>
        </div>
        <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold mb-4 text-gray-200">
            About Us
          </h1>

          {/* <p className="text-lg md:text-xl lg:text-2xl">lorem</p> */}
        </div>
      </section>
      <hr className=" border-sky-400 my-10" />
      <section className="flex flex-col w-full lg:w-4/5 mx-auto h-full 	lg:h-[70vh] md:flex-row items-start justify-center pb-12 px-4">
        <div className="w-full md:w-1/2 md:flex mb-10 lg:mb-0 h-full justify-center">
          <img
            src={manImage}
            alt="Image"
            className="w-full h-full rounded-lg"
          />
        </div>

        <div className="md:w-1/2 h-full text-white  md:ml-8 flex items-center ">
          <div className="bg-gray-700 h-full p-6 rounded-lg w-full">
            <h2 className="text-4xl font-bold mb-4  text-gray-200">
              Experience since 1999
            </h2>
            <hr className="w-1/3    border-indigo-500 mb-4" />
            <p className="mb-4 text-lg font-medium text-gray-200">
              To My Home Real state, supportive housing means much more than a
              building with services. The design of the facility, staffing
              patterns, program values and ways of interacting with residents.
              <br /> <br /> All combine to create a program that helps people
              succeed over the long term. Most DESC housing residents live with
              challenges that would seem overwhelming or insurmountable to the
              average person.
            </p>
            <button className="bg-sky-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
      {/* our aggent  */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Agents</h2>
        <div className="flex w-4/5 mx-auto flex-wrap justify-center ">
          {/* Agent Card 1 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:translate-y-1 transition duration-300">
              <img
                src={client2}
                alt="Agent 1"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Tanvir pir</h3>
                <p className="text-gray-700 text-lg ">Work: handle Women</p>
              </div>
            </div>
          </div>

          {/* Agent Card 2 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:translate-y-1 transition duration-300">
              <img
                src={client5}
                alt="Agent 2"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Tamim pir</h3>
                <p className="text-gray-700">Work: Sales Consultant</p>
              </div>
            </div>
          </div>

          {/* Agent Card 3 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:translate-y-1 transition duration-300">
              <img
                src={client6}
                alt="Agent 3"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Ataullah pir</h3>
                <p className="text-gray-700">Work: Manger</p>
              </div>
            </div>
          </div>

          {/* Agent Card 4 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:translate-y-1 transition duration-300">
              <img
                src={client3}
                alt="Agent 4"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Nizam uddin</h3>
                <p className="text-gray-700">Work: CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-10">
        <MapContainer
          className="w-full h-full md:w-3/4 md:h-[70vh] lg:w-80vw lg:h-80vh"
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default AboutUs;
