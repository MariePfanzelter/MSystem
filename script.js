// ─────────────────────────────────────────────────────────────
//  INHALTE – hier kannst du alles anpassen.
//  Jede Aufgabe (tasks) braucht eine eindeutige id – darüber
//  wird gespeichert, was schon abgehakt ist. IDs nicht ändern,
//  sonst gehen gespeicherte Häkchen verloren.
//  Links mit url: '' werden als „Link folgt“ angezeigt.
// ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────
//  BIBLIOTHEK – Buchempfehlungen (Onboarding Schritt 3 + Deepdive Mindset).
//  asin = Amazon-Nummer aus dem Link (…/dp/ASIN) – daraus werden Link und Cover gebaut.
// ─────────────────────────────────────────────────────────────

const books = {
  babylon: { title: 'Der reichste Mann von Babylon', author: 'George S. Clason', asin: '3442180023' },
  psychologie: { title: 'Über die Psychologie des Geldes', author: 'Morgan Housel', asin: '3959724438' },
  methode: { title: 'Die 1%-Methode', author: 'James Clear', asin: '3442178584' },
  frog: { title: 'Eat That Frog!', author: 'Brian Tracy', asin: '3967392678' },
  freiheit: { title: 'Der Weg zur finanziellen Freiheit', author: 'Bodo Schäfer', asin: '3423340002' },
  richdad: { title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki', asin: '3690660424' },
  cashflow: { title: 'Cashflow Quadrant', author: 'Robert T. Kiyosaki', asin: '3690660459' },
  wohlstand: { title: 'Wohlstand ohne Stress', author: 'Bodo Schäfer', asin: '342334167X' },
  business: { title: 'Das Business des 21. Jahrhunderts', author: 'Robert T. Kiyosaki', asin: '3959722036' },
  denke: { title: 'Denke nach und werde reich', author: 'Napoleon Hill', asin: '3720527409' },
  gewinner: { title: 'Die Gesetze der Gewinner', author: 'Bodo Schäfer', asin: '3423340487' },
  ichkann: { title: 'Ich kann das', author: 'Bodo Schäfer', asin: '3423351853' },
  hund: { title: 'Ein Hund namens Money', author: 'Bodo Schäfer', asin: '3423349654' },
  rente: { title: 'Rente oder Wohlstand', author: 'Robert T. Kiyosaki', asin: '3959722060' },
  millionaere: { title: 'So denken Millionäre', author: 'T. Harv Eker', asin: '3453685512' },
  reicher: { title: 'Warum die Reichen immer reicher werden', author: 'Robert T. Kiyosaki', asin: '3959720750' }
};

// Leseplan in Stufen. numbered: true = empfohlene Reihenfolge (fortlaufend nummeriert)
const library = [
  {
    title: 'Geld verstehen',
    text: 'Baue zuerst gesunde finanzielle Grundlagen und ein realistisches Verständnis von Geld auf.',
    numbered: true,
    books: [books.babylon, books.psychologie]
  },
  {
    title: 'Gewohnheiten aufbauen',
    text: 'Schaffe Routinen, damit du dein Wissen auch in die Tat umsetzt.',
    numbered: true,
    books: [books.methode, books.frog]
  },
  {
    title: 'Finanzielle Freiheit planen',
    text: 'Entwickle ein Grundverständnis für Vermögensaufbau, Einkommen und finanzielle Ziele.',
    numbered: true,
    books: [books.freiheit, books.richdad, books.cashflow]
  },
  {
    title: 'Mindset vertiefen und Wissen erweitern',
    text: 'Vertiefe die Themen, die dich am meisten interessieren, und setze konkrete Erkenntnisse aus jedem Buch um.',
    books: [
      books.wohlstand,
      books.business,
      books.denke,
      books.gewinner,
      books.ichkann,
      books.hund,
      books.rente,
      books.millionaere,
      books.reicher
    ]
  }
];

const podcastTip =
  'Kein Lesetyp? Viele dieser Bücher gibt es auch als <strong>Hörbuch</strong> – und zu fast jedem findest du Podcastfolgen mit Zusammenfassungen. Perfekt für unterwegs, beim Sport oder beim Kochen.';

const phases = [
  {
    slug: 'ziele',
    title: 'Ziele',
    short: 'Dein Warum finden, SMART Ziele setzen und deine Vision sichtbar machen.',
    icon: 'target',
    intro:
      'Bevor es losgeht, klären wir dein <strong>Warum</strong>. Wer weiß, wofür er etwas tut, bleibt auch dran, wenn es mal anstrengend wird.',
    tasks: [
      { id: 'z1', text: 'Video „Dein Warum“ ansehen & Träume aufschreiben (30 Min.)' },
      { id: 'z2', text: 'Video „Ziele definieren“ ansehen & SMART Ziele formulieren' },
      { id: 'z3', text: 'Visionboard erstellen & an deine Mentorin senden' }
    ],
    sections: [
      {
        label: 'Ziele',
        title: 'Dein Warum',
        text:
          'Schau dir das Video an und nimm dir danach <strong>30 Minuten</strong> Zeit nur für dich. Schreib deine tiefsten Träume und Visionen auf – ohne Filter und ohne „das ist unrealistisch“.',
        tip: 'Tipp: Handy weg, Stift und Papier raus. Frag dich: Wie sieht mein Leben in 5 Jahren aus, wenn alles klappt?',
        links: [{ kind: 'video', label: 'Video: Dein Warum', url: 'https://youtu.be/NcCipJMRw7U' }]
      },
      {
        label: 'Ziele',
        title: 'Definiere deine Ziele',
        text:
          'Schau dir das Video an und nimm dir wieder <strong>30 Minuten</strong>. Schreib Ziele für unterschiedliche Lebensbereiche auf – so konkret wie möglich und mit einem Datum, bis wann du sie erreichen willst.',
        list: [
          '<strong>S</strong>pezifisch – was genau?',
          '<strong>M</strong>essbar – woran erkennst du, dass du es geschafft hast?',
          '<strong>A</strong>ttraktiv – motiviert dich das wirklich?',
          '<strong>R</strong>ealistisch – ambitioniert, aber machbar',
          '<strong>T</strong>erminiert – bis wann?'
        ],
        tip: 'Lebensbereiche, z. B.: Finanzen · Gesundheit · Beziehungen · Persönlichkeit · Business · Erlebnisse',
        links: [
          { kind: 'video', label: 'Video: Ziele definieren', url: 'https://youtu.be/cif-9paADHo' },
          { kind: 'vorlage', label: 'Vorlage SMART Ziele (Canva)', url: 'https://canva.link/9of6od2nzcwcreb' },
          { kind: 'download', label: 'SMART Ziele als PDF', url: 'assets/downloads/smart-ziele.pdf', download: 'SMART Ziele.pdf' }
        ]
      },
      {
        label: 'Ziele',
        title: 'Entwickle deine Vision',
        text:
          'Erstelle z.B. mit Pinterest und Canva ein <strong>Visionboard</strong>, auf dem du deine Ziele und Träume sichtbar machst. Platziere es an einem Ort, an dem du es täglich siehst – z. B. als Handy-Sperrbildschirm oder ausgedruckt am Spiegel. Du kannst dein Visionboard auch ganz klassisch gestalten, indem du Bilder ausdruckst, ausschneidest und zu einer Collage zusammenbastelst – wie du es umsetzt, ist ganz dir selbst überlassen!',
        tip: 'Wenn es fertig ist: Schick dein Visionboard an deine Mentorin.',
        links: [
          { kind: 'link', label: 'Pinterest', url: 'https://de.pinterest.com/search/pins/?q=visionboard%20aesthetic&rs=ac&len=11&source_id=ac_nT5mbzOK&eq=visionboard&etslf=1188' },
          { kind: 'link', label: 'Canva', url: 'https://www.canva.com/s/designs?query=visionboard' }
        ]
      }
    ]
  },

  {
    slug: 'grundlagen',
    title: 'Grundlagen',
    short: 'Alle Apps einrichten und mit Syntra die ersten Signale umsetzen.',
    icon: 'phone',
    intro:
      'Jetzt richtest du alle Apps und Plattformen ein, die du für die nächsten Schritte brauchst, und setzt mit Syntra deine ersten Signale um. Nimm dir dafür eine ruhige halbe Stunde.',
    tasks: [
      { id: 'g1', text: 'Syntra installieren' },
      { id: 'g2', text: 'MetaTrader 5 (MT5) installieren' },
      { id: 'g3', text: 'SageMaster einrichten (und auf dem Home-Bildschirm speichern)' },
      { id: 'g4', text: 'WOW einrichten' },
      { id: 'g6', text: 'DeepSage einrichten' },
      { id: 'g7', text: 'Telegram installieren' },
      { id: 'g5', text: 'Erklärvideos Syntra & MT5 ansehen' },
      { id: 's3', text: 'Erste Signale aus Syntra in MT5 umsetzen' }
    ],
    sections: [
      {
        label: 'Grundlagen',
        title: 'Apps & Plattformen einrichten',
        text: 'Für den Start brauchst du diese Apps. Lade sie direkt herunter und melde dich an.',
        apps: [
          {
            name: 'Syntra',
            logo: 'assets/logos/syntra.jpg',
            desc: 'Signale',
            links: [
              { label: 'Apple', url: 'https://apps.apple.com/ch/app/syntra-market-insights/id6754648008?l=de-DE' },
              { label: 'Android', url: 'https://play.google.com/store/apps/details?id=io.syntra.app' }
            ]
          },
          {
            name: 'MT5',
            logo: 'assets/logos/mt5.jpg',
            desc: 'MetaTrader 5',
            links: [
              { label: 'Apple', url: 'https://apps.apple.com/it/app/metatrader-5/id413251709' },
              { label: 'Android', url: 'https://play.google.com/store/search?q=mt5&c=apps' }
            ]
          },
          {
            name: 'DeepSage',
            logo: 'assets/logos/deepsage.png',
            desc: 'KI-Assistent',
            links: [
              { label: 'Webseite', url: 'https://deepsage.io/chat' },
              { label: 'Apple', url: 'https://apps.apple.com/de/app/deepsage/id6754235082' },
              { label: 'Android', url: 'https://play.google.com/store/apps/details?id=com.deepsage.mobile' }
            ]
          },
          {
            name: 'WOW',
            logo: 'assets/logos/wow.png',
            desc: 'Academy & Kurse',
            links: [
              { label: 'Webseite', url: 'https://wowpowers.com/de' },
              { label: 'Apple', url: 'https://apps.apple.com/de/app/wowlearn-app/id1616151447' }
            ]
          },
          {
            name: 'SageMaster',
            logo: 'assets/logos/sagemaster.png',
            desc: 'Webseite',
            links: [{ label: 'Webseite', url: 'https://sagemaster.io' }]
          },
          {
            name: 'Telegram',
            logo: 'assets/logos/telegram.jpg',
            desc: 'Community & Austausch',
            links: [
              { label: 'Apple', url: 'https://apps.apple.com/de/app/telegram-messenger/id686449807' },
              { label: 'Android', url: 'https://play.google.com/store/apps/details?id=org.telegram.messenger' }
            ]
          }
        ],
        tip:
          'WOW und DeepSage kannst du als App oder im Browser nutzen. Im Browser: <strong>3 Punkte → Teilen → Mehr anzeigen → Zum Home-Bildschirm hinzufügen</strong>. So hast du sie wie eine App auf dem Handy.'
      },
      {
        label: 'Syntra & MT5',
        title: 'Erklärvideos',
        text: 'Mit Syntra bekommst du Signale, die du in MT5 umsetzt. Schau dir beide Tutorials an, damit du dich zurechtfindest, und probiere es danach Schritt für Schritt aus.',
        links: [
          { kind: 'video', label: 'Syntra Tutorial', url: 'https://wowpowers.com/de/academy-player/1bd790c3-906b-410e-aa61-32cbe3ebb1f6' },
          { kind: 'video', label: 'MT5 Tutorial', url: 'https://youtu.be/mRtXre60L-Q?feature=shared' }
        ]
      },
      {
        label: 'MT5',
        title: 'Wichtig bei den Indizes',
        text: 'Je nach Broker heißt derselbe Markt in MT5 unterschiedlich. Nicht wundern, wenn der Name etwas anders angezeigt wird:',
        table: [
          ['DJ30', 'US30 · DJI · WS30 · DowJones · US30.cash · US30m'],
          ['NASUSD', 'NAS100 · USTEC · US100 · NAS100.cash · NAS100m · NASDAQ']
        ]
      }
    ]
  },

  {
    slug: 'mindset',
    title: 'Mindset',
    short: 'Das richtige Mindset aufbauen – mit Podcasts, Büchern und Learnings.',
    icon: 'brain',
    intro:
      'Dein Mindset ist die Grundlage für langfristige Entwicklung. Beschäftige dich regelmäßig mit Geld, Vermögensaufbau, persönlicher Entwicklung und Unternehmertum.',
    tasks: [
      { id: 'm1', text: 'Podcastfolge anhören & 3 Learnings an deine Mentorin senden' },
      { id: 'm2', text: 'Ein Buch auswählen & feste Lese-/Hörzeiten einplanen' }
    ],
    sections: [
      {
        label: 'Mindset',
        title: 'Podcast',
        text: 'Hör dir diese Podcastfolge aufmerksam an. Notiere deine <strong>3 wichtigsten Learnings</strong> und teile sie anschließend mit deiner Mentorin.',
        links: [
          { kind: 'audio', label: 'Podcastfolge auf Spotify', url: 'https://open.spotify.com/episode/3q2O8EFjkStwgKQSIntWZN?si=ODxBpSQZQwuqzQjT-AEN9Q&t=649' }
        ]
      },
      {
        label: 'Mindset',
        title: 'Persönliche Weiterbildung',
        text: 'Wähl dir ein Buch aus – am besten von oben nach unten – und plane feste Zeiten zum Lesen oder Hören ein (z. B. 20 Minuten morgens oder auf dem Arbeitsweg).',
        books: library,
        tip: podcastTip
      },
      {
        label: 'Mindset',
        title: 'Learnings festhalten',
        text: 'Notiere dir beim Lesen oder Hören die wichtigsten Erkenntnisse und frag dich jedes Mal:',
        quote: 'Was kann ich davon konkret in meinem Leben umsetzen?',
        tip: 'Teile deine wichtigsten Learnings regelmäßig mit deiner Mentorin.'
      }
    ]
  },

  {
    slug: 'trading',
    title: 'Basic Onboarding Trading',
    short: 'Trading-Basics, Charts, Orders und Risikomanagement lernen.',
    icon: 'candles',
    intro:
      'Jetzt geht es um die Grundlagen: Wie funktionieren Märkte, Charts und Orders – und wie schützt du dein Kapital? Danach eröffnest du dein Echtgeldkonto und generierst deinen ersten Cashflow.',
    tasks: [
      { id: 'b0', text: 'Signale aus Syntra in MT5 umsetzen' },
      { id: 'b1', text: 'Kurs „Forex Basics“ in WOW abschließen' },
      { id: 'b2', text: 'Anleitungs-Playlist zum Echtgeldkonto ansehen' },
      { id: 'b3', text: 'Bei TradeQuo registrieren' },
      { id: 'b4', text: '$150 einzahlen & MT-Konto verbinden' },
      { id: 'b6', text: 'Erste Copy-Paste-Trades auf dem Echtgeldkonto umsetzen' }
    ],
    sections: [
      {
        label: 'Basics',
        title: 'Forex Basics',
        text: 'Im Kurs lernst du die Trading-Basics: Was ist Forex, wie liest du Charts, welche Ordertypen gibt es und wie funktioniert Risikomanagement (Stop Loss, Lotgröße, Risiko pro Trade).',
        links: [{ kind: 'kurs', label: 'Kurs: Forex Basics (WOW)', url: 'https://wowpowers.com/de/catalog/paths/df507cbf-847e-4291-9550-e153eca9ac27' }]
      },
      {
        label: 'Echtgeldkonto',
        title: 'Switch auf Echtgeldkonto',
        text: 'So eröffnest du dein Echtgeldkonto – Schritt für Schritt:',
        steps: [
          { t: 'Anleitung ansehen', d: 'Die Playlist erklärt die Account-Erstellung und die Einzahlung.', link: { kind: 'video', label: 'Playlist ansehen', url: 'https://youtube.com/playlist?list=PLj8yRdYMLscxU5cB2_B7LbLLi4BUJ14qg&si=TyGYlH8H6DYTQt8v' } },
          { t: 'Registrieren', d: 'Erstelle deinen Account bei TradeQuo über diesen Link.', link: { kind: 'link', label: 'Zur Registrierung', url: 'https://my.tradequo.com/register?referral=01a12fb2-8c01-7354-a122-8298778949b0' } },
          { t: '$150 einzahlen', d: 'Mache eine Einzahlung von <strong>$150</strong> und verbinde dein MT-Konto (MetaTrader).' },
          { t: 'Bonus sichern', d: 'Sobald Konto, Einzahlung und MT-Verbindung stehen: Aktionscode eingeben und Bonus auf die Einzahlung erhalten.', link: { kind: 'link', label: 'tradequo.com/promo', url: 'https://tradequo.com/promo' } },
          { t: 'Loslegen', d: 'Setze Copy-Paste-Trading jetzt auf deinem Echtgeldkonto um und generiere deinen ersten Cashflow.' }
        ]
      }
    ]
  },

  {
    slug: 'management',
    title: 'Time & Money Management',
    short: 'Deine Zeit und dein Geld richtig planen.',
    icon: 'clock',
    intro:
      'Erfolg ist kein Zufall, sondern Planung. In diesem Schritt bringst du Struktur in deine Finanzen und in deine Woche.',
    tasks: [
      { id: 't1', text: 'Teamcall-Aufzeichnung „Money Management“ ansehen' },
      { id: 't2', text: 'Budgetplanung erstellen & Screenshot an deine Mentorin senden' },
      { id: 't3', text: 'Typischen Tag planen & Feedback einholen' },
      { id: 't4', text: 'Vergangene Woche reflektieren' },
      { id: 't5', text: 'Kommende Woche planen (Wochenziel + Zwischenziele)' },
      { id: 't6', text: 'Teamcall Sonntag 21 Uhr im Kalender eintragen' }
    ],
    sections: [
      {
        label: 'Money Management',
        title: 'Dein Budget',
        text: 'Schau dir die Aufzeichnung unseres Teamcalls aufmerksam an. Erstelle danach deine persönliche Budgetplanung nach dem System aus dem Call.',
        tip: 'Mach einen Screenshot deiner Budgetplanung und sende ihn an deine Mentorin.',
        links: [{ kind: 'video', label: 'Teamcall: Money Management', url: 'https://youtu.be/FUGpECrlyug?si=It7KEbLlwGy_GXPL' }]
      },
      {
        label: 'Zeitmanagement',
        title: 'Deine Woche im Griff',
        text: 'Nimm dir <strong>einmal pro Woche</strong> Zeit (am besten Sonntag), um die vergangene Woche zu reflektieren und die kommende zu planen.',
        steps: [
          { t: 'Typischen Tag planen', d: 'Plane einen typischen Tag so genau wie möglich. Nutze den Planer als Hilfe. Schick deiner Mentorin die Planung und hol dir Feedback.' },
          { t: 'Reflektieren', d: 'Was lief gut? Was kannst/solltest du in der kommenden Woche verbessern?' },
          { t: 'Planen', d: 'Plane die kommende Woche und bau die Punkte aus deiner Reflexion ein. Setz dir ein Wochenziel sowie Zwischenziele.' }
        ],
        links: [
          { kind: 'vorlage', label: 'Tagesplaner (Canva)', url: 'https://canva.link/zw1ekibks1okwav' },
          { kind: 'download', label: 'Tagesplaner als PDF', url: 'assets/downloads/daily-planner.pdf', download: 'Daily Planner.pdf' }
        ]
      },
      {
        label: 'Teamcall',
        title: 'Sonntag, 21:00 Uhr',
        text: 'Jeden Sonntag um 21 Uhr ist unser Teamcall. Trag ihn dir als wiederkehrenden Termin mit Erinnerung in deinen Kalender ein.',
        calendar: true
      }
    ]
  },

  {
    slug: 'sagemaster',
    title: 'SageMaster',
    short: 'SGM-Grundlagen lernen und erste Automationen sicher einrichten.',
    icon: 'laptop',
    intro:
      'Mit SageMaster (SGM) automatisierst du dein Trading. Hier lernst du die Plattform kennen und richtest deine ersten Automationen sicher ein.',
    tasks: [
      { id: 'sg1', text: 'In der SageMaster App einloggen' },
      { id: 'sg2', text: 'Kurs „Product Mastery“ abschließen' },
      { id: 'sg3', text: 'Kurs „SGM Fast Track“ abschließen' },
      { id: 'sg4', text: 'Erste Automation einrichten' }
    ],
    sections: [
      {
        label: 'SageMaster',
        title: 'Plattform & Kurse',
        text: 'Logg dich in der SageMaster App ein und arbeite die beiden Kurse in dieser Reihenfolge durch. Richte erst danach deine erste Automation ein – lieber sicher als schnell.',
        steps: [
          { t: 'Einloggen', d: 'Öffne SageMaster im Browser.', link: { kind: 'link', label: 'app.sagemaster.io', url: 'https://app.sagemaster.io/' } },
          { t: 'Product Mastery', d: 'Lerne die Plattform und ihre Funktionen kennen.', link: { kind: 'kurs', label: 'Kurs öffnen', url: 'https://wowpowers.com/de/catalog/paths/2a3565b0-b1fb-434f-86e2-53fb255b69ca' } },
          { t: 'SGM Fast Track', d: 'Der schnelle Weg zu deiner ersten Automation.', link: { kind: 'kurs', label: 'Kurs öffnen', url: 'https://wowpowers.com/de/catalog/paths/e1d77da5-fd92-4024-a34d-e94b43efd9b6' } }
        ]
      }
    ]
  },

  {
    slug: 'aktien',
    title: 'Aktien',
    short: 'Aktien-Basics lernen und dein Aktien-Konto einrichten.',
    icon: 'stocks',
    intro:
      'Neben Forex und Automationen ist der Aktienmarkt ein wichtiger Baustein für deinen langfristigen Vermögensaufbau. Hier lernst du die Grundlagen und eröffnest dein Konto.',
    tasks: [
      { id: 'a1', text: 'Kurs „Stocks Basics“ abschließen' },
      { id: 'a2', text: 'Bei xConnectly registrieren' },
      { id: 'a3', text: 'eToro Account erstellen' },
      { id: 'a4', text: 'Erste Investments umsetzen' }
    ],
    sections: [
      {
        label: 'Aktien · Basics',
        title: 'Stocks Basics',
        text: 'Im Kurs lernst du, wie Aktien funktionieren: Was ist eine Aktie, wie entsteht der Kurs, was sind Dividenden und wie streust du dein Risiko.',
        links: [{ kind: 'kurs', label: 'Kurs: Stocks Basics (WOW)', url: 'https://wowpowers.com/de/catalog/paths/6b425af5-d272-46da-82d4-06cda3d3236d' }]
      },
      {
        label: 'Aktien · Echtgeldkonto',
        title: 'Aktien auf Echtgeldkonto',
        text: 'So eröffnest du dein Aktien-Konto – Schritt für Schritt:',
        steps: [
          { t: 'xConnectly', d: 'Registriere dich über diesen Link.', link: { kind: 'link', label: 'Registrieren', url: 'https://xconnectly.com/portal-signup?ref_id=XOP73UBZRDQT' } },
          { t: 'eToro Account', d: 'Die Anleitung zeigt dir die Account-Erstellung.', link: { kind: 'video', label: 'Anleitung ansehen', url: 'https://youtube.com/playlist?list=PLFRDC10MBhTk&si=cedX7GaSlPiw1nHk' } },
          { t: 'Investieren', d: 'Nutze die Listen von Miguel für deine ersten Investments.' }
        ]
      }
    ]
  },

  {
    slug: 'marketing',
    title: 'Marketing',
    short: 'Die Grundlagen lernen und erste Schritte umsetzen.',
    icon: 'growth',
    intro:
      'Du hast die Grundlagen drauf – jetzt teilst du, was du tust. Marketing heißt hier vor allem: echte Gespräche mit Menschen, die du schon kennst.',
    tasks: [
      { id: 'mk1', text: 'Marketing-Video ansehen & 2 Learnings an deine Mentorin senden' },
      { id: 'mk2', text: 'Kontaktliste schreiben' },
      { id: 'mk3', text: 'Eine Person auswählen, der du mehr erzählen möchtest' }
    ],
    sections: [
      {
        label: 'Marketing',
        title: 'Video & Learnings',
        text: 'Schau dir dieses Video an und schick deiner Mentorin deine <strong>2 biggest Learnings</strong>.',
        links: [{ kind: 'video', label: 'Video ansehen', url: 'https://youtu.be/skDIfXjJi9Y?si=gIHXeq8H18ginkpm' }]
      },
      {
        label: 'Marketing',
        title: 'Deine Kontaktliste',
        text: 'Schreib alle Personen auf, die du kennst – ohne zu bewerten, ob sie „passen“. Familie, Freunde, Arbeit, Sport, Schule, Social Media …',
        tip: 'Danach: Such dir <strong>eine</strong> Person aus, der du gerne mehr vom Business erzählen möchtest, und sprich mit deiner Mentorin über den nächsten Schritt.'
      }
    ]
  }
];

// ─────────────────────────────────────────────────────────────
//  DEEPDIVE – vertiefende Themen nach dem Onboarding.
//  Links mit url: '' erscheinen als „Link folgt“ – einfach ergänzen.
// ─────────────────────────────────────────────────────────────

// Mindset-Regal (Spotify & YouTube) im Deepdive „Trading Mindset“, Vorschaubilder sind hinterlegt
const mindsetMedia = [
  { title: 'Erwartungshaltung, Wiederholung & Verzweiflung auf dem Lernweg', sub: 'NXT Mindset Recording', platform: 'youtube', url: 'https://www.youtube.com/watch?v=kfJ07pFhQ74&list=PLWrJYn6WXxo8&index=32', thumb: 'https://i.ytimg.com/vi/kfJ07pFhQ74/mqdefault.jpg' },
  { title: 'Druck & Anspannung', sub: 'NXT Mindset Recording', platform: 'youtube', url: 'https://www.youtube.com/watch?v=4o3ac3SL_Js&list=PLWrJYn6WXxo8&index=21', thumb: 'https://i.ytimg.com/vi/4o3ac3SL_Js/mqdefault.jpg' },
  { title: 'Vertrauen in das System und sich selbst', sub: 'NXT Mindset Recording', platform: 'youtube', url: 'https://www.youtube.com/watch?v=IN9ypGiex1Q&list=PLWrJYn6WXxo8&index=16', thumb: 'https://i.ytimg.com/vi/IN9ypGiex1Q/mqdefault.jpg' },
  { title: 'Endspurt des Jahres & Zielsetzung', sub: 'NXT Mindset Recording', platform: 'youtube', url: 'https://www.youtube.com/watch?v=B4hZELm_4KM&list=PLWrJYn6WXxo8&index=11', thumb: 'https://i.ytimg.com/vi/B4hZELm_4KM/mqdefault.jpg' },
  { title: 'Zeitmanagement, Prioritäten & Druck', sub: 'NXT Mindset Recording', platform: 'youtube', url: 'https://www.youtube.com/watch?v=43YuoiR4kVk&list=PLWrJYn6WXxo8&index=8', thumb: 'https://i.ytimg.com/vi/43YuoiR4kVk/mqdefault.jpg' },
  { title: 'Marktpsychologie', sub: 'NXT Recording', platform: 'youtube', url: 'https://www.youtube.com/watch?v=tySg5lbKgUg&list=PLWrJYn6WXxo8&index=25', thumb: 'https://i.ytimg.com/vi/tySg5lbKgUg/mqdefault.jpg' },
  { title: 'Verluste laufen lassen und Gewinne begrenzen', sub: 'Trading Psychologie · Mate Radovcic · Folge 2', platform: 'spotify', url: 'https://open.spotify.com/episode/1pmyIQnv84R9gWehl6H2bO?si=3sYwrfQiSzWamUwby2RfGA&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1f2f59fff8f7f1fb570815981d' },
  { title: 'Fünf Tipps für dein Trading Mindset', sub: 'Trading Psychologie · Mate Radovcic · Folge 4', platform: 'spotify', url: 'https://open.spotify.com/episode/6ByZCYE9EzhBAI5F9EBXXW?si=6C8cB2jYQlCL7MU3XqPD9A&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1f2f59fff8f7f1fb570815981d' },
  { title: 'Mit Verlusten im Trading richtig umgehen', sub: 'Trading Psychologie · Mate Radovcic · Folge 6', platform: 'spotify', url: 'https://open.spotify.com/episode/5I0Na5c0kpWYd3m7hc0iQ2?si=h7nO_yrDTEamvKwopMxavg&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1f2f59fff8f7f1fb570815981d' },
  { title: 'Was ein profitables Trading Mindset ausmacht', sub: 'Trading Psychologie · Mate Radovcic · Folge 21', platform: 'spotify', url: 'https://open.spotify.com/episode/7vZ5E4hbkNCINV8NxEsN2r?si=oxzwiAqMSBmcux5MFzQOqw&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1f2f59fff8f7f1fb570815981d' },
  { title: 'Die Emotion Wut im Trading', sub: 'Trading Psychologie · Mate Radovcic · Folge 29', platform: 'spotify', url: 'https://open.spotify.com/episode/7zhgilydv32zZwe30EKsAx?si=eMVCQLWHQOG0hNmJG4skMg&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1f2f59fff8f7f1fb570815981d' },
  { title: 'Overtrading vermeiden und Erfolge erzielen', sub: 'Trading Psychologie · Mate Radovcic · Folge 46', platform: 'spotify', url: 'https://open.spotify.com/episode/333vm0ofnLsonDfqoGmCDO?si=fh0T1ef9T2ehLl8uSqULtA&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1fb6af435593bed0fdc0a8e83d' },
  { title: 'Red Pill – The Greatest Wealth Transfer', sub: 'Dini', platform: 'youtube', url: 'https://www.youtube.com/live/lDzByjd7ufw?si=Q8xNvEIg0QEEM5EJ', thumb: 'https://i.ytimg.com/vi/lDzByjd7ufw/mqdefault.jpg' },
  { title: 'Mind Engineering – Der ultimative Lifehack', sub: 'Dini', platform: 'youtube', url: 'https://www.youtube.com/watch?v=G60N83uJzB0&list=PLOV3T1PWFD78&index=6', thumb: 'https://i.ytimg.com/vi/G60N83uJzB0/mqdefault.jpg' },
  { title: 'Technische Analyse', sub: 'Podcast', platform: 'spotify', url: 'https://open.spotify.com/show/6BKm4ItWELp3YBIv3ERS2T?si=6Ba8f0HKR0eSTSTF1WtLpA&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab6766630000db5b7f96176ba507dc8b526d4240' },
  { title: 'Der Aktien- und Börsenführerschein', sub: 'Podcast', platform: 'spotify', url: 'https://open.spotify.com/show/0fhTeZMpJcW9wDCWgTcBmC?si=nAdSBG-5TtirwASXYElU6A&utm_source=copy-link', thumb: 'https://image-cdn-ak.spotifycdn.com/image/ab6766630000db5b8e03720103d3ef19a72f6674' },
  { title: 'Best Loser Wins the Trades', sub: 'Podcast', platform: 'spotify', url: 'https://open.spotify.com/show/7nLxyuIPM7XSUjhFUuLPVf?si=OgmwJ4xAQH69nj59fUxp2A&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab6766630000db5bb5498c03bd58f2a5505864ba' },
  { title: 'Tradingpsychologie für Einsteiger', sub: 'Podcast', platform: 'spotify', url: 'https://open.spotify.com/show/5aOHDxzQROViObhH9J0XNY?si=wI4MUfNXQ_yOl-tjDQ_IMA&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab6766630000db5b2332a97e1149c5454396ce14' },
  { title: 'Die Vorbereitung auf meinen Handelstag', sub: 'TF Trading Podcast · Folge 1', platform: 'spotify', url: 'https://open.spotify.com/episode/2TS5SzzrkeTtOCV5pEwzyY?si=M-PRxgenRnKLsH03T2TH0A&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1f29fc826b079e47937a4088ce' },
  { title: 'Was sind FOMO-Trades?', sub: 'TF Trading Podcast · Folge 18', platform: 'spotify', url: 'https://open.spotify.com/episode/0vCjmr6FsLSr1DUErlN1C4?si=5n3xeIPHSgiLBH6cQltnnA&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1f3d049a1deee3d260aa40f3dc' },
  { title: 'Warum Trader scheitern', sub: 'TF Trading Podcast · Folge 35', platform: 'spotify', url: 'https://open.spotify.com/episode/7zQbLIM4dDX9b1T90pyFLG?si=8LqumlzHT7iRPZfcWzHaaQ&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1f32a37d72e51c6ef982406219' },
  { title: 'Hoffen und Bangen im Trading', sub: 'TF Trading Podcast · Folge 78', platform: 'spotify', url: 'https://open.spotify.com/episode/3O2CYOU5Aus44kCbFUFjzm?si=odAl5aS-Shi0jvsEbAsksQ&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1f2e87aba2eb39f055653cc71b' },
  { title: 'Mehr Verluste als Gewinne', sub: 'TF Trading Podcast · Folge 94', platform: 'spotify', url: 'https://open.spotify.com/episode/0TVzr2Gaf56ciOPJnAOdzB?si=Vx36gW_RSfy-MAQK0CR6LA&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1fc90b09a366bbb3d10a14edc2' },
  { title: 'Trading lernen', sub: 'Podcast', platform: 'spotify', url: 'https://open.spotify.com/show/4wzVJms8iV0UkVYhZTlFqr?si=1f726c84a4ce40c9', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1fcb35c334119b9246ea6e98b7' },
  { title: 'Mind, Money, Markets', sub: 'Podcast', platform: 'spotify', url: 'https://open.spotify.com/show/2QeVozCFJPRTgsLKCqOrvL?si=d4afe8f7e6674bb4', thumb: 'https://image-cdn-ak.spotifycdn.com/image/ab6772ab000015be8397315364cd4ebe37405e94' },
  { title: 'Mach sie sprachlos', sub: 'Podcast', platform: 'spotify', url: 'https://open.spotify.com/show/08QsRIX18sQDqKT4HBbRK0?si=98560bfa56d34bf3', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1fedc12e486cfc8eb7ffe0dad0' },
  { title: 'Mindset Academy', sub: 'Podcast', platform: 'spotify', url: 'https://open.spotify.com/show/3tluTBQWpreJvc9SveBlKJ?si=5d8106796e5a4349', thumb: 'https://image-cdn-ak.spotifycdn.com/image/ab67656300005f1f94797588e0153c38f62b218e' },
  { title: 'Mindset und Erfolg', sub: 'Podcast', platform: 'spotify', url: 'https://open.spotify.com/show/30kDhPLA07xD79wP8e0FIi?si=e0e17d7661984951', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab6772ab000015be906129425cd1369388b4ba1f' },
  { title: 'Erfolgsmindset', sub: 'Podcast', platform: 'spotify', url: 'https://open.spotify.com/show/3CUhzp0R6HHFrJaSN9bcON?si=00c7a7563f0c4538', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1ff339788cb05ccb0d414ac91d' },
  { title: 'So entwickelst du mentale Stärke', sub: 'Video', platform: 'youtube', url: 'https://www.youtube.com/watch?v=ZdKlYcRqsIw', thumb: 'https://i.ytimg.com/vi/ZdKlYcRqsIw/mqdefault.jpg' },
  { title: 'Jesse Livermore\'s Secret to Mastering Trading Patience', sub: 'Video', platform: 'youtube', url: 'https://www.youtube.com/watch?v=zIfkgC7ZPiQ', thumb: 'https://i.ytimg.com/vi/zIfkgC7ZPiQ/mqdefault.jpg' },
  { title: 'Überraschende Ratschläge vom weltweit führenden Trading-Psychologen', sub: 'Video', platform: 'youtube', url: 'https://youtu.be/K2e1Sdpfv7s?is=A-RNwgm7bFG3h84Q', thumb: 'https://i.ytimg.com/vi/K2e1Sdpfv7s/mqdefault.jpg' },
  { title: 'Trading in the Zone Workshop – Teil 4', sub: 'Mark Douglas', platform: 'youtube', url: 'https://youtu.be/n5u1KHVO2xs?is=ydqHs9zUlCFT9sxN', thumb: 'https://i.ytimg.com/vi/n5u1KHVO2xs/mqdefault.jpg' },
  { title: 'Master Trading Psychology in under 83 Minutes', sub: 'Rande Howell', platform: 'youtube', url: 'https://youtu.be/ICeHYLSXgYI', thumb: 'https://i.ytimg.com/vi/ICeHYLSXgYI/mqdefault.jpg' },
  { title: 'Tradingpsychologie', sub: 'Podcast', platform: 'spotify', url: 'https://open.spotify.com/show/71erinWtai5hXgkQkNfZrr?si=TQsoc7q8SEmDVnxBiziqsA&utm_source=copy-link', thumb: '' },
  { title: 'The Daily Trading Coach', sub: 'Podcast', platform: 'spotify', url: 'https://open.spotify.com/show/1NiH0Cz85fqtt1blB6ZqKU?si=N_VYvF8vRhSs30lSLSqMIw&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab6766630000db5b3713d5174640a5aa6bd86b1b' },
  { title: 'Mindful Money Education', sub: 'M2B · Podcast', platform: 'spotify', url: 'https://open.spotify.com/show/4r6UR9BMRyXaxlhCNffLJl?si=6JfL-E0RRVOOr-dv7xdD4w&utm_source=copy-link', thumb: 'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1f886fcb95acf3ab4ced58e399' },
  { title: 'Red Pill – The Changing World Order', sub: 'Dini', platform: 'youtube', url: 'https://www.youtube.com/watch?v=5afppOiW6yY&list=PLMu3cxCkMqgw', thumb: 'https://i.ytimg.com/vi/5afppOiW6yY/mqdefault.jpg' },
  { title: 'Mind Engineering – Kleines Konto traden?', sub: 'Dini', platform: 'youtube', url: 'https://www.youtube.com/watch?v=MehoYT00mD4&list=PLOV3T1PWFD78&index=5', thumb: 'https://i.ytimg.com/vi/MehoYT00mD4/mqdefault.jpg' },
  { title: 'Mind Engineering – Durch Verluste profitabel?!', sub: 'Dini', platform: 'youtube', url: 'https://www.youtube.com/watch?v=MsAxrfPtl9A&list=PLOV3T1PWFD78&index=4', thumb: 'https://i.ytimg.com/vi/MsAxrfPtl9A/mqdefault.jpg' },
  { title: 'Mind Engineering – Trading Zone', sub: 'Dini', platform: 'youtube', url: 'https://www.youtube.com/watch?v=7_iLLGBj4Aw&list=PLOV3T1PWFD78&index=3', thumb: 'https://i.ytimg.com/vi/7_iLLGBj4Aw/mqdefault.jpg' },
  { title: 'Mind Engineering – Vorsicht Tradingfalle', sub: 'Dini', platform: 'youtube', url: 'https://www.youtube.com/watch?v=tkExm3x87mE&list=PLOV3T1PWFD78&index=2', thumb: 'https://i.ytimg.com/vi/tkExm3x87mE/mqdefault.jpg' },
  { title: 'Mind Engineering – Welcher Händler bist du?', sub: 'Dini', platform: 'youtube', url: 'https://www.youtube.com/watch?v=_8DekN2BpH8&list=PLOV3T1PWFD78&index=1', thumb: 'https://i.ytimg.com/vi/_8DekN2BpH8/mqdefault.jpg' }
];

// Mindset-Bibliothek in Kategorien (Titel müssen exakt zu mindsetMedia passen)
const pickMedia = (...titles) =>
  titles.map((t) => {
    const m = mindsetMedia.find((x) => x.title === t);
    if (!m) console.warn('Mindset-Titel nicht gefunden:', t);
    return m;
  }).filter(Boolean);

const mindsetGroups = [
  {
    id: 'nxt-recordings',
    icon: 'video',
    title: 'NXT Mindset-Recordings',
    hint: 'Hier am besten starten',
    text: 'Aufzeichnungen aus unseren Sessions – genau zu den Themen, die dir auf dem Lernweg begegnen: Erwartungen, Druck, Vertrauen und Zeitmanagement.',
    items: pickMedia(
      'Erwartungshaltung, Wiederholung & Verzweiflung auf dem Lernweg',
      'Druck & Anspannung',
      'Vertrauen in das System und sich selbst',
      'Zeitmanagement, Prioritäten & Druck',
      'Endspurt des Jahres & Zielsetzung',
      'Marktpsychologie'
    )
  },
  {
    id: 'episoden',
    icon: 'audio',
    title: 'Trading-Psychologie in einzelnen Folgen',
    hint: 'Kurz & konkret',
    text: 'Ausgewählte Podcast-Folgen zu Verlusten, Wut, FOMO, Overtrading und der Vorbereitung auf deinen Handelstag – ideal für unterwegs.',
    items: pickMedia(
      'Fünf Tipps für dein Trading Mindset',
      'Mit Verlusten im Trading richtig umgehen',
      'Verluste laufen lassen und Gewinne begrenzen',
      'Was ein profitables Trading Mindset ausmacht',
      'Die Emotion Wut im Trading',
      'Overtrading vermeiden und Erfolge erzielen',
      'Die Vorbereitung auf meinen Handelstag',
      'Was sind FOMO-Trades?',
      'Warum Trader scheitern',
      'Hoffen und Bangen im Trading',
      'Mehr Verluste als Gewinne'
    )
  },
  {
    id: 'videos',
    icon: 'kurs',
    title: 'Videos & Workshops',
    hint: 'Zum Zurücklehnen',
    text: 'Längere Vorträge und Workshops – von Mark Douglas bis Rande Howell. Perfekt für einen ruhigen Abend.',
    items: pickMedia(
      'So entwickelst du mentale Stärke',
      'Trading in the Zone Workshop – Teil 4',
      'Master Trading Psychology in under 83 Minutes',
      'Überraschende Ratschläge vom weltweit führenden Trading-Psychologen',
      'Jesse Livermore\'s Secret to Mastering Trading Patience'
    )
  },
  {
    id: 'trading-podcasts',
    icon: 'candles',
    title: 'Trading-Podcasts',
    hint: 'Zum Dranbleiben',
    text: 'Ganze Podcast-Reihen rund um Trading, Börse und Tradingpsychologie, die du dauerhaft abonnieren kannst.',
    items: pickMedia(
      'Mindful Money Education',
      'Tradingpsychologie für Einsteiger',
      'Best Loser Wins the Trades',
      'The Daily Trading Coach',
      'Tradingpsychologie',
      'Mind, Money, Markets',
      'Trading lernen',
      'Technische Analyse',
      'Der Aktien- und Börsenführerschein'
    )
  },
  {
    id: 'dini-redpill',
    icon: 'video',
    title: 'Dini – Red Pill',
    hint: 'Dini',
    text: 'Dinis Red-Pill-Reihe über Geld, Vermögen und die großen Veränderungen in der Welt.',
    items: pickMedia('Red Pill – The Greatest Wealth Transfer', 'Red Pill – The Changing World Order')
  },
  {
    id: 'dini-mindset',
    icon: 'brain',
    title: 'Dini – Mindset (Mind Engineering)',
    hint: 'Dini',
    text: 'Dinis Mind-Engineering-Reihe zu Verlusten, Tradingfallen, kleinen Konten und der Trading Zone.',
    items: pickMedia(
      'Mind Engineering – Der ultimative Lifehack',
      'Mind Engineering – Kleines Konto traden?',
      'Mind Engineering – Durch Verluste profitabel?!',
      'Mind Engineering – Trading Zone',
      'Mind Engineering – Vorsicht Tradingfalle',
      'Mind Engineering – Welcher Händler bist du?'
    )
  },
  {
    id: 'erfolg',
    icon: 'target',
    title: 'Mindset & Erfolg',
    hint: 'Über das Trading hinaus',
    text: 'Podcasts für deine persönliche Entwicklung: Motivation, Selbstvertrauen und ein starkes Erfolgsmindset.',
    items: pickMedia('Mindset Academy', 'Mindset und Erfolg', 'Erfolgsmindset', 'Mach sie sprachlos')
  }
];

const mGroup = (id) => mindsetGroups.find((g) => g.id === id);

// Trading Mindset: Umschalter Podcasts / YouTube / Bücher, darunter Kategorien
const mindsetTabs = [
  {
    id: 'podcasts',
    label: 'Podcasts',
    icon: 'audio',
    intro: 'Perfekt für unterwegs, beim Sport oder beim Kochen – einfach auf Spotify anhören.',
    groups: [mGroup('episoden'), mGroup('trading-podcasts'), mGroup('erfolg')]
  },
  {
    id: 'youtube',
    label: 'YouTube-Videos',
    icon: 'video',
    intro: 'Recordings aus unseren Sessions und längere Vorträge – am besten in Ruhe anschauen.',
    groups: [mGroup('nxt-recordings'), mGroup('dini-redpill'), mGroup('dini-mindset'), { ...mGroup('videos'), title: 'Vorträge & Workshops' }]
  },
  {
    id: 'buecher',
    label: 'Bücher',
    icon: 'book',
    intro: 'Zum Bestellen und Lesen – ein Klick auf das Cover öffnet das Buch auf Amazon.',
    shelves: [
      {
        title: 'Trading-Psychologie',
        text: 'Die Klassiker, wenn es um Disziplin, Verluste und das richtige Mindset beim Trading geht.',
        books: [
          { title: 'Trading in the Zone', author: 'Mark Douglas', asin: '0735201447' },
          { title: 'Best Loser Wins', author: 'Tom Hougaard', asin: '0857198224' },
          { title: 'Tradingpsychologie', author: 'Norman Welz', asin: '3898797007' },
          { title: 'Market Wizards', author: 'Jack D. Schwager', asin: '1118273052' },
          { title: 'Tradingpsychologie als Schlüssel zum Erfolg', author: 'Andrew Aziz & Mike Baehr', asin: '3959724373' }
        ]
      },
      {
        title: 'Mindset & Gewohnheiten',
        text: 'Grundlagen für ein starkes Mindset – auch über das Trading hinaus.',
        books: [books.denke, books.methode, books.psychologie, books.richdad]
      }
    ]
  }
];

// Persönlichkeitsentwicklung: Podcasts & YouTube nach Themen
const peGroups = [
  {
    id: 'pe-pers',
    title: 'Persönlichkeit & Selbstvertrauen',
    tab: 'podcasts',
    items: [
      {
        title: 'Der Mindset Podcast',
        sub: 'Christian Bischoff',
        platform: 'spotify',
        url: 'https://open.spotify.com/show/2kg4qXNobBcz1kmn6tABBC',
        thumb: 'https://i.scdn.co/image/ab6765630000ba8afd98aee8ab46b79f9bbbe5f4'
      },
      {
        title: 'happy, holy & confident',
        sub: 'Laura Malina Seiler',
        platform: 'spotify',
        url: 'https://open.spotify.com/show/4j5GudABjEkHhAsQDyggbN',
        thumb: 'https://i.scdn.co/image/ab6765630000ba8ae51bdfa1697b3eeffb13ff74'
      },
      {
        title: 'selbstvertraut wachsen',
        sub: 'Mindset & Erfolg für Frauen',
        platform: 'spotify',
        url: 'https://open.spotify.com/show/2yH1dEWHwW1BKmLmHkh58a',
        thumb: 'https://i.scdn.co/image/ab6765630000ba8a7d57c8c3c46de74bc28d71f8'
      }
    ]
  },
  {
    id: 'pe-geld',
    title: 'Geld & Vermögen',
    tab: 'podcasts',
    items: [
      {
        title: 'Finanzfluss Podcast',
        sub: 'Geldanlage & Finanzen',
        platform: 'spotify',
        url: 'https://open.spotify.com/show/6YkiGMyRqAkoKISsTu96bo',
        thumb: 'https://i.scdn.co/image/ab6765630000ba8a1eaede4b70dd6697c0e108b0'
      },
      {
        title: 'Own it. Der Female Finance Podcast',
        sub: 'Madame Moneypenny',
        platform: 'spotify',
        url: 'https://open.spotify.com/show/4ii7YHR5Q7t7gbqFgv5Fpe',
        thumb: 'https://i.scdn.co/image/ab6765630000ba8a7d85753c7d5d7a5779adb60d'
      }
    ]
  },
  {
    id: 'pe-brand',
    title: 'Vermarktung & Personal Branding',
    tab: 'podcasts',
    items: [
      {
        title: 'Be Your Brand',
        sub: 'Personal Branding & PR',
        platform: 'spotify',
        url: 'https://open.spotify.com/show/6fk0gp8CFL0J7oWsYtsxtK',
        thumb: 'https://i.scdn.co/image/ab6765630000ba8ab72ab45e4f8e748643058314'
      },
      {
        title: 'MARKE MENSCH',
        sub: 'Sichtbarkeit & Personal Branding',
        platform: 'spotify',
        url: 'https://open.spotify.com/show/1dOpJ8MaUzHtJ295dF317Q',
        thumb: 'https://i.scdn.co/image/ab6765630000ba8ad3e1941cd9a3986874e78cbc'
      },
      {
        title: 'Teaching Socials Podcast',
        sub: 'Social Media aufbauen',
        platform: 'spotify',
        url: 'https://open.spotify.com/show/1SWpmnHiypPIYcMRdDuYOe',
        thumb: 'https://i.scdn.co/image/ab6765630000ba8a78d6bd5726e4dbd89c1c74d3'
      }
    ]
  },
  {
    id: 'pe-yt-pers',
    title: 'Persönlichkeit & Selbstvertrauen',
    tab: 'youtube',
    items: [
      {
        title: 'Selbstvertrauen',
        sub: 'Christian Bischoff',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=hwII4hceGq8',
        thumb: 'https://i.ytimg.com/vi/hwII4hceGq8/mqdefault.jpg'
      },
      {
        title: 'Wie du über dich denkst, bestimmt dein ganzes Leben',
        sub: 'Christian Bischoff im Gespräch',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=eIbm9F0MwLU',
        thumb: 'https://i.ytimg.com/vi/eIbm9F0MwLU/mqdefault.jpg'
      },
      {
        title: 'Du bist für dein Glück verantwortlich',
        sub: 'Christian Bischoff',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=Zlr_QiuAZcI',
        thumb: 'https://i.ytimg.com/vi/Zlr_QiuAZcI/mqdefault.jpg'
      },
      {
        title: 'Wirklichkeit verändern',
        sub: 'Vera F. Birkenbihl',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=rQ5YYZo9WEc',
        thumb: 'https://i.ytimg.com/vi/rQ5YYZo9WEc/mqdefault.jpg'
      },
      {
        title: 'Was tun, wenn die Energie fehlt',
        sub: 'Vera F. Birkenbihl',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=FbjFmL4t-3w',
        thumb: 'https://i.ytimg.com/vi/FbjFmL4t-3w/mqdefault.jpg'
      }
    ]
  },
  {
    id: 'pe-yt-geld',
    title: 'Geld & finanzielle Freiheit',
    tab: 'youtube',
    items: [
      {
        title: 'Die 6 Lektionen über Geld',
        sub: 'Bodo Schäfer',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=bMDdSQ5hx3U',
        thumb: 'https://i.ytimg.com/vi/bMDdSQ5hx3U/mqdefault.jpg'
      },
      {
        title: 'Durchbruch zum finanziellen Erfolg',
        sub: 'Bodo Schäfer',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=D-m37gPhMLE',
        thumb: 'https://i.ytimg.com/vi/D-m37gPhMLE/mqdefault.jpg'
      },
      {
        title: 'Der Weg zur finanziellen Freiheit',
        sub: 'Dirk Kreuter trifft Bodo Schäfer',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=0WTibUnbY40',
        thumb: 'https://i.ytimg.com/vi/0WTibUnbY40/mqdefault.jpg'
      },
      {
        title: 'Finanzielle Intelligenz ist der Schlüssel zu echter Freiheit',
        sub: 'Bodo Schäfer im Gespräch',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=YQM9mj9lvvU',
        thumb: 'https://i.ytimg.com/vi/YQM9mj9lvvU/mqdefault.jpg'
      }
    ]
  },
  {
    id: 'pe-yt-mot',
    title: 'Motivation & Erfüllung',
    tab: 'youtube',
    items: [
      {
        title: 'Motivation und 1000 Geschichten',
        sub: 'Lars Amend · live',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=rWQabdz6O7k',
        thumb: 'https://i.ytimg.com/vi/rWQabdz6O7k/mqdefault.jpg'
      },
      {
        title: 'So findest du wahre Erfüllung im Leben',
        sub: 'Lars Amend',
        platform: 'youtube',
        url: 'https://www.youtube.com/watch?v=ACGUgyhxKOk',
        thumb: 'https://i.ytimg.com/vi/ACGUgyhxKOk/mqdefault.jpg'
      }
    ]
  }
];

const peTabs = [
  {
    id: 'pe-podcasts',
    label: 'Podcasts',
    icon: 'audio',
    intro: 'Für unterwegs, beim Sport oder beim Kochen – über Persönlichkeit, Selbstvertrauen, Geld und Vermarktung.',
    groups: peGroups.filter((g) => g.tab === 'podcasts')
  },
  {
    id: 'pe-youtube',
    label: 'YouTube-Videos',
    icon: 'video',
    intro: 'Vorträge und Gespräche zum Zurücklehnen – am besten mit Notizblock.',
    groups: peGroups.filter((g) => g.tab === 'youtube')
  },
  {
    id: 'pe-buecher',
    label: 'Bücher',
    icon: 'book',
    intro: 'Zum Bestellen und Lesen – am besten von oben nach unten. Ein Klick auf das Cover öffnet das Buch auf Amazon.',
    shelves: library
  }
];

const deepdive = [
  {
    slug: 'nxt',
    title: 'NXT System',
    short: 'In 4 Stufen von NXT Basic bis NXT Master – starte mit Basic.',
    icon: 'rocket',
    intro:
      'Das NXT System durchläufst du in vier Stufen: <strong>Basic, Advanced, Expert und Master</strong>. Hier startest du mit NXT Basic.',
    tasks: [
      { id: 'd-nx2', text: 'Der Telegram-Gruppe beitreten' },
      { id: 'd-nx-cal', text: 'Live-Sessions & Community Call im Kalender eintragen' },
      { id: 'd-nx-fx', text: 'Forex Basics ansehen oder auffrischen', optional: true },
      { id: 'd-nx1', text: 'NXT Basic Academy anschauen' },
      { id: 'd-nx-tmd', text: 'Beschäftige dich mit deinem Trading Mindset' },
      { id: 'd-nx-br', text: 'Broker- & MetaTrader-Tutorial anschauen' },
      { id: 'd-nx-af', text: 'Auffrischungskurse 1–3 anschauen' },
      { id: 'd-nx-tm', text: 'Trademanagement anschauen' },
      { id: 'd-nx-tj', text: 'Reflektion & Tradejournal anschauen' },
      { id: 'd-nx-nt', text: 'Tradejournal-Vorlage kopieren & nutzen' },
      { id: 'd-nx-pa', text: 'Price Action anschauen' },
      { id: 'd-nx-ie', text: 'Investmententscheidungen anschauen' }
    ],
    sections: [
      {
        label: 'Dein NXT-Weg',
        title: 'Vier Stufen',
        levels: [
          { name: 'NXT Basic', text: 'Grundlagen, Community & erstes Trademanagement', current: true },
          { name: 'NXT Advanced', text: 'Wenn du Basic sicher beherrschst' },
          { name: 'NXT Expert', text: 'Nach Advanced' },
          { name: 'NXT Master', text: 'Der Master-Bereich' }
        ]
      },
      {
        label: 'NXT Basic · Start',
        title: 'Telegram einrichten',
        text: 'Unsere Community läuft über <strong>Telegram</strong>. Installiere die App, melde dich an und starte über den Button den <strong>WOW-Bot</strong>. Dort bekommst du alle Infos, kannst Fragen stellen und dich mit der Community austauschen.',
        links: [
          { kind: 'link', label: 'WOW-Bot in Telegram starten', url: 'https://t.me/wowprod_bot?start=804930de1df4ae40dc2badd6f2cab6c4' }
        ]
      },
      {
        label: 'NXT Basic · Organisatorisches',
        title: 'Live-Sessions & Recordings',
        text: 'Trag dir die Termine direkt in deinen Kalender ein – der Zoom-Link ist im Termin hinterlegt. Falls du mal nicht live dabei sein kannst, findest du alle Aufzeichnungen in der Recording-Playlist.',
        sessions: [
          { title: 'Live-Sessions', when: 'Di, Mi & Do · 20:00 Uhr', zoom: 'https://us06web.zoom.us/j/87124426892', ics: 'nxt-live' },
          { title: 'Community Call (Basic)', when: 'Jeden Sonntag · 18:00 Uhr', zoom: 'https://us06web.zoom.us/j/6878216076', ics: 'nxt-community' }
        ],
        links: [{ kind: 'video', label: 'Recording-Playlist', url: 'https://www.youtube.com/playlist?list=PLWrJYn6WXxo8' }]
      },
      {
        label: 'NXT Basic · Grundlagen',
        title: 'Forex Basics',
        text: 'Das sind die Grundlagen, die du für NXT kennen solltest: Währungspaare, Pips, Lotgrößen, Ordertypen und Risikomanagement.',
        tip: 'Du hast die Forex Basics schon im Onboarding angeschaut? Dann kannst du diesen Punkt überspringen – oder du frischst dein Wissen gerne noch einmal auf.',
        links: [{ kind: 'kurs', label: 'Forex Basics (WOW)', url: 'https://wowpowers.com/de/catalog/paths/df507cbf-847e-4291-9550-e153eca9ac27' }]
      },
      {
        label: 'NXT Basic · Academy',
        title: 'NXT Basic Academy',
        text: 'Dein Herzstück für NXT Basic: Arbeite die Academy in WOW Schritt für Schritt durch. Alle weiteren Videos auf dieser Seite vertiefen die Inhalte daraus.',
        links: [{ kind: 'kurs', label: 'NXT Basic Academy (WOW)', url: 'https://wowpowers.com/de/catalog/paths/cd474d3a-fa8e-4c10-8267-1c9cf1a49a83' }]
      },
      {
        label: 'NXT Basic · Mindset',
        title: 'Mindset',
        text: 'Unterschätze das Thema Mindset nicht: Die meisten Trader scheitern nicht an der Strategie, sondern an Emotionen wie Ungeduld, Angst oder Gier. Je früher du dich damit auseinandersetzt, desto ruhiger und disziplinierter tradest du.',
        tip: 'Alle Mindset-Recordings, Podcasts und Videos findest du gesammelt im Deepdive „Trading Mindset“. Nimm dir regelmäßig Zeit dafür – am besten parallel zu NXT Basic.',
        links: [{ kind: 'link', label: 'Zum Deepdive „Trading Mindset“', url: '#/deepdive/trading-mindset' }]
      },
      {
        label: 'NXT Basic · Technik',
        title: 'Broker & MetaTrader',
        text: 'Bevor du tradest, musst du dein Werkzeug kennen: Wie funktioniert ein Broker, was ist der Unterschied zwischen Demo- und Echtgeldkonto – und wie bedienst du den MetaTrader?',
        videos: [
          { title: 'Broker Tutorial', desc: 'Broker, Demokonto & Echtgeldkonto – was du wissen musst.', url: 'https://wowpowers.com/de/catalog/paths/50fa583d-5433-49a1-8506-ef9b95535482', wow: true },
          { title: 'MetaTrader Tutorial', desc: 'Die wichtigsten Funktionen im MT: Charts, Ordertypen und Positionen.', url: 'https://www.youtube.com/watch?v=EzYGVjDUyYY&list=PLWrJYn6WXxo8&index=6' }
        ]
      },
      {
        label: 'NXT Basic · Wiederholung',
        title: 'Auffrischungskurse',
        text: 'Drei Sessions, die das komplette NXT-Basic-Wissen kompakt zusammenfassen – ideal zum Wiederholen oder wenn du neu einsteigst.',
        videos: [
          { title: 'Auffrischungskurs 1', desc: 'Warum das NXT-System? Sequenzen, Korrektur- & Ziellevel, BLASH, TimeFrames.', url: 'https://www.youtube.com/watch?v=sjyZCg7ppgE&list=PLWrJYn6WXxo8&index=40' },
          { title: 'Auffrischungskurs 2', desc: 'Die Regeln einer Sequenz und der Weg von der Analyse zum ersten Trade.', url: 'https://www.youtube.com/watch?v=pkTtHflG0Qg&list=PLWrJYn6WXxo8&index=39' },
          { title: 'Auffrischungskurs 3', desc: 'Price Action Deep Dive: Trends, Liquidität, Support & Resistance, HTL.', url: 'https://www.youtube.com/watch?v=y9Ipb4uFIC0&list=PLWrJYn6WXxo8&index=38' }
        ]
      },
      {
        label: 'NXT Basic · Trading',
        title: 'Trademanagement',
        text: 'Stop Loss, Take Profit, CRV und Risikomanagement: Hier lernst du die Regeln, nach denen du Trades eröffnest, absicherst und schließt.',
        videos: [
          { title: 'Trademanagement – Theorie', desc: 'Begriffe, Strategien (Multiple, Adaptive, OneTrade) und Regeln.', url: 'https://www.youtube.com/watch?v=CZJdDCeUXQA&list=PLWrJYn6WXxo8&index=35' },
          { title: 'Trademanagement – Praxis', desc: 'Die Theorie direkt am Chart angewendet.', url: 'https://www.youtube.com/watch?v=QW4e4gbX5ic&list=PLWrJYn6WXxo8&index=34' }
        ]
      },
      {
        label: 'NXT Basic · Trading',
        title: 'Reflektion & Tradejournal',
        text: 'Kein Trader ohne Journal: Es liefert dir die Antworten auf deine Probleme. Hier lernst du, was vor, während und nach dem Trade ins Journal gehört und wie du richtig reflektierst.',
        videos: [
          { title: 'Reflektion & Tradejournal – Teil 1', desc: 'Warum reflektieren – und mit welchem Ziel?', url: 'https://www.youtube.com/watch?v=Qi258i-uj7Q&list=PLWrJYn6WXxo8&index=26' },
          { title: 'Reflektion & Tradejournal – Teil 2', desc: 'Wie und wann du reflektierst: rational und emotional.', url: 'https://www.youtube.com/watch?v=9P3YezOPNKk&list=PLWrJYn6WXxo8&index=24' },
          { title: 'Tradejournal in der Praxis', desc: 'So sieht ein ausgefülltes Journal konkret aus.', url: 'https://www.youtube.com/watch?v=UTH_cqVuCZ8&list=PLWrJYn6WXxo8&index=10' }
        ]
      },
      {
        label: 'NXT Basic · Vorlage',
        title: 'Deine Trading-Journal-Vorlage (Notion)',
        text: 'Damit du direkt loslegen kannst, gibt es eine fertige Journal-Vorlage in Notion – inklusive täglicher Vorbereitung. So kopierst du sie in deinen eigenen Account:',
        steps: [
          { t: 'Vorlage öffnen', d: 'Öffne die Vorlage über den Button.', link: { kind: 'vorlage', label: 'Notion-Vorlage öffnen', url: 'https://held-donkey-370.notion.site/Trading-Journal-Template-35cd394a4320807d845fdb78e5b63bae' } },
          { t: 'Duplizieren', d: 'Klick oben rechts im markierten Bereich auf das Symbol zum <strong>Duplizieren</strong> (siehe Bild).' },
          { t: 'Anmelden & speichern', d: 'Melde dich bei Notion an (kostenlos) und wähle deinen Workspace – die Vorlage gehört jetzt dir und du kannst sie frei bearbeiten.' }
        ],
        guide: { src: 'assets/notes/notion-vorlage-kopieren.png', title: 'So kopierst du die Vorlage in dein Notion' }
      },
      {
        label: 'NXT Basic · Trading',
        title: 'Price Action',
        text: 'Lies den Markt wie ein Buch: Was sind attraktive Preise, welche Marktmuster gibt es und wie erstellst du mit der Top-Down-Analyse deinen Fahrplan?',
        videos: [{ title: 'Price Action', desc: 'Preisbildung, attraktive Preise, Marktmuster und Liquidität.', url: 'https://www.youtube.com/watch?v=nPenMmilIiI&list=PLWrJYn6WXxo8&index=2' }]
      },
      {
        label: 'NXT Basic · Trading',
        title: 'Investmententscheidungen',
        text: 'Welche Setups tradest du – und welche lässt du weg? Spread, Slippage, Klumpenrisiko und wie du mit einer Rangliste die besten Wendebereiche auswählst.',
        videos: [
          { title: 'Investmententscheidungen, Spread & Slippage', desc: 'Kosten verstehen und bessere Entscheidungen treffen.', url: 'https://www.youtube.com/watch?v=Pl4GfgWcZOk&list=PLWrJYn6WXxo8&index=9' }
        ]
      },
      {
        label: 'NXT Basic · Notizen',
        title: 'Session-Notizen',
        text: 'Die Notizen aus unseren Sessions auf einen Blick – perfekt zum Wiederholen. Tipp auf ein Bild, um es groß anzusehen.',
        notes: [
          { src: 'assets/notes/auffrischungskurs-1.png', title: 'Auffrischungskurs I' },
          { src: 'assets/notes/auffrischungskurs-2.png', title: 'Auffrischungskurs II' },
          { src: 'assets/notes/auffrischungskurs-3-priceaction.png', title: 'Auffrischungskurs III · Price Action' },
          { src: 'assets/notes/trademanagement.png', title: 'Trademanagement Deepdive' },
          { src: 'assets/notes/tradingjournal.png', title: 'Tradingjournal: vor, während & nach dem Trade' },
          { src: 'assets/notes/reflektion-journalfuehrung.png', title: 'Trading Reflektion & Journalführung' },
          { src: 'assets/notes/priceaction-attraktive-preise.png', title: 'Price Action: attraktive Preise & Marktmuster' },
          { src: 'assets/notes/hold-the-lines.png', title: 'Hold the Lines / Fake Hold the Lines' },
          { src: 'assets/notes/top-down-analyse.png', title: 'Top-Down-Analyse' },
          { src: 'assets/notes/klumpenrisiko-chart.png', title: 'Klumpenrisiko & Rangliste' },
          { src: 'assets/notes/klumpenrisiko-rangliste.png', title: 'Rangliste erstellen' },
          { src: 'assets/notes/rangliste-1.png', title: 'Rangliste – Beispiel Teil 1' },
          { src: 'assets/notes/rangliste-2.png', title: 'Rangliste – Beispiel Teil 2' }
        ]
      },
      {
        label: 'Wie geht es weiter?',
        title: 'Deine nächste Stufe',
        text: 'Wann du in die nächste Stufe gehst, entscheidest du selbst. Unsere Empfehlung: Bleib ruhig <strong>mehrere Wochen oder sogar Monate in NXT Basic</strong>, bis du die Themen wirklich verstanden hast – zum Beispiel, bis du in den Live-Sessions alle Fragen für dich selbst richtig beantworten kannst.',
        tip: 'Es ist kein Wettrennen. Ein sicheres Fundament in Basic macht Advanced, Expert und Master deutlich leichter.',
        links: [
          { kind: 'kurs', label: 'NXT Advanced (WOW)', url: 'https://wowpowers.com/de/catalog/paths/27ae94cb-dab6-4acd-bb22-d319a4e742f0' },
          { kind: 'kurs', label: 'NXT Expert (WOW)', url: 'https://wowpowers.com/de/catalog/paths/2b7fd036-eaff-495f-8411-fb018aa172fc' }
        ]
      }
    ]
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    short: 'Social Media, Traumteampartner und deine eigene Story.',
    icon: 'growth',
    intro:
      'Dieses Business ist ein People Business: Beziehungen aufbauen ist dein Job. Hier startest du mit Social Media, definierst deine Traumteampartner und lernst, deine eigene Geschichte zu erzählen.',
    tasks: [
      { id: 'd-mk-gp', text: 'Erstelle einen Gameplan mit deiner Mentorin' },
      { id: 'd-mk-v1', text: 'TL Factory: Launch ansehen' },
      { id: 'd-mk-v2', text: 'TL Factory: Tag 2 ansehen' },
      { id: 'd-mk-v3', text: 'TL Factory: Tag 3 ansehen' },
      { id: 'd-mk-v4', text: 'TL Factory: Tag 4 ansehen' },
      { id: 'd-mk-v5', text: 'TL Factory: Tag 5 ansehen' },
      { id: 'd-mk-v6', text: 'TL Factory: Tag 6 ansehen' },
      { id: 'd-mk-v7', text: 'TL Factory: Tag 7 ansehen' },
      { id: 'd-mk-tt', text: 'Definiere deinen Traumteampartner' },
      { id: 'd-mk-fl', text: 'Folge den Top-Leadern auf Instagram' },
      { id: 'd-mk-7g', text: 'Schreib 7 Gründe auf, warum eine Person bei dir starten sollte' },
      { id: 'd-mk-vid', text: 'Nimm dein Vorstellungsvideo auf' },
      { id: 'd-mk-hl', text: 'Erstelle dein erstes „What I Do“-Highlight auf Instagram' }
    ],
    sections: [
      {
        label: 'Marketing · Schritt 1',
        title: 'Social Media Start',
        text: 'Schau dir in der kommenden Woche jeden Tag ein Video an, mach dir Notizen und setz die Aufgabe am Ende des Videos direkt um. Sobald du ein Video öffnest, wird das nächste freigeschaltet.',
        sequence: [
          { id: 'd-mk-v1', title: 'TL Factory · Launch', url: 'https://www.youtube.com/watch?v=vWUaJ1bsiHA&list=PLK_jGjE3kb4E' },
          { id: 'd-mk-v2', title: 'TL Factory · Tag 2', url: 'https://www.youtube.com/watch?v=Ep-d19Op6dw&list=PLK_jGjE3kb4E' },
          { id: 'd-mk-v3', title: 'TL Factory · Tag 3', url: 'https://www.youtube.com/watch?v=0f6hHXrwC5E&list=PLK_jGjE3kb4E' },
          { id: 'd-mk-v4', title: 'TL Factory · Tag 4', url: 'https://www.youtube.com/watch?v=H9k6J24RbLc&list=PLK_jGjE3kb4E' },
          { id: 'd-mk-v5', title: 'TL Factory · Tag 5', url: 'https://www.youtube.com/watch?v=gAnXhX4D7Pc&list=PLK_jGjE3kb4E' },
          { id: 'd-mk-v6', title: 'TL Factory · Tag 6', url: 'https://www.youtube.com/watch?v=3VvSn631Szs&list=PLK_jGjE3kb4E' },
          { id: 'd-mk-v7', title: 'TL Factory · Tag 7', url: 'https://www.youtube.com/watch?v=zcLlGQa7Omg&list=PLK_jGjE3kb4E' }
        ]
      },
      {
        label: 'Marketing · Schritt 2',
        title: 'Dein Traumteampartner',
        text: 'Geh in dich und überleg genau, mit welchen Menschen du gerne arbeiten möchtest. Frag dich auch: Wäre ich mit dieser Person befreundet? Arbeite mit Menschen, mit denen du gerne Zeit verbringst.',
        list: [
          'Welche <strong>Altersgruppe</strong> soll mein Team haben?',
          'Möchte ich eher mit <strong>Frauen, Männern oder beiden</strong> aufbauen?',
          'Welche <strong>Stärken</strong> haben meine Traumteampartner?',
          'Was <strong>zeichnet sie aus</strong>?',
          'Wie ist ihr <strong>Verhalten</strong>? Sind sie aktiv in den Gruppen, setzen ihre Aufgaben um, sind bei jedem Teamcall dabei?'
        ]
      },
      {
        label: 'Marketing · Schritt 3',
        title: 'Folge unseren Top-Leadern',
        text: 'Diese Personen stehen dort, wo du hinwillst. Folge ihnen ab sofort und schau täglich rein – so erweiterst du deinen „Average of 5“.',
        apps: [
          { name: 'Lorena May', desc: '@lorenamay__', links: [{ label: 'Instagram', url: 'https://www.instagram.com/lorenamay__' }] },
          { name: 'Miguel Vees', desc: '@miguelvees', links: [{ label: 'Instagram', url: 'https://www.instagram.com/miguelvees' }] },
          { name: 'Marie Schürer', desc: '@marie_schuerer', links: [{ label: 'Instagram', url: 'https://www.instagram.com/marie_schuerer' }] },
          { name: 'Marie Gottwald', desc: '@marieeegottwald', links: [{ label: 'Instagram', url: 'https://www.instagram.com/marieeegottwald' }] }
        ]
      },
      {
        label: 'Marketing · Schritt 4',
        title: '7 Gründe, bei dir zu starten',
        text: 'Schreib dir 7 Gründe auf, warum eine Person genau bei dir starten sollte. Du hast gute Eigenschaften, um neuen Menschen beim Aufbau ihres Business zu helfen – manchmal muss man sie sich nur bewusst machen.',
        tip: 'Wenn du deine Stärken kennst, steigt ganz automatisch auch dein Selbstwertgefühl.'
      },
      {
        label: 'Marketing · Schritt 5',
        title: 'Dein Vorstellungsvideo',
        text: 'Nimm ein Video auf, als würdest du eine Sprechstory für Instagram machen – du musst es nicht hochladen. Am Anfang fühlt es sich komisch an, aber je öfter du in die Kamera sprichst, desto natürlicher wird es. Sprich mindestens 2 Minuten über:',
        steps: [
          { t: 'Wer du bist', d: 'Stell dich kurz vor.' },
          { t: 'Dein Problem', d: 'Welches Problem hattest du vor dem Business?' },
          { t: 'Die Lösung', d: 'Welche Lösung hast du durch das Business gefunden – und welche Möglichkeiten bietet es?' },
          { t: 'Dein Leben heute', d: 'Wie hat sich dein Leben seitdem verändert?' }
        ]
      },
      {
        label: 'Marketing · Schritt 6',
        title: 'Dein „What I Do“-Highlight',
        text: 'Erstelle dein „What I Do“-Highlight mit der Canva-Vorlage und lade es auf Instagram hoch:',
        steps: [
          { t: 'Vorlage öffnen', d: 'Öffne die Canva-Vorlage.', link: { kind: 'vorlage', label: 'Canva-Vorlage', url: 'https://www.canva.com/design/DAHCV98VAXk/Vo3p_VkGdphlTJ2Bo8zRcA/edit?utm_content=DAHCV98VAXk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' } },
          { t: 'Kopie erstellen', d: 'Tippe oben auf die <strong>3 Punkte</strong> und dann auf <strong>Kopie erstellen</strong>.' },
          { t: 'Dein Bild einfügen', d: 'Tippe unten links auf <strong>Ersetzen</strong> und füge ein Bild von dir ein.' },
          { t: 'Hochladen', d: 'Lade die Bilder als Highlight „What I Do“ auf Instagram hoch.' }
        ],
        tip: 'Wenn du alle Aufgaben bis hierhin erledigt hast, wirst du in unsere <strong>exklusive Marketing-Gruppe</strong> aufgenommen.'
      },
      {
        label: 'Marketing · Inspiration',
        title: 'Virale Videos',
        text: 'Lass dich inspirieren: Diese TikToks und Reels haben besonders gut funktioniert. Schau dir an, wie sie aufgebaut sind – Hook, Story, Call-to-Action.',
        media: [
          { title: '„Ich hab manifestiert“', sub: '@marie_schuerer', platform: 'tiktok', url: 'https://vm.tiktok.com/ZN8ek88gY/' },
          { title: 'Virales TikTok 2', sub: 'TikTok', platform: 'tiktok', url: 'https://vm.tiktok.com/ZGd967utn/' },
          { title: 'Virales TikTok 3', sub: 'TikTok', platform: 'tiktok', url: 'https://vm.tiktok.com/ZGd96oYU3/' },
          { title: 'Virales TikTok 4', sub: 'TikTok', platform: 'tiktok', url: 'https://vm.tiktok.com/ZGd96G61U/' },
          { title: 'Virales TikTok 5', sub: 'TikTok', platform: 'tiktok', url: 'https://vm.tiktok.com/ZGd96Vobj/' },
          { title: 'Virales TikTok 6', sub: 'TikTok', platform: 'tiktok', url: 'https://vm.tiktok.com/ZGd963XVS/' },
          { title: 'Virales TikTok 7', sub: 'TikTok', platform: 'tiktok', url: 'https://vm.tiktok.com/ZGd964Puy/' },
          { title: 'Virales TikTok 8', sub: '@fenja_doerr', platform: 'tiktok', url: 'https://vm.tiktok.com/ZGdxekMwG/' },
          { title: 'Virales TikTok 9', sub: '@fenja_doerr', platform: 'tiktok', url: 'https://vm.tiktok.com/ZGdxe2jCD/' },
          { title: 'Virales TikTok 10', sub: '@fenja_doerr', platform: 'tiktok', url: 'https://vm.tiktok.com/ZGdxefHVe/' },
          { title: 'Virales Reel 1', sub: 'Instagram', platform: 'instagram', url: 'https://www.instagram.com/reel/Da7ORiYgw38/' },
          { title: 'Virales Reel 2', sub: 'Instagram', platform: 'instagram', url: 'https://www.instagram.com/reel/DaxOiXVtiwJ/' },
          { title: 'Virales Reel 3', sub: 'Instagram', platform: 'instagram', url: 'https://www.instagram.com/reel/DaxIwFOAohw/' },
          { title: 'Virales Reel 4', sub: 'Instagram', platform: 'instagram', url: 'https://www.instagram.com/reel/Daqt42fA6Tn/' }
        ]
      }
    ]
  },
  {
    slug: 'sagemaster-dd',
    title: 'SageMaster',
    short: 'Trading mit SageMaster automatisieren – Forex & Crypto.',
    icon: 'laptop',
    intro:
      'Mit SageMaster (SGM) automatisierst du dein Trading. Oben findest du die Grundlagen der Plattform, darunter die Inhalte für <strong>Forex</strong> und <strong>Crypto</strong>.',
    tasks: [
      { id: 'd-sf0', text: 'Bei SageMaster einloggen' },
      { id: 'd-sm-pm', text: 'Product Mastery anschauen' },
      { id: 'd-sf2', text: 'SGM Fast Track anschauen' },
      { id: 'd-sf4', text: 'Forex: SageMaster-Forex-Kurs abschließen' },
      { id: 'd-sf-str', text: 'Forex: Strategien verknüpfen' },
      { id: 'd-sc1', text: 'Crypto: Onboarding-Playlist von Aycan anschauen' },
      { id: 'd-sc4', text: 'Crypto: Deepdives von Aycan anschauen' },
      { id: 'd-sc-demo', text: 'Crypto: Strategien verknüpfen (Demo)' },
      { id: 'd-sc2', text: 'Crypto: Börse mit SGM verknüpfen' },
      { id: 'd-sc3', text: 'Crypto: Echtgeld-Automationen einrichten' }
    ],
    sections: [
      {
        label: 'SageMaster',
        title: 'Plattform & Kurse',
        text: 'Logg dich in der SageMaster App ein und arbeite die beiden Kurse in dieser Reihenfolge durch. Richte erst danach deine erste Automation ein – lieber sicher als schnell.',
        steps: [
          { t: 'Einloggen', d: 'Öffne SageMaster im Browser.', link: { kind: 'link', label: 'SageMaster öffnen', url: 'https://app.sagemaster.io/' } },
          { t: 'Product Mastery', d: 'Lerne die Plattform und ihre Funktionen kennen.', link: { kind: 'kurs', label: 'Kurs öffnen', url: 'https://wowpowers.com/de/catalog/paths/2a3565b0-b1fb-434f-86e2-53fb255b69ca' } },
          { t: 'SGM Fast Track', d: 'Der schnelle Weg zu deiner ersten Automation.', link: { kind: 'kurs', label: 'Kurs öffnen', url: 'https://wowpowers.com/de/catalog/paths/e1d77da5-fd92-4024-a34d-e94b43efd9b6' } }
        ]
      },
      {
        label: 'SageMaster',
        title: 'Forex & Crypto',
        text: 'Wähle aus, womit du mit SageMaster handeln möchtest:',
        subTabs: [
          {
            id: 'sgm-forex',
            label: 'Forex',
            icon: 'candles',
            sections: [
              {
                title: 'SageMaster-Forex-Kurs',
                text: 'Der Vertiefungskurs für Forex mit SageMaster. Überprüfe danach deine laufenden Automationen gemeinsam mit deiner Mentorin.',
                videos: [{ title: 'SageMaster Forex Kurs', desc: 'Forex-Automationen in der Tiefe.', url: 'https://wowpowers.com/de/academy-player/2445794a-1a31-4ec7-9a1d-497b348d2ed6', wow: true }]
              }
            ]
          },
          {
            id: 'sgm-crypto',
            label: 'Crypto',
            icon: 'coin',
            sections: [
              {
                title: 'SageMaster-Educator Aycan',
                text: 'Aycan ist unser SageMaster-Educator für Crypto. Auf seiner Seite in WOW findest du unter <strong>Wiedergabelisten</strong> das <strong>Onboarding</strong> und die <strong>Deepdives</strong> zu den jeweiligen SGM-Crypto-Themen.',
                tip: 'Starte mit dem Onboarding und schau dir danach die Deepdives zu den Themen an, die dich gerade betreffen. Richte deine erste Automation erst danach ein – mit kleinem Risiko.',
                videos: [{ title: 'Aycan · SageMaster-Educator', desc: 'Wiedergabelisten: Onboarding & Deepdives zu SGM Crypto.', url: 'https://wowpowers.com/de/stream-player/aycan/livestream/b2a3e395-601b-48be-973c-7dd736530b5c?reference=TOP_EDUCATORS', wow: true }]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'wes',
    title: 'WES',
    short: 'Das WOW Education System: einen Markt wählen und dranbleiben.',
    icon: 'plane',
    intro:
      'Das <strong>WOW Education System (WES)</strong> führt dich Schritt für Schritt durch einen Markt deiner Wahl – Crypto, Forex, Stocks und mehr.',
    tasks: [
      { id: 'd-wes0', text: 'In WOW einloggen' },
      { id: 'd-wes1', text: 'WOW Fast Track abschließen' },
      { id: 'd-wes2', text: 'Unter „Meine Reise“ einen Markt auswählen' },
      { id: 'd-wes3', text: 'Tägliche Verpflichtung in WOW anlegen' }
    ],
    sections: [
      {
        label: 'WES · Start',
        title: 'WOW',
        text: 'Alle Inhalte des WOW Education Systems findest du in WOW.',
        links: [{ kind: 'link', label: 'WOW öffnen', url: 'https://wowpowers.com/de' }]
      },
      {
        label: 'WES · Schritt 1',
        title: 'WOW Fast Track',
        text: 'Der schnelle Einstieg: Hier lernst du WOW und das Education System kennen.',
        videos: [{ title: 'WOW Fast Track', desc: 'Der schnelle Einstieg in WOW.', url: 'https://wowpowers.com/de/catalog/paths/ad840baf-da3b-47fa-9272-22914888a537', wow: true }]
      },
      {
        label: 'WES · Schritt 2',
        title: 'Wähle deinen Markt',
        text: 'Fokus schlägt Vielfalt: Konzentriere dich auf <strong>eine</strong> Sache und geh sie richtig an – statt dich in 20 Themen gleichzeitig zu verzetteln. Wer überall ein bisschen macht, kommt nirgends richtig voran.',
        steps: [
          { t: 'Meine Reise öffnen', d: 'Geh auf der WOW-Startseite auf <strong>„Meine Reise“</strong>.' },
          { t: 'Markt auswählen', d: 'Such dir den Markt aus, mit dem du dich näher beschäftigen möchtest – zum Beispiel Crypto, Forex oder Stocks.' },
          { t: 'Lernweg gehen', d: 'Folge dort dem Lernweg Schritt für Schritt.' }
        ],
        guide: { src: 'assets/notes/wes-meine-reise.png', title: 'WOW Education System: Wähle deinen Markt' }
      },
      {
        label: 'WES · Schritt 3',
        title: 'Tägliche Verpflichtungen',
        text: 'Wenn du dich mit einem Thema näher beschäftigen willst, kannst du dir in WOW <strong>tägliche Verpflichtungen</strong> erstellen – zum Beispiel „Crypto – 30 Min pro Tag“. So wird Lernen zur festen Routine.',
        tip: 'Lieber jeden Tag 20 Minuten als einmal pro Woche drei Stunden.'
      }
    ]
  },
  {
    slug: 'helix',
    title: 'Helix',
    short: 'Helix kennenlernen und einrichten.',
    icon: 'helix',
    intro: 'Helix ist der nächste Baustein in deinem Forex-Trading. Hier lernst du, wie es funktioniert, und richtest es Schritt für Schritt ein.',
    tasks: [
      { id: 'd-hx4', text: 'Erstes Helix-Video auf WOW ansehen' },
      { id: 'd-hx5', text: 'Helix-Kurs auf WOW ansehen' },
      { id: 'd-hx1', text: 'Teamcall ansehen' },
      { id: 'd-hx6', text: 'Helix-Signale selbst umsetzen' }
    ],
    sections: [
      {
        label: 'Helix',
        title: 'Kurse in WOW',
        text: 'Starte mit den beiden Helix-Kursen in WOW:',
        steps: [
          { t: 'Helix in der Startrampe', d: 'Auf der WOW-Hauptseite: <strong>Meine Reise → Devisen → Startrampe → Schritt 3 „Tools freischalten“ → Helix</strong>.', link: { kind: 'link', label: 'WOW öffnen', url: 'https://wowpowers.com/de' } },
          { t: 'Helix-Kurs in der Academy', d: 'Der zweite Helix-Kurs direkt in der WOW-Academy.', link: { kind: 'kurs', label: 'Kurs öffnen', url: 'https://wowpowers.com/de/academy-player/6fb2043f-8d22-4555-8862-8bcb02b672e2' } }
        ]
      },
      {
        label: 'Helix',
        title: 'Helix in der Praxis',
        text: 'Im Teamcall siehst du, wie Helix in der Praxis eingesetzt wird. Notiere dir offene Fragen und besprich sie mit deiner Mentorin.',
        videos: [{ title: 'Helix im Teamcall', desc: 'Rise Beyond Teamcall vom 25.10.2026.', url: 'https://www.youtube.com/watch?v=ME1Fo__EMR4' }]
      }
    ]
  },
  {
    slug: 'signal-apps',
    title: 'Signal App',
    short: 'Syntra & MT5: Signale verstehen und sauber umsetzen.',
    icon: 'phone',
    intro:
      'Mit <strong>Syntra</strong> bekommst du Signale, die du im <strong>MetaTrader 5 (MT5)</strong> umsetzt. Hier findest du alles zu beiden Apps an einem Ort – von der Installation bis zum sauberen Umsetzen und Dokumentieren.',
    tasks: [
      { id: 'd-sig0', text: 'Syntra installieren & anmelden' },
      { id: 'd-sig0b', text: 'MT5 installieren & anmelden' },
      { id: 'd-sig1', text: 'Syntra- & MT5-Tutorial ansehen' },
      { id: 'd-sig4', text: 'Eigene Signale per Copy-Paste übernehmen' }
    ],
    sections: [
      {
        label: 'Signal App',
        title: 'Die Apps',
        text: 'Du brauchst beide Apps: Syntra für die Signale, MT5 zum Umsetzen.',
        apps: [
          {
            name: 'Syntra',
            logo: 'assets/logos/syntra.jpg',
            desc: 'Signale & Marktanalysen',
            links: [
              { label: 'Apple', url: 'https://apps.apple.com/ch/app/syntra-market-insights/id6754648008?l=de-DE' },
              { label: 'Android', url: 'https://play.google.com/store/apps/details?id=io.syntra.app' }
            ]
          },
          {
            name: 'MT5',
            logo: 'assets/logos/mt5.jpg',
            desc: 'MetaTrader 5 – hier setzt du Trades um',
            links: [
              { label: 'Apple', url: 'https://apps.apple.com/it/app/metatrader-5/id413251709' },
              { label: 'Android', url: 'https://play.google.com/store/search?q=mt5&c=apps' }
            ]
          }
        ]
      },
      {
        label: 'Signal App',
        title: 'Tutorials',
        text: 'Schau dir beide Tutorials in Ruhe an – mit Fokus auf die Details: Einstieg, Stop Loss, Take Profit und Lotgröße.',
        videos: [
          { title: 'Syntra Tutorial', desc: 'So liest du Signale in Syntra.', url: 'https://wowpowers.com/de/academy-player/1bd790c3-906b-410e-aa61-32cbe3ebb1f6', wow: true },
          { title: 'MT5 Tutorial', desc: 'So setzt du ein Signal im MetaTrader 5 um.', url: 'https://youtu.be/mRtXre60L-Q?feature=shared' }
        ]
      },
      {
        label: 'Signal App',
        title: 'Index-Namen beim Broker',
        text: 'Je nach Broker heißt derselbe Markt in MT5 anders. Nicht wundern, wenn der Name etwas anders angezeigt wird:',
        table: [
          ['DJ30', 'US30 · DJI · WS30 · DowJones · US30.cash · US30m'],
          ['NASUSD', 'NAS100 · USTEC · US100 · NAS100.cash · NAS100m · NASDAQ']
        ]
      },
      {
        label: 'Signal App',
        title: 'Trading-Journal',
        text: 'Halte jedes umgesetzte Signal fest: Datum, Markt, Einstieg, Ergebnis und was dir aufgefallen ist. Nach 10 Signalen besprichst du dein Journal mit deiner Mentorin.',
        tip: 'Ein einfaches Notizbuch oder eine Tabelle reicht völlig aus.'
      }
    ]
  },
  {
    slug: 'trading-mindset',
    title: 'Trading Mindset',
    short: 'Disziplin, Geduld und der richtige Umgang mit Gewinnen und Verlusten.',
    icon: 'brain',
    intro: 'Beim Trading entscheidet nicht nur die Strategie, sondern vor allem dein Kopf. Hier lernst du, ruhig und regelbasiert zu handeln – auch wenn es mal nicht läuft.',
    tasks: [
      { id: 'd-nx-ms', text: 'Such dir einen Podcast, ein YouTube-Video oder ein Buch, mit dem du dich täglich 15–20 Minuten beschäftigst' },
      { id: 'd-tm-learn', text: 'Schick deine Learnings regelmäßig an deine Mentorin' }
    ],
    sections: [
      {
        label: 'Trading Mindset',
        title: 'Mindset-Inhalte',
        text: 'Erfolgreiches Trading beginnt im Kopf. Wähl aus, wie du dich heute damit beschäftigen möchtest – und mach es dir zur Routine.',
        mindsetTabs
      },
      {
        label: 'Trading Mindset',
        title: 'Deine Trading-Regeln',
        text: 'Schreib auf, wann du tradest und wann nicht: maximales Risiko pro Trade, maximale Trades pro Tag und was du nach einem Verlust machst.',
        tip: 'Regeln, die du vorher aufschreibst, schützen dich vor Entscheidungen aus dem Bauch heraus.'
      },
      {
        label: 'Trading Mindset',
        title: 'Trading-Journal',
        text: 'Notiere zu jedem Trade nicht nur das Ergebnis, sondern auch, wie du dich gefühlt hast. So erkennst du Muster – etwa ob du nach Verlusten zu schnell nachlegst.',
        quote: 'Nicht jeder Trade muss gewinnen. Aber jeder Trade muss nach deinen Regeln sein.'
      }
    ]
  },
  {
    slug: 'persoenlichkeit',
    title: 'Persönlichkeits­entwicklung',
    short: 'Dranbleiben mit Büchern, Podcasts und Learnings.',
    icon: 'book',
    intro: 'Mindset ist kein einmaliges Thema. Mach Podcasts und Bücher zu einer festen Gewohnheit und teile regelmäßig deine Learnings.',
    tasks: [
      { id: 'd-ms1', text: 'Such dir einen Podcast, ein YouTube-Video oder ein Buch, mit dem du dich täglich 15–20 Minuten beschäftigst' },
      { id: 'd-ms3', text: 'Schick deine Learnings regelmäßig an deine Mentorin' }
    ],
    sections: [
      {
        label: 'Persönlichkeitsentwicklung',
        title: 'Inhalte für dein Wachstum',
        text: 'Wachse als Persönlichkeit: mehr Selbstvertrauen, ein gesunder Umgang mit Geld und die Fähigkeit, dich selbst gut zu vermarkten. Wähl aus, wie du dich heute damit beschäftigen möchtest.',
        mindsetTabs: peTabs
      },
      {
        label: 'Reflexion',
        title: 'Learnings festhalten',
        quote: 'Was kann ich davon konkret in meinem Leben umsetzen?'
      }
    ]
  }
];

// Danach-Leiste im Onboarding: verlinkt auf die Deepdive-Themen
const afterwards = [
  { label: 'Helix', slug: 'helix' },
  { label: 'WES', slug: 'wes' },
  { label: 'NXT', slug: 'nxt' },
  { label: 'Marketing', slug: 'marketing' },
  { label: 'SageMaster', slug: 'sagemaster-dd' }
];

phases.forEach((p, i) => {
  p.n = i + 1;
  p.track = 'onboarding';
});
deepdive.forEach((p, i) => {
  p.n = i + 1;
  p.track = 'deepdive';
  p.baseTasks = p.tasks;
});

// Deepdive-To-dos sind frei bearbeitbar (ändern, löschen, hinzufügen) – gespeichert auf diesem Gerät
const DD_EDIT_KEY = 'rb_dd_edits';
let ddEdits = { renamed: {}, hidden: [], added: {} };
try {
  ddEdits = Object.assign(ddEdits, JSON.parse(localStorage.getItem(DD_EDIT_KEY) || '{}'));
} catch (e) {}

function applyDdEdits() {
  deepdive.forEach((p) => {
    p.tasks = p.baseTasks
      .filter((t) => !ddEdits.hidden.includes(t.id))
      .map((t) => (ddEdits.renamed[t.id] ? { ...t, text: ddEdits.renamed[t.id] } : t))
      .concat(ddEdits.added[p.slug] || []);
  });
}

function saveDdEdits() {
  try {
    localStorage.setItem(DD_EDIT_KEY, JSON.stringify(ddEdits));
  } catch (e) {}
  applyDdEdits();
}

applyDdEdits();

const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function ddItem(t, ph, extraCls) {
  const isDone = done.has(t.id);
  if (editingId === t.id)
    return `
    <li class="task custom-task is-editing">
      <form class="custom-edit" data-dd-form="${t.id}" data-slug="${ph.slug}">
        <input type="text" class="custom-input" value="${esc(t.text)}" maxlength="140" aria-label="To-do bearbeiten" />
        <button type="submit" class="icon-btn icon-sm" title="Speichern" aria-label="Speichern">${svg('check')}</button>
      </form>
    </li>`;
  return `
    <li class="task custom-task ${isDone ? 'is-done' : ''} ${extraCls || ''}" data-dd="${t.id}" data-slug="${ph.slug}">
      <label>
        <input type="checkbox" data-task="${t.id}" ${isDone ? 'checked' : ''} />
        <span class="tick">${svg('check')}</span>
        <span class="task-text">${esc(t.text)}${t.optional ? ' <em class="opt">optional</em>' : ''}</span>
      </label>
      <span class="custom-actions">
        <button type="button" class="mini-btn" data-ddedit title="Ändern" aria-label="Ändern">${svg('edit')}</button>
        <button type="button" class="mini-btn is-danger" data-dddel title="Löschen" aria-label="Löschen">${svg('trash')}</button>
      </span>
    </li>`;
}

function ddAddRow(ph) {
  return `
    <li class="custom-add dd-add">
      <form data-dd-add="${ph.slug}">
        <input type="text" class="custom-input" placeholder="To-do zu ${esc(ph.title)} hinzufügen …" maxlength="140" aria-label="To-do hinzufügen" />
        <button type="submit" class="icon-btn icon-sm" title="Hinzufügen" aria-label="Hinzufügen">${svg('plus')}</button>
      </form>
    </li>`;
}

const tracks = {
  onboarding: { list: phases, label: 'Onboarding', unit: 'Schritt' },
  deepdive: { list: deepdive, label: 'Deepdive', unit: 'Deepdive' }
};

const pageHref = (p) => (p.track === 'deepdive' ? `#/deepdive/${p.slug}` : `#/schritt/${p.n}`);

// ─────────────────────────────────────────────────────────────
//  SPEICHERN (Cookie + localStorage als Backup)
// ─────────────────────────────────────────────────────────────

const STORE_KEY = 'rb_onboarding';

function readCookie(name) {
  const hit = document.cookie.split('; ').find((c) => c.startsWith(name + '='));
  return hit ? decodeURIComponent(hit.slice(name.length + 1)) : '';
}

function loadDone() {
  let raw = readCookie(STORE_KEY);
  if (!raw) {
    try {
      raw = localStorage.getItem(STORE_KEY) || '';
    } catch (e) {}
  }
  return new Set(raw.split('.').filter(Boolean));
}

function saveDone() {
  const value = [...done].join('.');
  document.cookie = `${STORE_KEY}=${encodeURIComponent(value)}; max-age=${60 * 60 * 24 * 400}; path=/; SameSite=Lax`;
  try {
    localStorage.setItem(STORE_KEY, value);
  } catch (e) {}
}

let done = loadDone();

// To-do-Leiste: am Laptop ein-/ausklappbar (wird gemerkt), am Handy als Schublade
const isMobile = () => window.matchMedia('(max-width: 900px)').matches;
let panelOpen = true;
try {
  panelOpen = localStorage.getItem('rb_panel') !== 'closed';
} catch (e) {}
let drawerOpen = false;

// Eigene To-dos (im Deepdive): frei anlegen, ändern, löschen, verschieben – nur auf diesem Gerät
const CUSTOM_KEY = 'rb_custom';
let customTodos = [];
try {
  customTodos = JSON.parse(localStorage.getItem(CUSTOM_KEY) || '[]');
} catch (e) {}
let editingId = null;

function saveCustom() {
  try {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(customTodos));
  } catch (e) {}
}

function customItem(t, i, len) {
  const isDone = done.has(t.id);
  if (editingId === t.id)
    return `
    <li class="task custom-task is-editing" data-custom="${t.id}">
      <form class="custom-edit" data-custom-form="${t.id}">
        <input type="text" class="custom-input" value="${t.text.replace(/"/g, '&quot;')}" maxlength="140" aria-label="To-do bearbeiten" />
        <button type="submit" class="icon-btn icon-sm" title="Speichern" aria-label="Speichern">${svg('check')}</button>
      </form>
    </li>`;
  return `
    <li class="task custom-task ${isDone ? 'is-done' : ''}" data-custom="${t.id}" draggable="true">
      <span class="grip" title="Ziehen zum Verschieben">${svg('grip')}</span>
      <label>
        <input type="checkbox" data-task="${t.id}" ${isDone ? 'checked' : ''} />
        <span class="tick">${svg('check')}</span>
        <span class="task-text"></span>
      </label>
      <span class="custom-actions">
        <button type="button" class="mini-btn" data-cmove="-1" title="Nach oben" aria-label="Nach oben" ${i === 0 ? 'disabled' : ''}>${svg('up')}</button>
        <button type="button" class="mini-btn" data-cmove="1" title="Nach unten" aria-label="Nach unten" ${i === len - 1 ? 'disabled' : ''}>${svg('down')}</button>
        <button type="button" class="mini-btn" data-cedit title="Ändern" aria-label="Ändern">${svg('edit')}</button>
        <button type="button" class="mini-btn is-danger" data-cdel title="Löschen" aria-label="Löschen">${svg('trash')}</button>
      </span>
    </li>`;
}

function renderCustomGroup(showAll) {
  const items = showAll ? customTodos : customTodos.filter((t) => !done.has(t.id));
  const d = customTodos.filter((t) => done.has(t.id)).length;
  return `
    <li class="todo-sep todo-sep-custom">
      <span class="todo-sep-static">
        <span class="num num-xs">${svg('edit')}</span>
        <span class="todo-sep-title">Meine To-Dos</span>
        <span class="todo-count">${d}/${customTodos.length}</span>
      </span>
    </li>
    ${items.map((t) => customItem(t, customTodos.indexOf(t), customTodos.length)).join('')}
    <li class="custom-add">
      <form data-custom-add>
        <input type="text" class="custom-input" placeholder="Eigenes To-do hinzufügen …" maxlength="140" aria-label="Eigenes To-do" />
        <button type="submit" class="icon-btn icon-sm" title="Hinzufügen" aria-label="Hinzufügen">${svg('plus')}</button>
      </form>
    </li>`;
}

// Aktiver Bereich: Onboarding oder Deepdive (wird gemerkt)
let track = "onboarding";
try {
  if (localStorage.getItem("rb_track") === "deepdive") track = "deepdive";
} catch (e) {}

// ─────────────────────────────────────────────────────────────
//  HILFSFUNKTIONEN
// ─────────────────────────────────────────────────────────────

const $ = (sel, root = document) => root.querySelector(sel);

const icons = {
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',
  brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h0a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h0a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/>',
  candles: '<path d="M6 3v4M6 15v6M18 3v3M18 14v7M12 6v3M12 17v4"/><rect x="4" y="7" width="4" height="8" rx="1"/><rect x="10" y="9" width="4" height="8" rx="1"/><rect x="16" y="6" width="4" height="8" rx="1"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  laptop: '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/><circle cx="12" cy="10.5" r="2"/>',
  growth: '<path d="M4 20V14M10 20V10M16 20V12M22 20H2"/><path d="M4 9l6-4 5 3 6-5"/><path d="M17 3h4v4"/>',
  video: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9 5 3-5 3Z" fill="currentColor"/>',
  audio: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="5" height="6" rx="1.5"/><rect x="16" y="14" width="5" height="6" rx="1.5"/>',
  kurs: '<path d="M2 8l10-5 10 5-10 5Z"/><path d="M6 10v5c3 2 9 2 12 0v-5"/>',
  vorlage: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2"/>',
  panelClose: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M15 4v16"/><path d="m8 9 3 3-3 3"/>',
  panelOpen: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M15 4v16"/><path d="m11 9-3 3 3 3"/>',
  signal: '<path d="M2 12h3l3-7 4 14 3-9 2 2h5"/>',
  helix: '<path d="M7 3c0 6 10 6 10 12s-10 6-10 6M17 3c0 6-10 6-10 12s10 6 10 6"/><path d="M8.5 7h7M8.5 17h7"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',
  rocket: '<path d="M12 15l-3-3c1.5-5 5-8 10-9-1 5-4 8.5-9 10"/><path d="M9 12l-4 1 2-4h4M12 15l-1 4 4-2v-4"/><path d="M5 19c0-2 1-3 2-3"/>',
  coin: '<ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M10 18h4"/><path d="M9 7h2v2H9zM13 7h2v2h-2zM9 11h2v2H9zM13 11h2v2h-2z"/>',
  stocks: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-7"/><path d="M16 7h4v4"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13"/><path d="M9 7h6"/>',
  plane: '<path d="M10.5 13.5 3 11l1.5-1.5 8 1 4.5-4.5a2 2 0 0 1 3 3L15.5 13.5l1 8L15 23l-2.5-7.5-3 3V21l-1.5 1-1-3.5-3.5-1 1-1.5h2.5z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5"/><path d="M5 20h14"/>',
  edit: '<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  up: '<path d="m6 15 6-6 6 6"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  grip: '<circle cx="9" cy="6" r="1.2" fill="currentColor"/><circle cx="15" cy="6" r="1.2" fill="currentColor"/><circle cx="9" cy="12" r="1.2" fill="currentColor"/><circle cx="15" cy="12" r="1.2" fill="currentColor"/><circle cx="9" cy="18" r="1.2" fill="currentColor"/><circle cx="15" cy="18" r="1.2" fill="currentColor"/>'
};

const svg = (name, cls = 'ico') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

const required = (p) => p.tasks.filter((t) => !t.optional);
const doneCount = (tasks) => tasks.filter((t) => done.has(t.id)).length;
const allRequired = () => phases.flatMap(required);

// Deepdive ist erst nach dem kompletten Onboarding freigeschaltet
// Hauptschalter: false = Deepdive ist für alle gesperrt (auch nach dem Onboarding).
// Auf true setzen, sobald der Deepdive freigegeben werden soll.
const DEEPDIVE_OPEN = true;

const deepdiveUnlocked = () => DEEPDIVE_OPEN && allRequired().every((t) => done.has(t.id));

function lockedHint() {
  if (!DEEPDIVE_OPEN) return 'Der Deepdive ist aktuell noch gesperrt und wird bald freigeschaltet. Konzentrier dich bis dahin auf dein Onboarding.';
  const all = allRequired();
  return `Der Deepdive wird freigeschaltet, sobald du dein Onboarding abgeschlossen hast (${doneCount(all)}/${all.length} To-Dos erledigt).`;
}

function toast(msg, icon = 'lock') {
  let el = $('#toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.appendChild(el);
  }
  el.innerHTML = `${svg(icon)}<span>${msg}</span>`;
  el.classList.add('is-visible');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove('is-visible'), 4200);
}
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);

function linkBtn(l) {
  if (!l.url) return `<span class="btn btn-ghost is-pending">${svg(l.kind || 'link')}${l.label} · Link folgt</span>`;
  const ext = l.url.startsWith('#') ? '' : l.download ? ` download="${l.download}"` : ' target="_blank" rel="noopener"';
  return `<a class="btn" href="${l.url}"${ext}>${svg(l.kind || 'link')}<span>${l.label}</span></a>`;
}

function taskItem(t, isNext = false, extraCls = "") {
  const isDone = done.has(t.id);
  return `
    <li class="task ${isDone ? "is-done" : ""} ${t.optional ? "is-optional" : ""} ${isNext ? "is-next" : ""} ${extraCls}">
      <label>
        <input type="checkbox" data-task="${t.id}" ${isDone ? "checked" : ""} />
        <span class="tick">${svg("check")}</span>
        <span class="task-text">${t.text}${t.optional ? " <em class=\"opt\">optional</em>" : ""}</span>
      </label>
    </li>`;
}

function ring(value, size = 120) {
  const r = 52;
  const c = 2 * Math.PI * r;
  return `
    <svg class="ring" width="${size}" height="${size}" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#d9b88a"/><stop offset="1" stop-color="#8a6237"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="${r}" class="ring-track"/>
      <circle cx="60" cy="60" r="${r}" class="ring-fill" stroke="url(#gold)"
        stroke-dasharray="${c}" stroke-dashoffset="${c - (c * value) / 100}"/>
    </svg>`;
}

// ─────────────────────────────────────────────────────────────
//  SEITEN
// ─────────────────────────────────────────────────────────────

// Umschalter Onboarding / Deepdive (Dashboard + To-do-Liste teilen sich die Auswahl)
function trackSeg(cls = '') {
  return `
    <div class="seg seg-track ${cls}" role="group" aria-label="Bereich">
      ${Object.keys(tracks)
        .map((k) => {
          const locked = k === 'deepdive' && !deepdiveUnlocked();
          return `<button type="button" data-track="${k}" class="${track === k ? 'is-active' : ''} ${locked ? 'is-locked' : ''}" ${locked ? `title="${lockedHint()}"` : ''}>${locked ? svg('lock') : ''}${tracks[k].label}</button>`;
        })
        .join('')}
    </div>`;
}

// To-do-Leiste rechts – gleich auf Dashboard und Schritt-Seiten
function renderPanel(active) {
  const list = tracks[track].list;
  const all = list.flatMap(required);
  const total = all.length;
  const finished = doneCount(all);
  const p = pct(finished, total);
  const next = all.find((t) => !done.has(t.id));
  const showAll = sessionStorageGet('rb_show') !== 'open';

  const listItems = list
    .map((ph) => {
      const req = required(ph);
      const d = doneCount(req);
      const complete = d === req.length;
      const here = ph === active ? 'is-here' : '';
      const tasks = showAll ? ph.tasks : ph.tasks.filter((t) => !done.has(t.id) && !t.optional);
      return `
        <li class="todo-sep ${complete ? 'is-complete' : ''} ${here}" data-page="${ph.track}-${ph.n}">
          <a href="${pageHref(ph)}">
            <span class="num num-xs">${complete ? svg('check') : ph.track === 'deepdive' ? svg(ph.icon) : ph.n}</span>
            <span class="todo-sep-title">${ph.title}</span>
            <span class="todo-count">${d}/${req.length}</span>
          </a>
        </li>
        ${ph.track === 'deepdive'
          ? tasks.map((t) => ddItem(t, ph, here && 'in-phase')).join('') + ddAddRow(ph)
          : tasks.map((t) => taskItem(t, t === next, here && 'in-phase')).join('')}`;
    })
    .join('');

  return `
    <aside class="todo-panel" aria-label="Deine To-Dos">
      <button type="button" class="panel-rail" data-panel="open" aria-label="To-do-Liste ausklappen" title="To-do-Liste ausklappen">
        ${svg('panelOpen')}
        <span class="ring-wrap ring-sm">${ring(p, 46)}<span class="ring-label"><strong>${p}</strong></span></span>
        <span class="rail-text">${tracks[track].label} · ${finished}/${total}</span>
      </button>

      <div class="panel-inner">
        <div class="panel-head">
          <div>
            <h2>Deine To-Dos</h2>
            <p class="muted">${tracks[track].label}: ${finished} von ${total} erledigt</p>
          </div>
          <button type="button" class="icon-btn" data-panel="close" aria-label="To-do-Liste einklappen" title="Einklappen">${svg('panelClose')}</button>
        </div>
        <span class="bar"><span class="bar-fill" style="width:${p}%"></span></span>
        <div class="panel-tools">
          ${trackSeg()}
          <div class="seg seg-sm" role="group" aria-label="Anzeige">
            <button type="button" data-show="all" class="${showAll ? 'is-active' : ''}">Alle</button>
            <button type="button" data-show="open" class="${showAll ? '' : 'is-active'}">Nur offene</button>
          </div>
        </div>
        <div class="todo-scroll" id="todoScroll">
          <ul class="tasks todo-list">${track === 'deepdive' ? renderCustomGroup(showAll) : ''}${listItems}</ul>
          ${next ? '' : `<p class="todo-empty">${svg('check')} Alles erledigt – stark!</p>`}
        </div>
      </div>
    </aside>

    <div class="panel-backdrop" data-panel="close"></div>
    <button type="button" class="todo-fab" data-panel="open">
      ${svg('list')}<span>To-Dos</span><strong>${finished}/${total}</strong>
    </button>`;
}

function dashClass(extra = '') {
  return ['dash', extra, panelOpen ? '' : 'is-collapsed', drawerOpen ? 'is-drawer-open' : ''].join(' ');
}

function renderDashboard() {
  const isDeep = track === 'deepdive';
  const list = tracks[track].list;
  const all = list.flatMap(required);
  const total = all.length;
  const finished = doneCount(all);
  const p = pct(finished, total);
  const next = all.find((t) => !done.has(t.id));
  const nextPage = isDeep
    ? list.find((ph) => doneCount(required(ph)) > 0 && doneCount(required(ph)) < required(ph).length)
    : next && list.find((ph) => ph.tasks.includes(next));
  const pagesDone = list.filter((ph) => doneCount(required(ph)) === required(ph).length).length;

  const cards = list
    .map((ph) => {
      const req = required(ph);
      const d = doneCount(req);
      const pp = pct(d, req.length);
      const state = pp === 100 ? 'Erledigt' : ph === nextPage && !isDeep ? 'Aktuell' : d ? 'Begonnen' : 'Offen';
      return `
        <a class="road-card ${pp === 100 ? 'is-complete' : ''} ${(isDeep ? d > 0 && pp < 100 : ph === nextPage) ? 'is-current' : ''}" href="${pageHref(ph)}">
          <span class="num ${isDeep ? 'num-icon' : ''}">${isDeep ? svg(ph.icon) : ph.n}</span>
          <span class="road-body">
            ${isDeep ? '' : `<span class="road-top"><span class="pill">${state}</span><span class="road-meta">${d}/${req.length}<span class="meta-word"> erledigt</span></span>${isDeep ? '' : svg(ph.icon, 'ico road-ico')}</span>`}
            <span class="road-title">${ph.title}</span>
            ${isDeep ? '' : `<span class="road-short">${ph.short}</span>`}
            <span class="bar"><span class="bar-fill" style="width:${pp}%"></span></span>
          </span>
        </a>`;
    })
    .join('');

  const title = isDeep
    ? `<span class="h1-small">Deine</span> <span class="gold">Deepdive Themen</span>`
    : `<span class="h1-small">Deine</span> <span class="gold">Onboarding Roadmap</span>`;
  const lead = isDeep
    ? `<strong>Fokus:</strong> Such dir <strong>ein</strong> Thema aus, das dich interessiert, und arbeite es komplett durch. Du weißt nicht, womit du starten sollst? Frag deine Mentorin.`
    : `${list.length} Schritte bis zu deinem Start. Hake in deiner To-do-Liste ab, was du erledigt hast – dein Fortschritt wird automatisch auf diesem Gerät gespeichert.`;

  return `
    <div class="${dashClass('dash-home')}" id="dash">
      <div class="dash-main">
        <section class="hero">
          <div class="hero-text">
            <p class="eyebrow">Willkommen bei Rise Beyond</p>
            <h1>${title}</h1>
            <p class="lead">${lead}</p>
            ${
              isDeep && next
                ? nextPage
                  ? `<a class="btn btn-primary" href="${pageHref(nextPage)}">Weiter mit ${nextPage.title} ${svg('arrow')}</a>`
                  : `<a class="btn btn-primary" href="${pageHref(list[0])}">Starte mit ${list[0].title} ${svg('arrow')}</a>`
                : next
                ? `<a class="btn btn-primary" href="${pageHref(nextPage)}">Weiter mit Schritt ${nextPage.n}: ${nextPage.title} ${svg('arrow')}</a>`
                : `<p class="lead"><strong>${isDeep ? 'Alle Deepdive-Themen geschafft!' : 'Du hast alle Schritte geschafft!'}</strong> Melde dich bei deiner Mentorin für die nächsten Themen.</p>`
            }
          </div>
          <div class="hero-progress">
            <div class="ring-wrap">${ring(p, 150)}<span class="ring-label"><strong>${p}%</strong><small>geschafft</small></span></div>
            <div class="hero-stats">
              <div><strong>${finished}</strong><span>von ${total} To-Dos</span></div>
              <div><strong>${pagesDone}</strong><span>von ${list.length} ${isDeep ? 'Themen' : 'Schritten'}</span></div>
            </div>
          </div>
        </section>

        <section class="block road-block">
          <div class="block-head">
            <h2>${isDeep ? 'Deepdive-Themen' : 'Die Roadmap'}</h2>
            ${trackSeg('seg-lg')}
          </div>
          ${
            isDeep
              ? `<div class="shelf-row road-row">
                  <button type="button" class="shelf-btn is-prev" data-shelf="-1" aria-label="Zurück">${svg('back')}</button>
                  <div class="road-grid road-grid-4 road-grid-dd js-scroll">${cards}</div>
                  <button type="button" class="shelf-btn is-next" data-shelf="1" aria-label="Weiter">${svg('arrow')}</button>
                </div>`
              : `<div class="road-grid road-grid-4">${cards}</div>`
          }
        </section>

        ${isDeep
          ? `<section class="after">
              <span class="after-label">${svg('edit')} Dein Plan:</span>
              <span class="after-list"><span>Fokus</span><span>Themen frei wählen</span><span>To-Dos anpassen</span><span>Eigene To-Dos anlegen</span></span>
            </section>`
          : afterBlock()}
      </div>
      ${renderPanel(null)}
    </div>`;
}

function afterBlock() {
  const locked = !deepdiveUnlocked();
  return `
    <section class="after ${locked ? 'is-locked' : ''}">
      <button type="button" class="after-label" data-track="deepdive" title="${locked ? lockedHint() : 'Zum Deepdive'}">${svg(locked ? 'lock' : 'arrow')} Deepdives danach:</button>
      <span class="after-list">${afterwards
        .map((a) => `<a href="#/deepdive/${a.slug}">${a.label}</a>`)
        .join('')}</span>
    </section>`;
}

// Buch-Kachel: Cover (von Amazon, sonst gestaltetes Ersatz-Cover), Titel & Autor, Klick öffnet Amazon
function bookItem(book) {
  const url = `https://www.amazon.de/dp/${book.asin}`;
  const cover = `https://m.media-amazon.com/images/P/${book.asin}.01.L.jpg`;
  return `
    <li>
      <a class="book" href="${url}" target="_blank" rel="noopener" title="${book.title} auf Amazon ansehen">
        <span class="book-cover">
          <span class="book-fallback"><strong>${book.title}</strong><small>${book.author}</small></span>
          <img src="${cover}" alt="Cover: ${book.title}" loading="lazy" onload="if(this.naturalWidth<10)this.remove()" onerror="this.remove()" />
        </span>
        <span class="book-title">${book.title}</span>
        <span class="book-author">${book.author}</span>
      </a>
    </li>`;
}

const ytThumb = (url) => {
  const id = (url.match(/(?:v=|youtu\.be\/|\/live\/)([\w-]{11})/) || [])[1];
  return id ? `https://i.ytimg.com/vi/${id}/mqdefault.jpg` : '';
};

// Karte im Mindset-Regal (Spotify / YouTube)
const platforms = {
  youtube: { label: 'YouTube', icon: 'video' },
  spotify: { label: 'Spotify', icon: 'audio' },
  tiktok: { label: 'TikTok', icon: 'video' },
  instagram: { label: 'Instagram', icon: 'video' }
};

function mediaItem(m) {
  const pf = platforms[m.platform] || platforms.youtube;
  return `
    <li>
      <a class="media is-${m.platform}" href="${m.url}" target="_blank" rel="noopener" title="${m.title}">
        <span class="media-thumb">
          <span class="media-fallback">${svg(pf.icon)}</span>
          ${m.thumb ? `<img src="${m.thumb}" alt="" loading="lazy" onerror="this.remove()" />` : ''}
          <span class="media-badge">${pf.label}</span>
        </span>
        <span class="media-title">${m.title}</span>
        <span class="media-sub">${m.sub}</span>
      </a>
    </li>`;
}

// Video-Kachel mit Vorschaubild
function videoItem(v) {
  const thumb = v.wow ? '' : v.thumb || ytThumb(v.url);
  return `
    <a class="video ${thumb ? '' : 'is-wow'}" href="${v.url}" target="_blank" rel="noopener">
      <span class="video-thumb">
        ${thumb ? `<img src="${thumb}" alt="" loading="lazy" />` : `<img class="video-logo" src="assets/logos/wow.png" alt="" />`}
        <span class="video-play">${svg(v.wow ? 'kurs' : 'video')}</span>
      </span>
      <span class="video-title">${v.title}</span>
      ${v.desc ? `<span class="video-desc">${v.desc}</span>` : ''}
      <span class="video-sub">${v.wow ? 'Kurs in WOW' : 'Video · YouTube'}</span>
    </a>`;
}

function renderSection(s) {
  let html = `<article class="card ${s.optional ? 'is-optional' : ''} ${s.media ? 'is-media' : ''}" ${s.id ? `id="sec-${s.id}"` : ''}>
    ${s.label ? `<p class="card-label">${s.label}</p>` : ''}
    <h3>${s.icon ? `<span class="h3-ico">${svg(s.icon)}</span>` : ''}${s.title}${s.media ? `<span class="h3-count">${s.media.length}</span>` : ''}</h3>`;
  if (s.text) html += `<p>${s.text}</p>`;
  if (s.list) html += `<ul class="smart">${s.list.map((i) => `<li>${i}</li>`).join('')}</ul>`;
  if (s.quote) html += `<blockquote>${s.quote}</blockquote>`;
  if (s.books)
    html += `<div class="library">${s.books
      .map(
        (cat) => `
        <p class="shelf-label" title="${cat.text}"><span>${cat.title}</span></p>
        <div class="shelf-row">
          <button type="button" class="shelf-btn is-prev" data-shelf="-1" aria-label="Zurück">${svg('back')}</button>
          <ol class="books js-scroll">${cat.books.map(bookItem).join('')}</ol>
          <button type="button" class="shelf-btn is-next" data-shelf="1" aria-label="Weiter">${svg('arrow')}</button>
        </div>`
      )
      .join('')}</div>`;
  if (s.table)
    html += `<div class="aliases">${s.table
      .map(([k, v]) => `<div class="alias"><strong>${k}</strong><span>= ${v}</span></div>`)
      .join('')}</div>`;
  if (s.apps)
    html += `<div class="apps">${s.apps
      .map(
        (a) => `
        <div class="app">
          <span class="app-logo tone-${a.tone || 'gold'}">${a.logo ? `<img src="${a.logo}" alt="${a.name} Logo" loading="lazy" />` : a.name.slice(0, 1)}</span>
          <span class="app-info"><strong>${a.name}</strong><small>${a.desc}</small></span>
          <span class="app-links">${a.links
            .map((l) => (l.url ? `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>` : `<span class="is-pending" title="Link folgt">${l.label} · folgt</span>`))
            .join('')}</span>
        </div>`
      )
      .join('')}</div>`;
  if (s.steps)
    html += `<ol class="steps">${s.steps
      .map(
        (st) => `
        <li>
          <div><strong>${st.t}</strong><p>${st.d}</p></div>
          ${st.link ? linkBtn(st.link) : ''}
        </li>`
      )
      .join('')}</ol>`;
  if (s.tip) html += `<p class="tip">${s.tip}</p>`;
  if (s.mindsetTabs) {
    const saved = sessionStorageGet('rb_mtab');
    const active = s.mindsetTabs.some((t) => t.id === saved) ? saved : s.mindsetTabs[0].id;
    html += `
      <div class="seg seg-lg mtabs" role="tablist" aria-label="Art der Inhalte">
        ${s.mindsetTabs
          .map((t) => `<button type="button" role="tab" data-mtab="${t.id}" class="${t.id === active ? 'is-active' : ''}">${svg(t.icon)}<span>${t.label}</span></button>`)
          .join('')}
      </div>
      ${s.mindsetTabs
        .map(
          (t) => `
        <div class="mtab-panel" data-mpanel="${t.id}" ${t.id === active ? '' : 'hidden'}>
          <p class="mtab-intro">${t.intro}</p>
          <div class="library">
            ${(t.groups || [])
              .map(
                (g, gi, arr) => `
              ${g.parent && (gi === 0 || arr[gi - 1].parent !== g.parent) ? `<p class="shelf-parent">${svg('video')}<span>${g.parent}</span></p>` : ''}
              <p class="shelf-label ${g.parent ? 'is-sub' : ''}" title="${g.text}"><span>${g.title}</span><em>${g.items.length}</em></p>
              <div class="shelf-row media-row">
                <button type="button" class="shelf-btn is-prev" data-shelf="-1" aria-label="Zurück">${svg('back')}</button>
                <ol class="media-list js-scroll">${g.items.map(mediaItem).join('')}</ol>
                <button type="button" class="shelf-btn is-next" data-shelf="1" aria-label="Weiter">${svg('arrow')}</button>
              </div>`
              )
              .join('')}
            ${(t.shelves || [])
              .map(
                (c) => `
              <p class="shelf-label" title="${c.text}"><span>${c.title}</span><em>${c.books.length}</em></p>
              <div class="shelf-row">
                <button type="button" class="shelf-btn is-prev" data-shelf="-1" aria-label="Zurück">${svg('back')}</button>
                <ol class="books js-scroll">${c.books.map(bookItem).join('')}</ol>
                <button type="button" class="shelf-btn is-next" data-shelf="1" aria-label="Weiter">${svg('arrow')}</button>
              </div>`
              )
              .join('')}
          </div>
        </div>`
        )
        .join('')}`;
  }
  if (s.chips)
    html += `<div class="chips">${s.chips
      .map(
        (g) => `
        <button type="button" class="chip" data-jump="sec-${g.id}">
          <span class="chip-ico">${svg(g.icon)}</span>
          <span class="chip-text"><strong>${g.title}</strong><small>${g.hint} · ${g.items.length}</small></span>
        </button>`
      )
      .join('')}</div>`;
  if (s.levels)
    html += `<ol class="levels">${s.levels
      .map(
        (l, i) => `
        <li class="level ${l.current ? 'is-current' : 'is-later'}">
          <span class="level-num">${i + 1}</span>
          <span><strong>${l.name}</strong><small>${l.text}</small></span>
        </li>`
      )
      .join('')}</ol>`;
  if (s.sessions)
    html += `<div class="sessions">${s.sessions
      .map(
        (x) => `
        <div class="session">
          <span class="session-ico">${svg('cal')}</span>
          <span class="session-info"><strong>${x.title}</strong><small>${x.when} · via Zoom</small></span>
          <span class="session-actions">
            <a class="btn btn-sm" href="${x.zoom}" target="_blank" rel="noopener">${svg('video')}<span>Zoom</span></a>
            <button type="button" class="btn btn-sm" data-ics="${x.ics}">${svg('cal')}<span>In Kalender</span></button>
          </span>
        </div>`
      )
      .join('')}</div>`;
  if (s.media)
    html += `
      <div class="shelf-row media-row">
        <button type="button" class="shelf-btn is-prev" data-shelf="-1" aria-label="Zurück">${svg('back')}</button>
        <ol class="media-list js-scroll">${s.media.map(mediaItem).join('')}</ol>
        <button type="button" class="shelf-btn is-next" data-shelf="1" aria-label="Weiter">${svg('arrow')}</button>
      </div>`;
  if (s.subTabs) {
    const saved = sessionStorageGet('rb_mtab');
    const active = s.subTabs.some((t) => t.id === saved) ? saved : s.subTabs[0].id;
    html += `
      <div class="seg seg-lg mtabs" role="tablist" aria-label="Bereich">
        ${s.subTabs.map((t) => `<button type="button" role="tab" data-mtab="${t.id}" class="${t.id === active ? 'is-active' : ''}">${svg(t.icon)}<span>${t.label}</span></button>`).join('')}
      </div>
      ${s.subTabs
        .map(
          (t) => `<div class="mtab-panel sub-panel" data-mpanel="${t.id}" ${t.id === active ? '' : 'hidden'}>${t.sections
            .map((x) => renderSection({ ...x, label: '' }).replace('<article class="card', '<article class="card sub-card'))
            .join('')}</div>`
        )
        .join('')}`;
  }
  if (s.sequence) {
    const firstOpen = s.sequence.findIndex((v) => !done.has(v.id));
    html += `<ol class="sequence">${s.sequence
      .map((v, i) => {
        const seen = done.has(v.id);
        const locked = i > 0 && !done.has(s.sequence[i - 1].id);
        const current = i === firstOpen;
        const thumb = ytThumb(v.url);
        return `
        <li class="seq ${seen ? 'is-seen' : ''} ${locked ? 'is-locked' : ''} ${current ? 'is-current' : ''}">
          ${
            locked
              ? `<span class="seq-thumb"><img src="${thumb}" alt="" loading="lazy" /><span class="seq-lock">${svg('lock')}</span></span>`
              : `<a class="seq-thumb" href="${v.url}" target="_blank" rel="noopener" data-seq-open="${v.id}"><img src="${thumb}" alt="" loading="lazy" /><span class="video-play">${svg('video')}</span></a>`
          }
          <span class="seq-num">${i + 1}</span>
          <span class="seq-title">${v.title}</span>
        </li>`;
      })
      .join('')}</ol>`;
  }
  if (s.videos) html += `<div class="videos">${s.videos.map(videoItem).join('')}</div>`;
  if (s.guide)
    html += `<button type="button" class="guide-img" data-zoom="${s.guide.src}" data-zoom-title="${s.guide.title}"><img src="${s.guide.src}" alt="${s.guide.title}" loading="lazy" /><span>${svg('search')} Zum Vergrößern antippen</span></button>`;
  const notes = s.notes || s.notesAfter;
  if (notes)
    html += `
      <p class="notes-label">${svg('vorlage')}<span>Session-Notizen</span><em>${notes.length}</em></p>
      <div class="notes">${notes
        .map(
          (n) => `<button type="button" class="note" data-zoom="${n.src}" data-zoom-title="${n.title}">
            <span class="note-img"><img src="${n.src}" alt="${n.title}" loading="lazy" /></span>
            <span class="note-title">${n.title}</span>
          </button>`
        )
        .join('')}</div>`;
  if (s.calendar)
    html += `<div class="links"><button type="button" class="btn" data-ics="teamcall">${svg('cal')}<span>In Kalender eintragen (.ics)</span></button></div>`;
  if (s.links) html += `<div class="links">${s.links.map(linkBtn).join('')}</div>`;
  return html + '</article>';
}

function renderPhase(ph) {
  const list = tracks[ph.track].list;
  const unit = tracks[ph.track].unit;
  const prev = list[ph.n - 2];
  const next = list[ph.n];
  const lastOnboarding = ph.track === 'onboarding' && !next;
  const isDeep = ph.track === 'deepdive';

  let nextLink;
  if (next) {
    nextLink = `<a class="pager-link is-next" href="${pageHref(next)}"><span><small>${isDeep ? 'Weiteres Thema' : `${unit} ${next.n}`}</small>${next.title}</span>${svg('arrow')}</a>`;
  } else if (lastOnboarding) {
    nextLink = deepdiveUnlocked()
      ? `<a class="pager-link is-next" href="${pageHref(deepdive[0])}"><span><small>Weiter geht's</small>Zum Deepdive</span>${svg('arrow')}</a>`
      : `<a class="pager-link is-next" href="#/"><span><small>Deepdive noch gesperrt</small>Zum Dashboard</span>${svg('arrow')}</a>`;
  } else {
    nextLink = `<a class="pager-link is-next" href="#/"><span><small>Fertig?</small>Zum Dashboard</span>${svg('arrow')}</a>`;
  }

  return `
    <div class="${dashClass('dash-phase')}" id="dash">
      <div class="dash-main">
        <a class="back" href="#/">${svg('back')} Zum Dashboard</a>

        <section class="phase-hero">
          <span class="num num-lg ${isDeep ? 'num-icon' : ''}">${isDeep ? svg(ph.icon) : ph.n}</span>
          <div>
            <p class="eyebrow">${isDeep ? 'Deepdive' : `${unit} ${ph.n} von ${list.length}`}</p>
            <h1 class="gold">${ph.title}</h1>
            <p class="lead">${ph.intro}</p>
          </div>
          ${isDeep ? '' : svg(ph.icon, 'ico phase-ico')}
        </section>

        <div class="phase-main ${isDeep ? 'no-labels' : ''}">${ph.sections.map(renderSection).join('')}</div>

        <nav class="pager">
          ${prev ? `<a class="pager-link" href="${pageHref(prev)}">${svg('back')}<span><small>${isDeep ? 'Weiteres Thema' : `${unit} ${prev.n}`}</small>${prev.title}</span></a>` : '<span></span>'}
          ${nextLink}
        </nav>
        ${lastOnboarding ? afterBlock() : ''}
      </div>
      ${renderPanel(ph)}
    </div>`;
}

// ─────────────────────────────────────────────────────────────
//  ROUTING & EVENTS
// ─────────────────────────────────────────────────────────────

function sessionStorageGet(k) {
  try {
    return sessionStorage.getItem(k);
  } catch (e) {
    return null;
  }
}

function currentPage() {
  let m = location.hash.match(/^#\/schritt\/(\d+)/);
  if (m) return phases[Number(m[1]) - 1] || null;
  m = location.hash.match(/^#\/deepdive\/([\w-]+)/);
  if (m) return deepdive.find((d) => d.slug === m[1]) || null;
  return null;
}

function setTrack(t) {
  track = t;
  try {
    localStorage.setItem('rb_track', t);
  } catch (e) {}
}

function render(keepScroll = false) {
  const y = window.scrollY;
  const listY = $('#todoScroll') ? $('#todoScroll').scrollTop : 0;
  let ph = currentPage();
  if (!deepdiveUnlocked()) {
    track = 'onboarding';
    if (ph && ph.track === 'deepdive') {
      history.replaceState(null, '', '#/');
      ph = null;
      toast(lockedHint());
    }
  }
  if (ph && !keepScroll) setTrack(ph.track);
  const app = $('#app');
  app.innerHTML = ph ? renderPhase(ph) : renderDashboard();
  document.body.classList.toggle('is-home', !ph);
  const list = $('#todoScroll');
  if (list && keepScroll) list.scrollTop = listY;
  else if (list && ph) {
    const sep = list.querySelector(`.todo-sep[data-page="${ph.track}-${ph.n}"]`);
    if (sep) list.scrollTop = sep.offsetTop - 4;
  }
  document.body.classList.toggle('no-scroll', drawerOpen && isMobile());
  document.title = ph ? `${ph.title} · Rise Beyond` : 'Rise Beyond · Onboarding';

  $('#topnav').innerHTML =
    phases
      .map((p) => {
        const complete = doneCount(required(p)) === required(p).length;
        return `<a href="#/schritt/${p.n}" class="${p === ph ? 'is-active' : ''} ${complete ? 'is-complete' : ''}" title="${p.title}">${complete ? svg('check') : p.n}</a>`;
      })
      .join('') +
    `<button type="button" data-track="deepdive" class="topnav-dd ${(ph && ph.track === 'deepdive') || (!ph && track === 'deepdive') ? 'is-active' : ''} ${deepdiveUnlocked() ? '' : 'is-locked'}" title="${deepdiveUnlocked() ? 'Deepdive' : lockedHint()}">${deepdiveUnlocked() ? '' : svg('lock')}Deepdive</button>`;

  const all = allRequired();
  const p = pct(doneCount(all), all.length);
  $('#topFill').style.width = p + '%';
  $('#topText').textContent = p + ' %';

  if (keepScroll) window.scrollTo(0, y);
  updateShelves();
  document.querySelectorAll('[data-custom]').forEach((li) => {
    const t = customTodos.find((x) => x.id === li.dataset.custom);
    const el = li.querySelector('.task-text');
    if (t && el) el.textContent = t.text;
  });
  const editInput = document.querySelector('[data-custom-form] input, [data-dd-form] input');
  if (editInput) {
    editInput.focus();
    editInput.select();
  }
  maybeShowDeepdiveIntro();
}

// ── Eigene To-dos: Aktionen ──────────────────────────────────
document.addEventListener('submit', (e) => {
  const ddAdd = e.target.closest('[data-dd-add]');
  const ddForm = e.target.closest('[data-dd-form]');
  if (ddAdd || ddForm) {
    e.preventDefault();
    const text = e.target.querySelector('input').value.trim();
    if (ddAdd) {
      if (!text) return;
      const slug = ddAdd.dataset.ddAdd;
      (ddEdits.added[slug] = ddEdits.added[slug] || []).push({ id: 'dx-' + Date.now().toString(36), text });
      saveDdEdits();
      render(true);
      const again = document.querySelector(`[data-dd-add="${slug}"] input`);
      if (again) again.focus();
    } else {
      const id = ddForm.dataset.ddForm;
      const slug = ddForm.dataset.slug;
      const own = (ddEdits.added[slug] || []).find((x) => x.id === id);
      if (!text) removeDdTask(id, slug);
      else if (own) own.text = text;
      else ddEdits.renamed[id] = text;
      editingId = null;
      saveDdEdits();
      render(true);
    }
    return;
  }

  const add = e.target.closest('[data-custom-add]');
  const edit = e.target.closest('[data-custom-form]');
  if (!add && !edit) return;
  e.preventDefault();
  const input = e.target.querySelector('input');
  const text = input.value.trim();
  if (add) {
    if (!text) return;
    customTodos.push({ id: 'c-' + Date.now().toString(36), text });
    saveCustom();
    render(true);
    const again = document.querySelector('[data-custom-add] input');
    if (again) again.focus();
  } else {
    const t = customTodos.find((x) => x.id === edit.dataset.customForm);
    if (t && text) t.text = text;
    if (t && !text) customTodos = customTodos.filter((x) => x !== t);
    editingId = null;
    saveCustom();
    render(true);
  }
});

function removeDdTask(id, slug) {
  const own = ddEdits.added[slug] || [];
  if (own.some((x) => x.id === id)) ddEdits.added[slug] = own.filter((x) => x.id !== id);
  else if (!ddEdits.hidden.includes(id)) ddEdits.hidden.push(id);
  delete ddEdits.renamed[id];
  done.delete(id);
  saveDone();
}

document.addEventListener('click', (e) => {
  const li = e.target.closest('[data-dd]');
  if (!li) return;
  if (e.target.closest('[data-ddedit]')) {
    editingId = li.dataset.dd;
    render(true);
  } else if (e.target.closest('[data-dddel]')) {
    removeDdTask(li.dataset.dd, li.dataset.slug);
    saveDdEdits();
    render(true);
  }
});

document.addEventListener('click', (e) => {
  const li = e.target.closest('[data-custom]');
  if (!li) return;
  const id = li.dataset.custom;
  const idx = customTodos.findIndex((x) => x.id === id);
  if (e.target.closest('[data-cedit]')) {
    editingId = id;
    render(true);
  } else if (e.target.closest('[data-cdel]')) {
    customTodos.splice(idx, 1);
    done.delete(id);
    saveDone();
    saveCustom();
    render(true);
  } else {
    const mv = e.target.closest('[data-cmove]');
    if (!mv) return;
    const to = idx + Number(mv.dataset.cmove);
    if (to < 0 || to >= customTodos.length) return;
    [customTodos[idx], customTodos[to]] = [customTodos[to], customTodos[idx]];
    saveCustom();
    render(true);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && editingId) {
    editingId = null;
    render(true);
  }
});

// Ziehen & Ablegen (Laptop)
let dragId = null;
document.addEventListener('dragstart', (e) => {
  const li = e.target.closest && e.target.closest('[data-custom]');
  if (!li) return;
  dragId = li.dataset.custom;
  li.classList.add('is-dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', dragId);
});
document.addEventListener('dragover', (e) => {
  const li = dragId && e.target.closest && e.target.closest('[data-custom]');
  if (!li) return;
  e.preventDefault();
  document.querySelectorAll('.drop-before, .drop-after').forEach((x) => x.classList.remove('drop-before', 'drop-after'));
  const box = li.getBoundingClientRect();
  li.classList.add(e.clientY < box.top + box.height / 2 ? 'drop-before' : 'drop-after');
});
document.addEventListener('drop', (e) => {
  const li = dragId && e.target.closest && e.target.closest('[data-custom]');
  if (!li) return;
  e.preventDefault();
  const before = li.classList.contains('drop-before');
  const moving = customTodos.find((x) => x.id === dragId);
  customTodos = customTodos.filter((x) => x.id !== dragId);
  let to = customTodos.findIndex((x) => x.id === li.dataset.custom);
  if (to < 0) to = customTodos.length;
  customTodos.splice(before ? to : to + 1, 0, moving);
  saveCustom();
  dragId = null;
  render(true);
});
document.addEventListener('dragend', () => {
  dragId = null;
  document.querySelectorAll('.is-dragging, .drop-before, .drop-after').forEach((x) => x.classList.remove('is-dragging', 'drop-before', 'drop-after'));
});

// ── Einmaliger Hinweis, sobald der Deepdive freigeschaltet ist ──
function maybeShowDeepdiveIntro() {
  let seen = false;
  try {
    seen = localStorage.getItem('rb_dd_intro') === '1';
  } catch (e) {}
  if (seen || !deepdiveUnlocked() || document.getElementById('ddIntro')) return;
  const box = document.createElement('div');
  box.id = 'ddIntro';
  box.className = 'modal-backdrop';
  box.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="ddIntroTitle">
      <span class="modal-ico">${svg('rocket')}</span>
      <p class="eyebrow">Onboarding geschafft</p>
      <h2 id="ddIntroTitle">Willkommen im <span class="gold">Deepdive</span></h2>
      <ul class="modal-points">
        <li><span>${svg('target')}</span><p>Ab hier entscheidest <strong>du selbst</strong>, welche Themen du angehst und wo du dich intensiver einarbeiten möchtest – ganz ohne feste Reihenfolge.</p></li>
        <li><span>${svg('edit')}</span><p>Deine To-Do-Liste gehört jetzt dir: Unter <strong>„Meine To-Dos“</strong> kannst du eigene Aufgaben anlegen, ändern, löschen und verschieben.</p></li>
      </ul>
      <button type="button" class="btn btn-primary" data-intro-close>Los geht\'s ${svg('arrow')}</button>
    </div>`;
  document.body.appendChild(box);
}

document.addEventListener('click', (e) => {
  const box = document.getElementById('ddIntro');
  if (!box || !(e.target.closest('[data-intro-close]') || e.target === box)) return;
  try {
    localStorage.setItem('rb_dd_intro', '1');
  } catch (err) {}
  box.remove();
  setTrack('deepdive');
  if (currentPage()) location.hash = '#/';
  else render();
});

// Bücherregale: eine Reihe, seitlich scroll- bzw. klickbar (wie bei Amazon)
function updateShelf(list) {
  const row = list.closest('.shelf-row');
  const max = list.scrollWidth - list.clientWidth;
  row.classList.toggle('can-prev', list.scrollLeft > 4);
  row.classList.toggle('can-next', list.scrollLeft < max - 4);
}

function updateShelves() {
  document.querySelectorAll('.shelf-row .js-scroll').forEach(updateShelf);
}

document.addEventListener(
  'scroll',
  (e) => {
    if (e.target.classList && e.target.matches('.shelf-row .js-scroll')) updateShelf(e.target);
  },
  true
);
window.addEventListener('resize', updateShelves);
window.addEventListener('load', updateShelves);

document.addEventListener('change', (e) => {
  const id = e.target.dataset && e.target.dataset.task;
  if (!id) return;
  e.target.checked ? done.add(id) : done.delete(id);
  saveDone();
  // kurz warten, damit die Häkchen-Animation sichtbar ist
  setTimeout(() => render(true), e.target.checked ? 260 : 0);
});

document.addEventListener('click', (e) => {
  const seg = e.target.closest('[data-show]');
  if (seg) {
    try {
      sessionStorage.setItem('rb_show', seg.dataset.show);
    } catch (err) {}
    render(true);
  }
  const ddLink = e.target.closest('a[href^="#/deepdive"]');
  if (ddLink && !deepdiveUnlocked()) {
    e.preventDefault();
    toast(lockedHint());
    return;
  }
  const tr = e.target.closest('[data-track]');
  if (tr && tr.dataset.track === 'deepdive' && !deepdiveUnlocked()) {
    toast(lockedHint());
    return;
  }
  if (tr) {
    setTrack(tr.dataset.track);
    const inPanel = tr.closest('.todo-panel');
    // Topnav & Danach-Leiste führen zum Dashboard, der Umschalter in der Liste bleibt auf der Seite
    if (!inPanel && currentPage()) location.hash = '#/';
    else render(true);
    const list = $('#todoScroll');
    if (list) list.scrollTop = 0;
  }
  const shelfBtn = e.target.closest('[data-shelf]');
  if (shelfBtn) {
    const list = shelfBtn.parentElement.querySelector('.js-scroll');
    list.scrollBy({ left: Number(shelfBtn.dataset.shelf) * list.clientWidth * 0.8, behavior: 'smooth' });
  }
  const toggle = e.target.closest('[data-panel]');
  if (toggle) setPanel(toggle.dataset.panel === 'open');
  const zoom = e.target.closest('[data-zoom]');
  if (zoom) {
    const box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = `<figure><img src="${zoom.dataset.zoom}" alt="" /><figcaption>${zoom.dataset.zoomTitle || ''}</figcaption></figure><button type="button" class="lightbox-close" aria-label="Schließen">✕</button>`;
    box.addEventListener('click', () => box.remove());
    document.body.appendChild(box);
  }
  const seqOpen = e.target.closest('[data-seq-open]');
  if (seqOpen && !done.has(seqOpen.dataset.seqOpen)) {
    done.add(seqOpen.dataset.seqOpen);
    saveDone();
    setTimeout(() => render(true), 50);
  }
  const mtab = e.target.closest('[data-mtab]');
  if (mtab) {
    const id = mtab.dataset.mtab;
    try {
      sessionStorage.setItem('rb_mtab', id);
    } catch (err) {}
    document.querySelectorAll('[data-mtab]').forEach((b) => b.classList.toggle('is-active', b === mtab));
    document.querySelectorAll('[data-mpanel]').forEach((p) => (p.hidden = p.dataset.mpanel !== id));
    updateShelves();
  }
  const jump = e.target.closest('[data-jump]');
  if (jump) {
    const el = document.getElementById(jump.dataset.jump);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  const icsBtn = e.target.closest('[data-ics]');
  if (icsBtn) downloadIcs(icsBtn.dataset.ics);
  if (e.target.closest('#installBtn')) installApp();
  if (e.target.closest('#resetBtn') && confirm('Wirklich alle Häkchen zurücksetzen?')) {
    done = new Set();
    saveDone();
    render();
  }
});

function setPanel(open) {
  const dash = $('#dash');
  if (isMobile()) {
    drawerOpen = open;
    document.body.classList.toggle('no-scroll', open);
    if (dash) dash.classList.toggle('is-drawer-open', open);
  } else {
    panelOpen = open;
    try {
      localStorage.setItem('rb_panel', open ? 'open' : 'closed');
    } catch (e) {}
    if (dash) dash.classList.toggle('is-collapsed', !open);
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') document.querySelectorAll('.lightbox').forEach((x) => x.remove());
  if (e.key === 'Escape' && drawerOpen) setPanel(false);
});

window.addEventListener('hashchange', () => {
  drawerOpen = false;
  render();
  window.scrollTo(0, 0);
});

// Wiederkehrender Kalendertermin: Teamcall jeden Sonntag 21:00
// Wiederkehrende Kalendertermine (.ics) – Zoom-Link steht im Termin
const calendarEvents = {
  teamcall: { title: 'Rise Beyond Teamcall', days: ['SU'], start: '2100', end: '2200' },
  'nxt-live': { title: 'NXT Live-Session', days: ['TU', 'WE', 'TH'], start: '2000', end: '2100', url: 'https://us06web.zoom.us/j/87124426892' },
  'nxt-community': { title: 'NXT Community Call (Basic)', days: ['SU'], start: '1800', end: '1900', url: 'https://us06web.zoom.us/j/6878216076' }
};

function downloadIcs(id = 'teamcall') {
  const ev = calendarEvents[id];
  const codes = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  const d = new Date();
  while (!ev.days.includes(codes[d.getDay()])) d.setDate(d.getDate() + 1);
  const day = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Rise Beyond//Onboarding//DE',
    'BEGIN:VEVENT',
    `UID:rb-${id}-${day}@risebeyond`,
    `DTSTAMP:${day}T000000`,
    `DTSTART:${day}T${ev.start}00`,
    `DTEND:${day}T${ev.end}00`,
    `RRULE:FREQ=WEEKLY;BYDAY=${ev.days.join(',')}`,
    `SUMMARY:${ev.title}`
  ];
  if (ev.url) lines.push(`LOCATION:${ev.url}`, `URL:${ev.url}`, `DESCRIPTION:Zoom: ${ev.url}`);
  lines.push('BEGIN:VALARM', 'TRIGGER:-PT15M', 'ACTION:DISPLAY', `DESCRIPTION:${ev.title} in 15 Minuten`, 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([lines.join('\r\n')], { type: 'text/calendar' }));
  a.download = `${id}.ics`;
  a.click();
}


render();

// ─────────────────────────────────────────────────────────────
//  APP (PWA): Offline-Speicher + „Als App installieren“
// ─────────────────────────────────────────────────────────────

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}

let installPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  installPrompt = e;
});

const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

function installApp() {
  if (isStandalone()) return toast('Du nutzt das Onboarding bereits als App.', 'phone');
  if (installPrompt) {
    installPrompt.prompt();
    installPrompt = null;
    return;
  }
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  toast(
    ios
      ? 'iPhone: Öffne die Seite in Safari, tippe unten auf „Teilen“ und dann auf „Zum Home-Bildschirm“.'
      : 'Tippe im Browser-Menü (⋮) auf „App installieren“ bzw. „Zum Startbildschirm hinzufügen“.',
    'phone'
  );
}

if (isStandalone()) document.documentElement.classList.add('is-app');

