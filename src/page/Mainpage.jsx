import React, { useState } from "react";
import Header from "../components/Header";
import TitleSec from "../components/Mainpage/TitleSec";
import { IoGameControllerOutline } from "react-icons/io5";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mainpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    companySize: 0,
    message: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isFormValid = () => {
    let emptyFieldFound = false;

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "companySize" && value === "") {
        emptyFieldFound = true;
        return;
      }
    });

    if (formData.companySize === 0) {
      toast.error("Please enter company size.");
      return false;
    }

    if (emptyFieldFound) {
      toast.error("Please fill in all fields.");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    try {
      const response = await axios.post(
        "https://metacogserver.azurewebsites.net/v1/contacted",
        formData
      );
      toast.success("Request sent successfully.");
      console.log(response.data);
      setFormData({
        name: "",
        email: "",
        companyName: "",
        companySize: 0,
        message: "",
      });
    } catch (error) {
      toast.error("An error occurred.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="w-10/12 m-auto relative">
        <TitleSec />
        <div className="mt-20">
          <p className="mb-20 text-center text-4xl font-bold">
            How does it work?
          </p>
          <div className="sm:flex-row flex flex-col items-start justify-between">
            <div className="mt-10">
              <div className="flex items-center">
                <img src="./vector/magicbox.png" alt="box" />
                <p className="text-xl ms-5">Packed as you need</p>
              </div>
              <p className="text-bold text-xl sm:text-3xl mt-5  sm:mt-20 font-bold leading-relaxed">
                Choose the package that <br /> suits your App or Web
              </p>
              <p className="sm:text-lg text-sm mb-4 sm:mb-0 mt-4">
                Fintech companies are able to choose <br /> from different game
                packages suitable for <br /> their business goals and target
                market
              </p>
            </div>
            <div className="">
              <img
                className="rounded-2xl shadow-xl w-[598px]"
                src="./mainpage/frame1.png"
                alt="frame"
              />
            </div>
          </div>
          <div className="my-20 flex justify-end me-0 sm:me-[300px]">
            <img
              className="w-[200px] h-[200px] "
              src="./vector/toLeft.png"
              alt="vector"
            />
          </div>
          <div className="flex sm:flex-row flex-col-reverse items-start justify-between">
            <div className="">
              <img
                className="rounded-2xl shadow-xl w-[598px]"
                src="./mainpage/frame2.png"
                alt="frame"
              />
            </div>
            <div className="mt-10">
              <div className="flex items-center">
                <img src="./vector/switch.png" alt="box" />
                <p className="text-xl ms-5">Easy integration</p>
              </div>
              <p className="text-bold text-xl sm:text-3xl sm:mt-20 mt-5 font-bold leading-relaxed">
                Integrate Games <br />
                to your fintech solution
              </p>
              <p className="sm:text-lg text-base mb-4 sm:mb-0 mt-4">
                We’ve already made it easy to integrate <br /> our games into
                your fintech solution <br /> whether it an app or web-based
                platform
              </p>
            </div>
          </div>
          <div className="my-20 flex justify-start ms-0 sm:ms-[300px]">
            <img src="./vector/toRight.png" alt="vector" />
          </div>
          <div className="flex sm:flex-row flex-col items-start justify-between">
            <div className="mt-10">
              <div className="flex items-center">
                <img src="./vector/arrow.png" alt="arrow" />
                <p className="text-xl ms-5">Improve Key Metrics</p>
              </div>
              <p className="text-bold sm:text-3xl text-xl sm:mt-20 mt-5 font-bold leading-relaxed">
                Approve more loans <br /> with less default rate
              </p>
              <p className="sm:text-lg text-base mb-4 sm:mb-0 mt-4">
                Fintech companies experience more user <br /> engagement thus
                more data to analyze
              </p>
            </div>
            <div className="">
              <img
                className="rounded-2xl shadow-xl w-[598px]"
                src="./mainpage/frame3.png"
                alt="frame"
              />
            </div>
          </div>
        </div>
        <div className="mt-20">
          {/* <p className="mb-20 text-center sm:text-4xl text-xl font-bold">
            Trusted by leading financial institutions
          </p>
          <div className="flex sm:flex-row flex-col gap-10 sm:gap-0 items-start justify-between">
            <div>
              <img src="./users/invescore.png" alt="invescore" />
            </div>
            <div>
              <img src="./users/monpay.png" alt="monpay" />
            </div>
            <div>
              <img src="./users/mbank.png" alt="mbank" />
            </div>
          </div> */}
          <p className="text-4xl text-center font-bold my-20">Backed by</p>
          <div className="flex sm:flex-row flex-col gap-10 sm:gap-0 items-start justify-between mb-20">
            <div className="border w-[300px] h-[175px] flex items-center justify-center rounded-xl shadow-xl">
              <img src="./partner/silkway2.svg" alt="silkway" />
            </div>
            <div className="border w-[300px] h-[175px] flex items-center justify-center rounded-xl shadow-xl">
              <img
                className="mt-4"
                src="./partner/microsoft2.svg"
                alt="mirosoft"
              />
            </div>
            <div className="border w-[300px] h-[175px] flex items-center justify-center rounded-xl shadow-xl">
              <img src="./partner/mstars.svg" alt="mstars" />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <p className="mb-5 text-center sm:text-4xl text-xl font-bold">
            Real Cases with Fintech Companies
          </p>
          <p className="sm:text-lg text-sm text-center mb-20">
            We work with Innovative Fintech companies that provide seamingless
            financial service and helped them to engage, and retain customers.
            Approve more loans with less default rate
          </p>
          <div className="flex sm:flex-row flex-col gap-10 sm:gap-0 justify-between sm:mb-20 mb-0">
            <div className="border rounded-lg p-4 sm:w-[350px] w-[300px] sm:h-[160px] h-[180px]">
              <IoGameControllerOutline className="h-6 w-6" />
              <p className="text-[16px] mt-4 font-bold">
                More accurate scoring
              </p>
              <p className="text-[16px] mt-2 text-[#4F6696]">
                Our clients use our games for non-traditional data for their
                credit scoring{" "}
              </p>
            </div>
            <div className="border rounded-lg p-4 sm:w-[350px] w-[300px] sm:h-[160px] h-[180px]">
              <img src="./vector/humans.png" alt="vector" />
              <p className="text-[16px] mt-4 font-bold">
                More engaged customers
              </p>
              <p className="text-[16px] mt-2 text-[#4F6696]">
                Users were engaged and were checking more updates on the Credit
                Score Page
              </p>
            </div>
            <div className="border rounded-lg p-4 sm:w-[350px] w-[300px] sm:h-[160px] h-[180px]">
              <img src="./vector/toTop.png" alt="vector" />
              <p className="text-[16px] mt-4 font-bold">Approve more loans</p>
              <p className="text-[16px] mt-2 text-[#4F6696]">
                Our clients approved more loans by people who has no credit
                history or formal work experience using game data
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex sm:flex-row flex-col gap-20 justify-center">
            <div>
              <p className="mb-5 text-center text-6xl font-bold">100K</p>
              <p className="text-2xl text-center mb-20">
                Borrowers played our games
              </p>
            </div>
            <div>
              <p className="mb-5 text-center text-6xl font-bold">$32M</p>
              <p className="text-2xl text-center mb-20">Lent using zeemer.ai</p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <p className="mb-5 text-center sm:text-4xl text-xl font-bold">
            Science Behind the Games
          </p>
          <p className="sm:text-lg text-xs text-center mb-20">
            Our Games are based on recent research on Neuro-Economics and
            decision-making Neuroscience. We carefully integrated logic of
            science study and used Generative AI for the concept of the Games.
          </p>
          <div className="flex flex-col sm:flex-row justify-between mb-0 sm:mb-20 gap-10 sm:gap-0">
            <div className="border rounded-lg p-4 sm:w-[350px] w-[300px] sm:h-[160px] h-[180px]">
              <img src="./vector/brain.png" alt="vector" />
              <p className="text-[16px] font-bold">
                Neuroscience of Decision making
              </p>
              <p className="text-[16px] text-[#4F6696]">
                We conduct careful research on financial decision-making and
                grounded the rues into the simulations
              </p>
            </div>
            <div className="border rounded-lg p-4 sm:w-[350px] w-[300px] sm:h-[160px] h-[180px]">
              <img src="./vector/checked.png" alt="vector" />
              <p className="text-[16px] mt-2 font-bold">Experiments</p>
              <p className="text-[16px]  text-[#4F6696]">
                These experiments has been done within 100K fintech users and
                analyzed using AI-Models to prove the initial hypothesis
              </p>
            </div>
            <div className="border rounded-lg p-4 sm:w-[350px] w-[300px] sm:h-[160px] h-[180px]">
              <img src="./vector/verified.png" alt="vector" />
              <p className="text-[16px] mt-3 font-bold">Validated</p>
              <p className="text-[16px] text-[#4F6696]">
                Our game data is validated and verified of real-life key metrics
                such as approval rate, credit default and user engagement
              </p>
            </div>
          </div>
        </div>
        <div className="my-20">
          <div className="flex sm:flex-row flex-col items-center justify-between">
            <div>
              <div className="flex items-center">
                <img src="Logo.png" alt="logo" />
                <p className="text-lg ms-4">zeemer.ai</p>
              </div>
              <p className="text-4xl font-bold mt-10 mb-2">
                <span className="text-[#AAAAAA]">Gamify your</span> <br />
                User Experience
              </p>
              <img src="./vector/flat.svg" alt="vector" />
              <p className="text-4xl font-bold">
                <span className="text-[#AAAAAA]">Improve your</span> <br />
                Key Metrics
              </p>
            </div>
            <div className="sm:mt-0 mt-20">
              {console.log(formData)}
              <p className="text-4xl font-bold">Contact Us</p>
              <form onSubmit={handleSubmit} className="mt-10">
                <p>Your Name</p>
                <input
                  type="text"
                  className="border-2 rounded-lg  h-[56px] sm:w-[435px] w-[300px] bg-[#aaa] bg-opacity-10 py-2 px-5 "
                  placeholder="Patrick Collison"
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  value={formData.name}
                />
                <p className="mt-4">E-Mail</p>
                <input
                  type="email"
                  className="border-2 rounded-lg  h-[56px] sm:w-[435px] w-[300px] bg-[#aaa] bg-opacity-10 py-2 px-5 "
                  placeholder="patrick@stripe.com"
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  value={formData.email}
                />
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <p className="mt-4">Company Name</p>
                    <input
                      type="text"
                      className="border-2 rounded-lg h-[56px] sm:w-[211px] w-[300px] bg-[#aaa] bg-opacity-10 py-2 px-5 "
                      placeholder="Stripe"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        });
                      }}
                      value={formData.companyName}
                    />
                  </div>
                  <div>
                    <p className="mt-4">Company Size</p>
                    <input
                      type="number"
                      className="border-2 rounded-lg h-[56px] sm:w-[211px] w-[300px] bg-[#aaa] bg-opacity-10 py-2 px-5 "
                      placeholder="1000"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          companySize: parseInt(e.target.value, 10),
                        });
                      }}
                      value={formData.companySize}
                    />
                  </div>
                </div>
                <p className="mt-4">Your message</p>
                <input
                  type="text"
                  className="border-2 rounded-lg h-[112px] sm:w-[435px] w-[300px] bg-[#aaa] bg-opacity-10 py-2 px-5 "
                  placeholder="Please type your message here"
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                  }}
                  value={formData.message}
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="border-2 rounded-[30px] mt-5 bg-black text-white px-5 py-2 hover:border-black hover:bg-white hover:text-black text-2xl"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Mainpage;
