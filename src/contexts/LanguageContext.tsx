import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      challenge: 'Challenge',
      integration: 'Integration',
      privacy: 'Privacy',
      solution: 'Solution',
      requestBtn: 'Get in touch'
    },
    hero: {
      title1: "Monitor regulated",
      title2: "environments using ",
      title3: "audio.",
      title4: "Enable",
      rotatingWords: [
        "passive audio insights.",
        "on-edge ML inference.",
        "targeted monitoring."
      ],
      subtitle: "Supercharge your hardware using Auris to get on-device audio insights for regulated environments. No audio is stored. Just transmit the insight that matters.",
      keywords: ['falls', 'distress', 'screams', 'cries', 'whimpers']
    },
    stats: [
      {
        prefix: '',
        number: 16,
        suffix: '/18',
        label: 'residents unmonitored between scheduled night rounds',
        note: 'CROWN HOUSE CARE, UK — VERIFIED INTERVIEW'
      },
      {
        prefix: '<',
        number: 30,
        suffix: 's',
        label: 'end-to-end response time with Auris versus up to two hours with manual checks',
        note: 'FROM SILENT INCIDENT TO ALERT'
      },
      {
        prefix: '',
        number: 0,
        suffix: '',
        label: 'audio files ever recorded, stored, or transmitted',
        note: 'GDPR COMPLIANT BY ARCHITECTURE — NOT BY POLICY'
      }
    ],
    problem: {
      sectionLabel: 'The problem we solve',
      title1: 'Sound carries information.',
      title2: 'Capturing it carries risk.',
      title3: 'Until now, you had to choose.',
      items: [
        {
          title: 'The fall no button\ncan report',
          body: 'A resident falls at 3am. Unconscious. The call bell is unreachable. The next scheduled check is two hours away.'
        },
        {
          title: 'The blocker that\nkills every pitch',
          body: 'Cloud audio solutions fail where they are needed most. German DPOs, hospital IT, and factory works councils reject them.'
        },
        {
          title: 'The incident with\nno witness',
          body: 'A machine fails. A worker is injured. No alert fires. The liability lands anyway.'
        }
      ]
    },
    how: {
      sectionLabel: 'Integration pipeline',
      title1: 'Total flexibility.',
      title2: 'Zero workflow disruption.',
      stepLabel: 'Step',
      steps: [
        {
          title: 'Your Hardware',
          subtitle: 'IP Cameras, Intercoms, IoT',
          body: 'Auris Edge SDK runs directly on your existing edge devices or gateways. No new microphones to install or maintain.'
        },
        {
          title: 'Auris Edge SDK',
          subtitle: 'Local Inference (< 3s)',
          body: 'Audio is analyzed entirely in memory and immediately discarded. It never touches a disk or network.'
        },
        {
          title: 'Structured Event',
          subtitle: 'JSON Payload',
          body: 'Only when an anomaly (e.g., fall, scream) is detected, Auris generates a lightweight JSON event package.'
        },
        {
          title: 'Your Systems',
          subtitle: 'VMS, Nursecall, SCADA',
          body: 'Events are pushed to your existing infrastructure via webhook or local API. Zero workflow disruption for staff.'
        }
      ]
    },
    privacy: {
      patientSafety: 'PATIENT SAFETY',
      live: 'Live',
      healthcare: 'Healthcare',
      healthcareDesc: 'Patient monitoring without privacy violations. Distress calls, falls, and emergencies, no camera, no audio ever leaves the room.',
      detectedEvents: 'Detected Events',
      sectionLabel: 'Privacy by architecture',
      title: 'GDPR compliance that cannot be violated — because there is nothing to violate.',
      subtitle: 'Audio trust is structurally irrelevant. Data never exists outside the device.',
      points: [
        'Audio processed entirely in device memory — never written to disk',
        'Zero audio transmitted — only a structured event object leaves the device',
        'Works in air-gapped environments — no internet connection required',
        'Passes DPO, works council, and hospital IT review by design'
      ]
    },
    sdk: {
      sectionLabel: 'For builders',
      title1: 'Embed in days.',
      title2: 'Not months.',
      subtitle: 'An SDK for B2B solution providers requiring audio intelligence. Your device already has a microphone. We give it a purpose.',
      codeTitle: 'auris_sdk — example output',
      codeComment: '# Auris fires a structured event — nothing else',
      features: [
        {
          title: 'On-Device SDK',
          body: 'Runs locally on existing hardware. No cloud dependency. GDPR compliant by default.'
        },
        {
          title: 'Healthcare Classification',
          body: 'Recognizes critical acoustic events like falls, distress calls, coughing, alarms, and monitors general activity levels.'
        },
        {
          title: 'Vertical Models',
          body: 'Pre-trained on healthcare, industrial, and facility sounds. Not generic classifiers.'
        },
        {
          title: 'Custom Sounds',
          body: 'Register your own acoustic signatures without retraining the full model.'
        }
      ]
    },
    cta: {
      label: 'Get in touch',
      title: 'Built for environments that cannot afford to get this wrong.',
      button: 'Contact us',
      tag: "Early Stages @ TUM Venture Labs - Currently seeking integration partners"
    },
    contact: {
      label: 'GET IN TOUCH',
      title: 'Let\'s talk about your integration.',
      subtitle: 'Fill out the form below and our engineering team will get back to you within 24 hours.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      companyLabel: 'Company',
      messageLabel: 'Message',
      sendLabel: 'Send Message',
      sendingLabel: 'Sending...',
      successTitle: 'Message Sent',
      successMessage: 'We have received your message and will be in touch shortly.',
      errorMessage: 'Something went wrong. Please try again later.'
    },
    footer: {
      copyright: "© 2026 Auris. All rights reserved."
    }
  },
  de: {
    nav: {
      home: 'Start',
      challenge: 'Herausforderung',
      integration: 'Integration',
      privacy: 'Datenschutz',
      solution: 'Lösung',
      requestBtn: 'Kontakt aufnehmen'
    },
    hero: {
      title1: "Überwachen Sie regulierte",
      title2: "Umgebungen mittels ",
      title3: "Audio.",
      title4: "Ermöglichen Sie",
      rotatingWords: [
        "passive Audio-Analysen.",
        "On-Edge ML Inferenz.",
        "gezielte Überwachung."
      ],
      subtitle: "Erweitern Sie Ihre Hardware mit Auris für geräteinterne Audio-Analysen in regulierten Umfeldern. Es werden keine Audiodaten gespeichert. Übertragen Sie nur die wichtigen Erkenntnisse.",
      keywords: ['Stürze', 'Notlage', 'Schreie', 'Weinen', 'Wimmern']
    },
    stats: [
      {
        prefix: '',
        number: 16,
        suffix: '/18',
        label: 'Bewohner unbeobachtet zwischen geplanten Nachtrunden',
        note: 'CROWN HOUSE CARE, UK — VERIFIZIERTES INTERVIEW'
      },
      {
        prefix: '<',
        number: 30,
        suffix: 's',
        label: 'End-to-End-Reaktionszeit mit Auris im Vergleich zu bis zu zwei Stunden durch manuelle Kontrollen',
        note: 'VOM STILLEN VORFALL ZUM ALARM'
      },
      {
        prefix: '',
        number: 0,
        suffix: '',
        label: 'aufgezeichnete, gespeicherte oder übertragene Audiodateien',
        note: 'DSGVO-KONFORM DURCH ARCHITEKTUR — NICHT DURCH RICHTLINIEN'
      }
    ],
    problem: {
      sectionLabel: 'Unser Lösungsansatz',
      title1: 'Geräusche transportieren Informationen.',
      title2: 'Ihre Erfassung birgt Risiken.',
      title3: 'Bisher mussten Sie sich entscheiden.',
      items: [
        {
          title: 'Der Sturz, den kein Knopf\nmelden kann',
          body: 'Ein Bewohner stürzt um 3 Uhr morgens. Bewusstlos. Der Notrufknopf ist unerreichbar. Die nächste Runde ist erst in zwei Stunden.'
        },
        {
          title: 'Das Hindernis, das\njeden Pitch zerstört',
          body: 'Cloud-Audio-Lösungen scheitern da, wo sie am dringendsten gebraucht werden. Deutsche Datenschutzbeauftragte, Krankenhaus-IT und Betriebsräte blockieren sie.'
        },
        {
          title: 'Der Vorfall\nohne Zeugen',
          body: 'Eine Maschine fällt aus. Ein Arbeiter ist verletzt. Kein Alarm wird ausgelöst. Die Haftung besteht dennoch.'
        }
      ]
    },
    how: {
      sectionLabel: 'Integrationspipeline',
      title1: 'Volle Flexibilität.',
      title2: 'Keine Unterbrechung der Arbeitsabläufe.',
      stepLabel: 'Schritt',
      steps: [
        {
          title: 'Ihre Hardware',
          subtitle: 'IP-Kameras, Intercoms, IoT',
          body: 'Das Auris Edge SDK läuft direkt auf Ihren bestehenden Edge-Geräten oder Gateways. Keine neuen Mikrofone erforderlich.'
        },
        {
          title: 'Auris Edge SDK',
          subtitle: 'Lokale Inferenz (< 3s)',
          body: 'Audio wird vollständig im RAM analysiert und sofort verworfen. Es berührt nie eine Festplatte oder ein Netzwerk.'
        },
        {
          title: 'Strukturiertes Ereignis',
          subtitle: 'JSON-Payload',
          body: 'Nur wenn eine Anomalie (z. B. Sturz, Schrei) erkannt wird, generiert Auris ein ressourcenschonendes JSON-Ereignispaket.'
        },
        {
          title: 'Ihre Systeme',
          subtitle: 'VMS, Schwesternruf, SCADA',
          body: 'Ereignisse werden via Webhook oder lokaler API an Ihre Infrastruktur gesendet. Keine Umgewöhnung für das Personal.'
        }
      ]
    },
    privacy: {
      patientSafety: 'PATIENTENSICHERHEIT',
      live: 'Live',
      healthcare: 'Gesundheitswesen',
      healthcareDesc: 'Patientenüberwachung ohne Verletzung der Privatsphäre. Notrufe, Stürze und Notfälle – Ohne Kameras, und keine Audiodaten verlassen das Zimmer.',
      detectedEvents: 'Erkannte Ereignisse',
      sectionLabel: 'Privacy by architecture',
      title: 'DSGVO-Konformität, die nicht gebrochen werden kann — Weil es nichts zu brechen gibt.',
      subtitle: 'Vertrauen bei Audiodaten ist strukturell irrelevant. Daten existieren nie außerhalb des Geräts.',
      points: [
        'Audio wird komplett im Gerätespeicher verarbeitet — Keine Speicherung auf Festplatten',
        '0 Audiodaten übertragen — Nur ein strukturiertes Event-Objekt verlässt das Gerät',
        'Funktioniert in Air-Gapped-Umgebungen — Keine Internetverbindung erforderlich',
        'Übersteht die DPO-Prüfung, Betriebsräte und Krankenhaus-IT by Design'
      ]
    },
    sdk: {
      sectionLabel: 'Für Entwickler',
      title1: 'Integration in Tagen.',
      title2: 'Nicht in Monaten.',
      subtitle: 'Ein SDK für B2B-Lösungsanbieter, die Audiointelligenz benötigen. Ihr Gerät hat bereits ein Mikrofon. Wir geben ihm einen Zweck.',
      codeTitle: 'auris_sdk — beispielausgabe',
      codeComment: '# Auris sendet nur ein strukturiertes Event — weiter nichts',
      features: [
        {
          title: 'On-Device SDK',
          body: 'Läuft lokal auf bestehender Hardware. Keine Cloud-Abhängigkeit. Standardmäßig DSGVO-konform.'
        },
        {
          title: 'Healthcare-Klassifizierung',
          body: 'Erkennt kritische akustische Vorfälle wie Stürze, Hilferufe, Husten oder Alarme und überwacht das allgemeine Aktivitätslevel.'
        },
        {
          title: 'Vertikale Modelle',
          body: 'Die Modelle sind auf Industrie-, Anlage-, und Krankenhausumgebungen vortrainiert. Keine generischen Klassifikatoren.'
        },
        {
          title: 'Eigene Sounds anlernen',
          body: 'Registrieren Sie Ihre eigenen akustischen Signaturen, ohne das komplette Modell neu trainieren zu müssen.'
        }
      ]
    },
    cta: {
      label: 'Kontakt aufnehmen',
      title: 'Gebaut für Umgebungen, in denen Fehler nicht verzeihbar sind.',
      button: 'Kontaktieren Sie uns',
      tag: "Early Stages @ TUM Venture Labs - Derzeit auf der Suche nach Integrationspartnern"
    },
    contact: {
      label: 'KONTAKT',
      title: 'Lassen Sie uns über Ihre Integration sprechen.',
      subtitle: 'Füllen Sie das untenstehende Formular aus und unser Technikteam wird sich innerhalb von 24 Stunden bei Ihnen melden.',
      nameLabel: 'Name',
      emailLabel: 'E-Mail',
      companyLabel: 'Unternehmen',
      messageLabel: 'Nachricht',
      sendLabel: 'Nachricht senden',
      sendingLabel: 'Wird gesendet...',
      successTitle: 'Nachricht gesendet',
      successMessage: 'Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden.',
      errorMessage: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
    },
    footer: {
      copyright: "© 2026 Auris. Alle Rechte vorbehalten."
    }
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
