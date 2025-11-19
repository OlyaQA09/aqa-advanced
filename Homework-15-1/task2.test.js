const axios = require("axios");

test("Testing Request Headers and Params", async () => {
    let sentHeaders = null;

    const interceptor = axios.interceptors.request.use((request) => {
        sentHeaders = request.headers;
        return request;
    });

    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments",
        {
            headers: { "X-Custom-Header": "TestHeader" },
            params: { postId: 1 }
        }
    );

    axios.interceptors.request.eject(interceptor);

    expect(sentHeaders["X-Custom-Header"]).toBe("TestHeader");
    expect(response.status).toBe(200);
});
