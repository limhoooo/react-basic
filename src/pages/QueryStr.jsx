import { useLocation } from "react-router-dom";
import queryString from 'query-string'
export default function Other() {
    const { search } = useLocation();
    const location = useLocation();
    const obj = queryString.parse(search)
    return <div>
        <p>QueryStr</p>
        {obj.name && <p>{obj.name}</p>}
        {obj.age && <p>{obj.age}</p>}

    </div>;
}


