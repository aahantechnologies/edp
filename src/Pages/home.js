import React from "react";
import Header from "../Components/common-comp/header";
import "../Css/home.css";
import BannerImg from "../Images/home.png";
import Sidebar from "../Components/common-comp/sidebar";
export default function Home() {
  return (
    <div>
      {/* ------------Header----------- */}
      <div>
        <Header />
      </div>

      <div className="grid grid-cols-12 bg-[#e8f5ff]">
        {/* ------------Sidenav----------- */}
        <div className="col-span-12 lg:col-span-3 md:col-span-3 ">
          <div>
            <Sidebar />
          </div>
        </div>
        <div className="col-span-12 mb-5 lg:col-span-9 md:col-span-9">
          <div className="flex items-center justify-evenly mt-4">
          <img src={BannerImg} className="w-3/4 lg:w-2/4 md:w-2/4" />
          </div>
         
         
         <div>
         <h5 className="text-xl lg:text-2xl  md:text-2xl  text-[#4097dc]">Hi there!</h5>
          <h5 className="text-xl lg:text-2xl  md:text-2xl  text-[#4097dc] mt-4">
            To see a patient's profile, just <span className="font-bold">double-click</span> on it.<br/> If you want to
            compare profiles, double-click on multiple profiles.
          </h5>
         </div>
         
        </div>
      </div>
    </div>
  );
}
