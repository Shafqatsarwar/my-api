import Image from "next/image";
import Ai from "../../../public/Ai.jpg";

export default function Imagebutton() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image className="border-4 rounded-full border-red-600"
        src={Ai}
        width={300}
        height={300}
        alt={""}>

</Image>
      
    </main>
  );
}
