import { expect } from "chai";
import sinon from "sinon";
import teamService from "../services/teamService.js";
import {
  getAllTeams,
  getTeamStats,
  getTeamBio,
  getTeamTopPerformers,
  getVideos
} from "../controllers/teamController.js";
import { afterEach, beforeEach, describe, it } from "mocha";

describe("Team Controller", () => {
  let req, res, sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    req = {};
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("getAllTeams", () => {
    it("should return 200 and a list of teams", async () => {
      const teams = [
        { id: 1, name: "Team 1" },
        { id: 2, name: "Team 2" },
      ];
      sandbox.stub(teamService, "getAllTeams").resolves(teams);

      await getAllTeams(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(teams)).to.be.true;
    });

    it("should return 404 if no teams found", async () => {
      sandbox.stub(teamService, "getAllTeams").resolves(null);

      await getAllTeams(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: "Data Not Found" })).to.be.true;
    });

    it("should return 500 if server error occurs", async () => {
      const error = new Error("Something went wrong");
      sandbox.stub(teamService, "getAllTeams").rejects(error);

      await getAllTeams(req, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ message: error.message })).to.be.true;
    });
  });

  describe("getTeamStats", () => {
    beforeEach(() => {
      req = {
        params: {
          id: 1,
        },
      };
    });

    it("should return 200 and team stats", async () => {
      const teamStats = { id: 1, name: "Team 1", stats: {} };
      sandbox.stub(teamService, "getTeamStats").resolves(teamStats);

      await getTeamStats(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(teamStats)).to.be.true;
    });

    it("should return 404 if no team stats found", async () => {
      sandbox.stub(teamService, "getTeamStats").resolves(null);

      await getTeamStats(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: "Data Not Found" })).to.be.true;
    });

    it("should return 500 if server error occurs", async () => {
      const error = new Error("Something went wrong");
      sandbox.stub(teamService, "getTeamStats").rejects(error);

      await getTeamStats(req, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ message: error.message })).to.be.true;
    });
  });

  describe("getTeamBio", () => {
    beforeEach(() => {
      req = {
        params: {
          id: 1,
        },
      };
    });

    it("should return 200 and team bio", async () => {
      const teamBio = { id: 1, name: "Team 1", bio: "Bio" };
      sandbox.stub(teamService, "getTeamBio").resolves(teamBio);

      await getTeamBio(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(teamBio)).to.be.true;
    });

    it("should return 404 if no team bio found", async () => {
      sandbox.stub(teamService, "getTeamBio").resolves(null);

      await getTeamBio(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: "Data Not Found" })).to.be.true;
    });

    it("should return 500 if server error occurs", async () => {
      const error = new Error("Something went wrong");
      sandbox.stub(teamService, "getTeamBio").rejects(error);

      await getTeamBio(req, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ message: error.message })).to.be.true;
    });
  });

  describe("getTeamTopPerformers", () => {
    beforeEach(() => {
      req = {
        params: {
          id: 1,
        },
      };
    });

    it("should return 200 and top performers", async () => {
      const topPerformers = [{ id: 1, name: "Player 1" }, { id: 2, name: "Player 2" }];
      sandbox.stub(teamService, "getTeamTop").resolves(topPerformers);

      await getTeamTopPerformers(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(topPerformers)).to.be.true;
    });

    it("should return 404 if no top performers found", async () => {
      sandbox.stub(teamService, "getTeamTop").resolves(null);

      await getTeamTopPerformers(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: "Data Not Found" })).to.be.true;
    });

    it("should return 500 if server error occurs", async () => {
      const error = new Error("Something went wrong");
      sandbox.stub(teamService, "getTeamTop").rejects(error);

      await getTeamTopPerformers(req, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ message: error.message })).to.be.true;
    });
  });

  describe("getVideos", () => {
    beforeEach(() => {
      req = {
        params: {
          id: 1,
        },
      };
    });

    it("should return 200 and team videos", async () => {
      const teamVideos = [{ id: 1, link: "http://example.com/video1" }];
      sandbox.stub(teamService, "getTeamVideos").resolves(teamVideos);

      await getVideos(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(teamVideos)).to.be.true;
    });

    it("should return 404 if no team videos found", async () => {
      sandbox.stub(teamService, "getTeamVideos").resolves(null);

      await getVideos(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: "Data Not Found" })).to.be.true;
    });

    it("should return 500 if server error occurs", async () => {
      const error = new Error("Something went wrong");
      sandbox.stub(teamService, "getTeamVideos").rejects(error);

      await getVideos(req, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ message: error.message })).to.be.true;
    });
  });
});