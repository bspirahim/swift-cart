
import Banner from "@/components/Banner/Banner";
import FlashSales from "@/components/FlashSales/FlashSales";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Banner></Banner>
      <FlashSales></FlashSales>
    </main>
  );
}
