const steps = {
  1: {
    number: 1,
    kicker: 'Schritt 1',
    title: 'Ziele & Grundlagen',
    description:
      'Definiere deine Ziele, sammle die wichtigsten Grundlagen und baue die erste Struktur auf, damit du ohne Verwirrung und mit klarer Richtung loslegen kannst.',
    videos: [
      { label: 'Warum Ziele wichtig sind', url: 'https://www.youtube.com/results?search_query=zielsetzung+grundlagen+lernen' },
      { label: 'Einführung in die Grundlagen', url: 'https://www.youtube.com/results?search_query=grundlagen+lernen+einfach+erkl%C3%A4rt' }
    ],
    materials: [
      { label: 'Ziel-Checkliste', tag: 'PDF', url: 'https://www.canva.com/' },
      { label: 'Grundlagen-Template', tag: 'DOC', url: 'https://notion.so/' }
    ]
  },
  2: {
    number: 2,
    kicker: 'Schritt 2',
    title: 'Mindset & Syntra',
    description:
      'Baue an deinem Mindset, deiner Lernroutine und deiner inneren Klarheit. Dieses Kapitel hilft dir, konsequent zu bleiben und mit den richtigen Gewohnheiten weiterzukommen.',
    videos: [
      { label: 'Mindset für langfristigen Erfolg', url: 'https://www.youtube.com/results?search_query=mindset+erfolg+langfristig' },
      { label: 'Gewohnheiten gezielt bauen', url: 'https://www.youtube.com/results?search_query=gewohnheiten+bauen+erfolgreich' }
    ],
    materials: [
      { label: 'Routine-Planer', tag: 'PDF', url: 'https://www.canva.com/' },
      { label: 'Motivations-Tracker', tag: 'XLS', url: 'https://www.google.com/sheets/about/' }
    ]
  },
  3: {
    number: 3,
    kicker: 'Schritt 3',
    title: 'Basic Onboarding Trading',
    description:
      'Lerne die wichtigsten Begriffe, Charts, Orders und Risikomanagement. Das ist die Grundlage, damit du später mit mehr Sicherheit und weniger Panik handeln kannst.',
    videos: [
      { label: 'Trading Basics einfach erklärt', url: 'https://www.youtube.com/results?search_query=trading+basis+einfach+erkl%C3%A4rt' },
      { label: 'Charts und Orders verstehen', url: 'https://www.youtube.com/results?search_query=charts+orders+trading+erklaert' }
    ],
    materials: [
      { label: 'Trading-Glossar', tag: 'PDF', url: 'https://www.canva.com/' },
      { label: 'Risiko-Checkliste', tag: 'CHECK', url: 'https://www.google.com/' }
    ]
  },
  4: {
    number: 4,
    kicker: 'Schritt 4',
    title: 'Time & Money Management',
    description:
      'Plane deine Zeit bewusst, setze Prioritäten und gestalte deinen Umgang mit Geld so, dass du Entscheidungen mit Ruhe und Struktur treffen kannst.',
    videos: [
      { label: 'Zeitmanagement für Anfänger', url: 'https://www.youtube.com/results?search_query=zeitmanagement+anf%C3%A4nger+einfach' },
      { label: 'Geldmanagement einfach erklärt', url: 'https://www.youtube.com/results?search_query=geldmanagement+einfach+erkl%C3%A4rt' }
    ],
    materials: [
      { label: 'Zeitplan Vorlage', tag: 'PDF', url: 'https://www.canva.com/' },
      { label: 'Budget-Tracker', tag: 'SHEET', url: 'https://www.google.com/sheets/about/' }
    ]
  },
  5: {
    number: 5,
    kicker: 'Schritt 5',
    title: 'SageMaster',
    description:
      'Lerne die Grundlagen von Automationen und baue deine erste Struktur auf, damit du repetetive Aufgaben einfacher und klarer umsetzen kannst.',
    videos: [
      { label: 'Automationen einfach erklärt', url: 'https://www.youtube.com/results?search_query=automatisierung+einfach+erkl%C3%A4rt' },
      { label: 'SageMaster Einführung', url: 'https://www.youtube.com/results?search_query=sagemaster+einf%C3%BChrung' }
    ],
    materials: [
      { label: 'Automation-Checkliste', tag: 'PDF', url: 'https://www.canva.com/' },
      { label: 'Übungsaufgabe', tag: 'TASK', url: 'https://www.google.com/' }
    ]
  },
  6: {
    number: 6,
    kicker: 'Schritt 6',
    title: 'Marketing',
    description:
      'Lerne die Grundlagen des Marketings und setze deine ersten Schritte gezielt um, um Sichtbarkeit, Vertrauen und eine klare Position aufzubauen.',
    videos: [
      { label: 'Marketing für Einsteiger', url: 'https://www.youtube.com/results?search_query=marketing+f%C3%BCr+einsteiger' },
      { label: 'Erste Schritte im Marketing', url: 'https://www.youtube.com/results?search_query=erste+schritte+marketing+anfaenger' }
    ],
    materials: [
      { label: 'Marketing-Plan', tag: 'PDF', url: 'https://www.canva.com/' },
      { label: 'Posting-Template', tag: 'DOC', url: 'https://notion.so/' }
    ]
  },
  7: {
    number: 7,
    kicker: 'Schritt 7',
    title: 'Next Roadmaps',
    description:
      'Lerne die Grundlagen des Marketings und setze deine ersten Schritte gezielt um, um Sichtbarkeit, Vertrauen und eine klare Position aufzubauen.',
    videos: [
      { label: 'Marketing für Einsteiger', url: 'https://www.youtube.com/results?search_query=marketing+f%C3%BCr+einsteiger' },
      { label: 'Erste Schritte im Marketing', url: 'https://www.youtube.com/results?search_query=erste+schritte+marketing+anfaenger' }
    ],
    materials: [
      { label: 'Marketing-Plan', tag: 'PDF', url: 'https://www.canva.com/' },
      { label: 'Posting-Template', tag: 'DOC', url: 'https://notion.so/' }
    ]
  }
};

const stepCards = document.querySelectorAll('.step-card');
const detailNumber = document.getElementById('detailNumber');
const detailKicker = document.getElementById('detailKicker');
const detailTitle = document.getElementById('detailTitle');
const detailDescription = document.getElementById('detailDescription');
const videoList = document.getElementById('videoList');
const materialList = document.getElementById('materialList');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const heroBadge = document.getElementById('heroBadge');
const prevStepBtn = document.getElementById('prevStep');
const nextStepBtn = document.getElementById('nextStep');

let currentStep = 1;

function renderResources(items, parentElement, type) {
  parentElement.innerHTML = '';

  items.forEach((item) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'resource-link';

    const label = document.createElement('span');
    label.className = 'resource-label';
    label.textContent = item.label;

    const tag = document.createElement('span');
    tag.className = 'resource-tag';
    tag.textContent = type === 'video' ? 'Video' : item.tag;

    link.append(label, tag);
    listItem.appendChild(link);
    parentElement.appendChild(listItem);
  });
}

function renderStep(stepId) {
  const step = steps[stepId];
  if (!step) return;

  currentStep = stepId;

  detailNumber.textContent = step.number;
  detailKicker.textContent = step.kicker;
  detailTitle.textContent = step.title;
  detailDescription.textContent = step.description;
  progressText.textContent = `${step.number} / 7`;
  progressFill.style.width = `${(step.number / 7) * 100}%`;
  heroBadge.textContent = `7 Module • ${step.number}/7 aktiv`;

  renderResources(step.videos, videoList, 'video');
  renderResources(step.materials, materialList, 'material');

  stepCards.forEach((card) => {
    card.classList.toggle('is-active', Number(card.dataset.step) === stepId);
  });

  prevStepBtn.disabled = stepId === 1;
  prevStepBtn.style.opacity = stepId === 1 ? '0.5' : '1';
  prevStepBtn.style.cursor = stepId === 1 ? 'not-allowed' : 'pointer';

  nextStepBtn.textContent = stepId === 7 ? 'Fertig' : 'Nächster Schritt';
}

stepCards.forEach((card) => {
  card.addEventListener('click', () => {
    renderStep(Number(card.dataset.step));
  });
});

prevStepBtn.addEventListener('click', () => {
  if (currentStep > 1) {
    renderStep(currentStep - 1);
  }
});

nextStepBtn.addEventListener('click', () => {
  if (currentStep < 7) {
    renderStep(currentStep + 1);
  } else {
    renderStep(1);
  }
});

renderStep(1);
