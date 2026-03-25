import What from "@/components/Home/What";
import Choose from "@/components/Rules/Choose";
import Explain from "@/components/Rules/Explain";
import Games from "@/components/Rules/Games";
import Hero from "@/components/Rules/Hero";
import Special from "@/components/Rules/Special";
import Tips from "@/components/Rules/Tips";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Explain />
      <What />
      <Games />
      <Special />
      <Choose />
      <Tips />
    </div>
  );
};

export default page;
