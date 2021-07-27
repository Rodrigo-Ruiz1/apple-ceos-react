import { useParams } from 'react-router-dom';

//Prop called ceoList is being passed down, so we can deconstruct it while passing it in as a parameter
const CeoDetails = ({ceoList}) => {
    const {ceo_slug} = useParams();

    //ternary that says "if there is a ceo whose slug matches the url slug, return that ceo, otherwise return null"
    const ceo = ceoList.find((ceo) => {
        return ceo.slug === ceo_slug ? ceo: null;
    })

    return <p>{ceo.name} was CEO of Apple Computer, Inc. in {ceo.first_year_active}</p>
}

export default CeoDetails;