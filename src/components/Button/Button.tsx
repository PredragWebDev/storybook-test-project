import React from 'react';
import StyledButtonRow from './button.styled';
import { Button } from 'antd';
import { Col, Row } from 'antd';
import fire_primary from '../icons/fire_primary.svg';
import fire_other from '../icons/fire_other.svg';
import { PlusOutlined } from '@ant-design/icons';
import getRadiusClass from './Tailwind';
import 'tailwindcss/tailwind.css';
// import type {SizeType} from 'antd';
// import { StyledButtonRowOther } from './button.styled';

interface ButtonProps {
  type: 'primary' | 'link' | 'text' | 'default' | 'dashed' | undefined;

  backgroundColor?: string;

  size?: 'small' | 'middle' | 'large';

  label: string;

  onClick?: () => void;
}

export const ButtonGroup = ({
  type = 'primary',
  size = 'middle',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const variable = [
    {
      width: '115px',
      height: '10px',
      fontSize1: '12px',
      fontSize2: '11px',
      firstIconSize: '14px',
      secondIconSize: '8px',
      interval: '40px',
      firstButtonPadding: '4px 8px',
      secondButtonPadding: '1px',
      radius: '3px',
      display: 'none',
    },
    {
      width: '115px',
      height: '14px',
      fontSize1: '12px',
      fontSize2: '11px',
      firstIconSize: '14px',
      secondIconSize: '10px',
      interval: '40px',
      firstButtonPadding: '4px 8px',
      secondButtonPadding: '2px',
      radius: '3px',
      display: 'none',
    },
    {
      width: '115px',
      height: '16px',
      fontSize1: '12px',
      fontSize2: '11px',
      firstIconSize: '14px',
      secondIconSize: '12px',
      interval: '40px',
      firstButtonPadding: '4px 8px',
      secondButtonPadding: '2px',
      radius: '3px',
      display: 'none',
    },
    {
      width: '115px',
      height: '20px',
      fontSize1: '12px',
      fontSize2: '11px',
      firstIconSize: '14px',
      secondIconSize: '14px',
      interval: '40px',
      firstButtonPadding: '4px 8px',
      secondButtonPadding: '3px',
      radius: '3px',
      display: 'none',
    },

    {
      width: '115px',
      height: '24px',
      fontSize1: '12px',
      fontSize2: '11px',
      firstIconSize: '14px',
      secondIconSize: '16px',
      interval: '38px',
      firstButtonPadding: '4px 8px',
      secondButtonPadding: '4px',
      radius: '4px',
      display: 'flex',
    },
    {
      width: '115px',
      height: '28px',
      fontSize1: '12px',
      fontSize2: '11px',
      firstIconSize: '14px',
      secondIconSize: '16px',
      interval: '40px',
      firstButtonPadding: '6px 8px',
      secondButtonPadding: '6px',
      radius: '4px',
      display: 'flex',
    },
    {
      width: '140px',
      height: '30px',
      fontSize1: '14px',
      fontSize2: '12px',
      firstIconSize: '16px',
      secondIconSize: '18px',
      interval: '40px',
      firstButtonPadding: '7px 12px',
      secondButtonPadding: '7px',
      radius: '6px',
      display: 'flex',
    },
    {
      width: '156px',
      height: '40px',
      fontSize1: '14px',
      fontSize2: '12px',
      firstIconSize: '18px',
      secondIconSize: '20px',
      interval: '40px',
      firstButtonPadding: '11px 16px',
      secondButtonPadding: '10px',
      radius: '8px',
      display: 'flex',
    },
    {
      width: '178px',
      height: '48px',
      fontSize1: '16px',
      fontSize2: '14px',
      firstIconSize: '20px',
      secondIconSize: '22px',
      interval: '40px',
      firstButtonPadding: '14px 20px',
      secondButtonPadding: '13px',
      radius: '8px',
      display: 'flex',
    },
    {
      width: '190px',
      height: '56px',
      fontSize1: '16px',
      fontSize2: '14px',
      firstIconSize: '22px',
      secondIconSize: '24px',
      interval: '40px',
      firstButtonPadding: '17px 24px',
      secondButtonPadding: '16px',
      radius: '8px',
      display: 'flex',
    },
  ];

  const type_of_radius = [
    'Simple', 'Round', 'Circle'
  ]


  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <>
      <Row>
        <Col span={6}>
          {variable.map((item) => {
            return (
              <StyledButtonRow
                type={type}
                width={item.width}
                height={item.height}
                fontSize1={item.fontSize1}
                fontSize2={item.fontSize2}
                firstIconSize={item.firstIconSize}
                secondIconSize={item.secondIconSize}
                interval={item.interval}
                firstButtonPadding={item.firstButtonPadding}
                secondButtonPadding={item.secondButtonPadding}
                buttonRadius={item.radius}
                display={item.display}
              >
                <div id="fireIcon">
                  <Button id="fireIconButton" size={size} type={type}>
                    <img
                      src={type === 'primary' ? fire_primary : fire_other}
                      alt="fire icon"
                    />

                    <p id="first_text">{label}</p>

                    <p id="second_text"> / 02</p>

                    <img
                      src={type === 'primary' ? fire_primary : fire_other}
                      alt="fire icon"
                    />
                  </Button>
                </div>

                <div id="plusIcon">
                  <Button id="plusIconButton" size={size} type={type}>
                    <PlusOutlined />
                  </Button>
                </div>
              </StyledButtonRow>
            );
          })}
        </Col>
      </Row>

      <Row className='mt-10'>
        {type_of_radius.map((sort) => {
          return (
            <Col span={6} className='mr-10'>
              <p className="flex font-sans font-medium justify-center ml-14 mt-4 mb-4 text-base">{sort}</p>
              <div className='flex ml-14 mt-10'>

              <div id="fireIcon" className='w-3/4 flex items-center justify-center mr-12'>
                <Button id="fireIconButton" className={`w-48 h-14 bg-indigo-600 inline-flex items-center justify-between ${getRadiusClass(sort)}`} type={type}>
                  <img
                    src={fire_primary}
                    alt="fire icon"
                  />

                  <p id="first_text" className='font-sm text-white'>{label}</p>

                  <p id="second_text" className='font-sm text-indigo-100'> / 02</p>

                  <img
                    src={fire_primary}
                    alt="fire icon"
                  />
                </Button>
              </div>

              <div id="plusIcon" className='w-1/4 flex items-center justify-center'>
                <Button id="plusIconButton" className={`w-14 h-14 bg-indigo-600 inline-flex items-center justify-center text-white ${getRadiusClass(sort)}`} type={type}>
                  <PlusOutlined />
                </Button>
              </div>
              </div>
            </Col>
          )
        })}
      </Row>
    </>
  );
};
