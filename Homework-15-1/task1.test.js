const axios = require("axios");

test("Get all users, try catch error", async () => {
    try {
        const responseGET = await axios.get('https://jsonplaceholder.typicode.com/posts/1000000abcd');
        console.log("Test passed:", responseGET.data);
    }
    catch (error) {
        console.log('Error message:', error.message);
        expect(error.response.status).toBe(404);
        expect(error.message).toContain("404");
    }
});

