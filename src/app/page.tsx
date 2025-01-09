import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/aristocrats-logo.svg"
          alt="Aristocrats logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Aristocrats
        </h1>
        <p className="text-lg text-center sm:text-left">
          Crafting spaces that inspire. Coming soon.
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://aristocrats.com/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/contact.svg"
            alt="Contact icon"
            width={16}
            height={16}
          />
          Contact Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://aristocrats.com/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/portfolio.svg"
            alt="Portfolio icon"
            width={16}
            height={16}
          />
          Our Portfolio
        </a>
      </footer>
    </div>
  );
}
