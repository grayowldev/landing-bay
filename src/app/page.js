import Image from "next/image";
import {Editor} from "@/app/components/editor";
import {Studio} from "@/app/views/studio";

export default function Home() {
  return (
    <div className="grid h-screen w-screen">
      <Studio></Studio>
    </div>
  );
}
