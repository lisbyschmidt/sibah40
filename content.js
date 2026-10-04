// Al tekst på siden. Ret frit her.
const CONTENT = {
  // Hendes navn (vises på slutskærmen). Lad stå tom for at udelade.
  name: "Signe",

  intro: {
    title: "Tillykke med de 40\u00a0år, kære Signe! 🎉",
    text: "Jeg har lavet en lille leg til dig. Har du lyst til at være med?",
    yes: "Ja!",
    no: "Nej",
  },

  question: "Kan du huske hvilke sider jeg elsker mest ved dig?",

  rounds: [
    {
      right: "Din begejstring",
      wrong: ["Dine optimeringer"],
      image: "bryllupstale.jpg",
    },
    {
      right: "Din nørdede side",
      wrong: ["Dine grænsesætninger"],
      image: "diablo.jpg",
    },
    {
      right: "Dit nærvær",
      wrong: ["Din gode forstand"],
      image: "mulan.jpg",
    },
  ],

  final: {
    title: "Tillykke med de 40\u00a0år",
    // Vises over de tre sider på slutskærmen
    intro: "I min bryllupstale fortalte jeg om de tre sider af dig, jeg elsker allermest. Det gælder stadig:",
    outro: "Tak fordi du er dig. Jeg glæder mig til alle de næste år sammen med dig.",
    signature: "Kærlig hilsen, Søren ❤️",
    again: "Én gang til",
  },
};
