import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import Landing from "@/components/Landing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Landing />
      <Features />
      <h1 className="text-center text-3xl font-extrabold p-8">Why Choose Us?</h1>
      <Features2 />
      <Testimonials />
    </div>
  )
}
