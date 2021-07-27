import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CeoDetails = () => {
    const { ceo_slug } = useParams();
    const [ceo, setCeo] = useState({});

    useEffect(() => {
        (async () => {
            const url = `http://127.0.0.1:3333/`;
            const ceo = await fetch(url).then((response) => response.json());
            setCeo(ceo);
        })();
    }, [setCeo, ceo_slug])

    return (
        <>
            {!!ceo ? (
                <p>{ceo.name} was CEO of Apple Computer, Inc. in {ceo.first_year_active}</p>
            ) : (
                <p> Fetching Ceo....</p>
            )}
        </>
    )
}

export default CeoDetails;