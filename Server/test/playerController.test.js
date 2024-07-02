import { expect } from "chai";
import sinon from "sinon";
import playerService from "../services/playerService.js";
import nbaService from "../services/nbaService.js";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  fetchGamesPlayed,
  getAllPlayers,
  getPlayer,
} from "../controllers/playerController.js";
import { afterEach, beforeEach, describe, it } from "mocha";

describe("Player Controller", () => {
  describe("getAllPlayers", () => {
    let req, res, sandbox, mock;

    beforeEach(() => {
      mock = new MockAdapter(axios);
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

    it("should return 200 and a list of players", async () => {
      const players = [
        { id: 1, name: "Player 1" },
        { id: 2, name: "Player 2" },
      ];
      sandbox.stub(playerService, "getAllPlayers").resolves(players);

      await getAllPlayers(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(players)).to.be.true;
    });

    it("should return 404 if no players found ", async () => {
      sandbox.stub(playerService, "getAllPlayers").resolves([]);
      await getAllPlayers(req, res);
      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: "No players found" })).to.be.true;
    });

    it("should return 500 if server error occurs ", async () => {
      const error = new Error("Something went wrong");
      sandbox.stub(playerService, "getAllPlayers").rejects(error);
      await getAllPlayers(req, res);
      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ message: error.message })).to.be.true;
    });
  });

  describe("getPlayer", () => {
    let req, res, sandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      req = {
        params: {
          id: 1,
        },
      };
      res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
    });

    afterEach(() => {
      sandbox.restore();
    });

    it("should return 200 and player info", async () => {
      const playerStats = { id: 1, name: "Player 1" };
      const playerImgBio = { data: { image: "img_url", bio: "player bio" } };

      sandbox.stub(playerService, "getPlayerById").resolves(playerStats);
      sandbox.stub(nbaService, "getPlayerImageBio").resolves(playerImgBio);

      await getPlayer(req, res);

      const playerInfo = { playerStats, playerImgBio: playerImgBio.data };

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(playerInfo)).to.be.true;
    });

    it("should return 404 if no player found ", async () => {
      const error = new Error("Something went wrong")
      sandbox.stub(playerService, "getPlayerById").rejects(error)
      sandbox.stub(nbaService, "getPlayerImageBio").rejects(error)
      await getPlayer(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: error.message })).to.be.true;
    });
  });

  describe("fetchGamesPlayed", () => {
    let req, res, sandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      req = {
        params: {
          id: 1,
        },
      };
      res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      };
    });

    afterEach(() => {
      sandbox.restore();
    });
    it("should return 200 if games are fetched ", async () => {
      const playerGames = [
        { id: 1, game: "chi@cha" },
        { id: 1, game: "chi@chr" },
      ];
      sandbox
        .stub(nbaService, "getPlayerGamesPlayed")
        .resolves({ data: playerGames });

      await fetchGamesPlayed(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(playerGames)).to.be.true;
    });

    it("should return 404 if no games found ", async () => {
      const error = new Error("Something went wrong")
      sandbox.stub(nbaService, "getPlayerGamesPlayed").rejects(error)
      await fetchGamesPlayed(req, res);

      expect(res.status.calledWith(404)).to.be.true;
      expect(res.json.calledWith({ message: error.message })).to.be.true;
    });
  });
});
