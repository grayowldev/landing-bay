import {Input} from "@/components/ui/input";
import procees from "../../../next.config.mjs";



export const PromptView = () => {
    return (
    <div className="flex justify-center items-center h-screen bg-cover text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/3780104/pexels-photo-3780104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <div className="w-1/2 text-left">
            <h1 className="text-3xl font-bold mb-48 text-center text-white">Hi, let's get you up and running!</h1>
            <p className="mb-6">What kind of landing page would you like to create?</p>
            <Input className="w-full"  placeholder="Describe your landing page"/>
        </div>
    </div>
    )
}