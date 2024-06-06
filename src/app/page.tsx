import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <iframe
        src="https://s62.radiolize.com/public/estampas_andinas_txe8wq/embed?theme=dark"
        frameBorder="0"
        allowTransparency={true}
      ></iframe>
    </main>
  );
}
