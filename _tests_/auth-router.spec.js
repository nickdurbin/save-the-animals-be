const request = require('supertest')
const server = require('../api/server')

describe("AUTH routes tests", () => {
  describe("POST /api/auth/", () => {
    it("returns a 400 from /register when there is missing data in the body", () => {
      request(server)
        .post("/api/auth/register/supporter")
        .send({
          email: "test@test.com", 
          username: '', 
          password: "password", 
          first_name: "Bob", 
          last_name: "Barker",
          isOrg: false
        })
        .then(res => {
          expect(res.status).toBe(400);
        });
    });

    it("should provide message about including first_name", () => {
      return request(server)
        .post("/api/auth/register/supporter")
        .send({
          email: "test@test.com", 
          username: 'user', 
          password: "password", 
          first_name: "", 
          last_name: "Barker",
          isOrg: false
        })
        .then(res => {
          expect(res.body.error).toMatch(/first_name/i);
        });
    });

    it("should provide message about including last_name", () => {
      return request(server)
        .post("/api/auth/register/supporter")
        .send({
          email: "test@test.com", 
          username: 'user', 
          password: "password", 
          first_name: "Bob", 
          last_name: "",
          isOrg: false
        })
        .then(res => {
          expect(res.body.error).toMatch(/last_name/i);
        });
    });

    it("should provide message about including username", () => {
      return request(server)
        .post("/api/auth/register/organization")
        .send({
          email: "org1@org1.com",
          password: "password", 
          org_name: "Help Animals", 
          org_description: "The root of our mission is to provide shelter for endangered animals around the world.",
          isOrg: true, 
          campaign_id: 3 
        })
        .then(res => {
          expect(res.body.error).toMatch(/username/i);
        });
    });

    it("should provide message about including password", () => {
      return request(server)
        .post("/api/auth/register/organization")
        .send({   
          email: "org1@org1.com",
          username: "org1",
          org_name: "Help Animals", 
          org_description: "The root of our mission is to provide shelter for endangered animals around the world.",
          isOrg: true, 
          campaign_id: 3  
        })
        .then(res => {
          expect(res.body.error).toMatch(/password/i);
        });
    });

    it("should return 400 from /login when a email and/or password is missing from the body", () => {
      return request(server)
        .post("/api/auth/login")
        .send({ email: "org1@org1.com", password: "" })
        .then(res => {
          expect(res.status).toBe(400);
        });
    });

    it("should provide message about including email", () => {
      return request(server)
        .post("/api/auth/login")
        .send({ email: "", password: "password"})
        .then(res => {
          expect(res.body.error).toMatch(/email/i);
        });
    });

    it("should provide message about including password", () => {
      return request(server)
        .post("/api/auth/login")
        .send({ email: "org1@or1.com", password: ""})
        .then(res => {
          expect(res.body.error).toMatch(/password/i);
        });
    });
  })
})