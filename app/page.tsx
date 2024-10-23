import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import Landing from "@/components/Landing";
import OtherProducts from "@/components/OtherProducts";
import Testimonials from "@/components/Testimonials";
import BasicStatistics from "@/components/WeServe";

export default function Home() {
  return (
    <div>
      <Landing />
      <Features />
      <h1 className="text-center text-3xl font-extrabold p-6">Cosmetic Products</h1>
      <OtherProducts />
      <h1 className="text-center text-3xl font-extrabold p-6">Why Choose Us?</h1>
      <Features2 />
      <BasicStatistics />
      <Testimonials />
    </div>
  )
}
