const spells = [{
    "name": "Aid",
    "level": 2,
    "class": ["Cleric", "Paladin"],
    "school": "Abjuration",
    "casting_time": "1 action",
    "range": 30,
    "components": "Verbal, Somatic, Material",
    "material": "A tiny strip of white cloth",
    "concentration": false,
    "ritual": false,
    "duration": "8 hours",
    "description": ["Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration."],
    "higher_levels": "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd."
  },
  {
    "name": "Bless",
    "level": 1,
    "class": ["Cleric", "Paladin"],
    "school": "Enchantment",
    "casting_time": "1 action",
    "range": 30,
    "components": "Verbal, Somatic, Material",
    "material": "A sprinkling of holy water.",
    "concentration": true,
    "ritual": false,
    "duration": "Up to 1 minute",
    "description": ["You bless up to three creatures of your choice within range. Whenever a target makes an Attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the Attack roll or saving throw."],
    "higher_levels": "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
  },
  {
    "name": "Command",
    "level": 1,
    "class": ["Cleric", "Paladin"],
    "school": "Enchantment",
    "casting_time": "1 action",
    "range": 60,
    "components": "Verbal",
    "material": null,
    "concentration": false,
    "ritual": false,
    "duration": "1 round",
    "description": ["You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is Undead, if it doesn't understand your Language, or if your command is directly harmful to it. Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can't follow your command, the spell ends.", "Approach: The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.",
      "Drop: The target drops whatever it is holding and then ends its turn.", "Flee: The target spends its turn moving away from you by the fastest available means. ",
      "Grovel: The target falls prone and then ends its turn. Halt: The target doesn't move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air."
    ],
    "higher_levels": "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
  },
  {
    "name": "Cure wounds",
    "level": 1,
    "class": ["Bard", "Cleric", "Druid", "Paladin", "Ranger"],
    "school": "Evocation",
    "casting_time": "1 action",
    "range": "Touch",
    "components": "Verbal, Somatic",
    "material": null,
    "concentration": false,
    "ritual": false,
    "duration": "Instantaneous",
    "description": ["A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on Undead or constructs."],
    "higher_levels": "When you cast this spell using a spell slot of 2nd level or higher, the Healing increases by 1d8 for each slot level above 1st."
  },
  {
    "name": "Detect magic",
    "level": 1,
    "class": ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Wizard"],
    "school": "Divination",
    "casting_time": "1 action",
    "range": 30,
    "components": "Verbal, Somatic",
    "material": null,
    "concentration": true,
    "ritual": true,
    "duration": "Up to 10 minutes",
    "description": ["For the Duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.", "The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."],
    "higher_levels": null
  },
]

var app = new Vue({
  el: '#spellbook',
  data: {
    spells: spells
  }
})
