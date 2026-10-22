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
          { kind: 'vorlage', label: 'Vorlage SMART Ziele (Canva)', url: 'https://canva.link/9of6od2nzcwcreb' }
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
      { id: 'g7', text: 'Discord einrichten' },
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
            name: 'Discord',
            logo: 'assets/logos/discord.jpg',
            desc: 'Community & Austausch',
            links: [
              { label: 'Webseite', url: 'https://discord.com/' },
              { label: 'Apple', url: 'https://apps.apple.com/de/app/discord-reden-gamen-chillen/id985746746' },
              { label: 'Android', url: 'https://play.google.com/store/apps/details?id=com.discord' }
            ]
          }
        ],
        tip:
          'WOW, DeepSage & Discord kannst du als App oder im Browser nutzen. Im Browser: <strong>3 Punkte → Teilen → Mehr anzeigen → Zum Home-Bildschirm hinzufügen</strong>. So hast du sie wie eine App auf dem Handy.'
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
      { id: 'm1', text: 'Podcastfolge anhören & 3 Learnings an mich senden' },
      { id: 'm2', text: 'Ein Buch auswählen & feste Lese-/Hörzeiten einplanen' }
    ],
    sections: [
      {
        label: 'Mindset',
        title: 'Podcast',
        text: 'Hör dir diese Podcastfolge aufmerksam an. Notiere deine <strong>3 wichtigsten Learnings</strong> und teile sie anschließend mit mir.',
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
        tip: 'Teile deine wichtigsten Learnings regelmäßig mit mir.'
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
      { id: 't2', text: 'Budgetplanung erstellen & Screenshot an mich senden' },
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
        tip: 'Mach einen Screenshot deiner Budgetplanung und sende ihn an mich.',
        links: [{ kind: 'video', label: 'Teamcall: Money Management', url: 'https://youtu.be/FUGpECrlyug?si=It7KEbLlwGy_GXPL' }]
      },
      {
        label: 'Zeitmanagement',
        title: 'Deine Woche im Griff',
        text: 'Nimm dir <strong>einmal pro Woche</strong> Zeit (am besten Sonntag), um die vergangene Woche zu reflektieren und die kommende zu planen.',
        steps: [
          { t: 'Typischen Tag planen', d: 'Plane einen typischen Tag so genau wie möglich. Nutze den Planer als Hilfe. Schick mir die Planung und hol dir Feedback.' },
          { t: 'Reflektieren', d: 'Was lief gut? Was kannst/solltest du in der kommenden Woche verbessern?' },
          { t: 'Planen', d: 'Plane die kommende Woche und bau die Punkte aus deiner Reflexion ein. Setz dir ein Wochenziel sowie Zwischenziele.' }
        ],
        links: [{ kind: 'vorlage', label: 'Tagesplaner (Canva)', url: 'https://canva.link/zw1ekibks1okwav' }]
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
      { id: 'mk1', text: 'Marketing-Video ansehen & 2 Learnings an mich senden' },
      { id: 'mk2', text: 'Kontaktliste schreiben' },
      { id: 'mk3', text: 'Eine Person auswählen, der du mehr erzählen möchtest' }
    ],
    sections: [
      {
        label: 'Marketing',
        title: 'Video & Learnings',
        text: 'Schau dir dieses Video an und schick mir deine <strong>2 biggest Learnings</strong>.',
        links: [{ kind: 'video', label: 'Video ansehen', url: 'https://youtu.be/skDIfXjJi9Y?si=gIHXeq8H18ginkpm' }]
      },
      {
        label: 'Marketing',
        title: 'Deine Kontaktliste',
        text: 'Schreib alle Personen auf, die du kennst – ohne zu bewerten, ob sie „passen“. Familie, Freunde, Arbeit, Sport, Schule, Social Media …',
        tip: 'Danach: Such dir <strong>eine</strong> Person aus, der du gerne mehr vom Business erzählen möchtest, und sprich mit mir über den nächsten Schritt.'
      }
    ]
  }
];

// ─────────────────────────────────────────────────────────────
//  DEEPDIVE – vertiefende Themen nach dem Onboarding.
//  Links mit url: '' erscheinen als „Link folgt“ – einfach ergänzen.
// ─────────────────────────────────────────────────────────────

const deepdive = [
  {
    slug: 'signal-app',
    title: 'Signal App',
    short: 'Syntra im Detail: Signale lesen, filtern und sauber umsetzen.',
    icon: 'signal',
    intro:
      'Du kennst Syntra aus dem Onboarding – jetzt holst du alles aus der App heraus. Ziel: Signale schnell verstehen, diszipliniert umsetzen und deine Ergebnisse dokumentieren.',
    tasks: [
      { id: 'd-sig1', text: 'Syntra Tutorial komplett durcharbeiten' },
      { id: 'd-sig2', text: 'Benachrichtigungen & Märkte in Syntra einstellen' },
      { id: 'd-sig3', text: '10 Signale nach Plan umsetzen & dokumentieren' }
    ],
    sections: [
      {
        label: 'Signal App',
        title: 'Tutorials',
        text: 'Schau dir beide Tutorials noch einmal in Ruhe an – diesmal mit Fokus auf die Details: Einstieg, Stop Loss, Take Profit und Lotgröße.',
        links: [
          { kind: 'video', label: 'Syntra Tutorial', url: 'https://wowpowers.com/de/academy-player/1bd790c3-906b-410e-aa61-32cbe3ebb1f6' },
          { kind: 'video', label: 'MT5 Tutorial', url: 'https://youtu.be/mRtXre60L-Q?feature=shared' }
        ]
      },
      {
        label: 'Signal App',
        title: 'Trading-Journal',
        text: 'Halte jedes umgesetzte Signal fest: Datum, Markt, Einstieg, Ergebnis und was dir aufgefallen ist. Nach 10 Signalen besprechen wir dein Journal gemeinsam.',
        tip: 'Ein einfaches Notizbuch oder eine Tabelle reicht völlig aus.'
      },
      {
        label: 'Signal App',
        title: 'Index-Namen beim Broker',
        text: 'Zur Erinnerung – je nach Broker heißt derselbe Markt in MT5 anders:',
        table: [
          ['DJ30', 'US30 · DJI · WS30 · DowJones · US30.cash · US30m'],
          ['NASUSD', 'NAS100 · USTEC · US100 · NAS100.cash · NAS100m · NASDAQ']
        ]
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
      { id: 'd-hx1', text: 'Helix-Einführung ansehen' },
      { id: 'd-hx2', text: 'Helix einrichten & mit deinem Konto verbinden' },
      { id: 'd-hx3', text: 'Einstellungen mit deiner Mentorin besprechen' }
    ],
    sections: [
      {
        label: 'Helix',
        title: 'Einführung',
        text: 'Schau dir die Einführung an und notiere dir offene Fragen.',
        links: [{ kind: 'video', label: 'Helix Einführung', url: '' }]
      },
      {
        label: 'Helix',
        title: 'Einrichten',
        text: 'Richte Helix ein und verbinde es mit deinem Konto. Bevor du startest, gehen wir die Einstellungen gemeinsam durch.',
        links: [{ kind: 'link', label: 'Helix', url: '' }]
      }
    ]
  },
  {
    slug: 'maerkte',
    title: 'Stocks · Forex · Crypto · Indizes',
    short: 'Die vier Märkte verstehen und Unterschiede kennen.',
    icon: 'globe',
    intro: 'Jeder Markt funktioniert etwas anders. Hier vertiefst du dein Wissen zu Aktien, Devisen, Kryptowährungen und Indizes.',
    tasks: [
      { id: 'd-mk1', text: 'Kurs „Stocks Basics“ abschließen' },
      { id: 'd-mk2', text: 'Kurs „Forex Basics“ wiederholen' },
      { id: 'd-mk3', text: 'Crypto-Grundlagen lernen' },
      { id: 'd-mk4', text: 'Indizes verstehen (Dow Jones, Nasdaq …)' }
    ],
    sections: [
      {
        label: 'Stocks',
        title: 'Aktien',
        text: 'Lerne die Grundlagen zu Aktien. Wenn du investieren möchtest, richte xConnectly und eToro ein und nutze die Listen von Miguel.',
        links: [
          { kind: 'kurs', label: 'Kurs: Stocks Basics', url: 'https://wowpowers.com/de/catalog/paths/6b425af5-d272-46da-82d4-06cda3d3236d' },
          { kind: 'link', label: 'xConnectly Registrierung', url: 'https://xconnectly.com/portal-signup?ref_id=XOP73UBZRDQT' },
          { kind: 'video', label: 'Anleitung eToro', url: 'https://youtube.com/playlist?list=PLFRDC10MBhTk&si=cedX7GaSlPiw1nHk' }
        ]
      },
      {
        label: 'Forex',
        title: 'Devisen',
        text: 'Frische die Forex-Basics auf: Währungspaare, Pips, Lotgrößen und Hebel.',
        links: [{ kind: 'kurs', label: 'Kurs: Forex Basics', url: 'https://wowpowers.com/de/catalog/paths/df507cbf-847e-4291-9550-e153eca9ac27' }]
      },
      {
        label: 'Crypto',
        title: 'Kryptowährungen',
        text: 'Bitcoin, Altcoins, Wallets und Volatilität – die wichtigsten Grundlagen für den Krypto-Markt.',
        links: [{ kind: 'kurs', label: 'Crypto Grundlagen', url: '' }]
      },
      {
        label: 'Indizes',
        title: 'Indizes',
        text: 'Ein Index bündelt viele Aktien in einem Wert – z. B. der Dow Jones (30 große US-Unternehmen) oder der Nasdaq 100 (Tech). Bei deinem Broker heißen sie oft anders:',
        table: [
          ['DJ30', 'US30 · DJI · WS30 · DowJones · US30.cash · US30m'],
          ['NASUSD', 'NAS100 · USTEC · US100 · NAS100.cash · NAS100m · NASDAQ']
        ]
      }
    ]
  },
  {
    slug: 'nxt',
    title: 'NXT',
    short: 'NXT kennenlernen – über WOW und die Community auf Discord.',
    icon: 'rocket',
    intro: 'NXT ist der nächste Level-Up. Die Inhalte findest du in WOW, den Austausch mit dem Team auf Discord.',
    tasks: [
      { id: 'd-nx1', text: 'NXT-Inhalte in WOW starten' },
      { id: 'd-nx2', text: 'Dem NXT-Kanal auf Discord beitreten' },
      { id: 'd-nx3', text: 'Erste Learnings mit deiner Mentorin teilen' }
    ],
    sections: [
      {
        label: 'NXT',
        title: 'Inhalte & Community',
        text: 'Starte mit den NXT-Inhalten in WOW und tritt dem Discord-Kanal bei, um Fragen zu stellen und dich mit dem Team auszutauschen.',
        links: [
          { kind: 'kurs', label: 'NXT in WOW', url: '' },
          { kind: 'link', label: 'Discord', url: 'https://discord.com/' }
        ]
      }
    ]
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    short: 'Social Media, Content und Gespräche – dein Business wachsen lassen.',
    icon: 'growth',
    intro: 'Aufbauend auf dem Onboarding lernst du hier, wie du sichtbar wirst und Gespräche führst, ohne aufdringlich zu sein.',
    tasks: [
      { id: 'd-mt1', text: 'Social-Media-Profil optimieren' },
      { id: 'd-mt2', text: 'Content-Plan für eine Woche erstellen' },
      { id: 'd-mt3', text: '5 Gespräche aus deiner Kontaktliste führen' }
    ],
    sections: [
      {
        label: 'Marketing',
        title: 'Sichtbar werden',
        text: 'Optimiere dein Profil (Bild, Bio, Highlights) und plane eine Woche Content: Zeig deinen Alltag, deine Learnings und deinen Weg.',
        links: [{ kind: 'video', label: 'Marketing Deepdive', url: '' }]
      },
      {
        label: 'Marketing',
        title: 'Gespräche führen',
        text: 'Nimm deine Kontaktliste aus dem Onboarding und führe die ersten 5 Gespräche. Erzähl ehrlich, was du machst, und frag nach Interesse.',
        tip: 'Besprich jedes Gespräch kurz mit deiner Mentorin – so lernst du am schnellsten.'
      }
    ]
  },
  {
    slug: 'sgm-crypto',
    title: 'SGM Crypto',
    short: 'Krypto-Automationen in SageMaster einrichten.',
    icon: 'coin',
    intro: 'Mit SageMaster kannst du auch Krypto automatisiert handeln. Hier richtest du deine ersten Crypto-Automationen sicher ein.',
    tasks: [
      { id: 'd-sc1', text: 'SGM-Crypto-Inhalte durcharbeiten' },
      { id: 'd-sc2', text: 'Börse/Wallet mit SageMaster verbinden' },
      { id: 'd-sc3', text: 'Erste Crypto-Automation einrichten' }
    ],
    sections: [
      {
        label: 'SGM Crypto',
        title: 'Plattform & Kurs',
        text: 'Arbeite die Crypto-Inhalte durch und richte erst danach deine erste Automation ein – mit kleinem Risiko.',
        links: [
          { kind: 'link', label: 'app.sagemaster.io', url: 'https://app.sagemaster.io/' },
          { kind: 'kurs', label: 'SGM Crypto Kurs', url: '' }
        ]
      }
    ]
  },
  {
    slug: 'sgm-forex',
    title: 'SGM Forex',
    short: 'Forex-Automationen in SageMaster vertiefen.',
    icon: 'laptop',
    intro: 'Du hast im Onboarding deine erste Automation eingerichtet. Jetzt vertiefst du SGM Forex und optimierst deine Einstellungen.',
    tasks: [
      { id: 'd-sf1', text: 'Product Mastery wiederholen' },
      { id: 'd-sf2', text: 'SGM Fast Track abschließen' },
      { id: 'd-sf3', text: 'Automation mit deiner Mentorin überprüfen' }
    ],
    sections: [
      {
        label: 'SGM Forex',
        title: 'Kurse',
        text: 'Geh die Kurse noch einmal durch und überprüfe danach deine laufenden Automationen.',
        links: [
          { kind: 'kurs', label: 'Product Mastery', url: 'https://wowpowers.com/de/catalog/paths/2a3565b0-b1fb-434f-86e2-53fb255b69ca' },
          { kind: 'kurs', label: 'SGM Fast Track', url: 'https://wowpowers.com/de/catalog/paths/e1d77da5-fd92-4024-a34d-e94b43efd9b6' },
          { kind: 'link', label: 'app.sagemaster.io', url: 'https://app.sagemaster.io/' }
        ]
      }
    ]
  },
  {
    slug: 'mindset',
    title: 'Mindset (Podcast)',
    short: 'Regelmäßig dranbleiben: Podcasts, Bücher, Learnings.',
    icon: 'mic',
    intro: 'Mindset ist kein einmaliges Thema. Mach Podcasts und Bücher zu einer festen Gewohnheit und teile regelmäßig deine Learnings.',
    tasks: [
      { id: 'd-ms1', text: 'Jede Woche eine Podcastfolge hören' },
      { id: 'd-ms2', text: 'Ein Buch aus der Liste beenden' },
      { id: 'd-ms3', text: 'Wöchentlich 3 Learnings an mich senden' }
    ],
    sections: [
      {
        label: 'Podcast',
        title: 'Deine Podcast-Routine',
        text: 'Plane dir feste Zeiten für Podcasts ein – z. B. beim Sport, Kochen oder auf dem Arbeitsweg. Starte mit dieser Folge:',
        links: [
          { kind: 'audio', label: 'Podcastfolge auf Spotify', url: 'https://open.spotify.com/episode/3q2O8EFjkStwgKQSIntWZN?si=ODxBpSQZQwuqzQjT-AEN9Q&t=649' }
        ]
      },
      {
        label: 'Bücher',
        title: 'Bibliothek',
        books: library,
        tip: podcastTip
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
  { label: 'Stocks', slug: 'maerkte' },
  { label: 'NXT', slug: 'nxt' },
  { label: 'Marketing', slug: 'marketing' },
  { label: 'SGM Crypto', slug: 'sgm-crypto' }
];

phases.forEach((p, i) => {
  p.n = i + 1;
  p.track = 'onboarding';
});
deepdive.forEach((p, i) => {
  p.n = i + 1;
  p.track = 'deepdive';
});

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
  stocks: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-7"/><path d="M16 7h4v4"/>'
};

const svg = (name, cls = 'ico') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

const required = (p) => p.tasks.filter((t) => !t.optional);
const doneCount = (tasks) => tasks.filter((t) => done.has(t.id)).length;
const allRequired = () => phases.flatMap(required);

// Deepdive ist erst nach dem kompletten Onboarding freigeschaltet
// Hauptschalter: false = Deepdive ist für alle gesperrt (auch nach dem Onboarding).
// Auf true setzen, sobald der Deepdive freigegeben werden soll.
const DEEPDIVE_OPEN = false;

const deepdiveUnlocked = () => DEEPDIVE_OPEN && allRequired().every((t) => done.has(t.id));

function lockedHint() {
  if (!DEEPDIVE_OPEN) return 'Der Deepdive ist aktuell noch gesperrt und wird bald freigeschaltet. Konzentrier dich bis dahin auf dein Onboarding.';
  const all = allRequired();
  return `Der Deepdive wird freigeschaltet, sobald du dein Onboarding abgeschlossen hast (${doneCount(all)}/${all.length} To-dos erledigt).`;
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
  return `<a class="btn" href="${l.url}" target="_blank" rel="noopener">${svg(l.kind || 'link')}<span>${l.label}</span></a>`;
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
            <span class="num num-xs">${complete ? svg('check') : ph.n}</span>
            <span class="todo-sep-title">${ph.title}</span>
            <span class="todo-count">${d}/${req.length}</span>
          </a>
        </li>
        ${tasks.map((t) => taskItem(t, t === next, here && 'in-phase')).join('')}`;
    })
    .join('');

  return `
    <aside class="todo-panel" aria-label="Deine To-dos">
      <button type="button" class="panel-rail" data-panel="open" aria-label="To-do-Liste ausklappen" title="To-do-Liste ausklappen">
        ${svg('panelOpen')}
        <span class="ring-wrap ring-sm">${ring(p, 46)}<span class="ring-label"><strong>${p}</strong></span></span>
        <span class="rail-text">${tracks[track].label} · ${finished}/${total}</span>
      </button>

      <div class="panel-inner">
        <div class="panel-head">
          <div>
            <h2>Deine To-dos</h2>
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
          <ul class="tasks todo-list">${listItems}</ul>
          ${next ? '' : `<p class="todo-empty">${svg('check')} Alles erledigt – stark!</p>`}
        </div>
      </div>
    </aside>

    <div class="panel-backdrop" data-panel="close"></div>
    <button type="button" class="todo-fab" data-panel="open">
      ${svg('list')}<span>To-dos</span><strong>${finished}/${total}</strong>
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
  const nextPage = next && list.find((ph) => ph.tasks.includes(next));
  const pagesDone = list.filter((ph) => doneCount(required(ph)) === required(ph).length).length;

  const cards = list
    .map((ph) => {
      const req = required(ph);
      const d = doneCount(req);
      const pp = pct(d, req.length);
      const state = pp === 100 ? 'Erledigt' : ph === nextPage ? 'Aktuell' : d ? 'Begonnen' : 'Offen';
      return `
        <a class="road-card ${pp === 100 ? 'is-complete' : ''} ${ph === nextPage ? 'is-current' : ''}" href="${pageHref(ph)}">
          <span class="num">${ph.n}</span>
          <span class="road-body">
            <span class="road-top"><span class="pill">${state}</span><span class="road-meta">${d}/${req.length}<span class="meta-word"> erledigt</span></span>${svg(ph.icon, 'ico road-ico')}</span>
            <span class="road-title">${ph.title}</span>
            <span class="road-short">${ph.short}</span>
            <span class="bar"><span class="bar-fill" style="width:${pp}%"></span></span>
          </span>
        </a>`;
    })
    .join('');

  const title = isDeep
    ? `<span class="h1-small">Dein</span> <span class="gold">Deepdive</span>`
    : `<span class="h1-small">Deine</span> <span class="gold">Onboarding Roadmap</span>`;
  const lead = isDeep
    ? `${list.length} Themen, mit denen du nach dem Onboarding tiefer einsteigst. Such dir gemeinsam mit deiner Mentorin aus, womit du startest.`
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
              next
                ? `<a class="btn btn-primary" href="${pageHref(nextPage)}">Weiter mit ${isDeep ? '' : `Schritt ${nextPage.n}: `}${nextPage.title} ${svg('arrow')}</a>`
                : `<p class="lead"><strong>${isDeep ? 'Alle Deepdive-Themen geschafft!' : 'Du hast alle Schritte geschafft!'}</strong> Melde dich bei deiner Mentorin für die nächsten Themen.</p>`
            }
          </div>
          <div class="hero-progress">
            <div class="ring-wrap">${ring(p, 150)}<span class="ring-label"><strong>${p}%</strong><small>geschafft</small></span></div>
            <div class="hero-stats">
              <div><strong>${finished}</strong><span>von ${total} To-dos</span></div>
              <div><strong>${pagesDone}</strong><span>von ${list.length} ${isDeep ? 'Themen' : 'Schritten'}</span></div>
            </div>
          </div>
        </section>

        <section class="block road-block">
          <div class="block-head">
            <h2>${isDeep ? 'Deepdive-Themen' : 'Die Roadmap'}</h2>
            ${trackSeg('seg-lg')}
          </div>
          <div class="road-grid road-grid-4">${cards}</div>
        </section>

        ${isDeep ? '' : afterBlock()}
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

function renderSection(s) {
  let html = `<article class="card ${s.optional ? 'is-optional' : ''}">
    <p class="card-label">${s.label}</p>
    <h3>${s.title}</h3>`;
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
          <ol class="books">${cat.books.map(bookItem).join('')}</ol>
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
  if (s.calendar)
    html += `<div class="links"><button type="button" class="btn" id="icsBtn">${svg('cal')}<span>In Kalender eintragen (.ics)</span></button></div>`;
  if (s.links) html += `<div class="links">${s.links.map(linkBtn).join('')}</div>`;
  return html + '</article>';
}

function renderPhase(ph) {
  const list = tracks[ph.track].list;
  const unit = tracks[ph.track].unit;
  const prev = list[ph.n - 2];
  const next = list[ph.n];
  const lastOnboarding = ph.track === 'onboarding' && !next;

  let nextLink;
  if (next) {
    nextLink = `<a class="pager-link is-next" href="${pageHref(next)}"><span><small>${unit} ${next.n}</small>${next.title}</span>${svg('arrow')}</a>`;
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
          <span class="num num-lg">${ph.n}</span>
          <div>
            <p class="eyebrow">${unit} ${ph.n} von ${list.length}</p>
            <h1 class="gold">${ph.title}</h1>
            <p class="lead">${ph.intro}</p>
          </div>
          ${svg(ph.icon, 'ico phase-ico')}
        </section>

        <div class="phase-main">${ph.sections.map(renderSection).join('')}</div>

        <nav class="pager">
          ${prev ? `<a class="pager-link" href="${pageHref(prev)}">${svg('back')}<span><small>${unit} ${prev.n}</small>${prev.title}</span></a>` : '<span></span>'}
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
}

// Bücherregale: eine Reihe, seitlich scroll- bzw. klickbar (wie bei Amazon)
function updateShelf(list) {
  const row = list.closest('.shelf-row');
  const max = list.scrollWidth - list.clientWidth;
  row.classList.toggle('can-prev', list.scrollLeft > 4);
  row.classList.toggle('can-next', list.scrollLeft < max - 4);
}

function updateShelves() {
  document.querySelectorAll('.shelf-row .books').forEach(updateShelf);
}

document.addEventListener(
  'scroll',
  (e) => {
    if (e.target.classList && e.target.matches('.shelf-row .books')) updateShelf(e.target);
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
    const list = shelfBtn.parentElement.querySelector('.books');
    list.scrollBy({ left: Number(shelfBtn.dataset.shelf) * list.clientWidth * 0.8, behavior: 'smooth' });
  }
  const toggle = e.target.closest('[data-panel]');
  if (toggle) setPanel(toggle.dataset.panel === 'open');
  if (e.target.closest('#icsBtn')) downloadIcs();
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
  if (e.key === 'Escape' && drawerOpen) setPanel(false);
});

window.addEventListener('hashchange', () => {
  drawerOpen = false;
  render();
  window.scrollTo(0, 0);
});

// Wiederkehrender Kalendertermin: Teamcall jeden Sonntag 21:00
function downloadIcs() {
  const d = new Date();
  d.setDate(d.getDate() + ((7 - d.getDay()) % 7));
  const day = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Rise Beyond//Onboarding//DE',
    'BEGIN:VEVENT',
    `UID:rb-teamcall-${day}@risebeyond`,
    `DTSTAMP:${day}T000000`,
    `DTSTART:${day}T210000`,
    `DTEND:${day}T220000`,
    'RRULE:FREQ=WEEKLY;BYDAY=SU',
    'SUMMARY:Rise Beyond Teamcall',
    'BEGIN:VALARM',
    'TRIGGER:-PT15M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Teamcall in 15 Minuten',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  a.download = 'rise-beyond-teamcall.ics';
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

