import React from "react";
import { Sold } from "../components/buttons/ButtonAdd";
import { SellHisCard } from "../components/Card";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export const SellHistory = () => {
  return (
    <Layout>
      <Navbar />
      <div className="m-10">
        <div className="font-bold text-center text-[#2D2D2D] text-5xl">
          Sell History
        </div>
        <div className="mt-10">
          <div className="w-full flex justify-center">
            <div className="text-center flex flex-col w-3/4 p-4 items-center justify-center gap-10 border-2 border-secondary shadow-lg rounded-lg bg-white">
              <div>
                <SellHisCard />
              </div>
              <div className="relative bottom-0 ml-auto">
                <Sold />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="w-full flex justify-center">
            <div className="text-center flex flex-col w-3/4 p-4 items-center justify-center gap-10 border-2 border-secondary shadow-lg rounded-lg bg-white">
              <div>
                <SellHisCard />
              </div>
              <div className="relative bottom-0 ml-auto">
                <Sold />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
