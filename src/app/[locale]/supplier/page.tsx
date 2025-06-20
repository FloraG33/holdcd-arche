"use client"

import { useTranslations } from "next-intl";
import React, { useCallback, useEffect, useState } from "react";

const SupplierPage = () => {
  const t = useTranslations("Supplier");
  
  const listsGroup = [
    "3M", "4B Elevator", "Aasted", "ABB", "ABB Fläkt", "ABB KENT", "ABB RAYMOND", 
  "ABB SOLVENT", "ABM", "Abus", "ABV", "ACE", "Acma", "Acufirm", "ADAMSON-STEPHENS", 
  "Adda Antriebstechnik", "ADtranz", "AEG", "Aerzener Maschinenfabrik", "Ahlstrom", 
  "Ahlström", "Air Liquide", "Airea", "Airtec", "AKG", "Alexander Werke", "Albro", 
  "Alcoa", "Alfa Laval", "Alfred Teves", "Alldos", "Allibert", "Allis Chalmers", 
  "Allis Mineral Systems", "Allison Transmisions", "Allmess Schlumberger", "Allweiler", 
  "Alpine Hosokawa", "Alsthom", "Alstom Transport", "Alstrohm", "Alup", "Ammann", 
  "AMR Refractarios S.A.", "Amri", "Amantiss", "Angus Fire", "ANRITSU Corporation", 
  "Ansaldo", "Apollo B.V.", "APV", "APV Anhydro", "APV Cheese AS Perfora", "APV Crepaco", 
  "APV Gaulin Homogenizers", "APV Ice Cream", "APV Pasilac", "APV Rosista", 
  "Aquametro Messtechnik GmbH", "Argo", "ARI", "Arnhem Filter", "Artofex", "Asco", 
  "ASH Pump", "Ashcroft", "ATAGO", "ATE", "Atlas Copco", "Atmos", "ATN-Südmo", "Atoma", 
  "Auma", "Aumund", "AUXIEMBRA", "Avesta Sheffield", "AZ Armaturen", "Babcock Wanson", 
  "Baudry Industrie", "Bauer", "Bauknecht", "BBC", "B&B Technology", "Babcock & Wilcox", 
  "Bacou", "Baird", "Baker Hughes", "Baldor", "Baldwin", "Band-it", "Banner", "Barke", 
  "Barksdale", "BARTEC", "Batra", "Eberhard Bauer Antriebstechnik", "Bauermeister", 
  "Baumüller", "Emil Baur", "Bavelloni", "Gebr. Becker", "Behne", "Behr Kühler", 
  "Bellin", "Belzer", "Benhil & Gasti", "Bently Nevada", "Berco", "Bergonzo", "Berges", 
  "Berkel", "Beru", "Beumer", "BHA", "Bilanciai", "Binder", "Bobst", "Boeckels", "Boge", 
  "Bogiflex", "Bohle", "Böhmer", "Bomag", "Bonfiglioli", "Bopp & Reuther", "Boretech", 
  "Bornemann", "Robert Bosch", "Bosch", "Bowex", "Braime", "Bran & Luebbe", 
  "Bray Chromalox", "Bremskerl", "Brevini", "Brockhausen & Holze", "Brodrene Vestergaard", 
  "Brook Crompton", "Brook Hansen", "Broomwade", "David Brown", "Brush", 
  "Brütsch & Rüegger", "BSS", "Bucher-Guyer", "Bucher Klettgau", "Büchi", "Buckau-Wolf", 
  "Bühler", "Bühler Miag", "Burgmann", "Burkert", "Bürkert", "Burndy Connectors", 
  "Busak + Shamban", "Dr. Ing. K. Busch", "Bussman", "BWM", "BWS Technologie", 
  "C.R.C. Industries", "Calor-Emag", "Camille Bauer", "Camozzi", "Caral", 
  "Carle & Montenari", "Casappa", "Case Poclain", "Caterpillar", "CATU", "CEAG", 
  "Celleco Hedemora", "CEPAC", "CEPAK", "Cerberus", "CERMEX", "Cevolani", "CFPI", 
  "Cherry-Burrel", "Chessell", "CIFA", "Citröen-Messian-Durand", "Clariant", 
  "Claudius Peters", "CMD", "Compagnie Francaise de Produits Industriels", "Compair", 
  "CompAir Mahle", "CompAir Spiros", "Containment Systems", "Continental Air Filter", 
  "Controlmatic", "Cooper Turbocompressor", "Copperweld", "Cotuplas", "CPOAC", "Crane", 
  "Crouzet", "Cummins", "Cutler Hammer", "Cut-o-Mat", "Cyclo", "Danfoss", 
  "DANFOTECH NUTRIDAN", "Darex", "De Vree", "Definox", "DEIF", "Delavan Nozzles", 
  "Delbag", "Delimon", "DEMAG", "Denison Hydraulik", "Denver", "Desch", "Deuta-Werke", 
  "Deutsche Solenoid", "Deutsche Tecalemit", "DEUTZ", "MWM", "Werke", "Diessel", "Dietz", 
  "Diffchamb", "Dimplex", "DIOSNA", "DIXIE UNION VERPACKUNGEN", 
  "DMN Schüttguttechnik", "DMN Westinghouse", "DODGE", "DOGATHERM", "Dolomitwerke", 
  "Donaldson", "Dorr-Oliver", "Dosapro Milton Roy", "Dr. Kernchen", "Dr. Tiefenbach", 
  "Dräger – Werk", "Dresser", "Dresser-Rand", "Driver-Harris", "Dungs", "Du Pont", 
  "Duezeta S.R.L.", "Dunapack", "Durbal", "Dwyer Instruments", "Dynamic Air", 
  "Dynapac Concrete", "EBM", "Eckardt Foxboro", "Edelhoff", "Edur", "Edwards Hochvakuum", "Ekato", "Elba", "Elbe & Sohn", "ELCO", "Elecster", 
  "Elektromatic", "Elesta", "ELIN", "ELLAB", "ELNA", "Elring", "Elsag-Bailey", "Emerson", "EMZO", 
  "Endress & Hauser", "Enerpac", "Enidine", "Entrelec", "Envirotech", "Epiroc", "ERCA", "Eriks", 
  "Ermeto", "Ernitec", "Ersem", "Erweka", "Esab", "Espholin", "ETA", "ETM Meuser", "Eurobloc", 
  "Eurolufkin", "Eurospital", "eurotherm", "EW Fuel Management", "Fael", "FAFNIR", "FA.P.M.O.", 
  "F.L. Smidth", "F.L.Smidth-Fuller", "Facom", "FAG", "FAG Ebern", "Fahrzeugtechnik Ebern", 
  "Fairbairn Lawson", "Fam", "Famar Wrapmatic", "Fanal", "Farval", "FEMA", 
  "Fernsteuergeräte K. Oelsch", "Ferrum", "Festo Pneumatic", "Fiat Hitachi Excavators Belgium", 
  "Fichtel & Sachs", "Findler & Sohn", "Fischbein", "Georg Fischer", "Fischer Gouverments Cont.", 
  "Fisher Rosemount", "Fisher Scientific", "Flender", "Flottweg", "Flowserve", "Fluke", "Flux", 
  "Flygt", "FMC", "Folex", "Formseal", "Foss Electric", "Foster Wheeler", "Foxboro Eckhardt", 
  "Framatome", "Fredenhagen", "Fredriksons", "FREI AG", "Friatec", "Friedrich Schwingtechnik", 
  "Fristam", "Fritsch", "Fryma", "FS Fuller", "Fuchs", "Fuji Electric", "Funke + Huster",
  "Gachot", "GANN", "Garbe & Lahmeier", "Gardner Denver", "Garvens", "Gates", "GEA – Damrow", 
  "Gea Alborn", "GEA Pollrich", "GEA Wiegand", "Geber", "Gebhardt", "Gebr. Tigges", 
  "GEI ASHFORD", "GEMO", "GEMÜ", "General Electric (GE)", "GE Fanuc", "Gerber Instruments", 
  "Gericke", "Germann & Frei", "Gerstenberg & Agger", "GESTRA", "Getriebebau Nord", "Glatt", 
  "Global Weighing", "Gluma", "Glyco", "Gorman Rupp", "Gossen-Metrawatt", "Götze", 
  "Goudsche Maschinenfabrik", "Gould", "Modicon", "Goulds Pumps", "Grace", "Grasso Products", 
  "Gravfil", "Graziano", "Green Bay Machinery", "Greenbat", "Grove", "Grundfos", 
  "GUERIN SYSTEMS", "Guttasyn", "H+H", "Haacke", "Haagen & Rinau", "Franz Haas Waffelmaschinen", 
  "Habasit", "Walter Hack", "Haenni", "Haffmans BV", "Hahn – Magnet", "Hahn & Kolb", 
  "Hallite Dichtelemente", "Halonen Tuomo", "Halyester", "HAMBA Maschinenfabrik", 
  "Hamworthy Pumps", "Handtmann", "Hansen Transmission", "Hartmann & Braun", "Hasler", 
  "Haver + Böcker", "HAWE", "Hazemag", "Hede Nielsen", "HEGA", "Heidelberg", 
  "Heidelberger", "Heilmeier & Weinlein", "Joh. Heinrichs", "HEJA", "HEK", "heko Ketten", 
  "Hella Leuchten", "Herion", "Hermetic Pumps", "Herzog", "Hewitt-Robins", "Hilge", 
  "Hilti", "Hima", "Hindle Cockburns", "Hipotronics", "Hitachi", "HITECH SYSTEMS", 
  "HIWING Technologie", "Holden & Brooke", "Holec", "Holman Kompressor", "Holset", 
  "Honeywell", "Hönnetaler Kettenfabrik", "Hosokawa Micron", "Hottinger Baldwin Meßtechnik", 
  "Hübner", "Hughes Pumps", "Hunger", "Hydac", "Hydro Rene Leduc", "Hydromatic", 
  "Hydrometer", "Hygiana", "Hytorc", "Ibau", "IBIS", "ICA S.p.A.", "Ifanger", "ifm elektronic", 
  "IKN", "IMI Norgren", "Imo Pump", "INA", "Indramat", "Indur", "Ingersoll-Rand", 
  "Ingold Mettler Toledo", "Intensiv Filter", "Interroll", "IRD Mechanalysis", "ISPO", 
  "Isenmann", "ITT Marlow Pumps", "Iveco", "Iwis Ketten", "IWK", "IWKA", "Jacquet", 
  "Jagenberg", "Jakob Antriebstechnik", "James Walker", "Jesma Matador", "Jetin", 
  "Jeumont Schneider", "Johe", "John Crane", "Johnson Controls / Uniloy", "Johnson Pump", 
  "Jokab Safety", "Jordan Ventile", "Joslyn Clark Controls", "Jöst", "Joucomatic", 
  "Joy Manufacturing", "JUMO", "Junair Kompressoren", "Jungheinrich AG", "Jungmichel",
  "K-Tron", "Kabelschlepp", "Kallfass", "Karges-Hammer", "KARI", "Kason", "Kauso", 
  "Kawajyu Shoji", "Kawasaki Heavy Ind.", "KEB -Antriebstechnik", "Kempchen", 
  "Keramchemie", "Kestner", "Max Kettner", "KEU-CITEX", "Keystone", 
  "KHD Humbold Wedag", "Kiepe Elektrik", "Kilian", "Kissling", "Kistler", "KIW", 
  "Klaus-Union", "Kleber", "Kleemann", "Kleinewefers", "Klinger", 
  "Klöckner Bartelt Medipak", "Klöckner-Moeller", "Knauer", "Knecht Filterwerke", 
  "Knipex", "Knorr Bremse", "Knorr Pneumatik", "Kobold", "Komatsu", 
  "Kolbbäckereimaschinen", "Kone", "Kontakt Chemie", "Korfmann", "Kortho", 
  "Körting", "Kral", "Kramer", "Ernst Kratz", "Krauss & Naimer", "Kreyenborg", 
  "Krohne", "Kromschröder", "Krones", "Krupp Hoesch", "Krupp Kautex", 
  "Krupp Polysius", "KSB", "KTR Kupplungstechnik", "Kuhnke Relay", "Kühnle", 
  "Klüber Lubrication", "Kolbus", "Kühme", "Küpper-Primax", "Kustner S.A.", "Maag", 
  "Mabeg", "Magnesita Navarra", "Magnet-Schultz", "Mahle", "Maihak", "Malvern", 
  "MAN", "MAN Roland", "Maneurop", "Mankenberg", "Mannesmann Demag", 
  "Mannesmann Rexroth", "Mann Filter", "Manzini Comaco", "March Pump", 
  "Hans Märtens", "Marubeni", "Maschinenfabrik Beckhausen Engineering", 
  "Maselli Misure", "Masoneilan", "Mauser", "Maxon Motor", "Mayr Antriebstechnik", 
  "Mectrol", "Megadyne", "Meili S.A.", "Melkam", "Meprotec", "Mercedes-Benz", 
  "Merlin Gerin", "Messian Durand", "Metal Technology", "METALQUIMIA", "Metso", 
  "Mettler Toledo / Ingold", "Meura S.A.", "MIAG Bühler", "MIBA", 
  "Minet Lacing Technology (MLT)", "Millipore", "Milton Roy", "MINIMAX", 
  "Minimotor", "Misuzu Sangyo", "Mitsubishi", "Mitutoyo Meßgeräte", 
  "Mojonnier Milk Tester", "Johannes Möller", "Molyduval", "G. Mondini", "Montabert", 
  "Moore Fans", "Moret Pump", "MP Filtri", "Mühlen Sohn", "Müller Martini", 
  "Gebr. A. & C. Müller", "Multipond", "Munters", "Murr Elektronik", "MVD", 
  "N.V.J. DE VREE & CO.", "Nadella", "Nash Pumps", "National Electric Coil", "Neidig", 
  "Netter", "Netzsch Mohnopumpen", "NEUMO", "New Waircom", "Nielsen", "Nilos", 
  "Niro", "Niro Atomizer", "Nitro-Bickford", "Nivosonic", "NMS Magnettechnik", 
  "Nocado", "Noell", "Norbro", "Norgren Martonair", "Nor-Mex", "NOVA", 
  "Numatics", "L&T", "Lambda Electronics", "Lambert", "Längerer + Reich", 
  "Langis + Gyr", "Lapp Kabel", "Laron", "Larox", "Laska Maschinenfabrik", 
  "Laurence Scott", "Laurent", "LDW Lloyd Dynamowerke", "Lechner + Bek", "Leco", 
  "Legrand", "Leifeld + Lemke", "Leistritz", "Lenze", "Leuze Electronic", "Leybold", 
  "Lide O-Ring", "Lidering", "Liebherr", "Liersch", "Linatex", "Lincoln Helios", 
  "Linde Turbines", "Liquiphant", "LKM", "Loba", "Locker", "Gebr. Lödecke", 
  "Lodge", "Loesche", "Loewe Pumps", "Logical Controls", "Loher", "Lokomo", 
  "LOS", "Lösche", "Louise", "LSB", "LTG", "Lubral", "Lucifer", "Lüdecke", 
  "Lufkin", "Lumistar", "Lurgi", "Lutz Pump", "Luwa", "Lyss",
  "Oberburg Engineering", "Observator Instruments", "Ochsner + Sohn", "OCME", 
  "OCSAM Impianti", "Oertli", "Officine Cevolani", "Oil-Rite", "OK", 
  "Oldham Analyse", "Omron", "Optima", "Optimus", "OR-TEC", "Orbisphere", 
  "Orenstein + Koppel", "O + K", "Orsat Analyzer", "Ortlinghaus", "Osram", 
  "Outokumpu", "Oxford Instruments", "P&H", "P.I.V.", "Pacific", "Paguag", 
  "Palintest", "Pall Filter", "Pall Pneumatic", "Pallmann", "Pape & Olbertz", 
  "Papst Motoren", "Parker Hannifin", "Parker Hydraulik", "Parker Prädifa", 
  "Pegasus Pfaff", "Pentair", "Pepperl & Fuchs", "Perfecta", "Perfora", 
  "Perkin-Elmer", "Peter Meyer", "Petzholdt", "Pewag Ketten", "Pfaff", 
  "Pfeiffer", "Pfister", "PGW Turbo", "Philips", "Phoenix", "Phoenix Contact", 
  "Pilling", "Pillard", "Piolanti & Figli", "Pitec", "PIV", "Pleiger", 
  "Pleuger Worthington", "Polar Mohr", "Pollrich", "POLY-CLIP", "Polyketting", 
  "Polysius", "Powertronics", "Preussag", "PRG Präzisions-Rüher", "Pro Line", 
  "Probat", "Processing Machinery Systems (PMS)", "Procme", "Prodec", 
  "Prominent Dosing", "Prontomatic", "Prünte", "Pujol Muntala", 
  "Pumpenfabrik Mannheim", "Putzmeister", "Quest", "Rafi", "Rail Group", 
  "Rammer", "Ramsey", "Rauma Repola", "Ray Burner", "Raymond Laurent", 
  "Red Lion", "Refractarios Asturias", "Regma", "Rei", "Reintjes", "Renk", 
  "Renk Tacke", "Renold", "Resch Pump", "Retsch", "Rexnord Ketten", "Rexroth", 
  "Rhone Poulenc Rorer", "Richard Müller", "Rickmeier", "Ridge Tool", 
  "Riedel de Haën", "Rieger Behälterbau", "W. Rietschle", "Rifox", "Ringsdorff", 
  "Ringspann", "Rittal", "Ritz Meßwandler", "RKR", "Robatech", "Robert Bosch", 
  "Rofa", "Roland Electronic", "Rosemount", "Roser Construcciones Metálicas", 
  "Ross Motores", "Rossi", "Rossi & Catelli", "Rotatek", "Rotex", "Rotoflux", 
  "Rotork", "Rovema", "Roxon Oy", "RUD", "Rychigger", "S.K.S. Siersema", "S+S", "Saacke", "SAE Ibertest", "Sabroe Reefer Cool", "SAFAG", 
  "SAIA", "Sailor", "SALA", "SAME", "Samson", "Sandvik", "Sapal", "Sartorius", 
  "Sauer Sundstrand", "Sauter", "Savona", "Schaltbau", "Schaub", "Schauenburg", 
  "Schenck", "Schenk Filter", "Schleicher & Schuell", "Schlumberger", "Schmersal", 
  "API Schmidt Bretten", "Schmidt + Haensch", "Schmidt Pump", "Schmitz & Schulte", 
  "Schneider Elektric", "Karl Schnell", "Scholtz", "Schoppe + Faeser", "Schorch", 
  "Schrader Bellows", "Schröder Spezialglastechnik", "Schroff", "Schunck", 
  "Schwing", "Seeger", "Seepex Seeberger", "Seilwolff", "Selectron Lyss", "Selet Sensor", 
  "Semikron", "Semperit", "Sempress", "SERA", "SERTO", "SET", "SEW", "Seybert + Rahier", 
  "Seydelmann", "Sick", "Siefer Maschinenfabrik", "Siegling", "Siemens", 
  "Siemens + Haensch", "Siersema Hertogenbosch", "SIG Pack SAPAL", "SIG Positec", 
  "SIGMA-ALDRICH Chemie", "SIHI", "Silinwerk", "Simplex", "Simplimatic Crown", "SIWO", 
  "SKF", "SKM", "F.L. Smidth", "Sodime", "Soehnle-Waagen", "SOLIPHANT", "SOLLICH", 
  "SONIC SPRAY", "Sonnenschein Batterien", "Soudronic", "Soxhlet", "Spectronic Instruments", 
  "Spelleken", "Spirax Sarco", "Spiros", "Spiroflow", "Spraying Systems", 
  "Sprecher + Schuh", "Square D", "Staffa", "R. Stahl", "Stahlwille", "Stal-Astra", 
  "STAMP", "Standard Industrie", "Stappen", "Starret", "Stein Heurtey", "Steinlen", 
  "Stellana", "Stemmann", "Stephan u. Söhne", "Stieber", "H. Stock Maschinenfabrik", 
  "Stöber", "Stork", "Stork-Jaffa", "Stromag", "Stromberg", "Strunck", "Südmo", 
  "Südrad", "Sulzer", "Sumitomo", "Supraton", "Svedala", "Svedala Dynapac Concrete", 
  "Symo", "Synatel", "Tacke", "Taiyo Druckmaschinen", "Tamrock", "Tandler Zahnrad- + Getriebefabrik", 
  "Teledyne", "Telefunken", "Telemecanique", "TEMA", "Tendamatic", "Terlet NV", 
  "Terrex", "Tesch", "Tetra Brick Slim", "Tetra Pak", "Tetra Pak Hoyer", "Thermo Electric", 
  "Thermon", "Dr. Thiedig", "TIB-Chemie", "Timken", "Tina Schwarte", "Tinofix", "tip top", 
  "Toni Technik", "Tork", "Torrington", "TOS", "Tosco", "TOSS", "TRAFAG", "Transia", 
  "Transitube", "Travaini", "Trelleborg", "Trellex Scholz", "Tri-Clover", "Tsubaki", 
  "Tuchenhagen", "TUOMO HALONEN", "Turbo Lufttechnik", "Turck", "Turmag", "Turolla", 
  "Tyler", "Tytec", "Uhlmann Pac-Systeme", "Ultrafilter", "Ultrakust Electronic", 
  "Uniloy / Johnson Controls", "Unimatic", "Unimix", "Union Spezial", "Univer", 
  "Universal Maschinenbau", "Unna Kettenfabrik", "Uraca", "Vahle", "Valmet", "Valtac", 
  "Valtra", "Varta", "VDO", "Vega Grieshaber", "VELATI", "VEM Deutschland", "Venti-Oelde", 
  "Ventomatic", "Verder Pumps", "Verlinde", "Vetter", "Vickers", "Viking Pump", 
  "Villedon", "Visco Jet", "Viscotec", "Visolux", "Willy Vogel", "Vogel-Ochsner", "Voith", 
  "Volpak", "Volvo", "Von Roll", "VSR", "Vulkan", "W.R.Grace", "Wabco", "Waeschle", 
  "WAGO", "Waldrich", "Walker Hagou", "Walther Pilot", "WAM", "Wanson", "Warner", 
  "Warrick", "WTG Wassertechnische Gesellschaft", "Watson Marlow", "WCB Ice Cream", 
  "WEG", "Weil Engineering", "Weiland", "Weishaupt", "Wemco Pump", "Wenmec", "WERIE", 
  "Wesco Navy", "Weser Pump", "Weserhütte", "Westfalia", "Westinghouse", "Whatman", 
  "Alexander Wiegand", "WIKA", "Winterwerb / Streng", "Wippermann", "WIRELON", 
  "Woerner", "Woltex", "Woltmann", "Woods", "Woodtli", "Wrapmatic", "WTW", 
  "WUG MLT MINET LACING TECHNOLOGY", "Yale Industrial Products", "Yaskawa", "YOKI", 
  "Zeiss", "Zellweger Analytics", "Zenith", "ZF", "ZPM Zahnradpumpenfabrik Mannheim", 
  "Zubiri", "ZWAG", "Zschokke-Wartmann AG", "Züllig Ag"
  ]

  const [openCategory, setOpenCategory] = useState<string | null>(null);
const [searchText, setSearchText] = useState<string>(''); // État pour la recherche
const [debouncedSearchText, setDebouncedSearchText] = useState<string>(''); // Pour le debouncing de la recherche

// Fonction pour regrouper les éléments en catégories
const groupItemsByCategory = (items: string[]): Record<string, string[]> => {
  const grouped: Record<string, string[]> = {};
  
  items.forEach((item) => {
    const firstLetter = item[0].toUpperCase();
    const category =
      firstLetter >= "A" && firstLetter <= "B"
        ? "A-B"
        : firstLetter >= "C" && firstLetter <= "D"
        ? "C-D"
        : firstLetter >= "E" && firstLetter <= "F"
        ? "E-F"
        : firstLetter >= "G" && firstLetter <= "H"
        ? "G-H"
        : firstLetter >= "I" && firstLetter <= "J"
        ? "I-J"
        : firstLetter >= "K" && firstLetter <= "L"
        ? "K-L"
        : firstLetter >= "M" && firstLetter <= "N"
        ? "M-N"
        : firstLetter >= "O" && firstLetter <= "P"
        ? "O-P"
        : firstLetter >= "Q" && firstLetter <= "R"
        ? "Q-R"
        : firstLetter >= "S" && firstLetter <= "T"
        ? "S-T"
        : firstLetter >= "U" && firstLetter <= "W"
        ? "U-W"
        : firstLetter >= "X" && firstLetter <= "Z"
        ? "X-Z"
        : "Other"; // Catégorie par défaut pour les autres lettres
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(item);
  });

  return grouped;
};

const groupedItems = groupItemsByCategory(listsGroup);

// Fonction pour filtrer les éléments par le texte de recherche (3 premières lettres)
const filterItems = useCallback((items: string[]) => {
  if (debouncedSearchText.length < 1) return items; // Afficher tous les éléments si moins de 3 caractères sont saisis
  return items.filter(item =>
    item.toLowerCase().startsWith(debouncedSearchText.toLowerCase())
  ); // Filtrer par 3 premières lettres
}, [debouncedSearchText]); // Dépend uniquement de debouncedSearchText

// Filtrer les catégories qui contiennent des éléments correspondant à la recherche
const filteredCategories = Object.keys(groupedItems)
  .sort() // Trier les catégories par ordre alphabétique
  .filter(category => {
    // Vérifier si la catégorie ou ses éléments correspondent à la recherche
    const filteredItems = filterItems(groupedItems[category]);
    return filteredItems.length > 0 && category !== "Other"; // Exclure "Other" du filtrage si vide
  });

// Utiliser useEffect pour le debouncing de la recherche
useEffect(() => {
  const timeout = setTimeout(() => {
    setDebouncedSearchText(searchText); // Met à jour le texte de recherche après un délai
  }, 300); // Délai de 300ms avant de mettre à jour le texte de recherche

  return () => clearTimeout(timeout); // Nettoyer le timeout
}, [searchText]);

// Utiliser useEffect pour ouvrir automatiquement la catégorie qui contient des éléments correspondant à la recherche
useEffect(() => {
  if (debouncedSearchText) {
    const categoryWithItems = Object.keys(groupedItems).find((category) => {
      return filterItems(groupedItems[category]).length > 0;
    });

    if (categoryWithItems) {
      setOpenCategory(categoryWithItems); // Ouvrir la catégorie qui correspond
    }
  } else {
    setOpenCategory(null); // Réinitialiser si aucun texte n'est saisi
  }
}, [debouncedSearchText]);

// Fonction pour gérer l'ouverture/fermeture manuelle du collapse
const toggleCategory = (category: string) => {  
  setOpenCategory(openCategory === category ? null : category);
};

return (
  <div className="px-5 md:px-16 md:py-5">
    <section className="px-0 py-5 md:px-20 md:py-5 mt-0 m-auto">
      <div className="max-w-7xl m-auto">
        {/* Barre de recherche */}
        <div className="">
              <div className="text-title	text-2xl font-medium">
                {t("supplier-list")}
              </div>
              <span className="w-full bg-minibar h-[2px] block my-5"></span>
            </div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-5">
          <p className="text-lg font-semibold text-text">{ t("filter") }</p>
          <div className="relative w-full sm:w-8/12">
            <input
              type="text"
              placeholder={t("search")}
              className="input input-bordered w-full min-w-72"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)} // Met à jour l'état de recherche
            />
            {searchText && (
              <button
                onClick={() => setSearchText('')} // Réinitialise le texte de recherche
                className="ml-2 text-lg text-gray-500 hover:text-gray-700 absolute z-10 right-5 top-[10px] bg-text px-2 rounded-lg text-white"
              >
                X
              </button>
            )}
          </div>
        </div>

        {/* Liste des catégories filtrées et triées par ordre alphabétique */}
        {filteredCategories.map((category, index) => (
          <div
            key={index}
            className="mb-4 shadow-md rounded-md" // Ajout d'une ombre et suppression de la bordure
          >
            <div
              className="collapse collapse-arrow bg-gray-100"
              onClick={() => toggleCategory(category)} // Utilisation de la fonction pour ouvrir/fermer manuellement
            >
              <input
                type="checkbox"
                className="peer"
                checked={openCategory === category}
                readOnly
              />
              <div className="collapse-title text-lg text-text font-medium">
                {category}
              </div>
              <div className="collapse-content">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
                  {filterItems(groupedItems[category]).map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-200 p-2 text-center text-text rounded shadow hover:bg-gray-300 transition font-light text-sm"
                      onContextMenu={(e) => e.preventDefault()} 
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Afficher "Other" à la fin, mais seulement si des éléments sont filtrés */}
        {groupedItems['Other'] && filterItems(groupedItems['Other']).length > 0 && (
          <div className="mb-4 shadow-md rounded-md">
            <div
              className="collapse collapse-arrow bg-gray-100"
              onClick={() => toggleCategory('Other')} // Utilisation de la fonction pour ouvrir/fermer manuellement
            >
              <input
                type="checkbox"
                className="peer"
                checked={openCategory === 'Other'}
                readOnly
              />
              <div className="collapse-title text-lg font-medium">
                Other
              </div>
              <div className="collapse-content">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
                  {filterItems(groupedItems['Other']).map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-200 p-2 text-center rounded shadow hover:bg-gray-300 transition font-light text-sm"
                      onContextMenu={(e) => e.preventDefault()} 
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  </div>
);
};

export default SupplierPage;
