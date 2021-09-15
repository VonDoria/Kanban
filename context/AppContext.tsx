import { useState } from "react";
import { ReactNode } from "react";
import { createContext } from "react";
import ScrollContainer from "react-indiana-drag-scroll";


type AppContextData = {
    getStorageList: () => string[]
}

type AppProviderProps = {
    children: ReactNode;
    ssg: any;
}

export const AppContext = createContext({} as AppContextData);

export default function AppProvider({ children, ssg }: AppProviderProps){

    const [noteList, setNoteList] = useState([]);

    function getStorageList(){
        if(!localStorage.getItem('app-list')){
            localStorage.setItem('app-list', '[]');
        }
        const str = localStorage.getItem('app-list');
        const list = JSON.parse(str ? str : '[]');
        setNoteList(list);
        return noteList;
    }

    return(
        <AppContext.Provider value={{
            getStorageList
        }}>
            { children }
        </AppContext.Provider>
    ); 
}