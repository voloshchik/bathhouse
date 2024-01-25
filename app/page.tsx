import BanyaSection from "@/component/BanyaSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-16 grow">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Добро пожаловать на наш сайт по переносным баням!
        </h1>
        {/* Добавьте здесь другие компоненты и контент вашего лендинга */}
        <BanyaSection />
      </main>

      <footer className="bg-gray-900 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Перевозные бани. Все права защищены.
      </footer>
    </>
  );
}
