/* ReelResearch — video-first research repository
 * A TikTok-style vertical feed reimagined for research clips:
 * user interviews, usability sessions, diary entries.
 */

// ---------- Sample data ----------
const CLIPS = [
    {
        id: 'c1',
        participant: 'P014',
        participantName: 'Priya, 34 · Small business owner',
        initial: 'P',
        study: 'Checkout Friction — Round 3',
        method: 'Usability Test',
        title: 'Abandons cart when asked to create an account',
        quote: '"Why do I have to sign up just to see shipping? I\'m out."',
        tags: ['checkout', 'friction', 'account-wall', 'trust'],
        gradient: 'linear-gradient(135deg, #2a1b4b 0%, #ff3b6b 100%)',
        timecode: '00:42',
        duration: 38,
        insights: 24,
        annotations: 7,
        saves: 12,
        views: 148,
        recorded: '2026-03-14',
        researcher: 'Morgan Reyes',
        transcript: [
            { t: '00:38', s: "Okay so I've added the blender, and I'm tapping checkout…" },
            { t: '00:42', s: "Wait, why do I have to sign up just to see shipping? I'm out.", hl: true },
            { t: '00:48', s: 'If I wanted to make an account I would — I just want to know what this costs.' },
            { t: '00:55', s: "I'll probably go back to Amazon. Sorry." }
        ]
    },
    {
        id: 'c2',
        participant: 'P007',
        participantName: 'Dana, 52 · Nurse manager',
        initial: 'D',
        study: 'Scheduling App Diary — Week 2',
        method: 'Diary Study',
        title: 'Uses screenshots as a workaround for missing export',
        quote: '"I screenshot the whole month because there is no other way to share it."',
        tags: ['workaround', 'sharing', 'export', 'enterprise'],
        gradient: 'linear-gradient(135deg, #0f2a4a 0%, #6f5cff 100%)',
        timecode: '01:15',
        duration: 52,
        insights: 41,
        annotations: 12,
        saves: 28,
        views: 312,
        recorded: '2026-03-22',
        researcher: 'Jordan Kim',
        transcript: [
            { t: '01:10', s: 'So when my director asks for the week…' },
            { t: '01:15', s: 'I screenshot the whole month because there is no other way to share it.', hl: true },
            { t: '01:22', s: 'Then I paste it into an email. It looks terrible but it works.' },
            { t: '01:31', s: "I've been asking for an export button for two years." }
        ]
    },
    {
        id: 'c3',
        participant: 'P021',
        participantName: 'Marcus, 28 · Freelance designer',
        initial: 'M',
        study: 'Pricing Perception Study',
        method: 'Moderated Interview',
        title: 'Misreads the annual discount as a hidden fee',
        quote: '"Wait, is this charging me for a whole year up front? That feels sneaky."',
        tags: ['pricing', 'trust', 'annual-plans', 'transparency'],
        gradient: 'linear-gradient(135deg, #4b1e2d 0%, #ffb020 100%)',
        timecode: '07:03',
        duration: 44,
        insights: 19,
        annotations: 9,
        saves: 8,
        views: 201,
        recorded: '2026-04-02',
        researcher: 'Morgan Reyes',
        transcript: [
            { t: '06:58', s: "I'm looking at the plans page…" },
            { t: '07:03', s: "Wait, is this charging me for a whole year up front? That feels sneaky.", hl: true },
            { t: '07:11', s: "The 20% off is nice but I don't know if I want to commit." },
            { t: '07:18', s: "I'd rather see the monthly price first and then the discount as an option." }
        ]
    },
    {
        id: 'c4',
        participant: 'P033',
        participantName: 'Aisha, 41 · Ops lead',
        initial: 'A',
        study: 'Admin Console Field Study',
        method: 'Field Study',
        title: 'Creates a spreadsheet to track what the admin panel cannot',
        quote: '"The dashboard is pretty but I still track everything in this spreadsheet."',
        tags: ['admin', 'reporting', 'gap', 'spreadsheet-as-app'],
        gradient: 'linear-gradient(135deg, #1a3d2e 0%, #2cd980 100%)',
        timecode: '12:40',
        duration: 61,
        insights: 33,
        annotations: 15,
        saves: 22,
        views: 278,
        recorded: '2026-04-08',
        researcher: 'Riya Patel',
        transcript: [
            { t: '12:35', s: "Let me show you my real workflow. I know it looks bad…" },
            { t: '12:40', s: "The dashboard is pretty but I still track everything in this spreadsheet.", hl: true },
            { t: '12:49', s: "I copy numbers over every Friday. It takes about an hour." },
            { t: '12:58', s: "If I could just export by team I wouldn't need any of this." }
        ]
    },
    {
        id: 'c5',
        participant: 'P045',
        participantName: 'Sam, 19 · University student',
        initial: 'S',
        study: 'Onboarding Round 4',
        method: 'Moderated Interview',
        title: 'Skips the tutorial and learns by tapping everything',
        quote: '"I just close tutorials. If I can\'t figure it out in 30 seconds I delete the app."',
        tags: ['onboarding', 'gen-z', 'tutorials', 'first-run'],
        gradient: 'linear-gradient(135deg, #2d1b4a 0%, #ff3b6b 50%, #6f5cff 100%)',
        timecode: '02:10',
        duration: 29,
        insights: 56,
        annotations: 21,
        saves: 44,
        views: 489,
        recorded: '2026-04-11',
        researcher: 'Jordan Kim',
        transcript: [
            { t: '02:05', s: "Oh there's a tutorial…" },
            { t: '02:10', s: "I just close tutorials. If I can't figure it out in 30 seconds I delete the app.", hl: true },
            { t: '02:17', s: "I'd rather poke around. Tutorials feel like homework." },
            { t: '02:24', s: "Put a hint on the button itself. I'll get it." }
        ]
    },
    {
        id: 'c6',
        participant: 'P052',
        participantName: 'Tomás, 66 · Retired engineer',
        initial: 'T',
        study: 'Accessibility Deep-Dive',
        method: 'Moderated Interview',
        title: 'Zooms to 200% and loses the primary CTA off-screen',
        quote: '"When I make the text bigger, the button disappears. Where did it go?"',
        tags: ['accessibility', 'zoom', 'responsive', 'a11y'],
        gradient: 'linear-gradient(135deg, #1e3a4b 0%, #ffb020 100%)',
        timecode: '04:55',
        duration: 47,
        insights: 38,
        annotations: 18,
        saves: 31,
        views: 226,
        recorded: '2026-04-15',
        researcher: 'Riya Patel',
        transcript: [
            { t: '04:50', s: "Let me zoom in — I use 200% at home…" },
            { t: '04:55', s: "When I make the text bigger, the button disappears. Where did it go?", hl: true },
            { t: '05:04', s: "I have to scroll sideways to find it. That's not great." },
            { t: '05:12', s: "Just wrap the buttons. I shouldn't have to hunt." }
        ]
    }
];

const PROJECTS = [
    { id: 'p1', name: 'Checkout Redesign Q2', clips: 12 },
    { id: 'p2', name: 'Admin Console v3', clips: 8 },
    { id: 'p3', name: 'Accessibility Audit', clips: 14 },
    { id: 'p4', name: 'Pricing Experiment', clips: 6 }
];

const TRENDING_TAGS = [
    'onboarding', 'checkout', 'trust', 'a11y', 'pricing',
    'friction', 'workaround', 'admin', 'first-run', 'sharing'
];

// ---------- State ----------
const state = {
    feed: 'foryou',
    activeIndex: 0,
    insights: new Set(),
    saves: new Set(),
    annotations: {},   // clipId -> [{id, author, text, timecode, pinned, createdAt}]
    projects: {},      // clipId -> [projectId]
    contextTab: 'details'
};

// ---------- DOM helpers ----------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(t._tid);
    t._tid = setTimeout(() => { t.hidden = true; }, 2200);
}

// ---------- Render: sidebar ----------
function renderSidebar() {
    const pl = $('#projectList');
    pl.innerHTML = PROJECTS.map(p =>
        `<li data-project="${p.id}"><span>${p.name}</span><span class="count">${p.clips}</span></li>`
    ).join('');
    pl.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (!li) return;
        toast(`Filtering by "${li.querySelector('span').textContent}"`);
    });

    $('#tagCloud').innerHTML = TRENDING_TAGS.map(t =>
        `<span class="tag" data-tag="${t}">#${t}</span>`
    ).join('');
    $('#tagCloud').addEventListener('click', (e) => {
        const tag = e.target.closest('.tag');
        if (!tag) return;
        filterByTag(tag.dataset.tag);
    });
}

// ---------- Render: feed ----------
function renderFeed(list = CLIPS) {
    const feed = $('#feed');
    feed.innerHTML = list.map((c, i) => clipHTML(c, i)).join('');

    // wire each clip
    list.forEach((c, i) => {
        const el = feed.querySelector(`[data-clip="${c.id}"]`);
        if (!el) return;
        wireClip(el, c);
    });

    // observe for active clip
    attachObserver();
}

function clipHTML(c, i) {
    const insightActive = state.insights.has(c.id);
    const saveActive = state.saves.has(c.id);
    const insightCount = c.insights + (insightActive ? 1 : 0);
    const saveCount = c.saves + (saveActive ? 1 : 0);
    return `
    <section class="clip" data-clip="${c.id}" data-index="${i}">
      <div class="clip-card">
        <div class="clip-video" style="background: ${c.gradient}">
            <span class="timecode">${c.timecode}</span>
            <span class="method-chip">${c.method}</span>
            <div class="mock-face">${c.initial}</div>
            <div class="waveform">
                ${Array.from({length: 28}).map((_, k) => `<span style="animation-delay:${(k*0.07).toFixed(2)}s; height:${6 + (k*13)%22}px"></span>`).join('')}
            </div>
            <div class="clip-play">▶</div>
            <div class="insight-pulse">♥</div>
        </div>
        <div class="clip-progress"><div class="bar"></div></div>
        <div class="clip-meta">
            <div class="who">
                <span class="p-avatar">${c.initial}</span>
                <span>${c.participant} <small>· ${c.participantName.split('·')[1] ? c.participantName.split('·')[1].trim() : ''}</small></span>
            </div>
            <h3>${c.title}</h3>
            <p class="quote">${c.quote}</p>
            <div class="tags">${c.tags.map(t => `<span>#${t}</span>`).join('')}</div>
        </div>
        <div class="clip-actions">
            <button class="action insight ${insightActive ? 'active' : ''}" data-act="insight">
                <span class="icon">♥</span>
                <span class="count">${insightCount}</span>
            </button>
            <button class="action" data-act="annotate">
                <span class="icon">✎</span>
                <span class="count">${(state.annotations[c.id] || []).length + c.annotations}</span>
            </button>
            <button class="action save ${saveActive ? 'active' : ''}" data-act="save">
                <span class="icon">◆</span>
                <span class="count">${saveCount}</span>
            </button>
            <button class="action" data-act="share">
                <span class="icon">↗</span>
                <span class="count">Share</span>
            </button>
            <button class="action" data-act="tag">
                <span class="icon">#</span>
                <span class="count">Tag</span>
            </button>
        </div>
      </div>
    </section>`;
}

function wireClip(el, c) {
    const video = el.querySelector('.clip-video');
    const bar = el.querySelector('.clip-progress .bar');

    // simulated progress bar
    let progress = 0;
    let paused = false;
    const tick = () => {
        if (!el.classList.contains('is-active')) return;
        if (!paused) {
            progress = (progress + (100 / (c.duration * 10))) % 100;
            bar.style.width = progress + '%';
        }
    };
    el._tick = setInterval(tick, 100);

    // click to pause
    video.addEventListener('click', (e) => {
        const now = Date.now();
        if (video._lastTap && now - video._lastTap < 300) {
            // double-tap = insight
            markInsight(c.id);
            flashPulse(el);
            video._lastTap = 0;
        } else {
            video._lastTap = now;
            paused = !paused;
            video.classList.toggle('paused', paused);
        }
    });

    // action buttons
    el.querySelectorAll('.action').forEach(btn => {
        btn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            handleAction(btn.dataset.act, c, el);
        });
    });
}

function flashPulse(el) {
    const p = el.querySelector('.insight-pulse');
    p.classList.remove('show');
    void p.offsetWidth;
    p.classList.add('show');
}

function markInsight(clipId) {
    const was = state.insights.has(clipId);
    if (was) { state.insights.delete(clipId); } else { state.insights.add(clipId); }
    updateActionStates(clipId);
    if (!was) toast('Marked as key insight');
}

function toggleSave(clipId) {
    const was = state.saves.has(clipId);
    if (was) { state.saves.delete(clipId); } else { state.saves.add(clipId); }
    updateActionStates(clipId);
    toast(was ? 'Removed from saved' : 'Saved to your library');
}

function updateActionStates(clipId) {
    const el = document.querySelector(`[data-clip="${clipId}"]`);
    if (!el) return;
    const clip = CLIPS.find(c => c.id === clipId);
    const insight = el.querySelector('.action.insight');
    insight.classList.toggle('active', state.insights.has(clipId));
    insight.querySelector('.count').textContent = clip.insights + (state.insights.has(clipId) ? 1 : 0);
    const save = el.querySelector('.action.save');
    save.classList.toggle('active', state.saves.has(clipId));
    save.querySelector('.count').textContent = clip.saves + (state.saves.has(clipId) ? 1 : 0);
    const anno = el.querySelector('.action [data-act="annotate"] .count') ||
                 el.querySelector('.action:nth-child(2) .count');
    if (anno) {
        anno.textContent = (state.annotations[clipId] || []).length + clip.annotations;
    }
    if (state.activeIndex !== null) renderContext();
}

function handleAction(act, c, el) {
    switch (act) {
        case 'insight':
            markInsight(c.id);
            break;
        case 'save':
            toggleSave(c.id);
            break;
        case 'share': {
            const link = `https://reelresearch.app/clip/${c.id}`;
            if (navigator.clipboard) navigator.clipboard.writeText(link).catch(() => {});
            toast(`Link copied · ${link}`);
            break;
        }
        case 'annotate':
            state.contextTab = 'annotations';
            renderContext();
            setTimeout(() => {
                const input = $('#annoInput');
                if (input) input.focus();
            }, 50);
            break;
        case 'tag':
            openProjectModal(c);
            break;
    }
}

// ---------- IntersectionObserver for active clip ----------
let observer;
function attachObserver() {
    if (observer) observer.disconnect();
    const feed = $('#feed');
    observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting && e.intersectionRatio > 0.6) {
                $$('.clip').forEach(el => el.classList.remove('is-active'));
                e.target.classList.add('is-active');
                const idx = parseInt(e.target.dataset.index, 10);
                state.activeIndex = idx;
                renderContext();
            }
        });
    }, { root: feed, threshold: [0.6] });
    $$('.clip').forEach(el => observer.observe(el));
}

// ---------- Context panel ----------
function renderContext() {
    const clip = CLIPS[state.activeIndex] || CLIPS[0];
    if (!clip) return;

    // tabs
    $$('.ctab').forEach(t => t.classList.toggle('active', t.dataset.ctab === state.contextTab));

    const body = $('#contextBody');
    if (state.contextTab === 'details') {
        body.innerHTML = detailsHTML(clip);
    } else if (state.contextTab === 'annotations') {
        body.innerHTML = annotationsHTML(clip);
        wireAnnotations(clip);
    } else {
        body.innerHTML = transcriptHTML(clip);
    }
}

function detailsHTML(c) {
    const insightCount = c.insights + (state.insights.has(c.id) ? 1 : 0);
    const saveCount = c.saves + (state.saves.has(c.id) ? 1 : 0);
    const annoCount = (state.annotations[c.id] || []).length + c.annotations;
    return `
        <div class="detail-stats">
            <div class="stat"><div class="n">${insightCount}</div><div class="l">Insights</div></div>
            <div class="stat"><div class="n">${annoCount}</div><div class="l">Notes</div></div>
            <div class="stat"><div class="n">${c.views}</div><div class="l">Views</div></div>
        </div>
        <div class="detail-row">
            <div class="label">Study</div>
            <div class="value">${c.study}</div>
        </div>
        <div class="detail-row">
            <div class="label">Method</div>
            <div class="value">${c.method}</div>
        </div>
        <div class="detail-row">
            <div class="label">Participant</div>
            <div class="value">${c.participant} — ${c.participantName}</div>
        </div>
        <div class="detail-row">
            <div class="label">Researcher</div>
            <div class="value">${c.researcher}</div>
        </div>
        <div class="detail-row">
            <div class="label">Recorded</div>
            <div class="value">${c.recorded}</div>
        </div>
        <div class="detail-row">
            <div class="label">Themes</div>
            <div class="value">${c.tags.map(t => `<span class="tag">#${t}</span>`).join('')}</div>
        </div>
        <div class="detail-row">
            <div class="label">Moment</div>
            <div class="value">${c.title}<br/><em style="color:var(--muted)">${c.quote}</em></div>
        </div>
    `;
}

function annotationsHTML(c) {
    const items = state.annotations[c.id] || [];
    const list = items.length
        ? items.map(a => `
            <div class="anno ${a.pinned ? 'pinned' : ''}" data-anno="${a.id}">
                <div class="meta">
                    <span>${a.author} · ${a.timecode}</span>
                    <button class="pin" title="Pin">★</button>
                </div>
                <div class="text">${a.text}</div>
            </div>`).join('')
        : '<div style="color:var(--muted); font-size:13px; text-align:center; padding:20px">No annotations yet. Add the first one ↑</div>';
    return `
        <div class="anno-new">
            <input id="annoInput" placeholder="Add a timestamped note…"/>
            <button class="btn-primary" id="annoAdd">Add</button>
        </div>
        <div class="anno-list">${list}</div>
    `;
}

function wireAnnotations(c) {
    const input = $('#annoInput');
    const add = $('#annoAdd');
    const submit = () => {
        const v = input.value.trim();
        if (!v) return;
        const item = {
            id: 'a' + Date.now(),
            author: 'You',
            text: v,
            timecode: c.timecode,
            pinned: false,
            createdAt: Date.now()
        };
        state.annotations[c.id] = [item, ...(state.annotations[c.id] || [])];
        input.value = '';
        renderContext();
        updateActionStates(c.id);
        toast('Annotation added');
    };
    add.addEventListener('click', submit);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });

    $$('.anno .pin').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.closest('.anno').dataset.anno;
            const item = (state.annotations[c.id] || []).find(x => x.id === id);
            if (item) { item.pinned = !item.pinned; renderContext(); }
        });
    });
}

function transcriptHTML(c) {
    return c.transcript.map(l => `
        <div class="tline ${l.hl ? 'highlight' : ''}">
            <span class="tc">${l.t}</span>
            <span>${l.s}</span>
        </div>`).join('');
}

// ---------- Project modal ----------
function openProjectModal(c) {
    const body = $('#projectModalBody');
    const added = new Set(state.projects[c.id] || []);
    body.innerHTML = PROJECTS.map(p => `
        <div class="project-option ${added.has(p.id) ? 'added' : ''}" data-project="${p.id}">
            <div>
                <div class="pname">${p.name}</div>
                <div class="pmeta">${p.clips} clips · ${added.has(p.id) ? 'Added' : 'Click to add'}</div>
            </div>
            <div>${added.has(p.id) ? '✓' : '+'}</div>
        </div>
    `).join('') + `<div style="margin-top:12px"><button class="btn-ghost" id="newProject">＋ New project…</button></div>`;

    body.querySelectorAll('.project-option').forEach(el => {
        el.addEventListener('click', () => {
            const pid = el.dataset.project;
            const list = state.projects[c.id] || [];
            if (list.includes(pid)) {
                state.projects[c.id] = list.filter(x => x !== pid);
                toast('Removed from project');
            } else {
                state.projects[c.id] = [...list, pid];
                toast(`Added to ${PROJECTS.find(p => p.id === pid).name}`);
            }
            openProjectModal(c);
        });
    });

    $('#newProject').addEventListener('click', () => {
        const name = prompt('Name the new project');
        if (!name) return;
        const id = 'p' + Date.now();
        PROJECTS.push({ id, name, clips: 1 });
        state.projects[c.id] = [...(state.projects[c.id] || []), id];
        renderSidebar();
        openProjectModal(c);
    });

    $('#projectModal').hidden = false;
}

// ---------- Upload modal ----------
function wireUpload() {
    $('#openUpload').addEventListener('click', () => { $('#uploadModal').hidden = false; });
    $$('[data-close]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').hidden = true;
        });
    });
    $$('.modal').forEach(m => {
        m.addEventListener('click', (e) => { if (e.target === m) m.hidden = true; });
    });
    $('#uploadForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const f = new FormData(e.target);
        const newClip = {
            id: 'c' + Date.now(),
            participant: f.get('participant'),
            participantName: `${f.get('participant')} · New participant`,
            initial: (f.get('participant') || 'N')[0],
            study: f.get('study'),
            method: f.get('method'),
            title: f.get('title'),
            quote: `"${(f.get('transcript') || '').split('\n')[0].replace(/^\[[^\]]+\]\s*/, '')}"`,
            tags: (f.get('tags') || '').split(',').map(s => s.trim()).filter(Boolean),
            gradient: 'linear-gradient(135deg, #2a1b4b 0%, #6f5cff 100%)',
            timecode: '00:00',
            duration: 40,
            insights: 0, annotations: 0, saves: 0, views: 0,
            recorded: new Date().toISOString().slice(0, 10),
            researcher: 'Morgan Reyes',
            transcript: (f.get('transcript') || '').split('\n').filter(Boolean).map(line => {
                const m = line.match(/^\[([^\]]+)\]\s*(.+)$/);
                return m ? { t: m[1], s: m[2] } : { t: '00:00', s: line };
            })
        };
        CLIPS.unshift(newClip);
        e.target.reset();
        $('#uploadModal').hidden = true;
        renderFeed();
        $('#feed').scrollTop = 0;
        toast('Clip added to the repository');
    });
}

// ---------- Tabs & nav ----------
function wireTabs() {
    $$('.feed-tabs .tab').forEach(t => {
        t.addEventListener('click', () => {
            $$('.feed-tabs .tab').forEach(x => x.classList.remove('active'));
            t.classList.add('active');
            $$('.side-link').forEach(x => x.classList.toggle('active', x.dataset.feed === t.dataset.feed));
            state.feed = t.dataset.feed;
            applyFeedFilter();
        });
    });
    $$('.side-link').forEach(l => {
        l.addEventListener('click', () => {
            $$('.side-link').forEach(x => x.classList.remove('active'));
            l.classList.add('active');
            $$('.feed-tabs .tab').forEach(x => x.classList.toggle('active', x.dataset.feed === l.dataset.feed));
            state.feed = l.dataset.feed;
            applyFeedFilter();
        });
    });
    $$('.ctab').forEach(c => {
        c.addEventListener('click', () => {
            state.contextTab = c.dataset.ctab;
            renderContext();
        });
    });
}

function applyFeedFilter() {
    let list = CLIPS;
    if (state.feed === 'saved') list = CLIPS.filter(c => state.saves.has(c.id));
    if (state.feed === 'following') list = CLIPS.filter(c => ['Morgan Reyes', 'Jordan Kim'].includes(c.researcher));
    if (state.feed === 'mine') list = CLIPS.filter(c => c.researcher === 'Morgan Reyes');
    if (state.feed === 'discover') list = [...CLIPS].sort((a, b) => b.views - a.views);
    if (!list.length) {
        $('#feed').innerHTML = `<div style="display:flex;height:100%;align-items:center;justify-content:center;color:var(--muted);font-size:14px">Nothing here yet.</div>`;
        return;
    }
    renderFeed(list);
}

function filterByTag(tag) {
    const list = CLIPS.filter(c => c.tags.includes(tag));
    renderFeed(list);
    toast(`Filtered by #${tag} · ${list.length} clip${list.length === 1 ? '' : 's'}`);
}

// ---------- Search ----------
function wireSearch() {
    const input = $('#searchInput');
    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        if (!q) { applyFeedFilter(); return; }
        const list = CLIPS.filter(c =>
            c.title.toLowerCase().includes(q) ||
            c.quote.toLowerCase().includes(q) ||
            c.tags.some(t => t.includes(q)) ||
            c.participantName.toLowerCase().includes(q) ||
            c.transcript.some(l => l.s.toLowerCase().includes(q))
        );
        renderFeed(list);
    });
}

// ---------- Keyboard ----------
function wireKeys() {
    document.addEventListener('keydown', (e) => {
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
        const feed = $('#feed');
        const clips = $$('.clip');
        const idx = state.activeIndex || 0;
        if (e.key === 'ArrowDown' || e.key === 'j') {
            e.preventDefault();
            if (clips[idx + 1]) clips[idx + 1].scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' || e.key === 'k') {
            e.preventDefault();
            if (clips[idx - 1]) clips[idx - 1].scrollIntoView({ behavior: 'smooth' });
        } else if (e.key.toLowerCase() === 'l') {
            const c = CLIPS[idx]; if (c) markInsight(c.id);
        } else if (e.key.toLowerCase() === 's') {
            const c = CLIPS[idx]; if (c) toggleSave(c.id);
        } else if (e.key.toLowerCase() === 'a') {
            const c = CLIPS[idx]; if (c) { state.contextTab = 'annotations'; renderContext(); setTimeout(() => $('#annoInput')?.focus(), 50); }
        } else if (e.key.toLowerCase() === 't') {
            const c = CLIPS[idx]; if (c) openProjectModal(c);
        } else if (e.key === '/') {
            e.preventDefault();
            $('#searchInput').focus();
        }
    });
}

// ---------- Boot ----------
document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    renderFeed();
    renderContext();
    wireTabs();
    wireSearch();
    wireUpload();
    wireKeys();
});
