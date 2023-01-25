import React, { useLayoutEffect, useState } from 'react';
import { Types, boxingDescription, bodybuildingDescription, jogaDescription, zumbaDescription } from '../../../../utilities/types';
import './TypeInfo.scss';

interface ITypeInfoProps {
    icon: string;
    type: string;
}


const TypeInfo: React.FunctionComponent<ITypeInfoProps> = ({ icon, type }) => {
    const [description, setDescription] = useState('');

    useLayoutEffect(() => {
        switch (type) {
            case Types.BODYBUILDING:
                setDescription(bodybuildingDescription);
                break;
            case Types.BOXING:
                setDescription(boxingDescription);
                break;
            case Types.ZUMBA:
                setDescription(zumbaDescription);
                break;
            case Types.JOGA:
                setDescription(jogaDescription)
                break;
        }
    }, [description])
    return (
        <div className='type-info'>
            <img src={icon} alt={type} />
            <p>{description}</p>
        </div>
    );
};

export default TypeInfo;
