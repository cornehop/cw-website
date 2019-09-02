import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// TODO move them in a JSON file and import them
const resources = {
  en: {
      translation: {
        "header.subtitle": "<0>Missionary worker at Operation Mobilization in Moldova</0>",
        "homepage.title": "<0>Bună ziua (good day)!</0>",
        "homepage.title.whymoldova": "<0>Why Moldova?</0>",
        "homepage.whoiscarlos": "My name is Carlos and since september 2019 I'm working as a mission worker for <1>Operation Mobilization in Moldova</1>. In <3>Moldova</3>, I am part of a Operation Mobilization team who spread the gospel to the people of Moldova. At first I will mainly be working in the background, in the capital Chișinău. After that I will follow a <5>Mission Discipleship Training</5>, after which I can start working as an evangelist. During this period I will be busy learning the Romanian language so that I can evangelize in the language that the locals speak.",
        "homepage.whymoldova": "I have been to Moldova three times before: in 2015 and 2017 with one youth group from the Dutch Reformed Church in Zeewolde; and in 2018 with a good friend where I am the last part of the traveled independently. God took me through this journey entered three times to go to Moldova, twice through one conversation with people I had met and met on previous trips asked me if I want to come for a longer term, and the third time while praying through a song in the background was standing. Three is the number of the fullness and comes back a lot in the Bible, I'm sure God used this because numbers really appeal to me. After a process of several years I now feel called for one to live there for a longer period of time."
      }    
  },
  nl: {
    translation: {
        "header.subtitle": "<0>Zendingswerker bij Operatie Mobilisatie in Moldavië</0>",
        "homepage.title": "<0>Bună ziua (goedendag)!</0>",
        "homepage.title.whymoldova": "<0>Waarom Moldavië?</0>",
        "homepage.whoiscarlos": "Mijn naam is Carlos en sinds september 2019 werk ik als zendingswerker voor <1>Operatie Mobilisatie in Moldavië</1>. In <3>Moldavië</3> maak ik onderdeel uit van een team van Operatie Mobilisatie die het evangelie onder de mensen in Moldavië verspreiden. In eerste instantie zal ik voornamelijk op de achtergrond aan het werk zijn, in de hoofdstad Chișinău. Daarna ga ik een <5>Mission Discipleship Training</5> volgen, waarna ik als evangelist aan het werk kan gaan. Gedurende deze periode zal ik bezig zijn met het leren van de Roemeense taal zodat ik kan evangeliseren in de taal die de lokale bevolking spreekt.",
        "homepage.whymoldova": "Ik ben drie keer eerder in Moldavië geweest: in 2015 en 2017 met een jongerengroep vanuit de Nederlands Gereformeerde Kerk in Zeewolde; en in 2018 met een goede vriend waarbij ik het laatste gedeelte van de reis zelfstandig heb afgelegd. God heeft mij tijdens deze reis tot drie keer ingegeven om naar Moldavië te gaan, twee keer middels een gesprek met mensen die ik tijdens eerdere reizen had ontmoet en aan mij vroegen of ik voor een langere termijn wil komen, en de derde keer tijdens het bidden door middel van een lied dat op de achtergrond aan stond. Drie is het getal van de volheid en komt veel terug in de Bijbel, ik weet zeker dat God dit heeft gebruikt omdat getallen mij erg aanspreken. Na een proces van een aantal jaren voel ik me nu geroepen voor een langere tijd er te gaan wonen."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "nl",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    },
    debug: true
  });

  export default i18n;