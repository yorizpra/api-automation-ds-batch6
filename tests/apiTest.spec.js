const { test, expect } = require('@playwright/test');
const Ajv = require('ajv');
const ajv = new Ajv();

test.describe("Reqres API Tests", () => {
  test("GET Users", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users?page=2");
    const responseJson = await response.json();
    const valid = ajv.validate(require("./json-schema/get-user.schema.json"), responseJson);
    if (!valid) {
      console.error("AJV Validation Errors:", ajv.errorsText());
    }
    expect(valid).toBe(true);
  });

  test("POST Create User", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {
      data: {
        name: "morpheus",
        job: "leader"
      }
    });
    const responseJson = await response.json();
    const valid = ajv.validate(require("./json-schema/post-user.schema.json"), responseJson);
    if (!valid) {
      console.error("AJV Validation Errors:", ajv.errorsText());
    }
    expect(valid).toBe(true);
  });

  test("DELETE User", async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/2");
    expect(response.status()).toBe(204);
  });

  test("PUT Update User", async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/2", {
      data: {
        name: "morpheus",
        job: "zion resident"
      }
    });
    const responseJson = await response.json();
    const valid = ajv.validate(require("./json-schema/put-user.schema.json"), responseJson);
    if (!valid) {
      console.error("AJV Validation Errors:", ajv.errorsText());
    }
    expect(valid).toBe(true);
  });
});