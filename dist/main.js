"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('data.json');
        return res.json();
    });
}
function createCard(title) {
    const card = document.createElement('section');
    card.className = 'card';
    if (title) {
        const h2 = document.createElement('h2');
        h2.textContent = title;
        card.appendChild(h2);
    }
    return card;
}
function renderPersonalInfo(info) {
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
function renderListCard(title, items, formatter) {
    const card = createCard(title);
    items.forEach(item => card.appendChild(formatter(item)));
    return card;
}
function experienceFormatter(item) {
    const div = document.createElement('div');
    div.className = 'item';
    div.textContent = `${item.role} at ${item.company} (${item.duration}) - ${item.details || ''}`;
    return div;
}
function certificationFormatter(item) {
    const div = document.createElement('div');
    div.className = 'item';
    const text = `${item.name} - ${item.issuer} (${item.date})`;
    if (item.link) {
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = text;
        a.target = '_blank';
        div.appendChild(a);
    }
    else {
        div.textContent = text;
    }
    return div;
}
function educationFormatter(item) {
    const div = document.createElement('div');
    div.className = 'item';
    div.textContent = `${item.degree} at ${item.institution} (${item.duration})`;
    return div;
}
function projectFormatter(item) {
    const div = document.createElement('div');
    div.className = 'item';
    const text = `${item.name} - ${item.description}`;
    if (item.link) {
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = text;
        a.target = '_blank';
        div.appendChild(a);
    }
    else {
        div.textContent = text;
    }
    return div;
}
function publicationFormatter(item) {
    const div = document.createElement('div');
    div.className = 'item';
    const text = `${item.title}, ${item.journal} (${item.year})`;
    if (item.link) {
        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = text;
        a.target = '_blank';
        div.appendChild(a);
    }
    else {
        div.textContent = text;
    }
    return div;
}
window.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    const container = document.getElementById('container');
    if (!container)
        return;
    const data = yield loadData();
    container.appendChild(renderPersonalInfo(data.personalInfo));
    container.appendChild(renderListCard('Experience', data.experience, experienceFormatter));
    container.appendChild(renderListCard('Certification', data.certification, certificationFormatter));
    container.appendChild(renderListCard('Education', data.education, educationFormatter));
    container.appendChild(renderListCard('Projects', data.projects, projectFormatter));
    container.appendChild(renderListCard('Publications', data.publications, publicationFormatter));
}));
