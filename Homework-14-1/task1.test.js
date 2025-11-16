const axios = require("axios");

axios.interceptors.request.use((request) => {
    console.log('Запит відправлений:', request.method.toUpperCase(), request.url);
    console.log('Дані запиту:', request.data);
    return request;
});

axios.interceptors.response.use((response) => {
    console.log('Респонс отриманий:', response.status, response.config.url);
    console.log('Дані респонсу:', response.data);
    return response;
});


describe('API tests', () => {

    test("Get all users", async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {

        });
        console.log(response.data);
        expect(response.status).toEqual(200);
        expect(response.data).not.toBeNull();
        expect(response.data[0].title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    });

    test("Get first user", async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1', {

        });
        console.log(response.data);
        expect(response.status).toEqual(200);
        expect(response.data).not.toBeNull();
        expect(response.data.body).toBe("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");
    });

    test("Get comments", async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments', {

        });
        console.log(response.data);
        expect(response.status).toEqual(200);
        expect(response.data).not.toBeNull();
        expect(response.data[2].email).toBe("Nikita@garfield.biz");
    });

    test("Creating resourse", async () => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'Hello',
            body: 'World',
            userId: 1
        });
        console.log(response.data);
        expect(response.status).toEqual(201);
        expect(response.data).not.toBeNull();
        expect(response.data.id).toEqual(101);

    });

    test("Updating resourse", async () => {
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        });
        console.log(response.data);
        expect(response.status).toEqual(200);
        expect(response.data).not.toBeNull();
        expect(response.data.body).toEqual("bar");

    });

})
