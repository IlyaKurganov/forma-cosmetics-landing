
import React, { useState } from "react";
import BrandsMap from "@/components/BrandsMap";
import ThreeDMapBrands from "@/components/3DMapBrands";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BrandsSection = () => {
  const [activeTab, setActiveTab] = useState("2d");

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container px-4 md:px-8 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center text-gray-800">
          Наши бренды
        </h2>
        
        <Tabs 
          defaultValue="2d" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-3xl mx-auto mb-10"
        >
          <TabsList className="grid grid-cols-2 mb-8 mx-auto w-[300px]">
            <TabsTrigger value="2d">Карта брендов</TabsTrigger>
          </TabsList>
          
          <TabsContent value="2d">
            <BrandsMap />
          </TabsContent>
          
        </Tabs>
      </div>
    </section>
  );
};

export default BrandsSection;
