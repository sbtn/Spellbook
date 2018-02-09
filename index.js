var filters = {
  all: function(spells) {
    return spells;
  }
};

var app = new Vue({
  el: '#spellbook',
  data: {
    search: '',
    spells: spells
  },
  computed: {
    searchFilter() {
      return this.spells.filter(spell => spell.name.toLowerCase().includes(this.search.toLowerCase()));
    }
  }
})
