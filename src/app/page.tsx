import Ripple from "@/components/ui/ripple";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
    return (
        <>
            <div
                className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <Ripple/>

            </div>
            <div className="grid w-full gap-2">
                <Textarea placeholder="Type your message here."/>
                <Button>Send message</Button>
            </div>
        </>
    );
}
