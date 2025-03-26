import { Info } from "lucide-react";

export default function InfoSection() {
    return (
        <div className="flex items-center justify-center w-full p-4 py-10">
            <div className="md:w-3/4 flex flex-col md:flex-row items-start gap-4 p-6 md:p-8 bg-[#FFC457]/10 rounded-xl md:rounded-3xl border-1 border-[var(--brown)]/50">
                <Info size={30} className="text-[var(--brown)]" />
                <p>
                    <b>ONE TAC is not a proprietary product</b> — It is a public movement, co-owned by citizens and co-created by communities. Join us in building India's Experience Economy together.
                </p>
            </div>
        </div>
    )
}