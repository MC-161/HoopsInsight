import { expect } from 'chai';
import sinon from 'sinon';
import Player from '../models/playerModel.js'; // Import your Player model
import playerService from '../services/playerService.js';

describe('Player Service', () => {
  describe('getAllPlayers', () => {
    let findStub;
    beforeEach(() => {
      findStub = sinon.stub(Player, 'find').returns({
        select: sinon.stub().returnsThis(),
        lean: sinon.stub().resolves([{ name: 'Player1', _id: '1' }, { name: 'Player2', _id: '2' }]),
      });
    });

    afterEach(() => {
      sinon.restore();
    });

    it('return all players & ids', async () => {
      const players = await playerService.getAllPlayers();
      expect(players).to.be.an("array");
      expect(players).to.have.length("2")
      expect(players[0]).to.have.property('name', 'Player1');
      expect(players[1]).to.have.property('name', 'Player2');
    });

    it('should throw error when issue occurs with fetching', async () => {
      findStub.throws(new Error(" DB Error"))
      try {
        const players = await playerService.getAllPlayers();
      } catch (error) {
        expect(error.message).to.equal("Error Retrieving players DB Error")
      }
    });
  });
  describe('getPlayerById', () => {
    let findByIdStub;

    beforeEach(() => {
      findByIdStub = sinon.stub(Player, 'findById').returns({
        select: sinon.stub().returnsThis(),
        lean: sinon.stub().resolves([{ name: 'Player1', _id: '1', stats: []}]),
      });
    });

    afterEach(() => {
      sinon.restore()
    })

    it('should return player information by id', async () => {
      findByIdStub.resolves({name: 'Player1', _id: '1', stats: {2018:{}}});

      const player = await playerService.getPlayerById("1");

      expect(player).to.be.an("object");
      expect(player).to.have.property("name", "Player1");
      expect(player.stats).to.be.an('object');
    });

    it('should throw error if problem occurs with fetch ', async () => {
      findByIdStub.throws(new Error(" DB Error"));
      try {
        const player = await playerService.getPlayerById("1");
        expect.fail('Expected getAllPlayers to throw an error');
      } catch (error) {
        expect(error.message).to.equal("Error Retrieving player DB Error");
      }
    });

  });
});

