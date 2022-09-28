const request = require("supertest");
const app = require("../app");

describe("API server", () => {
	let api;

	beforeAll(() => {
		api = app.listen(5000, () => {
			console.log(`Example app listening on port 5000`);
		});
	});

	afterAll((done) => {
		console.log("gracefully stopping test server");
		api.close(done);
	});

	// GET /
	it("responds to get / with a status of 200", (done) => {
		request(api).get("/").expect(200, done);
	});

	// GET /pets
	it("responds to get / with a status of 200", (done) => {
		request(api).get("/pets").expect(200, done);
		request(api).get("/cats").expect(200, done);
		request(api).get("/dogs").expect(200, done);
		request(api).get("/fish").expect(200, done);
		request(api).get("/birds").expect(200, done);
		request(api).get("/hamsters").expect(200, done);
	});

	// GET /<endpoint>/filter/:id
	it("responds to get /<endpoint>/filter/:id with a length of 4", async () => {
		const data = await request(api).get("/cats/filter/4");
		expect(data.body.length).toBe(4);
	});

	it("responds to get /<endpoint>/filter/:id with a status of 200", (done) => {
		request(api).get("/cats/filter/2").expect(200, done);
		request(api).get("/dogs/filter/3").expect(200, done);
		request(api).get("/fish/filter/4").expect(200, done);
		request(api).get("/birds/filter/5").expect(200, done);
		request(api).get("/hamsters/filter/6").expect(200, done);
		request(api).get("/pets/filter/1").expect(200, done);
	});

	// GET /<endpoint>/random
	it("responds to get /<endpoint>/random with a length of 1", async () => {
		const data = await request(api).get("/dogs/random");
		expect(typeof data).toBe("object");
	});

	it("responds to get /<endpoint>/random with a status of 200", (done) => {
		request(api).get("/cats/random").expect(200, done);
		request(api).get("/dogs/random").expect(200, done);
		request(api).get("/fish/random").expect(200, done);
		request(api).get("/birds/random").expect(200, done);
		request(api).get("/hamsters/random").expect(200, done);
		request(api).get("/pets/random").expect(200, done);
	});
});
