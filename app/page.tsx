import Sidebar from "@/components/Sidebar"
import MainContent from "@/components/MainContent"

export default function Home() {
  return (
    <div className="flex h-screen">


      <div className="w-1/3 bg-blue-900 text-white fixed h-screen">
        <Sidebar />
      </div>


      <div className="w-2/3 ml-[33.333%] h-screen overflow-y-scroll bg-gray-100 p-10">
        <MainContent />
      </div>

    </div>
  );
}