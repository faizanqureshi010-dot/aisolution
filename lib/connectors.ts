export type ConnectorStatus = 'Live' | 'In Progress' | 'Coming Soon';

export interface Connector {
  name: string;
  status: ConnectorStatus;
  domain: string;
}

export interface ConnectorCategory {
  category: string;
  connectors: Connector[];
}

export const connectorCategories: ConnectorCategory[] = [
  {
    category: 'Dental PMS',
    connectors: [
      { name: 'Dentrix', status: 'Live', domain: 'dentrix.com' },
      { name: 'Open Dental', status: 'Live', domain: 'opendental.com' },
      { name: 'Curve Dental', status: 'Live', domain: 'curvedental.com' },
      { name: 'Dentrix Ascend', status: 'Live', domain: 'dentrixascend.com' },
      { name: 'Denticon', status: 'Live', domain: 'denticon.com' },
      { name: 'OrthoTrac', status: 'Live', domain: 'carestreamdental.com' },
      { name: 'Dolphin', status: 'Live', domain: 'dolphinimaging.com' },
      { name: 'Akitu One PMS', status: 'Live', domain: 'akitu.io' },
      { name: 'PracticeWorks', status: 'Live', domain: 'carestreamdental.com' },
      { name: 'Eaglesoft', status: 'Live', domain: 'pattersondental.com' },
      { name: 'Easy Dental', status: 'In Progress', domain: 'carestreamdental.com' },
      { name: 'Sensei Cloud', status: 'In Progress', domain: 'carestreamdental.com' },
      { name: 'Oryx Dental PMS', status: 'In Progress', domain: 'oryxdental.com' },
      { name: 'Dentitek', status: 'In Progress', domain: 'dentitek.com' },
      { name: 'DentiMax PMS', status: 'In Progress', domain: 'dentimax.com' },
      { name: 'ClearDent', status: 'In Progress', domain: 'cleardent.com' },
      { name: 'ABELDent', status: 'In Progress', domain: 'abeldent.com' },
      { name: 'XLDent PMS', status: 'In Progress', domain: 'xldent.com' },
      { name: 'Genesis Dental', status: 'In Progress', domain: 'genesisdms.com' },
      { name: 'LiveDDM', status: 'In Progress', domain: 'liveddm.com' },
      { name: 'Practice-Web PMS', status: 'In Progress', domain: 'practice-web.net' },
      { name: 'EVIDENT Dental PMS', status: 'In Progress', domain: 'evidentdental.com' },
      { name: 'ADSTRA Dental Software', status: 'In Progress', domain: 'adstrasoftware.com' },
      { name: 'Kasper Dental PMS', status: 'In Progress', domain: 'kaspersystems.com' },
    ],
  },
  {
    category: 'Medical & Veterinary EHR',
    connectors: [
      { name: 'Oscar Pro', status: 'Live', domain: 'oscarpro.ca' },
      { name: 'eClinicalWorks', status: 'Live', domain: 'eclinicalworks.com' },
      { name: 'Jane App', status: 'Live', domain: 'jane.app' },
      { name: 'iTRUST Optometry EHR', status: 'Live', domain: 'itrustesp.com' },
      { name: 'Juno EMR', status: 'Live', domain: 'junoemr.com' },
      { name: 'Avaros EMR', status: 'Live', domain: 'avaros.com' },
      { name: 'Healthie EHR', status: 'Live', domain: 'gethealthie.com' },
      { name: 'Practice Fusion EHR', status: 'Live', domain: 'practicefusion.com' },
      { name: 'DrChrono EHR', status: 'Live', domain: 'drchrono.com' },
      { name: 'ModMed EHR', status: 'Live', domain: 'modmed.com' },
      { name: 'Tebra EHR', status: 'Live', domain: 'tebra.com' },
      { name: 'PracticeQ', status: 'Live', domain: 'practiceq.com' },
      { name: 'AdvancedMD', status: 'Live', domain: 'advancedmd.com' },
      { name: 'CharmHealth EHR', status: 'Live', domain: 'charmhealth.com' },
      { name: 'Cerbo EHR', status: 'Live', domain: 'cerbo.com' },
      { name: 'Cliniko EHR', status: 'Live', domain: 'cliniko.com' },
      { name: 'NextGen EHR', status: 'Live', domain: 'nextgen.com' },
      { name: 'CureMD EHR', status: 'Live', domain: 'curemd.com' },
      { name: 'NexHealth', status: 'Live', domain: 'nexhealth.com' },
      { name: 'athenaOne EHR', status: 'Live', domain: 'athenahealth.com' },
      { name: 'GoodX Healthcare', status: 'Live', domain: 'goodx.co.za' },
      { name: 'Practice Better EHR', status: 'Live', domain: 'practicebetter.io' },
      { name: 'ChiroTouch EHR', status: 'In Progress', domain: 'chirotouch.com' },
      { name: 'HealthQuest EMR', status: 'In Progress', domain: 'healthquestemr.com' },
      { name: 'OpenEMR', status: 'In Progress', domain: 'open-emr.org' },
      { name: 'Oracle Health EHR', status: 'In Progress', domain: 'oracle.com' },
      { name: 'Elation EHR', status: 'In Progress', domain: 'elationhealth.com' },
      { name: 'Veradigm', status: 'In Progress', domain: 'veradigm.com' },
      { name: 'Epic', status: 'Coming Soon', domain: 'epic.com' },
      { name: 'aCOM RAPID EHR', status: 'Coming Soon', domain: 'acom.com' },
    ],
  },
  {
    category: 'Telephony & PBX',
    connectors: [
      { name: 'Twilio', status: 'Live', domain: 'twilio.com' },
      { name: 'RingCentral', status: 'Live', domain: 'ringcentral.com' },
      { name: 'Vonage', status: 'Live', domain: 'vonage.com' },
      { name: 'Telnyx', status: 'Live', domain: 'telnyx.com' },
      { name: '3CX', status: 'Live', domain: '3cx.com' },
      { name: 'Plivo', status: 'Live', domain: 'plivo.com' },
      { name: 'Bandwidth', status: 'Live', domain: 'bandwidth.com' },
      { name: 'Cytracom', status: 'Live', domain: 'cytracom.com' },
      { name: 'Five9', status: 'In Progress', domain: 'five9.com' },
      { name: 'Talkdesk', status: 'In Progress', domain: 'talkdesk.com' },
      { name: '8x8', status: 'In Progress', domain: '8x8.com' },
      { name: 'Nextiva', status: 'In Progress', domain: 'nextiva.com' },
      { name: 'Zoom Phone', status: 'In Progress', domain: 'zoom.us' },
      { name: 'Dialpad', status: 'In Progress', domain: 'dialpad.com' },
      { name: 'Genesys Cloud', status: 'In Progress', domain: 'genesys.com' },
      { name: 'NICE CXone', status: 'In Progress', domain: 'nice.com' },
      { name: 'Microsoft Teams Phone', status: 'In Progress', domain: 'microsoft.com' },
      { name: 'GoTo Connect', status: 'In Progress', domain: 'goto.com' },
    ],
  },
  {
    category: 'Scheduling & Calendar',
    connectors: [
      { name: 'Cal.com', status: 'Live', domain: 'cal.com' },
      { name: 'Google Calendar', status: 'Live', domain: 'google.com' },
      { name: 'Booked Scheduler', status: 'Live', domain: 'bookedscheduler.com' },
      { name: 'Easy Appointments', status: 'Live', domain: 'easyappointments.org' },
      { name: 'Acuity Scheduling', status: 'In Progress', domain: 'acuityscheduling.com' },
      { name: 'SimplyBook.me', status: 'In Progress', domain: 'simplybook.me' },
      { name: 'Calendly', status: 'Coming Soon', domain: 'calendly.com' },
    ],
  },
  {
    category: 'Hospitality, Salon & Spa',
    connectors: [
      { name: 'Phorest', status: 'Live', domain: 'phorest.com' },
      { name: 'Boulevard', status: 'Live', domain: 'joinblvd.com' },
      { name: 'Meevo', status: 'Live', domain: 'meevo.com' },
      { name: 'Vagaro', status: 'In Progress', domain: 'vagaro.com' },
      { name: 'Mangomint', status: 'In Progress', domain: 'mangomint.com' },
      { name: 'GlossGenius', status: 'In Progress', domain: 'glossgenius.com' },
      { name: 'Fresha', status: 'In Progress', domain: 'fresha.com' },
      { name: 'WellnessLiving', status: 'In Progress', domain: 'wellnessliving.com' },
      { name: 'Zenoti', status: 'In Progress', domain: 'zenoti.com' },
      { name: 'Mindbody', status: 'In Progress', domain: 'mindbodyonline.com' },
    ],
  },
  {
    category: 'Restaurant POS',
    connectors: [
      { name: 'Toast', status: 'In Progress', domain: 'toasttab.com' },
      { name: 'Square POS', status: 'In Progress', domain: 'squareup.com' },
      { name: 'Clover POS', status: 'In Progress', domain: 'clover.com' },
      { name: 'NCR Aloha Cloud', status: 'In Progress', domain: 'ncr.com' },
      { name: 'Oracle Simphony', status: 'In Progress', domain: 'oracle.com' },
    ],
  },
  {
    category: 'Field Service',
    connectors: [
      { name: 'HouseCall Pro', status: 'Live', domain: 'housecallpro.com' },
      { name: 'Service Fusion', status: 'Live', domain: 'servicefusion.com' },
      { name: 'ServiceTitan', status: 'In Progress', domain: 'servicetitan.com' },
      { name: 'Jobber', status: 'In Progress', domain: 'getjobber.com' },
      { name: 'FieldEdge', status: 'In Progress', domain: 'fieldedge.com' },
      { name: 'Workiz', status: 'In Progress', domain: 'workiz.com' },
    ],
  },
  {
    category: 'Legal & Professional Services',
    connectors: [
      { name: 'Clio', status: 'Live', domain: 'clio.com' },
      { name: 'Smokeball', status: 'Live', domain: 'smokeball.com' },
      { name: 'Lawmatics', status: 'In Progress', domain: 'lawmatics.com' },
      { name: 'Filevine', status: 'In Progress', domain: 'filevine.com' },
      { name: 'CosmoLex', status: 'In Progress', domain: 'cosmolex.com' },
    ],
  },
  {
    category: 'Support & Helpdesk',
    connectors: [
      { name: 'Freshdesk', status: 'Live', domain: 'freshdesk.com' },
      { name: 'Zendesk', status: 'Live', domain: 'zendesk.com' },
    ],
  },
];

export const connectorStats = {
  total: connectorCategories.reduce((sum, c) => sum + c.connectors.length, 0),
  live: connectorCategories.reduce((sum, c) => sum + c.connectors.filter((x) => x.status === 'Live').length, 0),
};
