const request = require("supertest");
const server = require("../api/server");

describe("server,js", () => {
  describe("environment", () => {
    test("should set environment to testing", () => {
      expect(process.env.DB_ENV).toBe("testing")
    })
  })

  describe("GET /", () => {
    test("should return a 200 status of Okay", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200)
      })
    })

    test("should return html", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/html/i)
      })
    })
  })
})