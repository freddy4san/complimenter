var finalTemplates = [
  function() { return "you are " + getDescriptor(); },
  function() { return "you have " + getAbstractProperty(); },
];

var templates = [
  function() { return "9 out of 10 doctors say " + getFinalTemplate(); },
  function() { return "i think " + getFinalTemplate(); },
  function() { return "i've always thought " + getFinalTemplate(); },
  function() { return "i've heard " + getFinalTemplate(); },
  function() { return "it's true, " + getFinalTemplate(); },
  function() { return "people say " + getFinalTemplate(); },
  function() { return "they say " + getFinalTemplate(); },
].concat(finalTemplates);

var abstractProperties = [
  function() { return [makeSingularForm(getDescriptor()), getTangibleSingularProperty()].join(" "); },
  function() { return [getDescriptor(), getTangibleMultipleProperty()].join(" "); },
];

var tangibleSingularProperties = [
  "demeanour",
  "face",
  "fashion sense",
  "hair",
  "heart",
  "laugh",
  "little toe",
  "outlook on life",
  "radiance",
  "smile",
  "soul",
  "voice",
  "way of thinking",
  "work ethic",
];

var tangibleMultipleProperties = [
  "ears",
  "eyes",
  "feet",
  "hands",
  "ideas",
  "knees",
  "legs",
  "skills",
  "teeth",
  "thoughts",
];

var adjectives = [
  "adorable",
  "amazeballs",
  "amazing",
  "angelic",
  "attractive",
  "beautiful",
  "charming",
  "crazy",
  "dreamy",
  "handsome",
  "incredible",
  "insane",
  "majestic",
  "marvelous",
  "nice",
  "perfect",
  "pleasing",
  "pretty",
  "radiant",
  "splendid",
  "stunning",
  "sublime",
  "superb",
  "sweet",
  "useful",
  "wowzers",
];

var adverbs = [
  "absolutely",
  "awfully",
  "completely",
  "decidedly",
  "deeply",
  "entirely",
  "extremely",
  "fairly",
  "highly",
  "incredibly",
  "intensely",
  "perfectly",
  "positively",
  "practically",
  "pretty",
  "purely",
  "quite",
  "radiantly",
  "rather",
  "really",
  "simply",
  "so",
  "somewhat",
  "supremely",
  "terribly",
  "thoroughly",
  "totally",
  "totes",
  "utterly",
  "very",
  "virtually",
];

var makeCompliment = module.exports = function makeCompliment() {
  return getTemplate();
};

var makeSingularForm = module.exports.makeSingularForm = function makeSingularForm(text) {
  if (text.match(/^[aeiou]/i)) {
    return "an " + text;
  } else {
    return "a " + text;
  }
}

var getTemplate = module.exports.getTemplate = function getTemplate() {
  return templates[Math.floor(Math.random() * templates.length)]();
}

var getFinalTemplate = module.exports.getFinalTemplate = function getFinalTemplate() {
  return finalTemplates[Math.floor(Math.random() * finalTemplates.length)]();
};

var getAbstractProperty = module.exports.getAbstractProperty = function getAbstractProperty() {
  return abstractProperties[Math.floor(Math.random() * abstractProperties.length)]();
}

var getTangibleSingularProperty = module.exports.getTangibleSingularProperty = function getTangibleSingularProperty() {
  return tangibleSingularProperties[Math.floor(Math.random() * tangibleSingularProperties.length)];
}

var getTangibleMultipleProperty = module.exports.getTangibleMultipleProperty = function getTangibleMultipleProperty() {
  return tangibleMultipleProperties[Math.floor(Math.random() * tangibleMultipleProperties.length)];
}

var getAdjective = module.exports.getAdjective = function getAdjective() {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
}

var getAdverb = module.exports.getAdverb = function getAdverb() {
  return adverbs[Math.floor(Math.random() * adverbs.length)];
}

var getDescriptor = module.exports.getDescriptor = function getDescriptor() {
  return [getAdverb(), getAdjective()].join(" ");
}
