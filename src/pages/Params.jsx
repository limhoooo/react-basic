import { useParams } from "react-router-dom";
export default function About(props) {
    const { id } = useParams();
    return <div>
        <p>Params</p>
        {id && <p>id는 {id} 입니다.</p>}
    </div>;
}

