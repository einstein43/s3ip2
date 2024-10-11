import request from "supertest";
import { Response, Request } from "express";
import app from "../src/index";
import { Golfer } from "../src/models/golfer.model";

describe("Test app.ts", () => {
  test("Catch-all route", async () => {
    const res = await request(app).get("/golfer/all");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });

  test("Update golfer by ID", async () => {
    const res = await request(app).put("/golfer/update").send({
      id: 4,
      name: "test user",
      age: 25,
      handicap: "7.8",
      homecourse: "Golf Course A",
      country: "BN",
      ngf: 135,
      password: "0",
      currentmatch_id: 1,
      currentflight_id: 1,
    });
    expect(res.statusCode).toEqual(200);
  });

  test("Get golfer by ID", async () => {
    const golferId = 4;
    const res = await request(app).get(`/golfer/${golferId}`);
    expect(res.body).toEqual({
      id: 4,
      name: "test user",
      age: 25,
      handicap: "7.8",
      homecourse: "Golf Course A",
      country: "BN",
      ngf: 127,
      password: "0",
      currentmatch_id: 1,
      currentflight_id: 1,
    });
  });

  test("Get golfer by NGF", async () => {
    const ngf = 127;
    const res = await request(app).get(`/golfer/ngf/${ngf}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      id: 4,
      name: "test user",
      age: 25,
      handicap: "7.8",
      homecourse: "Golf Course A",
      country: "BN",
      ngf: 127,
      password: "0",
      currentmatch_id: 1,
      currentflight_id: 1,
    });
  });
});
