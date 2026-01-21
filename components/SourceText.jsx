
export const SourceText = ({ original, children }) => (
    <span className="source-text-wrapper group relative inline cursor-pointer transition-colors duration-200 hover:text-sky-400">
        <span className="translated-text">
            {children}
        </span>
        {/* Tooltip code remains the same... */}
        <span className="invisible group-hover:visible absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 
                     w-80 whitespace-normal p-3 bg-gray-900 text-white text-sm rounded-lg shadow-2xl 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                     pointer-events-none font-sans leading-relaxed text-left"
            dir="ltr">
            {original}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900"></span>
        </span>

        <style jsx global>{`
            span.translated-text p {
                display: inline;
            }
        `}</style>
    </span>
);