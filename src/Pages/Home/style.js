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
justify-content: space-between;
padding: 10px 40px;





button{
  height: 30px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 20px;
  

 
}

button:nth-child(2){
  margin-right: 5.2rem;
}

}

 > main{
  
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
margin-top: 50px;


.temp{
  display: flex;
  align-items: center;
  margin-right: 10px;
  >img{
    width: 300px;
    height: 300px;
  }
  h2{
    font-size: 50px;
  }
}

    
  
  }

`