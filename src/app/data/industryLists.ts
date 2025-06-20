export interface Industry {
  name: string;
  equipments: string[];
  image: any
}

export const industries: Industry[] = [
  {
    name: "industry_chimical",
    equipments: [
        "automatesProgrammables",
        "capteursDeProximite",
        "pompesEtCompresseurs",
        "debitmetresManometresThermometresEtPhmetres",
        "redox",
        "codeurs",
        "servomoteurs",
        "systemesDinstrumentationEtDeControle",
        "variateursDeFrequence",
        "vannesEtJoints",
        "equipementDeSecuriteEtEPI"
    ],
    image: "/images/chimie.jpg",
  },
  {
    name: "industry_pharmaceutical",
    equipments: [
        "controleDesProcessus",
        "surveillanceTemperatureEtHumidite",
        "convoyeursEtMachinesEmballage",
        "equipementsSpeciauxPressionDifferencielle",
        "instrumentsEtEquipementsSurveillance",
        "debitmetresSanitairesNormesSanitaires",
        "capteursDeTemperatureSanitaires",
        "systemesSterilisationEtFiltration",
        "capteursDeNiveauSteriles",
        "equipementsDeLaboratoire",
        "pompesVannesEtCompresseurs",
        "plc",
        "variateursDeFrequence",
        "equipementDeSecuriteEtEPI"
    ],
    image: "/images/pharma.jpg",
  },
  {
    name: "industry_auto",
    equipments: [
        "automatesProgrammablesPLC",
        "servomoteurs",
        "outilsEtEquipementsDiagnostic",
        "variateursDeFrequence",
        "tuyauxCourroiesEtJoints",
        "interfacesHommeMachineHMI",
        "roulementsEtTransmissionsDePuissance",
        "capteursDeProximite",
        "barrieresDeSecurite",
        "filtresEtGestionDesFluides",
        "equipementDeSecuriteEtEPI"
    ],
    image: "/images/automobile.jpg",
  },
  {
    name: "industry_dough_paper",
    equipments: [
        "controleDuMouvement",
        "capteursDeProximite",
        "raffineursEtPresses",
        "capteursDebitEtPression",
        "courroiesEtRouleauxConvoyeurs",
        "capteursNiveauEtTemperaturePLC",
        "roulementsEtTransmissionsPuissance",
        "equipementDeSecuriteEtEPI"
    ],
    image: "/images/paper.jpg",
  },
  {
    name: "industry_oil",
    equipments: [
        "equipementsSystemesCommunication",
        "interfacesHommeMachineHMI",
        "instrumentation",
        "cablageEtComposantsElectriques",
        "processusLaboratoires",
        "systemesControleEtInstrumentation",
        "capteurs",
        "turbinesEtGenerateurs",
        "equipementsSpeciauxZonesSpecifiques",
        "vannesPompesEtCompresseurs",
        "detecteursDeGaz",
        "equipementDeSecuriteEtEPI"
    ],
    image: "/images/petrolier.jpg",
  },
  {
    name: "industry_eating",
    equipments: [
        "automatesProgrammables",
        "capteursDeProximite",
        "debitmetresManometresThermometresEtPhmetres",
        "materielEtEquipementsEmballage",
        "redox",
        "pompesEtVannesSanitaires",
        "codeurs",
        "servomoteurs",
        "systemesEtCourroiesConvoyage",
        "variateursDeFrequence",
        "controlesTemperatureEtHumidite",
        "equipementDeSecuriteEtEPI"
    ],
    image: "/images/drinks.jpg",
  },
  {
    name: "industry_textile",
    equipments: [
        "machinesFilatureEtTissage",
        "equipementsTeintureEtFinition",
        "courroiesRoulementsEtRouleaux",
        "metiersTisserEtMachinesJacquard",
        "moteursEtEntrainements",
        "compresseursAirEtPiecesPneumatiques",
        "systemesHydrauliquesEtPompes",
        "equipementDeSecuriteEtEPI"
    ],
    image: "/images/textile.jpg",
  },
  {
    name: "industry_electronic",
    equipments: [
        "equipementsFabricationSemiConducteurs",
        "circuitsImprimesEtComposants",
        "instrumentsEtOutilsSurveillance",
        "alimentationElectriqueEtTransformateurs",
        "connecteursEtInterrupteurs",
        "equipementsTestEtCalibration",
        "systemesRefroidissementEtVentilateurs",
        "equipementDeSecuriteEtEPI"
    
    ],
    image: "/images/electronic.jpg",
  },
  {
    name: "construction",
    equipments: [
        "pieces_pour_machines_lourdes",
        "Equipements_pour_melange_de_beton",
        "Outils_et_outils_a_main_pour_la_construction",
        "Pompes_et_pieces_hydrauliques",
        "Equipements_pour_grues_et_levage",
        "Equipements_de_forage_et_de_creusement_de_tunnels",
        "Machines_et_pieces_de_soudage",
        "Equipement_de_securite_et_EPI"
    ],
    image: "/images/construction.jpg",
  },
  {
    name: "maniere",
    equipments: [
        "pieces_pour_equipements_lourds",
        "systemes_hydrauliques_et_composants",
        "outils_electriques_et_fixations",
        "pieces_pour_excavateurs_et_chargeurs",
        "composants_pour_equipements_de_levage_et_grues",
        "pieces_pour_equipements_de_melange_de_beton",
        "machines_et_pieces_de_soudage",
        "Equipement_de_securite_et_EPI",
    ],
    image: "/images/maniere.jpg",
  },
  {
    name: "marine",
    equipments: [
        "moteurs_et_composants_de_moteurs",
        "systemes_de_propulsion_(p_ex_helices_arbres)",
        "pompes_et_compresseurs",
        "systemes_et_pieces_de_convoyage",
        "equipements_et_electroniques_de_navigation",
        "pieces_de_coque_et_structurelles",
        "systemes_hydrauliques_et_composants",
        "Equipement_de_securite_et_EPI",
    ],
    image: "/images/marine.jpg",
  },
  {
    name: "agricultor",
    equipments: [
        "pieces_et_composants_pour_tracteurs",
        "systemes_et_pompes_d_irrigation",
        "pieces_pour_equipements_de_recolte",
        "outils_pour_le_travail_et_la_preparation_du_sol",
        "equipements_de_fertilisation_et_de_pulverisation",
        "courroies_roulements_et_rouleaux",
        "pieces_pour_equipements_de_semis_et_plantation",
        "Equipement_de_securite_et_EPI",
    ],
    image: "/images/agriculture.jpg",
  },
];
