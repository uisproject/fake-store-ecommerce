import MainLayout from "@/layouts/MainLayout";
import AllProducts from "@/components/Homepage/AllProducts";
import Categories from "@/components/Homepage/Categories";
import Router from "next/router";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Categories />
        <AllProducts />
      </MainLayout>
    </>
  );
}
