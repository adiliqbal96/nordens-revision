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
    fullDescription: string;
    benefits: string[];
    process: { title: string; description: string }[];
}

export const servicesData: Record<string, ServiceDetail> = {
    'bogfoering': {
        id: 'bogfoering',
        title: 'Bogføring',
        icon: <BarChart3 size={48} />,
        shortDescription: 'Ved at overlade dit bogholderi til Nordens Revision, kan du fokusere din tid og energi på din forretning.',
        fullDescription: 'Præcis og rettidig bogføring er fundamentet for enhver sund virksomhed. Vi håndterer alt fra bilagshåndtering til momsindberetning, så du altid har et opdateret overblik over din økonomi uden at skulle bekymre dig om det tekniske.',
        benefits: [
            'Digital bilagshåndtering der sparer tid',
            'Sikkerhed for korrekt moms og afgifter',
            'Løbende rapportering af dit resultat',
            'Frigør tid til dine kerneopgaver'
        ],
        process: [
            { title: 'Opstart', description: 'Vi sætter systemerne op og sikrer en glidende overgang.' },
            { title: 'Løbende bogføring', description: 'Vi bogfører dine bilag ugentligt eller månedligt.' },
            { title: 'Afstemning', description: 'Vi sikrer at bank og bogholderi stemmer 100%.' }
        ]
    },
    'loenadministration': {
        id: 'loenadministration',
        title: 'Lønadministration',
        icon: <Calculator size={48} />,
        shortDescription: 'Lønninger er tidskrævende og kritiske. Vi sikrer, at dine medarbejdere får den rette løn til tiden.',
        fullDescription: 'Lønadministration kræver kendskab til komplekse regler, overenskomster og deadlines. Vi sørger for alt fra lønkørsler til indberetning af A-skat, AM-bidrag, pension og feriepenge.',
        benefits: [
            'Garanti for korrekte lønsedler',
            'Overholdelse af alle lovpligtige deadlines',
            'Håndtering af refusioner ved sygdom/barsel',
            'Personlig support til dine lønspørgsmål'
        ],
        process: [
            { title: 'Dataopsamling', description: 'Du sender timer og ændringer til os.' },
            { title: 'Lønkørsel', description: ' vi beregner og klargør lønnen til udbetaling.' },
            { title: 'Indberetning', description: 'Vi indberetter til SKAT, ATP og pensionsselskaber.' }
        ]
    },
    'stiftelse': {
        id: 'stiftelse',
        title: 'Stiftelse',
        icon: <Rocket size={48} />,
        shortDescription: 'Overvejer du at starte egen virksomhed? Vi rådgiver dig om den rette selskabsform.',
        fullDescription: 'Drømmen om egen virksomhed starter med det rette fundament. Vi hjælper dig gennem hele processen fra valg af selskabsform (ApS, A/S, enkeltmandsvirksomhed) til CVR-registrering og bankkontakt.',
        benefits: [
            'Valg af den mest skatteoptimale selskabsform',
            'Hurtig CVR-registrering',
            'Udarbejdelse af stiftelsesdokumenter',
            'Erhvervskonto-assistance'
        ],
        process: [
            { title: 'Rådgivningsmøde', description: 'Vi gennemgår din forretningsplan og vælger form.' },
            { title: 'Dokumentation', description: 'Vi udarbejder vedtægter og stiftelsesdokumenter.' },
            { title: 'Registrering', description: 'Vi anmelder selskabet til Erhvervsstyrelsen.' }
        ]
    },
    'omdannelser': {
        id: 'omdannelser',
        title: 'Omdannelser',
        icon: <ArrowRightLeft size={48} />,
        shortDescription: 'Fra personligt ejet virksomhed til selskab. Vi sikrer en skatteoptimal proces.',
        fullDescription: 'Når virksomheden vokser, kan det ofte svare sig at omdanne en personligt ejet virksomhed til et ApS. Vi hjælper med skattefrie virksomhedsomdannelser, så du minimerer skatten og begrænser din personlige hæftelse.',
        benefits: [
            'Begrænsning af personlig risiko',
            'Skatteoptimering og fleksibilitet',
            'Revision af åbningsbalance',
            'Værdiansættelse af din virksomhed'
        ],
        process: [
            { title: 'Analyse', description: 'Vi beregner om en omdannelse kan betale sig.' },
            { title: 'Vurdering', description: 'Vi udarbejder vurderingsberetning for aktiverne.' },
            { title: 'Gennemførelse', description: 'Vi håndterer alt det juridiske og anmeldelsen.' }
        ]
    },
    'raadgivning': {
        id: 'raadgivning',
        title: 'Rådgivning',
        icon: <Handshake size={48} />,
        shortDescription: 'Vi er din proaktive medspiller, der hjælper med vækst og skatteoptimering.',
        fullDescription: 'Økonomisk rådgivning handler om mere end bare tal. Det handler om din fremtid. Vi rådgiver om alt fra optimering af skat til finansiering af nye investeringer og køb/salg af virksomhed.',
        benefits: [
            'Proaktiv skatteplanlægning',
            'Finansiel sparring til din bankkontakt',
            'Strategisk hjælp til vækst og effektivisering',
            'Generationsskifte-rådgivning'
        ],
        process: [
            { title: 'Statusmøde', description: 'Vi kigger på din nuværende situation.' },
            { title: 'Handlingsplan', description: 'Vi opsætter konkrete mål og strategier.' },
            { title: 'Opfølgning', description: 'Vi sikrer at planen bliver ført ud i livet.' }
        ]
    },
    'regnskaber': {
        id: 'regnskaber',
        title: 'Regnskaber',
        icon: <FileText size={48} />,
        shortDescription: 'Professionelle årsregnskaber der giver overblik og gennemsigtighed.',
        fullDescription: 'Et årsregnskab er virksomhedens ansigt udadtil overfor banker, leverandører og SKAT. Vi udarbejder årsrapporter efter årsregnskabsloven, så du er sikker på korrekthed og lovlighed.',
        benefits: [
            'Overholdelse af alle regnskabsstandarder',
            'Gennemsigtig rapportering til stakeholders',
            'Sikring af korrekte skattemæssige opgørelser',
            'Hurtig indberetning til Erhvervsstyrelsen'
        ],
        process: [
            { title: 'Afstemning', description: 'Vi gennemgår årets bogføring for fejl.' },
            { title: 'Opstilling', description: 'Vi designer regnskabet professionelt.' },
            { title: 'Indsendelse', description: 'Vi håndterer indberetningen digitalt.' }
        ]
    },
    'revision': {
        id: 'revision',
        title: 'Revision',
        icon: <Search size={48} />,
        shortDescription: 'Pålidelig revision der skaber tryghed for dig og din omverden.',
        fullDescription: 'Gennem revision eller review af dit regnskab skaber vi den nødvendige tillid hos dine samarbejdspartnere. Vi gennemgår dine interne processer og kontroller for at sikre, at regnskabet er uden væsentlige fejl.',
        benefits: [
            'Øget troværdighed overfor pengeinstitutter',
            'Gennemgang af interne kontrolsystemer',
            'Sikkerhed mod svig og fejl',
            'Erklæringer der opfylder lovkrav'
        ],
        process: [
            { title: 'Planlægning', description: 'Vi identificerer risikoområder.' },
            { title: 'Substanskontrol', description: 'Vi tjekker dokumentation for store poster.' },
            { title: 'Konklusion', description: 'Vi afgiver vores revisionspåtegning.' }
        ]
    },
    'transportservice': {
        id: 'transportservice',
        title: 'Transportservice',
        icon: <Truck size={48} />,
        shortDescription: 'Specialiseret hjælp til vognmænd med erklæringer til Færdselsstyrelsen.',
        fullDescription: 'Vognmandserhvervet har særlige krav til dokumentation af økonomisk formåen. Vi er eksperter i at udarbejde de specifikke erklæringer, som Færdselsstyrelsen kræver for at opretholde dine tilladelser.',
        benefits: [
            'Hurtig sagsbehandling til Færdselsstyrelsen',
            'Ekspertise i særregler for transportbranchen',
            'Sikring af din økonomiske formåen',
            'Rådgivning om varebils- og vognmandstilladelser'
        ],
        process: [
            { title: 'Gennemgang', description: 'Vi tjekker din seneste egenkapital.' },
            { title: 'Udarbejdelse', description: 'Vi laver erklæringen på det rette layout.' },
            { title: 'Digital signatur', description: 'Vi sender/signer erklæringen til myndighederne.' }
        ]
    }
};
