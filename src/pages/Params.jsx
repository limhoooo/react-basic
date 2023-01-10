import { useParams } from "react-router-dom";
import StyledButton from "../components/StyledButton";
import styled from 'styled-components';

export default function About(props) {
    const { id } = useParams();
    const PrimaryStyledButton = styled(StyledButton)`
    background : palevioletred;
    color:white;
    `
    return <div>
        <p>Params</p>
        {id && <p>id는 {id} 입니다.</p>}
        <StyledButton>버튼</StyledButton>
        <StyledButton primary>버튼</StyledButton>
        <PrimaryStyledButton>버튼</PrimaryStyledButton>
    </div>;
}

