const correctWriting = async (text) => {
    const endpoint = import.meta.env.VITE_API_GEMINI_URL;
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify({
                app_id: 2,
                input: text,
        }),
    });
    //Neu ok
    if (response.ok) {
        try {
            const data = await response.json();
            return data;
        } catch (parseErr) {
            // trả về thông tin hữu ích cho debug
            const txt = await response.text().catch(() => "");
            throw new Error(`Response JSON parse error: ${parseErr.message}. Raw: ${txt}`);
        }
    }

    // nếu không ok -> cố parse json, nếu thất bại lấy text nguyên gốc
    let errBody;
    try {
        errBody = await response.json();
    } catch {
        errBody = await response.text().catch(() => `HTTP ${response.status} - no body`);
    }

    // Nếu errBody là object có error message
    if (typeof errBody === "object" && errBody !== null) {
        const msg = errBody.error || errBody.message || JSON.stringify(errBody);
        throw new Error(`Server error ${response.status}: ${msg}`);
    } else {
        throw new Error(`Server error ${response.status}: ${errBody}`);
    }
}

export default correctWriting