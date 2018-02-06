var filters = {
  all: function(spells) {
    return spells;
  }
};

var app = new Vue({
  el: '#spellbook',
  data: {
    spells: spells
  }
})
