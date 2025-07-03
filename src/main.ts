interface Data {
  personalInfo: PersonalInfo;
  experience: ExperienceItem[];
  certification: CertificationItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  publications: PublicationItem[];
}

interface PersonalInfo {
  name: string;
  title?: string;
  contact?: Record<string, string>;
  image?: string;
  about?: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  details?: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

interface ProjectItem {
  name: string;
  description: string;
  link?: string;
}

interface PublicationItem {
  title: string;
  journal: string;
  year: string;
  link?: string;
}

async function loadData(): Promise<Data> {
  const res = await fetch('data.json');
  return res.json();
}

function createCard(title?: string): HTMLElement {
  const card = document.createElement('section');
  card.className = 'card';
  if (title) {
    const h2 = document.createElement('h2');
    h2.textContent = title;
    card.appendChild(h2);
  }
  return card;
}

function renderPersonalInfo(info: PersonalInfo): HTMLElement {
  const card = createCard();
  if (info.image) {
    const img = document.createElement('img');
    img.src = info.image;
    img.alt = info.name;
    img.className = 'profile';
    card.appendChild(img);
  }
  const name = document.createElement('h2');
  name.textContent = info.name;
  card.appendChild(name);

  if (info.title) {
    const titleEl = document.createElement('div');
    titleEl.textContent = info.title;
    card.appendChild(titleEl);
  }

  if (info.about) {
    const about = document.createElement('p');
    about.textContent = info.about;
    card.appendChild(about);
  }

  if (info.contact) {
    const ul = document.createElement('ul');
    for (const [key, value] of Object.entries(info.contact)) {
      const li = document.createElement('li');
      li.textContent = `${key}: ${value}`;
      ul.appendChild(li);
    }
    card.appendChild(ul);
  }
  return card;
}

function renderListCard(title: string, items: any[], formatter: (item: any) => HTMLElement): HTMLElement {
  const card = createCard(title);
  items.forEach(item => card.appendChild(formatter(item)));
  return card;
}

function experienceFormatter(item: ExperienceItem): HTMLElement {
  const div = document.createElement('div');
  div.className = 'item';
  div.textContent = `${item.role} at ${item.company} (${item.duration}) - ${item.details || ''}`;
  return div;
}

function certificationFormatter(item: CertificationItem): HTMLElement {
  const div = document.createElement('div');
  div.className = 'item';
  const text = `${item.name} - ${item.issuer} (${item.date})`;
  if (item.link) {
    const a = document.createElement('a');
    a.href = item.link;
    a.textContent = text;
    a.target = '_blank';
    div.appendChild(a);
  } else {
    div.textContent = text;
  }
  return div;
}

function educationFormatter(item: EducationItem): HTMLElement {
  const div = document.createElement('div');
  div.className = 'item';
  div.textContent = `${item.degree} at ${item.institution} (${item.duration})`;
  return div;
}

function projectFormatter(item: ProjectItem): HTMLElement {
  const div = document.createElement('div');
  div.className = 'item';
  const text = `${item.name} - ${item.description}`;
  if (item.link) {
    const a = document.createElement('a');
    a.href = item.link;
    a.textContent = text;
    a.target = '_blank';
    div.appendChild(a);
  } else {
    div.textContent = text;
  }
  return div;
}

function publicationFormatter(item: PublicationItem): HTMLElement {
  const div = document.createElement('div');
  div.className = 'item';
  const text = `${item.title}, ${item.journal} (${item.year})`;
  if (item.link) {
    const a = document.createElement('a');
    a.href = item.link;
    a.textContent = text;
    a.target = '_blank';
    div.appendChild(a);
  } else {
    div.textContent = text;
  }
  return div;
}

window.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('container');
  if (!container) return;
  const data = await loadData();
  container.appendChild(renderPersonalInfo(data.personalInfo));
  container.appendChild(renderListCard('Experience', data.experience, experienceFormatter));
  container.appendChild(renderListCard('Certification', data.certification, certificationFormatter));
  container.appendChild(renderListCard('Education', data.education, educationFormatter));
  container.appendChild(renderListCard('Projects', data.projects, projectFormatter));
  container.appendChild(renderListCard('Publications', data.publications, publicationFormatter));
});
