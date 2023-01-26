import styled from "styled-components";

export const Container= styled.div`

    
    width: 80rem;
    height: 100vh;
    background: linear-gradient(167.44deg, #08244F 0%, #134CB5 47.38%, #0B42AB 100%);
    border-radius: 20px;
    margin: 24px 21px;
>header{

display: flex;
width: 100%;
align-items: center;
background-color: #0B42AB;
justify-content: space-between;
padding: 10px 40px;
border-radius: 20px;



button{
  height: 30px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  

  :hover{
    background: #08244F;
    border-radius: 10px;
  }
}

button:nth-child(2){
  margin-right: 10.5rem;
}
.rain{

width: 100px;
height: 100px;
}
}

 > main{
  
width: 100%;
display: flex;
justify-content: center;

    
  
  }

`