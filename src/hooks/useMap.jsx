import React from "react"
import { Log } from "../utils/Log"


function getInitialValue(initialValue) {
    if (!initialValue)
        return
    if (typeof initialValue === "function") {
        return initialValue()
    }
    return Object.entries(initialValue)
}

export default function useMap(initialValue) {

    const [map, setMap] = React.useState(
        new Map(
            getInitialValue(initialValue)
        )
    );

    const actions = React.useMemo(
        () => ({
            set: (key, value) =>
                setMap(prevMap => {
                    const nextMap = new Map(prevMap);
                    nextMap.set(key, value);
                    return nextMap;
                }),
            remove: (key, value) =>
                setMap(prevMap => {
                    const nextMap = new Map(prevMap);
                    nextMap.delete(key);
                    return nextMap;
                }),
            clear: () => setMap(new Map()),
        }),
        [setMap]
    );

    return { map, actions };
};