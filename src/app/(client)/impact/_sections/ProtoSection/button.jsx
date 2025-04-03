import { motion } from "framer-motion";

export default function PrototypeButton({ label, onClick }) {
    return (
        <motion.button
            onClick={onClick}
            aria-label={label}
            className={`
                w-fit z-10 bg-[var(--light-Orange)] border border-white text-base 2xl:text-xl text-[var(--brown)]
                font-semibold py-2 px-6 xl:px-8 rounded-lg cursor-pointer transition duration-300 shadow-lg
                hover:-translate-y-2 hover:border-[var(--light-Orange)] hover:shadow-2xl hover:bg-amber-200
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {label}
        </motion.button>
    );
}