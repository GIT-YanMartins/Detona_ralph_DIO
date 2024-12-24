import styled from "styled-components";
import ralph from "../Assets/Images/ralph.png"
import wall from "../Assets/Images/wall.png"

export const Mainbox = styled.main`
width: 100%;
height: 100vh;
display: flex;
align-items:center;
justify-content: center;
background-image: url(${wall});

}

.painelgeral{
width: 49vw;
height: 73vh;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

}


.square{
width: 16vw;
height: 24vh;
border: solid 2px black;
background-color: aquamarine;

}

.enemy{
width: 16vw;
height: 24vh;
background-image: url(${ralph});
background-size: cover;
background-repeat: no-repeat;

}
`

