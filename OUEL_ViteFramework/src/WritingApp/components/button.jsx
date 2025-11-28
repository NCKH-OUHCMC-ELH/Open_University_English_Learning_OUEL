import React from 'react';
import { Button, Flex } from 'antd';

const Button_Start = ({ onClick, loading }) => (
    <Flex gap="small" wrap>
        <Button type="primary" onClick={onClick} loading={loading}>
            Kiểm tra
        </Button>




        {/* <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button> */}
    </Flex>
);



export default Button_Start;