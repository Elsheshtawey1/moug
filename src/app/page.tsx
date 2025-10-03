import Navbar from "@/components/navbar/navbar-01";
import Hero from "@/components/hero/hero";
import GitApp from "@/components/gitapp/GitApp";
import Footer from "@/components/footer-05/footer";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero
          title="Complete Folution for Managing"
          description=" Your lagndry and serving your customers with ease"
          image="/image/planetcare-23coWmkTNSg-unsplash.jpg"
          thumbnail="/image/planetcare-24coWmkTNSg-unsplash.jpg"
          ShowItem={true}
          style={{ minHeight: "100vh" }}
          id="Home"
        />
        <Hero
          title="Who We Are"
          description=" We are a digital platform specialized in connecting customers with the
best laundries and agencies in Saudi Arabia. We strive to provide high-
quality and easy-to-use service."
          backgroundColor="#2563EB"
          thumbnail="/image/Component 7 .png"
          ShowItem={false}
          className="shadow-none min-h-90 "
          AddItem={true}
          id="About Us"
        />
        <GitApp
          id="Get the App"
          title="|Get the App"
          SupTitle="Whether you are a laundry owner or employee"
          description="Control your laundry with ease - from receiving orders to tracking
inventory and purchasing supplies"
          features={[
            "Track laundry material consumption",
            "Purchase necessary products for the laundry from the app",
            "Receive orders from customers directly",
            "Request regular payment or installment purchase",
            "Comprehensive credit and debit system",
          ]}
        />
        <GitApp
          id="Get the App"
          title="Whether you are a customer looking for a nearby laundry"
          description="Our app makes everything easier for you"
          SupTitle={false}
          className="text-3xl md:text-4xl lg:text-[2.7rem] xl:text-[3.5rem]font-bold leading-tight tracking-tight text-[#349FF4]"
          features={["Track your order moment by moment", "Reviews, prices, and distance from you - everything is clear in front of you", "Multiple and secure payment methods"]}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
