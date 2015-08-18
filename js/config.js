// for navigator language
var lang = window.navigator.language;
// you can change the language
 var lang = 'es';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'q':'Alicante,Spain',
    'units':'metric',
    'lang':lang
};

//var feed = 'http://feeds.nos.nl/nosjournaal?format=rss';
//var feed = 'http://www.nu.nl/feeds/rss/achterklap.rss';
//var feed = 'http://www.nu.nl/feeds/rss/opmerkelijk.rss';
//var feed = 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';
//var feed = 'http://www.diarioinformacion.com/elementosInt/rss/12'; //diario informacion principal
var feed = 'http://www.diarioinformacion.com/elementosInt/rss/4'; //sucesos
// compliments:
var morning = [
    '¡Buenos días, guap@!',
    '¡Disfruta del dia!',
    '¿Que tal has dormido?'
        ];
        
var afternoon = [
    '¡Hola, belleza!',
    '¡Estás muy sexy!',
    '¡Hoy tienes buen aspecto!'
        ];
       
var evening = [
    '¡Wow, estás muy guap@!',
    '¡Tienes buena pinta!',
    '¡Hola, sexy!'
        ];