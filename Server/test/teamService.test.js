import { expect } from "chai";
import sinon from "sinon";
import Team from '../models/teamModel.js'
import teamService from '../services/teamService.js';



// Team Service
describe('Team Service', () => {
  let findStub;
  beforeEach(() => {
    findStub = sinon.stub(Team, 'find').returns({
      select: sinon.stub().returnsThis(),
      lean: sinon.stub().resolves([{ name: 'Brooklyn Nets', _id: 'BKN' }, { name: 'Atlanta Hawks', _id: 'ATL' }]),
    })
  });

  afterEach(() => {
    sinon.restore()
  });
  describe('getAllTeams', () => {
    it('should return array with team names and ids', async() => {
      const teams = await teamService.getAllTeams();
      expect(teams).to.be.an("array");
      expect(teams).to.have.length("2")
      expect(teams[0]).to.have.property('name', 'Brooklyn Nets');
      expect(teams[1]).to.have.property('name', 'Atlanta Hawks');
    });
    it('should throw error when unable to fetch', async() => {
      findStub.throws(new Error())
      try {
        const teams = await teamService.getAllTeams();
        expect.fail('Expected getAllTeams to throw an error');
      } catch (error) {
        expect(error.message).to.equal("Error Retrieving teams");
      }
    });
    
  });


  describe('getTeamStats', () => {
    let findByIdStub;

    beforeEach(() => {
      findByIdStub = sinon.stub(Team, 'findById').returns({
        select: sinon.stub().returnsThis(),
        lean: sinon.stub().resolves({ stats: { wins: 10, losses: 5 } }),
      });
    });

    it('should return team stats', async() => {
      const mockStats = { stats: { wins: 10, losses: 5 } };

      const teamStats = await teamService.getTeamStats("valid_Id")
      expect(teamStats).to.deep.equal(mockStats);
      expect(findByIdStub.calledOnce).to.be.true;
      expect(findByIdStub.firstCall.args[0]).to.equal('valid_Id');
    });

    it('should throw error when unable to fetch', async() => {
      findByIdStub.throws(new Error());
      try {
        const team = await teamService.getTeamStats("1");
        expect.fail('Expected getTeamStats to throw an error');
      } catch (error) {
        expect(error.message).to.equal("Error Retrieving team");
      }
    });

  });


  describe('getPerformers', () => {
    let findByIdStub;

    beforeEach(() => {
      findByIdStub = sinon.stub(Team, 'findById').returns({
        select: sinon.stub().returnsThis(),
        lean: sinon.stub().resolves({ topPerformers: {stat: {total: "1.5", playerId:[]}}, }),
      });
    });

    it('should return top perfomer id and stats', async() => {
      const teamTop = await teamService.getTeamTop("valid_id");
      expect(teamTop).to.be.an("object");
      expect(teamTop).to.have.property("topPerformers")
      expect(teamTop.topPerformers).to.have.property("stat")
    });
    
    it('should throw error when unable to fetch', async() => {
      findByIdStub.throws(new Error);
      try {
        const teams = await teamService.getTeamTop("valid_id");
        expect.fail("should throw error");
      } catch (error) {
        expect(error.message).to.equal("Error Retrieving team");
      }
    });
    
  });

  describe('getTeamVideos', () => {
    let findByIdStub;

    beforeEach(() => {
      findByIdStub = sinon.stub(Team, 'findById').returns({
        select: sinon.stub().returnsThis(),
        lean: sinon.stub().resolves({
          _id: "ATL",
          videos:[{}]
        }),
      });
    });


    it('should return array of team video links', async () => {
      const videos = await teamService.getTeamVideos("ATL");
      expect(videos).to.be.an('object');
      expect(videos).to.have.property('videos')
    });
  
    it('should throw error when unable to fetch', async () => {
      findByIdStub.returns({
        select: sinon.stub().returnsThis(),
        lean: sinon.stub().rejects(new Error())
      });
  
      try {
        await teamService.getTeamVideos("ATL");
        throw new Error('Expected method to reject.');
      } catch (err) {
        expect(err.message).to.equal('Error Retrieving team');
      }
    });
  });


  describe('getTeamBio', () => {
    let findByIdStub;

    beforeEach(() => {
      findByIdStub = sinon.stub(Team, 'findById').returns({
        select: sinon.stub().returnsThis(),
        lean: sinon.stub().resolves({
          _id: "ATL",
          name: "Atlanta Hawks",
          logo: "link",
          conference: "Eastern"
        }),
      });
    });

    it('should return the team bio', async () => {
      const bio = await teamService.getTeamBio("ATL");
      expect(bio).to.be.an('object');
      expect(bio).to.have.property('name', 'Atlanta Hawks');
      expect(bio).to.have.property('logo', 'link');
      expect(bio).to.have.property('conference', 'Eastern');
    });
  
    it('should throw error when unable to fetch', async () => {
      findByIdStub.returns({
        select: sinon.stub().returnsThis(),
        lean: sinon.stub().rejects(new Error("Error Retrieving team"))
      });
  
      try {
        const teams = await teamService.getTeamBio("ATL");
      } catch (err) {
        expect(err.message).to.equal("Error Retrieving team");
      }
    });
  });
})
// Get All Teams
  // return teams array 
  // array contain name of team
  // array contain id 
  // throws error sucessfully 
// Get Teams 
  // return teams stats array
  // contain stats
  // throw error sucessfully
// Get perfomers 
  // return top perfomers in team array
  // contain player ids and name
  // throw error sucessfully
// Get team vidoes  
  // return video array
  // contain vidoe links
  // throw error sucessfully
// Get Team Bio 
  // return team name logo and conference 
  // throw error sucessfully