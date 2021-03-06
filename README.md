# league-wrapper
A wrapper for the [League of Legends official API](https://developer.riotgames.com/). 

## Introduction
This project aims to provide an easy to use interface for the League of Legends API.
Since it's my first public project, please feel free to contact me and leave some feedback.

Also please keep in mind that this is not a stable version yet, so interface spec might change while the implementation is still worked on.

## Installation
```
$ npm install league-wrapper
```

## Features
* Wrapper for all provided services
* Fully documented
* JSDoc for the Response DataObjects
* Can be used both as [Promise](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) or with callbacks

## Example Usage
### Getting started
The LeagueWrapper accepts the API key and an object with the default region used for the requests.
You can get your key from the [Developer Portal](https://developer.riotgames.com/).
 
If no region is passed the Wrapper will default to Region.EUW. Possible regions can be found [here](doc/constant/Region.md)
```js
const LeagueWrapper = require('league-wrapper');

const api = new LeagueWrapper('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', {
  region: LeagueWrapper.Region.EUW
});
```
### Using Promise
```js
api.summoner.getByNames('PostCrafter').then(function(summoners) {
  console.log(summoners);
});
/* Console output:
  {
    postcrafter: {
      id: 48944322,
      name: 'PostCrafter',
      profileIconId: 1376,
      summonerLevel: 30,
      revisionDate: 1476740328000
    }
  }
*/
```
### Using callback
```js
api.summoner.getByNames('PostCrafter', function(error, summoners) {
  console.log(summoners);
});
/* Console output:
  {
    postcrafter: {
      id: 48944322,
      name: 'PostCrafter',
      profileIconId: 1376,
      summonerLevel: 30,
      revisionDate: 1476740328000
    }
  }
*/
```

## Documentation
See [here](doc).

## Examples
See [here](examples).

## License
[AGPL-3.0](LICENSE.md)
