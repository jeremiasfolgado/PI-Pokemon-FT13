const { expect } = require('chai');

const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');
const { v4: uuidv4 } = require('uuid')

const agent = session(app);
const pokemon = {
  name: 'TestHenry',
  id: uuidv4(),
  hp: 50,
  attack: 45,
  defense: 60,
  speed: 55,
  height: 7,
  weight: 40,
  typeOne: 'normal'

};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', () => {
      it('should get 200', () =>
      agent.get('/pokemons')
        .expect(200)
        .expect('Content-Type', /json/));
    }
    );
  });
     
});

describe('Pokemon Detail route', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons/:id', () => {
    it('should get 200', () =>
      agent.get('/pokemons/65')
      .expect(200)
      .expect('Content-Type', /json/)
    );
  });
});


describe('Types route', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /types', () => {
    it('should get 200', () =>
      agent.get('/types')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          expect(Array.isArray(res.body)).to.eql(true);
        })
    );
  });
});

describe('Post pokemon', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('POST /pokemons', () => {
    it('should get 200', () =>
      agent.post('/pokemons').send(pokemon)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          expect(res.body.name).to.eql('testhenry');
        })
    );
  });
});


