'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/championmastery~ChampionMasteryDto
 * @property {number} championId - Champion ID for this entry.
 * @property {number} championLevel - Champion level for specified player and champion combination.
 * @property {number} championPoints - Total number of champion points for this player and champion combination - they are used to determine championLevel.
 * @property {number} championPointsSinceLastLevel - Number of points earned since current level has been achieved. Zero if player reached maximum champion level for this champion.
 * @property {number} championPointsUntilNextLevel - Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.
 * @property {boolean} chestGranted - Is chest granted for this champion or not in current season.
 * @property {number} lastPlayTime - Last time this champion was played by this player - in Unix milliseconds time format.
 * @property {number} playerId - Player ID for this entry.
 */
class ChampionMasteryDto {
  constructor(data) {
    this.championId = convert(data.championId, Number);
    this.championLevel = convert(data.championLevel, Number);
    this.championPoints = convert(data.championPoints, Number);
    this.championPointsSinceLastLevel = convert(data.championPointsSinceLastLevel, Number);
    this.championPointsUntilNextLevel = convert(data.championPointsUntilNextLevel, Number);
    this.chestGranted = convert(data.chestGranted, Boolean);
    this.lastPlayTime = convert(data.lastPlayTime, Number);
    this.playerId = convert(data.playerId, Number);
  }
}

exports = module.exports = ChampionMasteryDto;
