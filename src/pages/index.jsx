import MainLayout from "@/layouts/MainLayout";
import AllProducts from "@/components/Homepage/AllProducts";
import Categories from "@/components/Homepage/Categories";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Categories />
        <AllProducts />
      </MainLayout>
    </>
  )
}
