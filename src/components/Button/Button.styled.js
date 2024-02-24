import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 8px 12px;
  margin-left: 10px;
  border: 1px solid #2980b9;
  border-radius: 6px;
  background-color: ${(props) => {
    console.log(props)
    return props?.$primary ? props.theme.colors.primary : "transparent"
  }};
  color: ${({ $primary, theme }) => $primary ? theme.colors.textColor : "black"};

  &:hover {
    background-color: ${(props) => props?.$primary ? props.theme.colors.primary : "#f1c40f"};
  }
`

// const info = `${() => "xxx"}`

// Extend
export const StrongButton = styled(StyledButton)`
  border-width: 5px;
`

// https://gradientbuttons.colorion.co/

export const CoolButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #3D7EAA 0%, #FFE47A  51%, #3D7EAA  100%);
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  text-decoration: none;
            
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`

export const SubmitButton = styled(StrongButton).attrs({
  type: "submit"
})`
  font-size: 20px;
  color: red;
`