import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  width: 80%;
  height: 44px;
  color: white;
  display: block;
  margin: 0 auto 15px auto;
  font-weight: bold;
  font-size: 20px;

  background-color: ${props => props.primary ? props.backgroundColor || '#007bff' : '#f8f9fa'};
  color: ${props => props.primary ? 'white' : 'black'};

  &:hover {
    background-color: ${props => 
      props.primary 
        ? (props.backgroundColor ? `${props.backgroundColor}CC` : '#0056b3')
        : '#e2e6ea'
    };
  }
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

