import AppFooter from "@/components/Headers/AppFooter";
import Rules from "@/components/Headers/Rules";
import Buy from "@/components/Home/Buy";
import Hero from "@/components/Home/Hero";
import Inside from "@/components/Home/Inside";
import What from "@/components/Home/What";
import Who from "@/components/Home/Who";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <What />
      <Inside />
      <Who />
      <Rules />
      <Buy />
    </div>
  );
}
