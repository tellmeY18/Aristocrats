export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-6xl font-extrabold text-center sm:text-left drop-shadow-lg">
          Aristocrats
        </h1>
        <p className="text-2xl text-center sm:text-left italic">
          Crafting spaces that inspire. Coming soon.
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-lg">Stay tuned for more updates!</p>
      </footer>
    </div>
  );
}
