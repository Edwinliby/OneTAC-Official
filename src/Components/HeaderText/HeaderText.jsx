export default function HeaderText({ text, className }) {
    return (
        <h2 className={`
            text-[2rem] md:text-4xl lg:text-5xl 3xl:text-6xl 
            font-semibold text-[var(--brown)] 
            ${className ? className : ''}
        `}>
            {text}
        </h2>
    )
}