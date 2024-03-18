
import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Categories/Categories";
import EnhanceProduct from "@/components/EnhanceProduct/EnhanceProduct";
import ExploreOurProduct from "@/components/ExploreOurProduct/ExploreOurProduct";
import FlashSales from "@/components/FlashSales/FlashSales";
import Header from "@/components/Header/Header";
import ThisMonthProduct from "@/components/ThisMonthProduct/ThisMonthProduct";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Banner></Banner>
      <FlashSales></FlashSales>
      <Categories></Categories>
      <ThisMonthProduct></ThisMonthProduct>
      <EnhanceProduct></EnhanceProduct>
      <ExploreOurProduct></ExploreOurProduct>
    </main>
  );
}
