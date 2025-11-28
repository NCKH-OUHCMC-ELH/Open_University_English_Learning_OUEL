import { Card, Col, Flex, Typography } from 'antd';

//Dùng component card
const { Text } = Typography;
const Details = ({ vocabulary, grammar, coherence }) => (
    <Col gutter={16}>
        <Flex vertical gap={32}>
            <Col span={20}>
                <Card title="Grammar" variant="borderless" className='card_grammar'>
                    <Text>{grammar || "Hiện chưa có."}</Text>
                </Card>
            </Col>
            <Col span={20}>
                <Card title="Vocabulary" variant="borderless" className='card_vocabulary'>
                    <Text>{vocabulary || "Hiện chưa có."}</Text>
                </Card>
            </Col>
            <Col span={20}>
                <Card title="Coherence & Cohesion" variant="borderless" className='card_CC'>
                    <Text>{coherence || "Hiện chưa có."}</Text>
                </Card>
            </Col>
        </Flex>

    </Col>
);

// Đoạn văn bản tiếng Anh đã được chỉnh sửa
const { Paragraph } = Typography;
const Output = ({ text, error }) => {
    const ellipsis = "";
   
    if (error) {
        return <div style={{ color: 'red' }}> Lỗi: {error} </div>
    }
    return (
        <>
            <Paragraph ellipsis={ellipsis ? { rows: 5, expandable: true, symbol: 'more' } : false}>
                {text || "Kết quả sẽ hiển thị ở đây..."}
            </Paragraph>
        </>
    );
};

export { Details, Output };