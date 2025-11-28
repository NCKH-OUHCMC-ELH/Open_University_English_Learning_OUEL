import React from "react";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const QuestionIcon = () => (
    <>
        <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ insetInlineEnd: 24 }} />
    </>
);



export default QuestionIcon;
