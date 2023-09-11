import styled from 'styled-components';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface MyComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: string;
  width: string;
  height: string;
  fontSize1: string;
  fontSize2: string;
  firstIconSize: string;
  firstButtonPadding: string;
  secondIconSize: string;
  secondButtonPadding: string;
  interval: string;
  buttonRadius: string;
  display: string;
}
const StyledButtonRow = styled.div<MyComponentProps>`
    display: flex;
    margin-left: 58px;
    margin-top: ${(props) => props.interval};

    div {
        display: flex;
        justify-content: center;    
        align-items: center;
    }
    div#fireIcon {
        width: 70%;

        img{
          width: ${(props) => props.firstIconSize};
          height: ${(props) => props.firstIconSize};
        }
    } 
    div#plusIcon {
        width:30%;
    }

    Button {

        align-items: center;
        background-color: ${(props) =>
          props.type === 'primary'
            ? '#5850EC'
            : props.type === 'dashed'
            ? 'var(--indigo-50, #F0F5FF)'
            : ''};
        border-radius:${(props) => props.buttonRadius};
        border: ${(props) =>
          props.type === 'default'
            ? '1px solid var(--indigo-100, #E5EDFF)'
            : ''};
        display: inline-flex;
        gap: 8px;
        justify-content: center;

      }
      
      Button#fireIconButton {
        width: ${(props) => props.width};
        height:${(props) => props.height};
        
        display: ${(props) => props.display};
        padding: ${(props) => props.firstButtonPadding}
    }

    Button#plusIconButton {
        width: ${(props) => props.height};
        height: ${(props) => props.height};

        color: ${(props) => (props.type === 'primary' ? '#ffffff' : '#5850EC')};
        font-size: ${(props) => props.secondIconSize};
        padding: ${(props) => props.secondButtonPadding}
    }

    p {
        font-family: Inter;
        font-weight: 500;
        font-style: normal;
        line-height: 128%;
        
    }
    
    p#first_text {
        color:  ${(props) =>
          props.type === 'primary' ? '#ffffff' : '#5850EC'};;
        font-size: ${(props) => props.fontSize1};
    }

    p#second_text {
        color: #8DA2FB; 
        font-size: ${(props) => props.fontSize2};
    }
    
}
`;

export default StyledButtonRow;
