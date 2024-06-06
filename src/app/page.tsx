import Image from "next/image";

export default function Home() {
  return (
    <main className=" mt-16 px-6 mx-auto max-w-[370px]">
      <div className="rounded-t-2xl  px-4 pt-4 border border-gray-500 backdrop-blur-2xl backdrop-brightness-80">
        <h1 className="text-2xl font-bold pb-4">Estampas Andinas</h1>
        <iframe
          src="https://s62.radiolize.com/public/estampas_andinas_txe8wq/embed?theme=light"
          className="w-full min-h-[140px]"
        ></iframe>
      </div>
      <div className="bg-gray-100 mb-8 rounded-b-2xl border-t-0 border-gray-500 border overflow-hidden">
        <iframe
          src="https://s62.radiolize.com/public/estampas_andinas_txe8wq/history?theme=light"
          className="w-full min-h-[300px] pt-4 pl-1"
        ></iframe>
      </div>
      {/* <iframe
        src="https://s62.radiolize.com/public/estampas_andinas_txe8wq/schedule/embed?theme=light"
        className="w-full min-h-[800px] border border-gray-500 rounded-2xl "
      ></iframe> */}
    </main>
  );
}
