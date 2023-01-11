import { useParams } from "react-router-dom";
import StyledButton from "../components/StyledButton";
import styled, { createGlobalStyle } from 'styled-components';
import StyledA from "../components/StyledA";
export default function About() {
    const { id } = useParams();
    // C
    const PrimaryStyledButton = styled(StyledButton)`
    background : palevioletred;
    color:white;
    `;
    // E
    const UpperCaseButton = props => <button {...props} children={props.children.toUpperCase()} />
    // F
    const MyButton = props => <button {...props} children={`MyButton ${props.children}`} />
    const StyledMyButton = styled(MyButton)`
    background : transparent;
    border: 2px solid ${(props) => props.color || "palevioletred"};
    color : ${(props) => props.color || "palevioletred"};
    padding: 0.25em 1em;
    font-size : 20px;
    :hover {
        border : 2px solid red;
    }
    ::before {
        content: "@";
    }
    `;

    const GlobalStyle = createGlobalStyle`
    button {
        color : yellow;
    }
    `
    return <div>
        <GlobalStyle />
        <p>Params</p>
        {id && <p>id는 {id} 입니다.</p>}
        {/* A. 기본 styled-component */}
        <StyledButton>버튼</StyledButton>
        {/* B. props styled-component */}
        <StyledButton primary>버튼</StyledButton>
        {/* C. styled-component 에 한번더 감싸서 사용가능 */}
        <PrimaryStyledButton>버튼</PrimaryStyledButton>
        {/* D. as 속성을 이용해서 다른 엘리먼트로 변경가능 */}
        <StyledButton as="a" href="/">버튼</StyledButton>
        {/* E. as 속성을 상위에서 js 로 정의해서 사용가능 */}
        <StyledButton as={UpperCaseButton} >button</StyledButton>
        {/* F. 컴포넌트 생성후 styled-component 로 스타일 재정의 */}
        <StyledMyButton color="blue">Button</StyledMyButton>
        <StyledA href="https://google.com" >태그</StyledA>
    </div>;
}

