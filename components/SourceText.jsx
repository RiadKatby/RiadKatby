'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const SourceText = ({ original, children }) => {
    const pathname = usePathname();
    const [isBookmarked, setIsBookmarked] = useState(false);
    const bookmarkKey = `bookmark-${pathname}-${original.substring(0, 50)}`; // Unique key per page and text

    // Check if this text is bookmarked
    const checkBookmarkStatus = () => {
        const savedBookmark = localStorage.getItem(bookmarkKey);
        setIsBookmarked(savedBookmark === 'true');
    };

    useEffect(() => {
        checkBookmarkStatus();

        // Listen for bookmark changes from other SourceText components
        const handleBookmarkChange = (e) => {
            if (e.detail.pathname === pathname) {
                checkBookmarkStatus();
            }
        };

        window.addEventListener('bookmarkChanged', handleBookmarkChange);

        return () => {
            window.removeEventListener('bookmarkChanged', handleBookmarkChange);
        };
    }, [bookmarkKey, pathname]);

    const handleClick = (e) => {
        e.stopPropagation();
        
        // Clear all bookmarks for this page
        const allKeys = Object.keys(localStorage);
        allKeys.forEach(key => {
            if (key.startsWith(`bookmark-${pathname}-`)) {
                localStorage.removeItem(key);
            }
        });

        // Set new bookmark
        localStorage.setItem(bookmarkKey, 'true');
        
        // Notify all SourceText components to update their state
        window.dispatchEvent(new CustomEvent('bookmarkChanged', { 
            detail: { pathname } 
        }));
    };

    return (
        <span 
            className={`source-text-wrapper group relative inline cursor-pointer transition-colors duration-200 hover:text-sky-400 ${ 
                isBookmarked ? 'text-sky-400' : ''
            }`}
            onClick={handleClick}
        >
            <span className="translated-text">
                {children}
            </span>

            {/* Bookmark Icon */}
            {isBookmarked && (
                <span className="inline-block ml-1 text-amber-500 animate-pulse" title="Bookmarked">
                    🔖
                </span>
            )}

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
};