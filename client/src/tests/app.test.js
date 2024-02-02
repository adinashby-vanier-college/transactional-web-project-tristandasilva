import axios from "../api/axiosConfig.js";

test("login", async () => {
  const response = await axios.post("/users/login", {
    email: "test@test.com",
    password: "Bruce-12",
  });
  expect(response.data.first_name).toBe("Justin");
});

test("search", async () => {
  const response = await axios.get("/products/search?q=Kanye&limit=1");
  expect(response.data.data[0].title).toBe("The College Dropout");
});

test("trending", async () => {
  const response = await axios.get("/products/trending?limit=1");
  expect(response.data.data[0].popularity).toBe(417556);
});
