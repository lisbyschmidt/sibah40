// Al quiz-tekst og de rigtige svar. Ret frit her.
const QUIZ = {
  "sections": [
    {
      "type": "wine",
      "title": "Vin 1",
      "questions": [
        {
          "label": "1.1: Duft",
          "text": "Hvordan oplever du duften af vin 1?",
          "options": [
            "Grønne æbler og frisk agurk",
            "Modne ferskner, saftige pærer og eksotiske frugter som ananas og passionsfrugt",
            "Smør, vanilje og ristet brød"
          ],
          "answer": 1,
          "explanation": "Vinen beskrives med en duft af modne ferskner, pærer og eksotiske frugter, ledsaget af citrus, fine urter og et strejf af honning."
        },
        {
          "label": "1.2: Smag",
          "text": "Hvordan oplever du smagen af vin 1?",
          "options": [
            "Let og sød med lidt syre",
            "Tung og olieagtig med smør og vanilje",
            "Koncentreret og fyldig med levende syre og en mineralsk eftersmag"
          ],
          "answer": 2,
          "explanation": "Vinen beskrives som koncentreret og fyldig med silkeblød tekstur, levende syre og en lang, frisk og mineralsk afslutning."
        },
        {
          "label": "1.3: Druesort",
          "text": "Hvilken druesort tror du, vin 1 er lavet af?",
          "options": [
            "Riesling",
            "Gewürztraminer",
            "Pinot Gris (også kaldet Grauburgunder eller Pinot Grigio)"
          ],
          "answer": 0,
          "explanation": "Vinen er lavet af Riesling-druer. Riesling er en aromatisk druesort med høj syre og typisk duft af citrus, fersken og blomster. Den kan laves i stilarter fra helt tør til sød og tåler lang lagring."
        },
        {
          "label": "1.4: Land",
          "text": "Hvilket land tror du, vin 1 kommer fra?",
          "options": [
            "Italien",
            "Tyskland",
            "Østrig"
          ],
          "answer": 2,
          "explanation": "Vinen kommer fra Wachau i Østrig. Østrig har et køligt klima, og landet er især kendt for friske, tørre hvidvine som Grüner Veltliner og Riesling. Vinene har ofte en klar frugt, en tydelig syre og en mineralsk præcision. Wachau ligger langs Donau og er et af landets mest berømte områder."
        },
        {
          "label": "1.5: Årgang",
          "text": "Hvilken årgang tror du, vin 1 er?",
          "options": [
            "2016-2019",
            "2020-2023",
            "2024-2026"
          ],
          "answer": 0,
          "explanation": "Vinen er fra årgang 2017. Generelle tegn på, at en hvidvin har nogle år på bagen: Farven bliver mere gylden, mens unge hvidvine ofte er lysere og mere grønlige. Duften udvikler sig fra frisk frugt og blomster mod honning, tørret frugt og nødder, og syren virker mere afrundet. Riesling kan med alderen få en duft af petroleum. Her er et strejf af honning i duften et lille tegn på alder."
        }
      ]
    },
    {
      "type": "wine",
      "title": "Vin 2",
      "questions": [
        {
          "label": "2.1: Udseende",
          "text": "Hvordan oplever du udseendet af vin 2 i glasset?",
          "options": [
            "Næsten farveløs og vandklar",
            "Mørk brungylden",
            "Klar og strålende med en intens gyldengul farve"
          ],
          "answer": 2,
          "explanation": "Vinen beskrives som klar og strålende med en intens gyldengul farve."
        },
        {
          "label": "2.2: Duft",
          "text": "Hvordan oplever du duften af vin 2?",
          "options": [
            "Frisk og blomstrende med akacie og lindeblomst",
            "Kokos, vanilje og karamel",
            "Friskklippet græs og grønne urter"
          ],
          "answer": 0,
          "explanation": "Vinen beskrives med en frisk og blomstrende duft af akacie og lindeblomst."
        },
        {
          "label": "2.3: Smag",
          "text": "Hvordan oplever du smagen af vin 2?",
          "options": [
            "Skarp og meget syrlig uden frugt",
            "Hvide sommerfrugter som fersken og pære, fyldig og afrundet, med en eftersmag af abrikos og honning",
            "Sød og sirupsagtig med kandiseret frugt"
          ],
          "answer": 1,
          "explanation": "Ifølge beskrivelsen åbner vinen med hvide sommerfrugter som fersken og pære og går over i en fyldig, afrundet mundfornemmelse med abrikos, honning og et strejf af grapefrugt i eftersmagen."
        },
        {
          "label": "2.4: Land",
          "text": "Hvilket land tror du, vin 2 kommer fra?",
          "options": [
            "Frankrig",
            "Spanien",
            "Italien"
          ],
          "answer": 0,
          "explanation": "Vinen kommer fra Bordeaux i Frankrig. Den er en klassisk Bordeaux-blanding af Sémillon (46%), Sauvignon Blanc (27%) og Muscadelle (27%). Sémillon giver typisk fylde, en rund mundfølelse og noter af honning. Sauvignon Blanc bidrager med frisk syre og citrus, og Muscadelle giver en blomsteragtig og aromatisk duft. Frankrig er den klassiske reference for mange vinstile, og franske vine opkaldes ofte efter området i stedet for druen. Bordeaux er mest kendt for sin rødvin, men laver også elegante tørre hvidvine, ofte som blandinger, og klimaet er præget af nærheden til Atlanterhavet."
        },
        {
          "label": "2.5: Årgang",
          "text": "Hvilken årgang tror du, vin 2 er?",
          "options": [
            "2016-2019",
            "2020-2023",
            "2024-2026"
          ],
          "answer": 2,
          "explanation": "Vinen er fra årgang 2024. Tegn på en helt ung hvidvin er en frisk, blomstrende og frugtig duft (fx blomster, fersken og pære), en klar og strålende farve og en levende syre. Farven alene kan snyde, fordi både druesort og fadlagring påvirker den."
        }
      ]
    },
    {
      "type": "bonus",
      "title": "Sammenlign Vin 1 og Vin 2",
      "intro": "Smag Vin 1 og Vin 2 lige efter hinanden. Skyl munden med lidt vand mellem slurkene, og læg mærke til forskellene. Der er ikke noget rigtigt eller forkert svar, for det er din egen oplevelse, der tæller.",
      "tasks": [
        {
          "label": "Bonus B1: Mundfølelse og syre",
          "tryIt": "Hvilken af de to vine synes du er mest rund og blød i munden? Og hvilken synes du er mest syrlig og frisk?",
          "how": "Mundfølelsen, også kaldet kroppen, er vinens vægt på tungen. Tænk på forskellen mellem vand, mælk og fløde: En let vin føles som vand, og en fyldig vin føles mere som sødmælk eller fløde. Syre mærker du som en frisk, sitrende fornemmelse på siderne af tungen, og den får det til at løbe i vand i munden. Jo mere det løber i vand, jo mere syre er der i vinen. Prøv at synke vinen og mærk efter, hvor længe det løber i vand bagefter.",
          "expect": "Riesling (Vin 1) er kendt for en høj, levende syre, som gør vinen frisk, stram og spændstig. Sémillon, som der er mest af i Vin 2, giver typisk en fyldig, rund og næsten voksagtig mundfølelse med mindre syre. Syre og fylde hænger sammen: Mere syre får ofte en vin til at virke lettere og mere spændstig, mens mindre syre giver en blødere og rundere fornemmelse. Syre er også med til at gøre en vin holdbar, så vine med høj syre kan ofte ligge længere."
        },
        {
          "label": "Bonus B2: Tegn på alder",
          "tryIt": "Hvilken af de to vine synes du virker mest moden eller ældst?",
          "how": "Kig på farven: Ældre hvidvine er ofte mere gyldne, mens unge vine er lysere og mere grønlige. Læg derefter mærke til, om duften minder om honning, tørret frugt og nødder, som typisk hører til ældre vine, eller om frisk frugt og blomster, som tyder på en ung vin. I munden virker syren ofte mere afrundet hos en moden vin.",
          "expect": "Der er flere års forskel på de to vine: Vin 1 er fra 2017, og Vin 2 er fra 2024. Vin 1 beskrives med et strejf af honning i duften, hvilket kan være et lille tegn på alder, mens Vin 2 beskrives med en frisk og blomstrende duft, som er typisk for en ung vin. Alder er ikke altid let at identificere, fordi druesort, lagring og opbevaring også påvirker vinen."
        }
      ]
    },
    {
      "type": "wine",
      "title": "Vin 3",
      "questions": [
        {
          "label": "3.1: Udseende",
          "text": "Hvordan oplever du udseendet af vin 3 i glasset?",
          "options": [
            "Klar og gulgrøn",
            "Dyb gylden til rav",
            "Næsten farveløs og vandklar"
          ],
          "answer": 0,
          "explanation": "Vinen beskrives som klar og gulgrøn i farven."
        },
        {
          "label": "3.2: Duft",
          "text": "Hvordan oplever du duften af vin 3?",
          "options": [
            "Citrongræs og frisk mynte",
            "Delikat duft af tropiske frugter og våde sten",
            "Smør, karamel og ristede nødder"
          ],
          "answer": 1,
          "explanation": "Vinen beskrives med en delikat duft af tropiske frugter og våde sten."
        },
        {
          "label": "3.3: Smag",
          "text": "Hvordan oplever du smagen af vin 3?",
          "options": [
            "Sød og tung med lidt syre",
            "Tung og olieagtig med smør og karamel",
            "Frisk og mellemfyldig med mineralitet og en sprød eftersmag"
          ],
          "answer": 2,
          "explanation": "Vinen beskrives som frisk og mellemfyldig med tilpas syre og mineralitet samt en sprød, frisk og behagelig eftersmag."
        },
        {
          "label": "3.4: Druesort",
          "text": "Hvilken druesort tror du, vin 3 er lavet af?",
          "options": [
            "Albariño (også kaldet Alvarinho)",
            "Viognier",
            "Chardonnay"
          ],
          "answer": 2,
          "explanation": "Vinen er produceret af Chardonnay-druer. Chardonnay er en relativt neutral druesort, der tager meget præg af klima og vinmager. I kølige områder smager den ofte af citrus og grønt æble, i varme områder af tropiske frugter, og fadlagring kan give noter af smør og vanilje."
        },
        {
          "label": "3.5: Land",
          "text": "Hvilket land tror du, vin 3 kommer fra?",
          "options": [
            "Spanien",
            "Portugal",
            "Italien"
          ],
          "answer": 1,
          "explanation": "Vinen kommer fra Bairrada-området i Portugal. Portugal er mest kendt for portvin og for mange lokale druesorter, men landet laver også gode hvidvine. Bairrada ligger tæt på Atlanterhavet, og kystklimaet giver friskhed. Chardonnay er en international druesort, der dyrkes i mange lande og kan smage meget forskelligt alt efter, hvor den vokser."
        },
        {
          "label": "3.6: Årgang",
          "text": "Hvilken årgang tror du, vin 3 er?",
          "options": [
            "2016-2019",
            "2020-2023",
            "2024-2026"
          ],
          "answer": 1,
          "explanation": "Vinen er fra årgang 2022. En gulgrøn farve er et typisk tegn på en ung hvidvin, fordi hvidvine med tiden mister det grønne skær og bliver mere gyldne. Friske tropiske frugter og en sprød syre peger også på, at vinen stadig er ung."
        }
      ]
    },
    {
      "type": "bonus",
      "title": "Sammenlign Vin 2 og Vin 3",
      "intro": "Smag Vin 2 og Vin 3 lige efter hinanden, og læg mærke til, hvad der adskiller dem. Der er ikke noget rigtigt eller forkert svar.",
      "tasks": [
        {
          "label": "Bonus B3: Fadlagring",
          "tryIt": "Hvilken af de to vine synes du har mest præg af fadlagring, fx vanilje, smør eller ristet brød?",
          "how": "Fadet giver bløde, søde og krydrede noter som vanilje, kokos, smør og ristet brød. Duften minder ofte om bagværk. Hvis vinen i stedet dufter af frisk frugt og blomster, har den typisk ikke fået så meget fad.",
          "expect": "Chardonnay (Vin 3) er en druesort, der tager godt imod fadets smag, og Vin 3 har ligget 9-12 måneder på egetræsfade. Producenten oplyser ikke noget om fadlagring for Vin 2, så sammenlign selv."
        },
        {
          "label": "Bonus B4: Duftens karakter",
          "tryIt": "Hvilken af de to vine synes du har den mest aromatiske og blomsteragtige duft?",
          "how": "Duft først uden at svirpe glasset. Svirp derefter vinen rundt, og snus igen et par korte gange. Duften kommer især frem, når vinen får luft.",
          "expect": "Muscadelle og Sémillon, som begge indgår i Vin 2, er kendt for blomsteragtige og aromatiske noter. Chardonnay (Vin 3) er mere neutral, så dens duft formes meget af, hvor druen er dyrket, og hvordan vinen er lavet."
        }
      ]
    },
    {
      "type": "wine",
      "title": "Vin 4",
      "questions": [
        {
          "label": "4.1: Udseende",
          "text": "Hvordan oplever du udseendet af vin 4 i glasset?",
          "options": [
            "Næsten farveløs",
            "Klar og gylden",
            "Grumset og brun"
          ],
          "answer": 1,
          "explanation": "Vinen beskrives som klar og gylden i farven."
        },
        {
          "label": "4.2: Duft",
          "text": "Hvordan oplever du duften af vin 4?",
          "options": [
            "Vanilje og kokos",
            "Roser og violer",
            "Intens duft af flint, citrus og tropiske frugter"
          ],
          "answer": 2,
          "explanation": "Vinen beskrives med en intens duft af flint, citrus og tropiske frugter."
        },
        {
          "label": "4.3: Smag",
          "text": "Hvordan oplever du smagen af vin 4?",
          "options": [
            "Frisk og fyldig frugtsmag med melon og citrusfrugt, syre og mineralitet",
            "Sødmefuld og blød uden syre",
            "Tung og smøragtig med karamel og ristede nødder"
          ],
          "answer": 0,
          "explanation": "Vinen beskrives som frisk og samtidig fyldig med noter af melon og citrusfrugt samt syre og mineralitet, og den slutter lang og forfriskende."
        },
        {
          "label": "4.4: Druesort",
          "text": "Hvilken druesort tror du, vin 4 er lavet af?",
          "options": [
            "Chenin Blanc",
            "Sauvignon Blanc",
            "Grüner Veltliner"
          ],
          "answer": 1,
          "explanation": "Vinen er fremstillet af 100% Sauvignon Blanc-druer. Sauvignon Blanc har typisk høj syre og en duft af citrus, grønne frugter, friske urter og ofte flint. Den er oprindeligt fra Frankrig og dyrkes i dag i mange lande."
        },
        {
          "label": "4.5: Land",
          "text": "Hvilket land tror du, vin 4 kommer fra?",
          "options": [
            "Chile",
            "Argentina",
            "Sydafrika"
          ],
          "answer": 2,
          "explanation": "Vinen kommer fra Constantia, få kilometer uden for Cape Town i Sydafrika. Sydafrika er et vinland i den Nye Verden, hvor vinene ofte har en moden og ren frugt. Constantia ligger tæt på havet, og den kølige havbrise giver mere friskhed, end man kunne forvente i et varmt land."
        },
        {
          "label": "4.6: Årgang",
          "text": "Hvilken årgang tror du, vin 4 er?",
          "options": [
            "2016-2019",
            "2020-2023",
            "2024-2026"
          ],
          "answer": 1,
          "explanation": "Vinen er fra årgang 2023. En gylden farve kan være et tegn på lidt alder, men den friske duft af citrus og flint og den levende syre er typiske tegn på, at vinen stadig er ung. Når en hvidvin bliver ældre, afløses citrus og friske frugter ofte af honning og modne eller tørrede frugter."
        }
      ]
    },
    {
      "type": "bonus",
      "title": "Sammenlign Vin 3 og Vin 4",
      "intro": "Smag Vin 3 og Vin 4 lige efter hinanden. De er begge friske, så du skal lede efter små forskelle. Der er ikke noget rigtigt eller forkert svar.",
      "tasks": [
        {
          "label": "Bonus B5: Farve",
          "tryIt": "Hold glasset på skrå foran noget hvidt, fx et stykke papir. Hvilken af de to vine har den mest grønlige farve, og hvilken er mest gylden?",
          "how": "Kig især på kanten af vinen, hvor farven er tydeligst. Et grønligt skær peger ofte på en ung vin, mens en dybere gylden farve kan tyde på alder eller fadlagring. Farven kan også fortælle noget om druen.",
          "expect": "Vin 3 beskrives som gulgrøn, hvilket er et typisk tegn på en ung hvidvin. Vin 4 beskrives som gylden. De to vine er næsten lige gamle (2022 og 2023), så forskellen skyldes ikke alder alene, men også druesort, fadlagring og stil. Farven er et fingerpeg og ikke en facitliste."
        },
        {
          "label": "Bonus B6: \"Grøn\" duft",
          "tryIt": "Hvilken af de to vine synes du har den mest \"grønne\" duft, fx citrus eller friske urter?",
          "how": "\"Grønne\" dufte minder om nyklippet græs, citronskal og friske krydderurter. Vin 4 har også en duft af flint, som er en tør, stenet duft, der minder om en tændt tændstik eller to sten, der slås mod hinanden.",
          "expect": "Sauvignon Blanc (Vin 4) er kendt for en duft af citrus og friske urter, og Vin 4 har desuden et strejf af flint. Chardonnay (Vin 3) dufter typisk mere af moden frugt som æble, pære og tropiske frugter."
        }
      ]
    }
  ],
  "reveal": [
    {
      "wine": "Vin 1",
      "name": "Tegernseerhof Ried Loibenberg Riesling Smaragd",
      "area": "Wachau",
      "country": "Østrig",
      "grape": "Riesling",
      "vintage": "2017",
      "pdf": "1-tegernseehof.pdf"
    },
    {
      "wine": "Vin 2",
      "name": "Clarendelle Bordeaux Blanc",
      "area": "Bordeaux",
      "country": "Frankrig",
      "grape": "Sémillon, Sauvignon Blanc, Muscadelle",
      "vintage": "2024",
      "pdf": "2-clarendelle.pdf"
    },
    {
      "wine": "Vin 3",
      "name": "Calcario3 do Principal Chardonnay",
      "area": "Bairrada D.O.C.",
      "country": "Portugal",
      "grape": "Chardonnay",
      "vintage": "2022",
      "pdf": "3-calcario3.pdf"
    },
    {
      "wine": "Vin 4",
      "name": "Klein Constantia Sauvignon Blanc",
      "area": "Constantia",
      "country": "Sydafrika",
      "grape": "Sauvignon Blanc",
      "vintage": "2023",
      "pdf": "4-klein-constantia.pdf"
    }
  ]
};
