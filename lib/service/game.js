'use strict';

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class GameService extends Service {
  constructor(api) {
    super(api, 'v2.2');
  }

  /**
   * @callback GameService~getBySummonerId
   * @param {?Error} error
   * @param {RecentGamesDto} [data]
   */
  /**
   * @param {number} summonerId
   * @param {GameService~getBySummonerId} [callback]
   *
   * @return {Promise.<RecentGamesDto>}
   */
  getBySummonerId(summonerId, callback) {
    return this.api.request(
      '/api/lol/${region}/v1.3/game/by-summoner/${summonerId}/recent',
      {
        params: {
          summonerId: summonerId
        }
      },
      this._dataHandler(callback)
    );
  }
}

exports = module.exports = GameService;
