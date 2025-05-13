import React from "react";
import BrandsMap from "@/components/BrandsMap";

const BrandsSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container px-4 md:px-8 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center text-gray-800">
          Наши бренды
        </h2>
        <BrandsMap />
      </div>
    </section>
  );
};

export default BrandsSection;
