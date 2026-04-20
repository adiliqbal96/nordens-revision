import React from 'react';
import {
    BarChart3,
    Calculator,
    Rocket,
    ArrowRightLeft,
    Handshake,
    FileText,
    Search,
    Truck
} from 'lucide-react';

export interface ServiceDetail {
    id: string;
    title: string;
    icon: React.ReactNode;
    shortDescription: string;
    heroTitle: string;
    intro: string;
    fullDescription: string;
    fitsYouIf: string[];
    deliverables: string[];
    benefits: string[];
    process: { title: string; description: string }[];
    ctaText: string;
    relatedIds: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
    'bogfoering': {
        id: 'bogfoering',
        title: 'Bogføring',
        icon: <BarChart3 size={48} />,
        shortDescription: 'Ved at overlade dit bogholderi til Nordens Revision, kan du fokusere din tid og energi på din forretning.',
        heroTitle: 'Bogføring der holder styr på tallene, mens du driver forretning',
        intro: 'Løbende bogføring er rygraden i din virksomheds økonomi. Vi sørger for at alle bilag, momsindberetninger og afstemninger er på plads – til tiden og uden fejl. Du får altid et opdateret overblik, og slipper for at bruge din arbejdstid på papirarbejde.',
        fullDescription: 'Præcis og rettidig bogføring er fundamentet for enhver sund virksomhed. Vi håndterer alt fra bilagshåndtering til momsindberetning, så du altid har et opdateret overblik over din økonomi uden at skulle bekymre dig om det tekniske.',
        fitsYouIf: [
            'Du har ikke tid eller lyst til selv at stå for bogholderiet',
            'Du vil have styr på moms, afgifter og indberetninger',
            'Du ønsker løbende overblik over din virksomheds økonomi',
            'Du vil undgå bøder og fejl fra mangelfuld bogføring',
        ],
        deliverables: [
            'Løbende bogføring af alle bilag (ugentligt eller månedligt)',
            'Korrekt momsindberetning og -afregning til SKAT',
            'Bankafstemning og kontoafstemning',
            'Månedlige resultatopgørelser på forespørgsel',
            'Opsætning og vedligeholdelse af digitalt bilagssystem',
        ],
        benefits: [
            'Aldrig mere forsinkede momsindberetninger',
            'Du kender din økonomi i realtid',
            'Færre fejl – og færre ubehagelige overraskelser',
            'Mere tid til det du er god til',
        ],
        process: [
            { title: 'Opstart', description: 'Vi sætter systemerne op, gennemgår dine eksisterende bilag og sikrer en glidende overgang uden tab af data.' },
            { title: 'Løbende bogføring', description: 'Vi bogfører dine bilag ugentligt eller månedligt efter aftale. Du sender blot materialet – resten klarer vi.' },
            { title: 'Afstemning & rapportering', description: 'Hver periode afstemmer vi bank, moms og kreditorer, og du får et klart overblik over periodens resultat.' },
        ],
        ctaText: 'Skal vi tage bogføringen fra dig?',
        relatedIds: ['loenadministration', 'regnskaber', 'raadgivning'],
    },
    'loenadministration': {
        id: 'loenadministration',
        title: 'Lønadministration',
        icon: <Calculator size={48} />,
        shortDescription: 'Lønninger er tidskrævende og kritiske. Vi sikrer, at dine medarbejdere får den rette løn til tiden.',
        heroTitle: 'Korrekt løn til dine medarbejdere – hver gang og til tiden',
        intro: 'Løn er ikke bare et tal på en seddel. Det handler om regler, overenskomster, sygefravær, pension og feriepenge – og alt skal ramme rigtigt. Vi håndterer hele lønprocessen, så du kan fokusere på din drift i stedet for regneark.',
        fullDescription: 'Lønadministration kræver kendskab til komplekse regler, overenskomster og deadlines. Vi sørger for alt fra lønkørsler til indberetning af A-skat, AM-bidrag, pension og feriepenge.',
        fitsYouIf: [
            'Du har ansatte og vil sikre korrekte og rettidige lønsedler',
            'Du ønsker at overholde alle deadlines til SKAT og ATP',
            'Du har komplekse lønforhold med pension, ferie og refusioner',
            'Du vil slippe for det administrative ansvar ved lønadministration',
        ],
        deliverables: [
            'Månedlig lønkørsel og lønsedler til alle medarbejdere',
            'Indberetning af A-skat og AM-bidrag til SKAT',
            'Håndtering af pension, ATP og feriepenge',
            'Refusioner ved barsel og sygefravær',
            'Årsopgørelser og lønstatistik',
        ],
        benefits: [
            'Medarbejdere får korrekt løn til tiden – altid',
            'Du overholder alle lovpligtige deadlines',
            'Komplekse refusioner og refusionskrav håndteres',
            'Personlig support når du har lønspørgsmål',
        ],
        process: [
            { title: 'Dataopsamling', description: 'Du sender os timer, ændringer og tillæg inden lønkørslen. Vi bekræfter modtagelse og giver besked hvis noget mangler.' },
            { title: 'Lønkørsel', description: 'Vi beregner løn, trækker skat, pension og bidrag korrekt og klargør lønsedlerne til udbetaling.' },
            { title: 'Indberetning', description: 'Vi indberetter til SKAT, ATP og pensionsselskaber og sender lønsedler til dine medarbejdere.' },
        ],
        ctaText: 'Skal vi håndtere din lønadministration?',
        relatedIds: ['bogfoering', 'regnskaber', 'raadgivning'],
    },
    'stiftelse': {
        id: 'stiftelse',
        title: 'Stiftelse',
        icon: <Rocket size={48} />,
        shortDescription: 'Overvejer du at starte egen virksomhed? Vi rådgiver dig om den rette selskabsform.',
        heroTitle: 'Kom godt fra start – vi hjælper dig med at stifte din virksomhed',
        intro: 'Valget af selskabsform er en af de vigtigste beslutninger du træffer som iværksætter. Forkert valg kan koste dig unødvendig skat eller personlig hæftelse. Vi rådgiver dig om enkeltmandsvirksomhed, interessentskab eller ApS – og hjælper med alt fra vedtægter til CVR-nummer.',
        fullDescription: 'Drømmen om egen virksomhed starter med det rette fundament. Vi hjælper dig gennem hele processen fra valg af selskabsform (ApS, A/S, enkeltmandsvirksomhed) til CVR-registrering og bankkontakt.',
        fitsYouIf: [
            'Du overvejer at starte din første virksomhed',
            'Du er i tvivl om valg af selskabsform',
            'Du vil have professionel hjælp til stiftelsesdokumenter og CVR-registrering',
            'Du vil minimere risiko og optimere skat fra dag ét',
        ],
        deliverables: [
            'Rådgivning om valg af selskabsform (enkeltmandsvirksomhed, ApS m.fl.)',
            'Udarbejdelse af vedtægter og stiftelsesdokumenter',
            'CVR-registrering hos Erhvervsstyrelsen',
            'Hjælp til oprettelse af erhvervskonto',
            'Skattemæssig gennemgang af din forretningsplan',
        ],
        benefits: [
            'Den rette selskabsform fra start sparer skat',
            'Hurtig og fejlfri registrering hos Erhvervsstyrelsen',
            'Du undgår faldgruber ved forkert struktur',
            'En fast revisor ved din side fra dag ét',
        ],
        process: [
            { title: 'Rådgivningsmøde', description: 'Vi gennemgår din forretningsplan og dine mål, og anbefaler den selskabsform der passer bedst til din situation.' },
            { title: 'Dokumentation', description: 'Vi udarbejder vedtægter, stiftelsesdokumenter og øvrig dokumentation der er nødvendig for registreringen.' },
            { title: 'Registrering', description: 'Vi anmelder selskabet til Erhvervsstyrelsen og sikrer at alt er i orden fra første dag.' },
        ],
        ctaText: 'Klar til at starte din virksomhed?',
        relatedIds: ['omdannelser', 'raadgivning', 'bogfoering'],
    },
    'omdannelser': {
        id: 'omdannelser',
        title: 'Omdannelser',
        icon: <ArrowRightLeft size={48} />,
        shortDescription: 'Fra personligt ejet virksomhed til selskab. Vi sikrer en skatteoptimal proces.',
        heroTitle: 'Fra enkeltmandsvirksomhed til ApS – skattefrit og trygt',
        intro: 'Når din virksomhed vokser og risikoen stiger, er det tid til at tænke i selskabsstruktur. En skattefri virksomhedsomdannelse beskytter din privatøkonomi, reducerer skatten og åbner mulighed for investorer og kompagnoner. Vi guider dig hele vejen.',
        fullDescription: 'Når virksomheden vokser, kan det ofte svare sig at omdanne en personligt ejet virksomhed til et ApS. Vi hjælper med skattefrie virksomhedsomdannelser, så du minimerer skatten og begrænser din personlige hæftelse.',
        fitsYouIf: [
            'Du driver enkeltmandsvirksomhed og overvejer at omdanne til ApS',
            'Du vil begrænse din personlige hæftelse',
            'Du ønsker bedre muligheder for at spare op i virksomheden',
            'Du overvejer at tage en kompagnon eller investor ind',
        ],
        deliverables: [
            'Analyse af fordele og ulemper ved omdannelse i din konkrete situation',
            'Udarbejdelse af vurderingsberetning og åbningsbalance',
            'Gennemførelse af skattefri virksomhedsomdannelse',
            'Registrering af det nye selskab hos Erhvervsstyrelsen',
            'Rådgivning om fremtidig selskabsstruktur og ejerforhold',
        ],
        benefits: [
            'Begrænset personlig hæftelse – beskyt din privatøkonomi',
            'Skatteoptimering ved korrekt tidspunkt for omdannelse',
            'Professionelt udarbejdet åbningsbalance og vurderingsberetning',
            'Fremtidssikret struktur klar til vækst og partnerskaber',
        ],
        process: [
            { title: 'Analyse', description: 'Vi beregner om en omdannelse er fordelagtig for dig, og hvornår det bedst kan betale sig ud fra din skattesituation.' },
            { title: 'Vurdering', description: 'Vi udarbejder vurderingsberetning for aktiverne og åbningsbalance til det nye selskab.' },
            { title: 'Gennemførelse', description: 'Vi håndterer al dokumentation, det juridiske og anmeldelsen til Erhvervsstyrelsen.' },
        ],
        ctaText: 'Skal vi vurdere en omdannelse for dig?',
        relatedIds: ['stiftelse', 'raadgivning', 'regnskaber'],
    },
    'raadgivning': {
        id: 'raadgivning',
        title: 'Rådgivning',
        icon: <Handshake size={48} />,
        shortDescription: 'Vi er din proaktive medspiller, der hjælper med vækst og skatteoptimering.',
        heroTitle: 'Økonomisk rådgivning der gør en forskel for din bundlinje',
        intro: 'Som selvstændig har du brug for en sparringspartner der kender din virksomhed og taler rent ud. Vi rådgiver om skat, selskabsstruktur, budgetter og de vigtige beslutninger der påvirker din økonomi – nu og på sigt.',
        fullDescription: 'Økonomisk rådgivning handler om mere end bare tal. Det handler om din fremtid. Vi rådgiver om alt fra optimering af skat til finansiering af nye investeringer og køb/salg af virksomhed.',
        fitsYouIf: [
            'Du vil optimere din skat som ejer eller selvstændig',
            'Du har brug for sparring om vigtige forretningsbeslutninger',
            'Du ønsker en fast rådgiver der kender din branche og din situation',
        ],
        deliverables: [
            'Løbende skatteplanlægning og optimering',
            'Sparring om selskabsstruktur og ejerforhold',
            'Budgetter og likviditetsprognoser',
            'Finansiel forberedelse til bankgespræch',
        ],
        benefits: [
            'Proaktiv skatteplanlægning – ikke reaktiv brandslukning',
            'En rådgiver der kender din virksomhed og taler klart',
            'Strategisk sparring ved store beslutninger',
        ],
        process: [
            { title: 'Statusmøde', description: 'Vi kigger på din nuværende situation – skat, struktur, økonomi og fremtidsplaner – og identificerer de vigtigste indsatsområder.' },
            { title: 'Handlingsplan', description: 'Vi opsætter konkrete mål og en klar plan for de tiltag der giver mest værdi for netop din virksomhed.' },
            { title: 'Opfølgning', description: 'Vi følger løbende op og tilpasser rådgivningen i takt med at din virksomhed udvikler sig.' },
        ],
        ctaText: 'Lad os tage en snak om din situation',
        relatedIds: ['bogfoering', 'regnskaber', 'revision'],
    },
    'regnskaber': {
        id: 'regnskaber',
        title: 'Årsregnskaber',
        icon: <FileText size={48} />,
        shortDescription: 'Professionelle årsregnskaber der giver overblik og gennemsigtighed.',
        heroTitle: 'Årsregnskaber udarbejdet korrekt og til tiden',
        intro: 'Dit årsregnskab er virksomhedens officielle ansigt – over for banker, investorer, Erhvervsstyrelsen og SKAT. Vi udarbejder årsrapporten præcist efter årsregnskabsloven, sørger for korrekte skatteberegninger og afleverer til tiden. Ingen overraskelser, ingen forsinkelser.',
        fullDescription: 'Et årsregnskab er virksomhedens ansigt udadtil overfor banker, leverandører og SKAT. Vi udarbejder årsrapporter efter årsregnskabsloven, så du er sikker på korrekthed og lovlighed.',
        fitsYouIf: [
            'Du driver ApS og er forpligtet til at indberette årsrapport',
            'Du vil have sikkerhed for at regnskabet er korrekt og lovmedholdigt',
            'Du ønsker en årsrapport der styrker din troværdighed over for banker',
            'Du har brug for hurtig aflevering inden Erhvervsstyrelsens frist',
        ],
        deliverables: [
            'Udarbejdelse af årsrapport efter årsregnskabsloven',
            'Skattemæssig årsopgørelse og selskabsskatteberegning',
            'Indberetning til Erhvervsstyrelsen og SKAT',
            'Balance og resultatopgørelse med noter',
            'Gennemgang og afstemning af årets bogføring',
        ],
        benefits: [
            'Årsrapport afleveret til tiden – ingen bøder',
            'Banker og samarbejdspartnere ser en professionel virksomhed',
            'Korrekte skatteberegninger uden ubehagelige efterregninger',
            'Et regnskab du selv forstår og kan bruge aktivt',
        ],
        process: [
            { title: 'Afstemning', description: 'Vi gennemgår årets bogføring, identificerer fejl og sikrer at bank og bogholderi stemmer til krone og øre.' },
            { title: 'Opstilling', description: 'Vi udarbejder resultatopgørelse, balance og noter samt skattemæssige opgørelser i henhold til årsregnskabsloven.' },
            { title: 'Indsendelse', description: 'Vi indsender årsrapporten digitalt til Erhvervsstyrelsen og sørger for at du modtager en kopi til godkendelse først.' },
        ],
        ctaText: 'Skal vi hjælpe med dit årsregnskab?',
        relatedIds: ['bogfoering', 'revision', 'raadgivning'],
    },
    'revision': {
        id: 'revision',
        title: 'Revision',
        icon: <Search size={48} />,
        shortDescription: 'Din professionelle revisor med kvalitet og tryghed i fokus.',
        heroTitle: 'Revision der skaber tillid – hos banker, myndigheder og investorer',
        intro: 'Revision handler om mere end kontrol. Det handler om troværdighed. En revisorerklæring signalerer til omverdenen, at din virksomheds økonomi er gennemgået af uafhængige øjne. Vi tilbyder revision, erklæringer og revisorpåtegninger til alle typer virksomheder.',
        fullDescription: 'Din professionelle revisor med kvalitet og tryghed i fokus. Sammen opnår vi et samarbejde i verdensklasse, da du altid bliver prioriteret hos os. Nordens Revision ApS tilbyder revisorerklæringer, erklæring om genoptagelse af virksomheder, erklæring om egenkapital, erklæring om virksomhedens budgettet samt erklæring mht. årsregnskaber.',
        fitsYouIf: [
            'Din virksomhed er revisionspligtig',
            'Du skal bruge en revisorerklæring til bank, myndigheder eller samarbejdspartner',
            'Du ønsker uafhængig kontrol af din virksomheds regnskab',
            'Du vil have øget troværdighed over for investorer eller ved salg af virksomhed',
        ],
        deliverables: [
            'Revision af årsregnskab med revisorpåtegning',
            'Erklæring om egenkapital og finansiel formåen',
            'Erklæring om genoptagelse af virksomhed',
            'Budgeterklæringer til banker og finansiering',
            'Revisorerklæringer til myndighedsformål',
        ],
        benefits: [
            'Øget troværdighed hos banker og samarbejdspartnere',
            'Uafhængig kontrol der afslører fejl og mangler',
            'Revisorerklæringer der opfylder alle lovkrav',
            'Tryghed for dig som ejer og ansvarlig',
        ],
        process: [
            { title: 'Planlægning', description: 'Vi identificerer risikoområder og planlægger revisionen med fokus på de poster der kræver dybest kontrol.' },
            { title: 'Substansrevision', description: 'Vi gennemgår dokumentation for de væsentligste poster og kontrollerer interne forretningsgange.' },
            { title: 'Revisorpåtegning', description: 'Vi afgiver vores revisionspåtegning og gennemgår konklusionen med dig, inden årsrapporten indsendes.' },
        ],
        ctaText: 'Brug for en revisorerklæring?',
        relatedIds: ['regnskaber', 'raadgivning', 'transportservice'],
    },
    'transportservice': {
        id: 'transportservice',
        title: 'Transporterklæringer',
        icon: <Truck size={48} />,
        shortDescription: 'Specialiseret hjælp til vognmænd med erklæringer til Færdselsstyrelsen.',
        heroTitle: 'Transporterklæringer til Færdselsstyrelsen – hurtigt og korrekt',
        intro: 'For at opnå eller opretholde vognmandstilladelse kræver Færdselsstyrelsen dokumentation for virksomhedens økonomiske formåen. Det er et præcist formkrav – og vi kender dem til fingerspidserne. Vi leverer de nødvendige revisorerklæringer hurtigt, så du undgår forsinkelser i din ansøgning.',
        fullDescription: 'Vognmandserhvervet har særlige krav til dokumentation af økonomisk formåen. Vi er eksperter i at udarbejde de specifikke erklæringer, som Færdselsstyrelsen kræver for at opretholde dine tilladelser.',
        fitsYouIf: [
            'Du søger om ny vognmandstilladelse, varebilstilladelse eller persontransporttilladelse',
            'Du skal forny en eksisterende tilladelse hos Færdselsstyrelsen',
            'Du har behov for erklæring til godstransport eller persontransport',
            'Du vil have en revisor der kender kravene og leverer til tiden',
        ],
        deliverables: [
            'Revisorerklæring om økonomisk formåen til Færdselsstyrelsen',
            'Erklæringer til godstransport, persontransport og varebil',
            'Gennemgang og validering af egenkapital og regnskabstal',
            'Hurtig sagsbehandling – typisk inden for 1–3 hverdage',
            'Vejledning om krav og dokumentation til ansøgningen',
        ],
        benefits: [
            'Erklæringer der opfylder Færdselsstyrelsens krav præcist',
            'Hurtig levering – vi kender processen og undgår forsinkelser',
            'Specialiseret erfaring med transportbranchens særregler',
            'Rådgivning om varebilstilladelser, persontransport og gods',
        ],
        process: [
            { title: 'Gennemgang', description: 'Vi gennemgår din seneste egenkapital og regnskabstal og vurderer hvad der skal til for at opfylde Færdselsstyrelsens krav.' },
            { title: 'Udarbejdelse', description: 'Vi udarbejder erklæringen på det korrekte format og layout som Færdselsstyrelsen kræver.' },
            { title: 'Digital signatur', description: 'Vi underskriver erklæringen digitalt og sender den direkte til dig, klar til indsendelse med din ansøgning.' },
        ],
        ctaText: 'Brug for en transporterklæring?',
        relatedIds: ['revision', 'regnskaber', 'raadgivning'],
    },
};
