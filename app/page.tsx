import BanyaSection from "@/components/BanyaSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="p-4  bg-gray-100 ">
        <div className="max-w-6xl  mx-auto flex justify-between">
          <div>logo</div>
          <nav>
            <ul className="flex gap-3">
              <li>
                <a href="/">Главная</a>
              </li>
              <li>
                <a href="/">О банях</a>
              </li>
              <li>
                <a href="/">Блог</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-16 grow bg-gray-100">
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
