import { useEffect } from "react";

const useTitleDoc = (title) => {
    // use effect on change title
    useEffect(() => {
        // change document title
        document.title = `Wiki Drinks React | ${title}`;
    }, title);
}

export default useTitleDoc;