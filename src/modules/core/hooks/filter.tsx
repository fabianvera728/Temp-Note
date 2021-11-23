import { useMemo, useState } from 'react'

const useFilter = (elements: any[]) => {
    const [ query, setQuery ] = useState('');
    const results = useMemo(() => {
        const result = elements.filter((element) => {
            return JSON.stringify(element).toLowerCase().includes(query.toLowerCase());
        });
        return result;
    }, [elements, query]);
    return { query, setQuery, results};
}

export default useFilter;