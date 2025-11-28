import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const TextInput = ({ value, onChange }) => (
    <TextArea
        showCount
        maxLength={500}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Nhập hoặc sao chép văn bản (ctrl+v) tại đây..."
        style={{ height: 300, resize: 'none' }}
    />
);

export default TextInput;