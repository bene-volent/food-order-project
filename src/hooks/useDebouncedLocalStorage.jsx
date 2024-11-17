import { useEffect, useState } from 'react';
const LOCAL_STORAGE_KEY = 'food-order-project__cartItem' // Super Secret

export function getCartFromLocalStorage() {
    try {
        const val = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (val) {
            return new Map(Object.entries(JSON.parse(val)))
        } else {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({}));
            return new Map(Object.entries({}))
        }
    } catch (error) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({}));
        return new Map(Object.entries({}))
    }

}

function useDebounceLocalStorage(value, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(getCartFromLocalStorage);



    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
            const jsonData = Object.fromEntries(value)
            const storageData = JSON.stringify(jsonData)
            localStorage.setItem(LOCAL_STORAGE_KEY, storageData)
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounceLocalStorage;