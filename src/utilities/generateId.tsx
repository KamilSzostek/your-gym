import { useId } from 'react';

export const generateId = () =>{
    const id = useId();
    return id;
}