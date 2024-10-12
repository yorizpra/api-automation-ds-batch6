const { Ajv } = require("ajv");
const { test, expect } = require('@playwright/test');
const ajv = new Ajv();

test('GET Request', async ({ request }) => {
  const response = await request.get('https://api.restful-api.dev/objects');
  const responseJson = await response .json();
  console.log("cobaa 1", responseJson);
});

test('POST Request', async ({ request }) => {
  const reqHeaders = {
    accept: 'application/json',
  };

  const reqBody = {
    "name": "Lenovo laptop yoga",
    "data": {
      "price": 1000,
      "currency": "USD",
      "CPU model": "Intel Core i7",
      "Hard disk size": "1TB SSD",
    }
  };

  const response = await request.post('https://api.restful-api.dev/objects', {
    headers: reqHeaders,
    data: reqBody,
  });
  const responseJson = await response .json();
  console.log("cobaa 2", responseJson);

  // const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
  //   json: {
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   },
  // });
  // console.log("cobaa 2", await response.json());
});


test('test case 1', async ({ page }) => {
  console.log('test case 1');
});

test('test case 2', async ({ page }) => {
  console.log('test case 2');
});

test('test case 3', async ({ page }) => {
  console.log('test case 3');
});

test('test case 4', async ({ page }) => {
  console.log('test case 4');
});

test.describe('Positive Test', () => {
  test('test case 1', async ({ page }) => {
    console.log('test case 1');
  });
  
  test('test case 2', async ({ page }) => {
    console.log('test case 2');
  });
});

test.describe('Negative Test', () => {
  test('test case 1', async ({ page }) => {
    console.log('test case 1');
  });
  
  test('test case 2', async ({ page }) => {
    console.log('test case 2');
  });

  test.describe('Invalid Username Group', () => {
    test('test case Invalid Username Group 1', async ({ page }) => {
      console.log('test case 1');
    });
  });

  test.describe('Invalid Password Group', () => {
    test('test case Invalid Password Group 1', async ({ page }) => {
      console.log('test case 1');
    });
  });
});
