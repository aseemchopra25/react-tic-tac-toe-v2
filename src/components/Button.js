// Adding Button Styling 
import styled from 'styled-components';
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 10px;
  padding: 2px 2px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #538fbe;
  margin: 1px;
  border: 1px solid #2d6898;
  background-image: linear-gradient(bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
  background-image: -o-linear-gradient(bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
  background-image: -moz-linear-gradient(bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
  background-image: -webkit-linear-gradient(bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
  background-image: -ms-linear-gradient(bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
  background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0, rgb(73,132,180)),
      color-stop(1, rgb(97,155,203))
  );
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  text-shadow: 0px -1px 0px rgba(0,0,0,.5);
  -webkit-box-shadow: 0px 4px 0px #2b638f, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
  -moz-box-shadow: 0px 4px 0px #2b638f, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
  box-shadow: 0px 4px 0px #2b638f, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);

  ${'' /* Added Hover Effect */}
  :hover{
    background-image: linear-gradient(bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
  background-image: -o-linear-gradient(bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
  background-image: -moz-linear-gradient(bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
  background-image: -webkit-linear-gradient(bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
  background-image: -ms-linear-gradient(bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
  
 
  background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0, rgb(88,154,204)),
      color-stop(1, rgb(90,150,199))
  }
`;

export default Button;