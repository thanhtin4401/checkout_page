import CheckoutPage from "@/components/CheckoutPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[88px] bg-[#F7F8F9]">
      <CheckoutPage />
      <Footer />
    </main>
  );
}
