'use client'
import Image from "next/image";
import {Editor} from "@/app/components/editor";
import {Studio} from "@/app/views/studio";
import {useState} from "react";
import {PromptView} from "@/app/views/prompt-view";
import {chatSession} from "@/configs/aimodel";




export default function Home() {
    const [view, setView] = useState('studio')
    const [genData, setGenData] = useState(null)

    const extractJson = (text) => {
        const regex = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/g;
            // /\{[^{}]*\}/g;

        const matches = text.match(regex);
        console.log(matches);
        return matches
    }
    const runPrompt = async () => {
        try {
            const response = await fetch('/api/readFile/init');
            const data = await response.json();
            const initPrompt = data.content;
            console.log(initPrompt)


            const prompt2 = 'Create a landing page for a saas application, in JSON format####';

            const response2 = await fetch('/api/readFile/generation');
            const data2 = await response2.json();
            const generationPrompt = data2.content;
            console.log(generationPrompt)



            const aiResponse = await chatSession.sendMessage(initPrompt + prompt2 + generationPrompt);
            console.log(aiResponse?.response.text());
            const jsonData = extractJson(aiResponse?.response.text())
            console.log(JSON.parse(jsonData))
            if (jsonData) {
                setGenData(JSON.parse(jsonData))
                setView('studio')
            }

            console.log(genData)
        } catch (error) {
            console.error("Error fetching file:", error);
        }
    }
  return (
    <div className="grid h-screen w-screen">
        <button onClick={runPrompt} className="absolute top-0 right-0 text-white">Test</button>
        {view === 'studio' && <Studio
            genData={genData}
            setView={setView}>

        </Studio>}

        {view === 'prompt-view' && <PromptView></PromptView>}

    </div>
  );
}
