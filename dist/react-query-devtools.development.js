(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-query')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-query'], factory) :
  (global = global || self, factory(global.ReactQueryDevtools = {}, global.React, global.ReactQuery));
}(this, (function (exports, React, reactQuery) { 'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$1.apply(this, arguments);
  }

  var characterMap = {
    "À": "A",
    "Á": "A",
    "Â": "A",
    "Ã": "A",
    "Ä": "A",
    "Å": "A",
    "Ấ": "A",
    "Ắ": "A",
    "Ẳ": "A",
    "Ẵ": "A",
    "Ặ": "A",
    "Æ": "AE",
    "Ầ": "A",
    "Ằ": "A",
    "Ȃ": "A",
    "Ç": "C",
    "Ḉ": "C",
    "È": "E",
    "É": "E",
    "Ê": "E",
    "Ë": "E",
    "Ế": "E",
    "Ḗ": "E",
    "Ề": "E",
    "Ḕ": "E",
    "Ḝ": "E",
    "Ȇ": "E",
    "Ì": "I",
    "Í": "I",
    "Î": "I",
    "Ï": "I",
    "Ḯ": "I",
    "Ȋ": "I",
    "Ð": "D",
    "Ñ": "N",
    "Ò": "O",
    "Ó": "O",
    "Ô": "O",
    "Õ": "O",
    "Ö": "O",
    "Ø": "O",
    "Ố": "O",
    "Ṍ": "O",
    "Ṓ": "O",
    "Ȏ": "O",
    "Ù": "U",
    "Ú": "U",
    "Û": "U",
    "Ü": "U",
    "Ý": "Y",
    "à": "a",
    "á": "a",
    "â": "a",
    "ã": "a",
    "ä": "a",
    "å": "a",
    "ấ": "a",
    "ắ": "a",
    "ẳ": "a",
    "ẵ": "a",
    "ặ": "a",
    "æ": "ae",
    "ầ": "a",
    "ằ": "a",
    "ȃ": "a",
    "ç": "c",
    "ḉ": "c",
    "è": "e",
    "é": "e",
    "ê": "e",
    "ë": "e",
    "ế": "e",
    "ḗ": "e",
    "ề": "e",
    "ḕ": "e",
    "ḝ": "e",
    "ȇ": "e",
    "ì": "i",
    "í": "i",
    "î": "i",
    "ï": "i",
    "ḯ": "i",
    "ȋ": "i",
    "ð": "d",
    "ñ": "n",
    "ò": "o",
    "ó": "o",
    "ô": "o",
    "õ": "o",
    "ö": "o",
    "ø": "o",
    "ố": "o",
    "ṍ": "o",
    "ṓ": "o",
    "ȏ": "o",
    "ù": "u",
    "ú": "u",
    "û": "u",
    "ü": "u",
    "ý": "y",
    "ÿ": "y",
    "Ā": "A",
    "ā": "a",
    "Ă": "A",
    "ă": "a",
    "Ą": "A",
    "ą": "a",
    "Ć": "C",
    "ć": "c",
    "Ĉ": "C",
    "ĉ": "c",
    "Ċ": "C",
    "ċ": "c",
    "Č": "C",
    "č": "c",
    "C̆": "C",
    "c̆": "c",
    "Ď": "D",
    "ď": "d",
    "Đ": "D",
    "đ": "d",
    "Ē": "E",
    "ē": "e",
    "Ĕ": "E",
    "ĕ": "e",
    "Ė": "E",
    "ė": "e",
    "Ę": "E",
    "ę": "e",
    "Ě": "E",
    "ě": "e",
    "Ĝ": "G",
    "Ǵ": "G",
    "ĝ": "g",
    "ǵ": "g",
    "Ğ": "G",
    "ğ": "g",
    "Ġ": "G",
    "ġ": "g",
    "Ģ": "G",
    "ģ": "g",
    "Ĥ": "H",
    "ĥ": "h",
    "Ħ": "H",
    "ħ": "h",
    "Ḫ": "H",
    "ḫ": "h",
    "Ĩ": "I",
    "ĩ": "i",
    "Ī": "I",
    "ī": "i",
    "Ĭ": "I",
    "ĭ": "i",
    "Į": "I",
    "į": "i",
    "İ": "I",
    "ı": "i",
    "Ĳ": "IJ",
    "ĳ": "ij",
    "Ĵ": "J",
    "ĵ": "j",
    "Ķ": "K",
    "ķ": "k",
    "Ḱ": "K",
    "ḱ": "k",
    "K̆": "K",
    "k̆": "k",
    "Ĺ": "L",
    "ĺ": "l",
    "Ļ": "L",
    "ļ": "l",
    "Ľ": "L",
    "ľ": "l",
    "Ŀ": "L",
    "ŀ": "l",
    "Ł": "l",
    "ł": "l",
    "Ḿ": "M",
    "ḿ": "m",
    "M̆": "M",
    "m̆": "m",
    "Ń": "N",
    "ń": "n",
    "Ņ": "N",
    "ņ": "n",
    "Ň": "N",
    "ň": "n",
    "ŉ": "n",
    "N̆": "N",
    "n̆": "n",
    "Ō": "O",
    "ō": "o",
    "Ŏ": "O",
    "ŏ": "o",
    "Ő": "O",
    "ő": "o",
    "Œ": "OE",
    "œ": "oe",
    "P̆": "P",
    "p̆": "p",
    "Ŕ": "R",
    "ŕ": "r",
    "Ŗ": "R",
    "ŗ": "r",
    "Ř": "R",
    "ř": "r",
    "R̆": "R",
    "r̆": "r",
    "Ȓ": "R",
    "ȓ": "r",
    "Ś": "S",
    "ś": "s",
    "Ŝ": "S",
    "ŝ": "s",
    "Ş": "S",
    "Ș": "S",
    "ș": "s",
    "ş": "s",
    "Š": "S",
    "š": "s",
    "Ţ": "T",
    "ţ": "t",
    "ț": "t",
    "Ț": "T",
    "Ť": "T",
    "ť": "t",
    "Ŧ": "T",
    "ŧ": "t",
    "T̆": "T",
    "t̆": "t",
    "Ũ": "U",
    "ũ": "u",
    "Ū": "U",
    "ū": "u",
    "Ŭ": "U",
    "ŭ": "u",
    "Ů": "U",
    "ů": "u",
    "Ű": "U",
    "ű": "u",
    "Ų": "U",
    "ų": "u",
    "Ȗ": "U",
    "ȗ": "u",
    "V̆": "V",
    "v̆": "v",
    "Ŵ": "W",
    "ŵ": "w",
    "Ẃ": "W",
    "ẃ": "w",
    "X̆": "X",
    "x̆": "x",
    "Ŷ": "Y",
    "ŷ": "y",
    "Ÿ": "Y",
    "Y̆": "Y",
    "y̆": "y",
    "Ź": "Z",
    "ź": "z",
    "Ż": "Z",
    "ż": "z",
    "Ž": "Z",
    "ž": "z",
    "ſ": "s",
    "ƒ": "f",
    "Ơ": "O",
    "ơ": "o",
    "Ư": "U",
    "ư": "u",
    "Ǎ": "A",
    "ǎ": "a",
    "Ǐ": "I",
    "ǐ": "i",
    "Ǒ": "O",
    "ǒ": "o",
    "Ǔ": "U",
    "ǔ": "u",
    "Ǖ": "U",
    "ǖ": "u",
    "Ǘ": "U",
    "ǘ": "u",
    "Ǚ": "U",
    "ǚ": "u",
    "Ǜ": "U",
    "ǜ": "u",
    "Ứ": "U",
    "ứ": "u",
    "Ṹ": "U",
    "ṹ": "u",
    "Ǻ": "A",
    "ǻ": "a",
    "Ǽ": "AE",
    "ǽ": "ae",
    "Ǿ": "O",
    "ǿ": "o",
    "Þ": "TH",
    "þ": "th",
    "Ṕ": "P",
    "ṕ": "p",
    "Ṥ": "S",
    "ṥ": "s",
    "X́": "X",
    "x́": "x",
    "Ѓ": "Г",
    "ѓ": "г",
    "Ќ": "К",
    "ќ": "к",
    "A̋": "A",
    "a̋": "a",
    "E̋": "E",
    "e̋": "e",
    "I̋": "I",
    "i̋": "i",
    "Ǹ": "N",
    "ǹ": "n",
    "Ồ": "O",
    "ồ": "o",
    "Ṑ": "O",
    "ṑ": "o",
    "Ừ": "U",
    "ừ": "u",
    "Ẁ": "W",
    "ẁ": "w",
    "Ỳ": "Y",
    "ỳ": "y",
    "Ȁ": "A",
    "ȁ": "a",
    "Ȅ": "E",
    "ȅ": "e",
    "Ȉ": "I",
    "ȉ": "i",
    "Ȍ": "O",
    "ȍ": "o",
    "Ȑ": "R",
    "ȑ": "r",
    "Ȕ": "U",
    "ȕ": "u",
    "B̌": "B",
    "b̌": "b",
    "Č̣": "C",
    "č̣": "c",
    "Ê̌": "E",
    "ê̌": "e",
    "F̌": "F",
    "f̌": "f",
    "Ǧ": "G",
    "ǧ": "g",
    "Ȟ": "H",
    "ȟ": "h",
    "J̌": "J",
    "ǰ": "j",
    "Ǩ": "K",
    "ǩ": "k",
    "M̌": "M",
    "m̌": "m",
    "P̌": "P",
    "p̌": "p",
    "Q̌": "Q",
    "q̌": "q",
    "Ř̩": "R",
    "ř̩": "r",
    "Ṧ": "S",
    "ṧ": "s",
    "V̌": "V",
    "v̌": "v",
    "W̌": "W",
    "w̌": "w",
    "X̌": "X",
    "x̌": "x",
    "Y̌": "Y",
    "y̌": "y",
    "A̧": "A",
    "a̧": "a",
    "B̧": "B",
    "b̧": "b",
    "Ḑ": "D",
    "ḑ": "d",
    "Ȩ": "E",
    "ȩ": "e",
    "Ɛ̧": "E",
    "ɛ̧": "e",
    "Ḩ": "H",
    "ḩ": "h",
    "I̧": "I",
    "i̧": "i",
    "Ɨ̧": "I",
    "ɨ̧": "i",
    "M̧": "M",
    "m̧": "m",
    "O̧": "O",
    "o̧": "o",
    "Q̧": "Q",
    "q̧": "q",
    "U̧": "U",
    "u̧": "u",
    "X̧": "X",
    "x̧": "x",
    "Z̧": "Z",
    "z̧": "z"
  };
  var chars = Object.keys(characterMap).join('|');
  var allAccents = new RegExp(chars, 'g');
  var firstAccent = new RegExp(chars, '');

  var removeAccents = function (string) {
    return string.replace(allAccents, function (match) {
      return characterMap[match];
    });
  };

  var hasAccents = function (string) {
    return !!string.match(firstAccent);
  };

  var removeAccents_1 = removeAccents;
  var has = hasAccents;
  var remove = removeAccents;
  removeAccents_1.has = has;
  removeAccents_1.remove = remove;

  var rankings = {
    CASE_SENSITIVE_EQUAL: 9,
    EQUAL: 8,
    STARTS_WITH: 7,
    WORD_STARTS_WITH: 6,
    STRING_CASE: 5,
    STRING_CASE_ACRONYM: 4,
    CONTAINS: 3,
    ACRONYM: 2,
    MATCHES: 1,
    NO_MATCH: 0
  };
  var caseRankings = {
    CAMEL: 0.8,
    PASCAL: 0.6,
    KEBAB: 0.4,
    SNAKE: 0.2,
    NO_CASE: 0
  };
  matchSorter.rankings = rankings;
  matchSorter.caseRankings = caseRankings;
  /**
   * Takes an array of items and a value and returns a new array with the items that match the given value
   * @param {Array} items - the items to sort
   * @param {String} value - the value to use for ranking
   * @param {Object} options - Some options to configure the sorter
   * @return {Array} - the new sorted array
   */

  function matchSorter(items, value, options) {
    if (options === void 0) {
      options = {};
    } // not performing any search/sort if value(search term) is empty


    if (!value) return items;
    var _options = options,
        keys = _options.keys,
        _options$threshold = _options.threshold,
        threshold = _options$threshold === void 0 ? rankings.MATCHES : _options$threshold;
    var matchedItems = items.reduce(reduceItemsToRanked, []);
    return matchedItems.sort(sortRankedItems).map(function (_ref) {
      var item = _ref.item;
      return item;
    });

    function reduceItemsToRanked(matches, item, index) {
      var _getHighestRanking = getHighestRanking(item, keys, value, options),
          rankedItem = _getHighestRanking.rankedItem,
          rank = _getHighestRanking.rank,
          keyIndex = _getHighestRanking.keyIndex,
          _getHighestRanking$ke = _getHighestRanking.keyThreshold,
          keyThreshold = _getHighestRanking$ke === void 0 ? threshold : _getHighestRanking$ke;

      if (rank >= keyThreshold) {
        matches.push({
          rankedItem: rankedItem,
          item: item,
          rank: rank,
          index: index,
          keyIndex: keyIndex
        });
      }

      return matches;
    }
  }
  /**
   * Gets the highest ranking for value for the given item based on its values for the given keys
   * @param {*} item - the item to rank
   * @param {Array} keys - the keys to get values from the item for the ranking
   * @param {String} value - the value to rank against
   * @param {Object} options - options to control the ranking
   * @return {{rank: Number, keyIndex: Number, keyThreshold: Number}} - the highest ranking
   */


  function getHighestRanking(item, keys, value, options) {
    if (!keys) {
      return {
        // ends up being duplicate of 'item' in matches but consistent
        rankedItem: item,
        rank: getMatchRanking(item, value, options),
        keyIndex: -1,
        keyThreshold: options.threshold
      };
    }

    var valuesToRank = getAllValuesToRank(item, keys);
    return valuesToRank.reduce(function (_ref2, _ref3, i) {
      var rank = _ref2.rank,
          rankedItem = _ref2.rankedItem,
          keyIndex = _ref2.keyIndex,
          keyThreshold = _ref2.keyThreshold;
      var itemValue = _ref3.itemValue,
          attributes = _ref3.attributes;
      var newRank = getMatchRanking(itemValue, value, options);
      var newRankedItem = rankedItem;
      var minRanking = attributes.minRanking,
          maxRanking = attributes.maxRanking,
          threshold = attributes.threshold;

      if (newRank < minRanking && newRank >= rankings.MATCHES) {
        newRank = minRanking;
      } else if (newRank > maxRanking) {
        newRank = maxRanking;
      }

      if (newRank > rank) {
        rank = newRank;
        keyIndex = i;
        keyThreshold = threshold;
        newRankedItem = itemValue;
      }

      return {
        rankedItem: newRankedItem,
        rank: rank,
        keyIndex: keyIndex,
        keyThreshold: keyThreshold
      };
    }, {
      rank: rankings.NO_MATCH,
      keyIndex: -1,
      keyThreshold: options.threshold
    });
  }
  /**
   * Gives a rankings score based on how well the two strings match.
   * @param {String} testString - the string to test against
   * @param {String} stringToRank - the string to rank
   * @param {Object} options - options for the match (like keepDiacritics for comparison)
   * @returns {Number} the ranking for how well stringToRank matches testString
   */


  function getMatchRanking(testString, stringToRank, options) {
    /* eslint complexity:[2, 12] */
    testString = prepareValueForComparison(testString, options);
    stringToRank = prepareValueForComparison(stringToRank, options); // too long

    if (stringToRank.length > testString.length) {
      return rankings.NO_MATCH;
    } // case sensitive equals


    if (testString === stringToRank) {
      return rankings.CASE_SENSITIVE_EQUAL;
    }

    var caseRank = getCaseRanking(testString);
    var isPartial = isPartialOfCase(testString, stringToRank, caseRank);
    var isCasedAcronym = isCaseAcronym(testString, stringToRank, caseRank); // Lower casing before further comparison

    testString = testString.toLowerCase();
    stringToRank = stringToRank.toLowerCase(); // case insensitive equals

    if (testString === stringToRank) {
      return rankings.EQUAL + caseRank;
    } // starts with


    if (testString.indexOf(stringToRank) === 0) {
      return rankings.STARTS_WITH + caseRank;
    } // word starts with


    if (testString.indexOf(" " + stringToRank) !== -1) {
      return rankings.WORD_STARTS_WITH + caseRank;
    } // is a part inside a cased string


    if (isPartial) {
      return rankings.STRING_CASE + caseRank;
    } // is acronym for a cased string


    if (caseRank > 0 && isCasedAcronym) {
      return rankings.STRING_CASE_ACRONYM + caseRank;
    } // contains


    if (testString.indexOf(stringToRank) !== -1) {
      return rankings.CONTAINS + caseRank;
    } else if (stringToRank.length === 1) {
      // If the only character in the given stringToRank
      //   isn't even contained in the testString, then
      //   it's definitely not a match.
      return rankings.NO_MATCH;
    } // acronym


    if (getAcronym(testString).indexOf(stringToRank) !== -1) {
      return rankings.ACRONYM + caseRank;
    } // will return a number between rankings.MATCHES and
    // rankings.MATCHES + 1 depending  on how close of a match it is.


    return getClosenessRanking(testString, stringToRank);
  }
  /**
   * Generates an acronym for a string.
   *
   * @param {String} string the string for which to produce the acronym
   * @returns {String} the acronym
   */


  function getAcronym(string) {
    var acronym = '';
    var wordsInString = string.split(' ');
    wordsInString.forEach(function (wordInString) {
      var splitByHyphenWords = wordInString.split('-');
      splitByHyphenWords.forEach(function (splitByHyphenWord) {
        acronym += splitByHyphenWord.substr(0, 1);
      });
    });
    return acronym;
  }
  /**
   * Returns a score base on the case of the testString
   * @param {String} testString - the string to test against
   * @returns {Number} the number of the ranking,
   * based on the case between 0 and 1 for how the testString matches the case
   */


  function getCaseRanking(testString) {
    var containsUpperCase = testString.toLowerCase() !== testString;
    var containsDash = testString.indexOf('-') >= 0;
    var containsUnderscore = testString.indexOf('_') >= 0;

    if (!containsUpperCase && !containsUnderscore && containsDash) {
      return caseRankings.KEBAB;
    }

    if (!containsUpperCase && containsUnderscore && !containsDash) {
      return caseRankings.SNAKE;
    }

    if (containsUpperCase && !containsDash && !containsUnderscore) {
      var startsWithUpperCase = testString[0].toUpperCase() === testString[0];

      if (startsWithUpperCase) {
        return caseRankings.PASCAL;
      }

      return caseRankings.CAMEL;
    }

    return caseRankings.NO_CASE;
  }
  /**
   * Returns whether the stringToRank is one of the case parts in the testString (works with any string case)
   * @example
   * // returns true
   * isPartialOfCase('helloWorld', 'world', caseRankings.CAMEL)
   * @example
   * // returns false
   * isPartialOfCase('helloWorld', 'oworl', caseRankings.CAMEL)
   * @param {String} testString - the string to test against
   * @param {String} stringToRank - the string to rank
   * @param {Number} caseRanking - the ranking score based on case of testString
   * @returns {Boolean} whether the stringToRank is one of the case parts in the testString
   */


  function isPartialOfCase(testString, stringToRank, caseRanking) {
    var testIndex = testString.toLowerCase().indexOf(stringToRank.toLowerCase());

    switch (caseRanking) {
      case caseRankings.SNAKE:
        return testString[testIndex - 1] === '_';

      case caseRankings.KEBAB:
        return testString[testIndex - 1] === '-';

      case caseRankings.PASCAL:
      case caseRankings.CAMEL:
        return testIndex !== -1 && testString[testIndex] === testString[testIndex].toUpperCase();

      default:
        return false;
    }
  }
  /**
   * Check if stringToRank is an acronym for a partial case
   * @example
   * // returns true
   * isCaseAcronym('super_duper_file', 'sdf', caseRankings.SNAKE)
   * @param {String} testString - the string to test against
   * @param {String} stringToRank - the acronym to test
   * @param {Number} caseRank - the ranking of the case
   * @returns {Boolean} whether the stringToRank is an acronym for the testString
   */


  function isCaseAcronym(testString, stringToRank, caseRank) {
    var splitValue = null;

    switch (caseRank) {
      case caseRankings.SNAKE:
        splitValue = '_';
        break;

      case caseRankings.KEBAB:
        splitValue = '-';
        break;

      case caseRankings.PASCAL:
      case caseRankings.CAMEL:
        splitValue = /(?=[A-Z])/;
        break;

      default:
        splitValue = null;
    }

    var splitTestString = testString.split(splitValue);
    return stringToRank.toLowerCase().split('').reduce(function (correct, char, charIndex) {
      var splitItem = splitTestString[charIndex];
      return correct && splitItem && splitItem[0].toLowerCase() === char;
    }, true);
  }
  /**
   * Returns a score based on how spread apart the
   * characters from the stringToRank are within the testString.
   * A number close to rankings.MATCHES represents a loose match. A number close
   * to rankings.MATCHES + 1 represents a tighter match.
   * @param {String} testString - the string to test against
   * @param {String} stringToRank - the string to rank
   * @returns {Number} the number between rankings.MATCHES and
   * rankings.MATCHES + 1 for how well stringToRank matches testString
   */


  function getClosenessRanking(testString, stringToRank) {
    var matchingInOrderCharCount = 0;
    var charNumber = 0;

    function findMatchingCharacter(matchChar, string, index) {
      for (var j = index; j < string.length; j++) {
        var stringChar = string[j];

        if (stringChar === matchChar) {
          matchingInOrderCharCount += 1;
          return j + 1;
        }
      }

      return -1;
    }

    function getRanking(spread) {
      var inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
      var ranking = rankings.MATCHES + inOrderPercentage * (1 / spread);
      return ranking;
    }

    var firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);

    if (firstIndex < 0) {
      return rankings.NO_MATCH;
    }

    charNumber = firstIndex;

    for (var i = 1; i < stringToRank.length; i++) {
      var matchChar = stringToRank[i];
      charNumber = findMatchingCharacter(matchChar, testString, charNumber);
      var found = charNumber > -1;

      if (!found) {
        return rankings.NO_MATCH;
      }
    }

    var spread = charNumber - firstIndex;
    return getRanking(spread);
  }
  /**
   * Sorts items that have a rank, index, and keyIndex
   * @param {Object} a - the first item to sort
   * @param {Object} b - the second item to sort
   * @return {Number} -1 if a should come first, 1 if b should come first, 0 if equal
   */


  function sortRankedItems(a, b) {
    var aFirst = -1;
    var bFirst = 1;
    var aRankedItem = a.rankedItem,
        aRank = a.rank,
        aKeyIndex = a.keyIndex;
    var bRankedItem = b.rankedItem,
        bRank = b.rank,
        bKeyIndex = b.keyIndex;

    if (aRank === bRank) {
      if (aKeyIndex === bKeyIndex) {
        // localeCompare returns 0 if both values are equal,
        // so we rely on JS engines stably sorting the results
        // (de facto, all modern engine do this).
        return String(aRankedItem).localeCompare(bRankedItem);
      } else {
        return aKeyIndex < bKeyIndex ? aFirst : bFirst;
      }
    } else {
      return aRank > bRank ? aFirst : bFirst;
    }
  }
  /**
   * Prepares value for comparison by stringifying it, removing diacritics (if specified)
   * @param {String} value - the value to clean
   * @param {Object} options - {keepDiacritics: whether to remove diacritics}
   * @return {String} the prepared value
   */


  function prepareValueForComparison(value, _ref4) {
    var keepDiacritics = _ref4.keepDiacritics;
    value = "" + value; // toString

    if (!keepDiacritics) {
      value = removeAccents_1(value);
    }

    return value;
  }
  /**
   * Gets value for key in item at arbitrarily nested keypath
   * @param {Object} item - the item
   * @param {Object|Function} key - the potentially nested keypath or property callback
   * @return {Array} - an array containing the value(s) at the nested keypath
   */


  function getItemValues(item, key) {
    if (typeof key === 'object') {
      key = key.key;
    }

    var value;

    if (typeof key === 'function') {
      value = key(item); // eslint-disable-next-line no-negated-condition
    } else if (key.indexOf('.') !== -1) {
      // handle nested keys
      value = key.split('.').reduce(function (itemObj, nestedKey) {
        return itemObj ? itemObj[nestedKey] : null;
      }, item);
    } else {
      value = item[key];
    } // concat because `value` can be a string or an array
    // eslint-disable-next-line


    return value != null ? [].concat(value) : null;
  }
  /**
   * Gets all the values for the given keys in the given item and returns an array of those values
   * @param {Object} item - the item from which the values will be retrieved
   * @param {Array} keys - the keys to use to retrieve the values
   * @return {Array} objects with {itemValue, attributes}
   */


  function getAllValuesToRank(item, keys) {
    return keys.reduce(function (allVals, key) {
      var values = getItemValues(item, key);

      if (values) {
        values.forEach(function (itemValue) {
          allVals.push({
            itemValue: itemValue,
            attributes: getKeyAttributes(key)
          });
        });
      }

      return allVals;
    }, []);
  }
  /**
   * Gets all the attributes for the given key
   * @param {Object|String} key - the key from which the attributes will be retrieved
   * @return {Object} object containing the key's attributes
   */


  function getKeyAttributes(key) {
    if (typeof key === 'string') {
      key = {
        key: key
      };
    }

    return _extends$1({
      maxRanking: Infinity,
      minRanking: -Infinity
    }, key);
  }

  var getItem = function getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (_unused) {
      return undefined;
    }
  };

  function useLocalStorage(key, defaultValue) {
    var _React$useState = React.useState(function () {
      var val = getItem(key);

      if (typeof val === 'undefined' || val === null) {
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      }

      return val;
    }),
        value = _React$useState[0],
        setValue = _React$useState[1];

    var setter = React.useCallback(function (updater) {
      setValue(function (old) {
        var newVal = updater;

        if (typeof updater == 'function') {
          newVal = updater(old);
        }

        try {
          localStorage.setItem(key, JSON.stringify(newVal));
        } catch (_unused2) {}

        return newVal;
      });
    }, [key]);
    return [value, setter];
  }

  var name = "react-query-devtools";
  var version = "1.1.5";
  var description = "Devtools for React Query";
  var author = "tannerlinsley";
  var license = "MIT";
  var repository = "tannerlinsley/react-query-devtools";
  var main = "index.js";
  var types = "index.d.ts";
  var sideEffects = false;
  var scripts = {
  	test: "is-ci \"test:ci\" \"test:dev\"",
  	"test:dev": "jest --watch",
  	"test:ci": "jest",
  	"test:coverage": "yarn test:ci; open coverage/lcov-report/index.html",
  	build: "NODE_ENV=production rollup -c",
  	"now-build": "yarn && cd www && yarn && yarn build",
  	start: "rollup -c -w",
  	prepare: "yarn build",
  	release: "yarn publish",
  	releaseNext: "yarn publish --tag next",
  	format: "prettier {src,src/**,example/src,example/src/**}/*.{md,js,jsx,tsx} --write",
  	doctoc: "npx doctoc --maxlevel 2 README.md"
  };
  var files = [
  	"dist"
  ];
  var dependencies = {
  	"match-sorter": "^4.1.0"
  };
  var peerDependencies = {
  	react: "^16.6.3",
  	"react-query": "^1.0.0"
  };
  var devDependencies = {
  	"@babel/core": "^7.8.4",
  	"@babel/preset-env": "^7.8.4",
  	"@babel/preset-react": "^7.8.3",
  	"@rollup/plugin-json": "^4.0.2",
  	"@rollup/plugin-replace": "^2.3.1",
  	"@svgr/rollup": "^4.3.0",
  	"@testing-library/react": "^9.4.0",
  	"babel-core": "7.0.0-bridge.0",
  	"babel-eslint": "9.x",
  	"babel-jest": "^24.9.0",
  	"babel-plugin-transform-async-to-promises": "^0.8.15",
  	"cross-env": "^5.1.4",
  	eslint: "5.x",
  	"eslint-config-prettier": "^4.3.0",
  	"eslint-config-react-app": "^4.0.1",
  	"eslint-config-standard": "^12.0.0",
  	"eslint-config-standard-react": "^7.0.2",
  	"eslint-plugin-flowtype": "2.x",
  	"eslint-plugin-import": "2.x",
  	"eslint-plugin-jsx-a11y": "6.x",
  	"eslint-plugin-node": "^9.1.0",
  	"eslint-plugin-prettier": "^3.1.2",
  	"eslint-plugin-promise": "^4.1.1",
  	"eslint-plugin-react": "7.18.3",
  	"eslint-plugin-react-hooks": "1.5.0",
  	"eslint-plugin-standard": "^4.0.0",
  	"is-ci-cli": "^2.0.0",
  	jest: "^24.9.0",
  	prettier: "^1.19.1",
  	react: "^16.12.0",
  	"react-dom": "^16.12.0",
  	rollup: "^1.31.1",
  	"rollup-plugin-babel": "^4.3.2",
  	"rollup-plugin-commonjs": "^10.1.0",
  	"rollup-plugin-jscc": "^1.0.0",
  	"rollup-plugin-node-resolve": "^5.2.0",
  	"rollup-plugin-peer-deps-external": "^2.2.2",
  	"rollup-plugin-prettier": "^0.6.0",
  	"rollup-plugin-size": "^0.2.2",
  	"rollup-plugin-size-snapshot": "^0.10.0",
  	"rollup-plugin-terser": "^5.2.0"
  };
  var pkg = {
  	name: name,
  	version: version,
  	description: description,
  	author: author,
  	license: license,
  	repository: repository,
  	main: main,
  	types: types,
  	sideEffects: sideEffects,
  	scripts: scripts,
  	files: files,
  	dependencies: dependencies,
  	peerDependencies: peerDependencies,
  	devDependencies: devDependencies
  };

  var ThemeContext = React.createContext();
  function ThemeProvider(_ref) {
    var theme = _ref.theme,
        rest = _objectWithoutPropertiesLoose(_ref, ["theme"]);

    return /*#__PURE__*/React.createElement(ThemeContext.Provider, _extends({
      value: theme
    }, rest));
  }
  function useTheme() {
    return React.useContext(ThemeContext);
  }

  function useMediaQuery(query) {
    // Keep track of the preference in state, start with the current match
    var _React$useState = React.useState(function () {
      return window.matchMedia && window.matchMedia(query).matches;
    }),
        isMatch = _React$useState[0],
        setIsMatch = _React$useState[1]; // Watch for changes


    React.useEffect(function () {
      if (!window.matchMedia) {
        return;
      } // Create a matcher


      var matcher = window.matchMedia(query); // Create our handler

      var onChange = function onChange(_ref) {
        var matches = _ref.matches;
        return setIsMatch(matches);
      }; // Listen for changes


      matcher.addListener(onChange);
      return function () {
        // Stop listening for changes
        matcher.removeListener(onChange);
      };
    }, [isMatch, query, setIsMatch]);
    return isMatch;
  }

  function getQueryStatusColor(query, theme) {
    return query.state.isFetching ? theme.active : !query.instances.length ? theme.gray : query.state.isStale ? theme.warning : theme.success;
  }
  function getQueryStatusLabel(query) {
    return query.state.isFetching ? 'fetching' : !query.instances.length ? 'inactive' : query.state.isStale ? 'stale' : 'fresh';
  }
  function styled(type, newStyles, queries) {
    if (queries === void 0) {
      queries = {};
    }

    return React.forwardRef(function (_ref, ref) {
      var style = _ref.style,
          rest = _objectWithoutPropertiesLoose(_ref, ["style"]);

      var theme = useTheme();
      var mediaStyles = Object.entries(queries).reduce(function (current, _ref2) {
        var key = _ref2[0],
            value = _ref2[1];
        return useMediaQuery(key) ? _extends(_extends({}, current), typeof value === 'function' ? value(rest, theme) : value) : current;
      }, {});
      return React.createElement(type, _extends(_extends({}, rest), {}, {
        style: _extends(_extends(_extends({}, typeof newStyles === 'function' ? newStyles(rest, theme) : newStyles), style), mediaStyles),
        ref: ref
      }));
    });
  }

  var Panel = styled('div', function (props, theme) {
    return {
      fontSize: '1rem',
      display: 'flex',
      backgroundColor: theme.background,
      color: theme.foreground
    };
  }, {
    '(max-width: 600px)': {
      fontSize: '.9rem',
      flexDirection: 'column'
    }
  });
  var Button = styled('button', function (props, theme) {
    return {
      appearance: 'none',
      fontSize: '.9rem',
      fontWeight: 'bold',
      background: theme.gray,
      border: '0',
      borderRadius: '.3rem',
      color: 'white',
      padding: '.5rem',
      opacity: props.disabled ? '.5' : undefined,
      cursor: 'pointer'
    };
  });
  var QueryKeys = styled('span', {
    display: 'inline-block',
    fontSize: '0.9rem'
  });
  var QueryKey = styled('span', {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '.2rem .4rem',
    fontWeight: 'bold',
    textShadow: '0 0 10px black',
    borderRadius: '.2rem'
  });
  var Code = styled('code', {
    fontSize: '.9rem'
  });
  var Input = styled('input', {
    border: 0,
    borderRadius: '.2rem',
    fontSize: '.9rem',
    padding: '.3rem .4rem'
  });
  var Select = styled('select', {
    display: "inline-block",
    fontSize: ".9rem",
    fontFamily: "sans-serif",
    fontWeight: 'normal',
    lineHeight: "1.3",
    padding: ".3rem 1.5rem .3rem .5rem",
    height: 'auto',
    border: 0,
    borderRadius: ".2rem",
    appearance: "none",
    WebkitAppearance: 'none',
    backgroundColor: "#fff",
    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23444444'><polygon points='0,25 100,25 50,75'/></svg>\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right .55rem center",
    backgroundSize: ".65em auto, 100%"
  });

  var Entry = styled('div', {
    fontFamily: 'Menlo, monospace',
    fontSize: '0.9rem',
    lineHeight: '1.7',
    outline: 'none'
  });
  var Label = styled('span', {
    cursor: 'pointer',
    color: 'white'
  });
  var Value = styled('span', function (props, theme) {
    return {
      color: theme.danger
    };
  });
  var SubEntries = styled('div', {
    marginLeft: '.1rem',
    paddingLeft: '1rem',
    borderLeft: '2px solid rgba(0,0,0,.15)'
  });
  var Info = styled('span', {
    color: 'grey',
    fontSize: '.7rem'
  });
  var Expander = function Expander(_ref) {
    var expanded = _ref.expanded,
        _ref$style = _ref.style,
        style = _ref$style === void 0 ? {} : _ref$style,
        rest = _objectWithoutPropertiesLoose(_ref, ["expanded", "style"]);

    return /*#__PURE__*/React.createElement("span", {
      style: _extends({
        display: 'inline-block',
        transition: 'all .1s ease',
        transform: "rotate(" + (expanded ? 90 : 0) + "deg) " + (style.transform || '')
      }, style)
    }, "\u25B6");
  };

  var DefaultRenderer = function DefaultRenderer(_ref2) {
    var handleEntry = _ref2.handleEntry,
        label = _ref2.label,
        value = _ref2.value,
        subEntries = _ref2.subEntries,
        subEntryPages = _ref2.subEntryPages,
        expanded = _ref2.expanded,
        toggle = _ref2.toggle,
        pageSize = _ref2.pageSize;

    var _React$useState = React.useState([]),
        expandedPages = _React$useState[0],
        setExpandedPages = _React$useState[1];

    return /*#__PURE__*/React.createElement(Entry, {
      key: label
    }, (subEntryPages == null ? void 0 : subEntryPages.length) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, {
      onClick: function onClick() {
        return toggle();
      }
    }, /*#__PURE__*/React.createElement(Expander, {
      expanded: expanded
    }), " ", label, ' ', /*#__PURE__*/React.createElement(Info, null, subEntries.length, " items")), expanded ? subEntryPages.length === 1 ? /*#__PURE__*/React.createElement(SubEntries, null, subEntries.map(function (entry) {
      return handleEntry(entry);
    })) : /*#__PURE__*/React.createElement(SubEntries, null, subEntryPages.map(function (entries, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index
      }, /*#__PURE__*/React.createElement(Entry, null, /*#__PURE__*/React.createElement(Label, {
        onClick: function onClick() {
          return setExpandedPages(function (old) {
            return old.includes(index) ? old.filter(function (d) {
              return d !== index;
            }) : [].concat(old, [index]);
          });
        }
      }, /*#__PURE__*/React.createElement(Expander, {
        expanded: expanded
      }), " [", index * pageSize, " ...", ' ', index * pageSize + pageSize - 1, "]"), expandedPages.includes(index) ? /*#__PURE__*/React.createElement(SubEntries, null, entries.map(function (entry) {
        return handleEntry(entry);
      })) : null));
    })) : null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, null, label, ":"), " ", /*#__PURE__*/React.createElement(Value, null, JSON.stringify(value))));
  };

  function Explorer(_ref3) {
    var value = _ref3.value,
        defaultExpanded = _ref3.defaultExpanded,
        _ref3$renderer = _ref3.renderer,
        renderer = _ref3$renderer === void 0 ? DefaultRenderer : _ref3$renderer,
        _ref3$pageSize = _ref3.pageSize,
        pageSize = _ref3$pageSize === void 0 ? 100 : _ref3$pageSize,
        rest = _objectWithoutPropertiesLoose(_ref3, ["value", "defaultExpanded", "renderer", "pageSize"]);

    var _React$useState2 = React.useState(defaultExpanded),
        expanded = _React$useState2[0],
        setExpanded = _React$useState2[1];

    var toggle = function toggle(set) {
      setExpanded(function (old) {
        return typeof set !== 'undefined' ? set : !old;
      });
    };

    var path = [];
    var depth = 0;
    var type = typeof value;
    var subEntries;
    var subEntryPages = [];

    var makeProperty = function makeProperty(sub) {
      var _ref4;

      var newPath = path.concat(sub.label);
      var subDefaultExpanded = defaultExpanded === true ? (_ref4 = {}, _ref4[sub.label] = true, _ref4) : defaultExpanded == null ? void 0 : defaultExpanded[sub.label];
      return _extends(_extends({}, sub), {}, {
        path: newPath,
        depth: depth + 1,
        defaultExpanded: subDefaultExpanded
      });
    };

    if (Array.isArray(value)) {
      type = 'array';
      subEntries = value.map(function (d, i) {
        return makeProperty({
          label: i,
          value: d
        });
      });
    } else if (typeof value === 'object' && value !== null) {
      type = 'object';
      subEntries = Object.entries(value).map(function (_ref5) {
        var label = _ref5[0],
            value = _ref5[1];
        return makeProperty({
          label: label,
          value: value
        });
      });
    }

    if (subEntries) {
      var i = 0;

      while (i < subEntries.length) {
        subEntryPages.push(subEntries.slice(i, i + pageSize));
        i = i + pageSize;
      }
    }

    return renderer(_extends({
      handleEntry: function handleEntry(entry) {
        return /*#__PURE__*/React.createElement(Explorer, _extends({
          key: entry.label,
          renderer: renderer
        }, rest, entry));
      },
      type: type,
      subEntries: subEntries,
      subEntryPages: subEntryPages,
      depth: depth,
      value: value,
      path: path,
      expanded: expanded,
      toggle: toggle,
      pageSize: pageSize
    }, rest));
  }

  var isServer = typeof window === 'undefined';
  var theme = {
    background: '#0b1521',
    backgroundAlt: '#132337',
    foreground: 'white',
    gray: '#3f4e60',
    grayAlt: '#222e3e',
    success: '#00ab52',
    danger: '#ff0085',
    active: '#006bff',
    warning: '#ffb200'
  };
  function ReactQueryDevtools(_ref) {
    var initialIsOpen = _ref.initialIsOpen,
        _ref$panelProps = _ref.panelProps,
        panelProps = _ref$panelProps === void 0 ? {} : _ref$panelProps,
        _ref$closeButtonProps = _ref.closeButtonProps,
        closeButtonProps = _ref$closeButtonProps === void 0 ? {} : _ref$closeButtonProps,
        _ref$toggleButtonProp = _ref.toggleButtonProps,
        toggleButtonProps = _ref$toggleButtonProp === void 0 ? {} : _ref$toggleButtonProp;
    var rootRef = React.useRef();
    var panelRef = React.useRef();

    var _useLocalStorage = useLocalStorage('reactQueryDevtoolsOpen', initialIsOpen),
        isOpen = _useLocalStorage[0],
        setIsOpen = _useLocalStorage[1];

    var _React$useState = React.useState(false),
        isResolvedOpen = _React$useState[0],
        setIsResolvedOpen = _React$useState[1];

    React.useEffect(function () {
      setIsResolvedOpen(isOpen);
    }, [isOpen, isResolvedOpen]);
    React[isServer ? 'useEffect' : 'useLayoutEffect'](function () {
      if (isResolvedOpen) {
        var _rootRef$current;

        var previousValue = (_rootRef$current = rootRef.current) == null ? void 0 : _rootRef$current.parentElement.style.paddingBottom;

        var run = function run() {
          var _panelRef$current;

          var containerHeight = (_panelRef$current = panelRef.current) == null ? void 0 : _panelRef$current.getBoundingClientRect().height;
          rootRef.current.parentElement.style.paddingBottom = containerHeight + "px";
        };

        run();
        window.addEventListener('resize', run);
        return function () {
          window.removeEventListener('resize', run);
          rootRef.current.parentElement.style.paddingBottom = previousValue;
        };
      }
    }, [isResolvedOpen]);

    var _panelProps$style = panelProps.style,
        panelStyle = _panelProps$style === void 0 ? {} : _panelProps$style,
        otherPanelProps = _objectWithoutPropertiesLoose(panelProps, ["style"]);

    var _closeButtonProps$sty = closeButtonProps.style,
        closeButtonStyle = _closeButtonProps$sty === void 0 ? {} : _closeButtonProps$sty,
        onCloseClick = closeButtonProps.onClick,
        otherCloseButtonProps = _objectWithoutPropertiesLoose(closeButtonProps, ["style", "onClick"]);

    var _toggleButtonProps$st = toggleButtonProps.style,
        toggleButtonStyle = _toggleButtonProps$st === void 0 ? {} : _toggleButtonProps$st,
        onToggleClick = toggleButtonProps.onClick,
        otherToggleButtonProps = _objectWithoutPropertiesLoose(toggleButtonProps, ["style", "onClick"]);

    return /*#__PURE__*/React.createElement("div", {
      ref: rootRef,
      className: "ReactQueryDevtools"
    }, isResolvedOpen ? /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(ReactQueryDevtoolsPanel, _extends({
      ref: panelRef
    }, otherPanelProps, {
      style: _extends({
        position: 'fixed',
        bottom: '0',
        right: '0',
        zIndex: '99999',
        width: '100%',
        height: '500px',
        maxHeight: '50%',
        boxShadow: '0 0 20px rgba(0,0,0,.3)',
        borderTop: "1px solid " + theme.gray
      }, panelStyle)
    })), /*#__PURE__*/React.createElement(Button, _extends({}, otherCloseButtonProps, {
      onClick: function onClick() {
        setIsOpen(false);
        onCloseClick && onCloseClick();
      },
      style: _extends({
        position: 'fixed',
        bottom: '0',
        right: '0',
        zIndex: '99999',
        margin: '.5rem'
      }, closeButtonStyle)
    }), "Close")) : /*#__PURE__*/React.createElement("div", _extends({}, otherToggleButtonProps, {
      onClick: function onClick() {
        setIsOpen(true);
        onToggleClick && onToggleClick();
      },
      style: _extends({
        position: 'fixed',
        bottom: '0',
        right: '0',
        zIndex: '99999',
        display: 'inline-block',
        fontSize: '1.5rem',
        margin: '.5rem',
        cursor: 'pointer',
        textShadow: 'rgba(0,0,0,0.4) 0px 5px 10px'
      }, toggleButtonStyle)
    }), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDF9B")));
  }

  var getStatusRank = function getStatusRank(q) {
    return q.state.isFetching ? 0 : !q.instances.length ? 3 : q.state.isStale ? 2 : 1;
  };

  var sortFns = {
    'Status > Last Updated': function StatusLastUpdated(a, b) {
      return getStatusRank(a) === getStatusRank(b) ? sortFns['Last Updated'](a, b) : getStatusRank(a) > getStatusRank(b) ? 1 : -1;
    },
    'Query Hash': function QueryHash(a, b) {
      return a.queryHash > b.queryHash ? 1 : -1;
    },
    'Last Updated': function LastUpdated(a, b) {
      return a.state.updatedAt < b.state.updatedAt ? 1 : -1;
    }
  };
  var ReactQueryDevtoolsPanel = React.forwardRef(function ReactQueryDevtoolsPanel(props, ref) {
    var _useLocalStorage2 = useLocalStorage('reactQueryDevtoolsSortFn', Object.keys(sortFns)[0]),
        sort = _useLocalStorage2[0],
        setSort = _useLocalStorage2[1];

    var _useLocalStorage3 = useLocalStorage('reactQueryDevtoolsFilter', ''),
        filter = _useLocalStorage3[0],
        setFilter = _useLocalStorage3[1];

    var _useLocalStorage4 = useLocalStorage('reactQueryDevtoolsSortDesc', false),
        sortDesc = _useLocalStorage4[0],
        setSortDesc = _useLocalStorage4[1];

    var sortFn = React.useMemo(function () {
      return sortFns[sort];
    }, [sort]);
    React[isServer ? 'useEffect' : 'useLayoutEffect'](function () {
      if (!sortFn) {
        setSort(Object.keys(sortFns)[0]);
      }
    }, [setSort, sortFn]);

    var _React$useState2 = React.useState(Object.values(reactQuery.queryCache.queries)),
        unsortedQueries = _React$useState2[0],
        setUnsortedQueries = _React$useState2[1];

    var _React$useState3 = React.useState(null),
        activeQueryHash = _React$useState3[0],
        setActiveQueryHash = _React$useState3[1];

    var queries = React.useMemo(function () {
      var sorted = [].concat(unsortedQueries).sort(sortFn);

      if (sortDesc) {
        sorted.reverse();
      }

      return matchSorter(sorted, filter, {
        keys: ['queryHash']
      });
    }, [sortDesc, sortFn, unsortedQueries, filter]);

    var _React$useMemo = React.useMemo(function () {
      var activeQuery = queries.find(function (query) {
        return query.queryHash === activeQueryHash;
      });
      if (activeQuery) delete activeQuery.cache;
      return [activeQuery, activeQuery ? JSON.parse(JSON.stringify(activeQuery)) : null];
    }, [activeQueryHash, queries]),
        activeQuery = _React$useMemo[0],
        activeQueryJson = _React$useMemo[1];

    var hasFresh = queries.filter(function (q) {
      return getQueryStatusLabel(q) === 'fresh';
    }).length;
    var hasFetching = queries.filter(function (q) {
      return getQueryStatusLabel(q) === 'fetching';
    }).length;
    var hasStale = queries.filter(function (q) {
      return getQueryStatusLabel(q) === 'stale';
    }).length;
    var hasInactive = queries.filter(function (q) {
      return getQueryStatusLabel(q) === 'inactive';
    }).length;
    React.useEffect(function () {
      return reactQuery.queryCache.subscribe(function (queryCache) {
        setUnsortedQueries(Object.values(queryCache.queries));
      });
    }, [sort, sortFn, sortDesc]);
    React.useEffect(function () {
      if (activeQueryHash && !activeQuery) {
        setActiveQueryHash(null);
      }
    }, [activeQuery, activeQueryHash]);
    return /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(Panel, _extends({
      ref: ref,
      className: "ReactQueryDevtoolsPanel"
    }, props), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 50%',
        minHeight: '33%',
        overflow: 'auto',
        borderRight: "1px solid " + theme.grayAlt,
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '.5rem',
        background: theme.backgroundAlt,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '1.2rem',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '.5rem',
        opacity: 0.3
      }
    }, "React Query Devtools ", /*#__PURE__*/React.createElement("small", null, "v", pkg.version)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 'bold'
      }
    }, "Queries (", queries.length, ")")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(QueryKeys, {
      style: {
        marginBottom: '.5rem'
      }
    }, /*#__PURE__*/React.createElement(QueryKey, {
      style: {
        background: theme.success,
        opacity: hasFresh ? 1 : 0.3
      }
    }, "fresh ", /*#__PURE__*/React.createElement(Code, null, "(", hasFresh, ")")), ' ', /*#__PURE__*/React.createElement(QueryKey, {
      style: {
        background: theme.active,
        opacity: hasFetching ? 1 : 0.3
      }
    }, "fetching ", /*#__PURE__*/React.createElement(Code, null, "(", hasFetching, ")")), ' ', /*#__PURE__*/React.createElement(QueryKey, {
      style: {
        background: theme.warning,
        color: 'black',
        textShadow: '0',
        opacity: hasStale ? 1 : 0.3
      }
    }, "stale ", /*#__PURE__*/React.createElement(Code, null, "(", hasStale, ")")), ' ', /*#__PURE__*/React.createElement(QueryKey, {
      style: {
        background: theme.gray,
        opacity: hasInactive ? 1 : 0.3
      }
    }, "inactive ", /*#__PURE__*/React.createElement(Code, null, "(", hasInactive, ")"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Filter",
      value: filter,
      onChange: function onChange(e) {
        return setFilter(e.target.value);
      },
      onKeyDown: function onKeyDown(e) {
        if (e.key === 'Escape') setFilter('');
      },
      style: {
        flex: '1',
        marginRight: '.5rem'
      }
    }), /*#__PURE__*/React.createElement(Select, {
      value: sort,
      onChange: function onChange(e) {
        return setSort(e.target.value);
      },
      style: {
        flex: '1',
        marginRight: '.5rem'
      }
    }, Object.keys(sortFns).map(function (key) {
      return /*#__PURE__*/React.createElement("option", {
        key: key,
        value: key
      }, "Sort by ", key);
    })), /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return setSortDesc(function (old) {
          return !old;
        });
      },
      style: {
        padding: '.2rem .4rem'
      }
    }, sortDesc ? '⬇ Desc' : '⬆ Asc')))), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'auto'
      }
    }, queries.map(function (query) {
      return /*#__PURE__*/React.createElement("div", {
        key: query.queryHash,
        onClick: function onClick() {
          return setActiveQueryHash(query.queryHash);
        },
        style: {
          display: 'flex',
          borderBottom: "solid 1px " + theme.grayAlt,
          cursor: 'pointer',
          background: query === activeQuery ? 'rgba(255,255,255,.1)' : undefined
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: '0 0 auto',
          width: '2rem',
          height: '2rem',
          background: getQueryStatusColor(query, theme),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          textShadow: getQueryStatusLabel(query) === 'stale' ? '0' : '0 0 10px black',
          color: getQueryStatusLabel(query) === 'stale' ? 'black' : 'white'
        }
      }, query.instances.length), /*#__PURE__*/React.createElement(Code, {
        style: {
          padding: '.5rem'
        }
      }, query.queryHash));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 50%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '.5rem',
        background: theme.backgroundAlt
      }
    }, "Query Details"), activeQuery ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(Code, {
      style: {
        lineHeight: '1.8rem'
      }
    }, activeQuery.queryHash), /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '0.3rem .6rem',
        borderRadius: '0.4rem',
        fontWeight: 'bold',
        textShadow: '0 2px 10px black',
        background: getQueryStatusColor(activeQuery, theme),
        flexShrink: 0
      }
    }, getQueryStatusLabel(activeQuery))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: theme.backgroundAlt,
        padding: '.5rem'
      }
    }, "Actions"), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return activeQuery.fetch();
      },
      disabled: activeQuery.state.isFetching,
      style: {
        background: theme.active
      }
    }, "Refetch"), ' ', /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return reactQuery.queryCache.removeQueries(function (q) {
          return q === activeQuery;
        });
      },
      style: {
        background: theme.danger
      }
    }, "Remove"), ' '), /*#__PURE__*/React.createElement("div", {
      style: {
        background: theme.backgroundAlt,
        padding: '.5rem'
      }
    }, "Data Explorer"), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '.5rem'
      }
    }, /*#__PURE__*/React.createElement(Explorer, {
      label: "Data",
      value: activeQueryJson.state.data,
      defaultExpanded: {}
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: theme.backgroundAlt,
        padding: '.5rem'
      }
    }, "Query Explorer"), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '.5rem'
      }
    }, /*#__PURE__*/React.createElement(Explorer, {
      label: "Query",
      value: activeQueryJson,
      defaultExpanded: {
        queryKey: true
      }
    })))) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1rem'
      }
    }, "Select a query for more info..."))));
  });

  exports.ReactQueryDevtools = ReactQueryDevtools;
  exports.ReactQueryDevtoolsPanel = ReactQueryDevtoolsPanel;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-query-devtools.development.js.map
