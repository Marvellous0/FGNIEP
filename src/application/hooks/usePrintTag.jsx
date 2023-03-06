import { useReactToPrint } from 'react-to-print';
import { useEffect, useState } from "react";

const usePrintTag = () => {

    const [currentId, setCurrentId] = useState(null);

    const handlePrint = useReactToPrint({
        content: () => document.querySelector(`#${currentId}`)
    });
    
    useEffect(() => {
        if (currentId !== null) {
           
            handlePrint();
            setCurrentId(null);
            
        }
    }, [currentId, handlePrint])

    return [currentId, setCurrentId];
}

export default usePrintTag;