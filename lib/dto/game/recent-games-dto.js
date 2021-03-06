'use strict';

const convert = require('../../util/convert.js');

const GameDto = require('./game-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/game~RecentGamesDto
 * @property {Array.<module:LeagueWrapper/dto/game~GameDto>} games - Collection of recent games played (max 10).
 * @property {number} summonerId - Summoner ID.
 */
class RecentGamesDto  {
  constructor(data) {
    this.games = convert(data.games, [GameDto]);
    this.summonerId = convert(data.summonerId, Number);
  }
}

exports = module.exports = RecentGamesDto ;
