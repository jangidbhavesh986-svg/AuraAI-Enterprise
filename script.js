/**
 * AURA OS | Multi-Agent Strategic Engine
 * Core Intelligence for the Billion-Dollar Founder Operating System
 */

const state = {
    vision: "",
    scores: {
        success: 0,
        demand: 0,
        revenue: 0,
        investor: 0,
        health: 0
    },
    activeNode: 'validation',
    initialized: false,
    valuation: 0
};

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// --- UI CONTROLLER ---

function handleLandingKey(event) {
    if (event.key === 'Enter') startFounderOS();
}

function handleFounderKey(event) {
    if (event.key === 'Enter') executeStrategicMove();
}

async function startFounderOS() {
    const input = document.getElementById('landing-input');
    const vision = input.value.trim();
    
    if (!vision) {
        showModal("Strategic Error", "A vision is required to initialize the Operating System.");
        return;
    }

    state.vision = vision;
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('app').style.display = 'flex';
    
    await initializeSystem();
}

async function initializeSystem() {
    logAgent("AURA-OS", "Neural initialization sequence started...");
    await delay(1000);
    logAgent("CEO-AGENT", "Vision received. Booting multi-agent orchestration...");
    
    // Simulate scoring
    state.scores = {
        success: Math.floor(Math.random() * 20) + 70,
        demand: Math.floor(Math.random() * 25) + 65,
        revenue: Math.floor(Math.random() * 30) + 60,
        investor: Math.floor(Math.random() * 15) + 50,
        health: 75
    };
    state.valuation = (Math.random() * 5 + 1).toFixed(2);
    
    updateUI();
    renderNode('validation');
    state.initialized = true;
}

function updateUI() {
    document.getElementById('score-val').innerText = state.scores.success + "%";
    document.getElementById('demand-val').innerText = state.scores.demand + "%";
    document.getElementById('revenue-val').innerText = state.scores.revenue + "%";
    document.getElementById('investor-val').innerText = state.scores.investor + "%";
    document.getElementById('main-score').innerText = state.scores.success + "%";
    document.getElementById('health-bar').style.width = state.scores.health + "%";
    document.getElementById('nav-valuation').innerText = "$" + state.valuation + "M";
}

function logAgent(agent, msg) {
    const logs = document.getElementById('agent-logs');
    const item = document.createElement('div');
    item.className = 'feed-item';
    item.innerText = `> ${agent}: ${msg}`;
    logs.prepend(item);
}

function logTask(msg) {
    const tasks = document.getElementById('task-list');
    const item = document.createElement('div');
    item.className = 'feed-item';
    item.style.color = 'var(--primary)';
    item.innerText = `> [ACTION] ${msg}`;
    tasks.prepend(item);
}

// --- NODE ROUTING & RENDERING ---

function switchNode(nodeId) {
    state.activeNode = nodeId;
    document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
    event.currentTarget.classList.add('active');
    renderNode(nodeId);
}

async function renderNode(nodeId) {
    const display = document.getElementById('display-zone');
    const preview = document.getElementById('preview-section');
    preview.style.display = 'none'; // Default hidden
    
    logAgent("SYSTEM", `Routing to ${nodeId.toUpperCase()} Intelligence Node...`);

    switch(nodeId) {
        case 'validation':
            renderValidation(display);
            break;
        case 'market':
            renderMarket(display);
            break;
        case 'revenue':
            renderRevenue(display);
            break;
        case 'web':
        case 'app':
            renderBlueprint(display, nodeId);
            preview.style.display = 'flex';
            break;
        case 'social':
            renderSocial(display);
            break;
        case 'investor':
            renderInvestor(display);
            break;
        case 'decision':
            renderDecision(display);
            break;
        case 'coo':
            renderCOO(display);
            break;
        default:
            display.innerHTML = `<h2>Node: ${nodeId.toUpperCase()}</h2><p>This strategic node is analyzing data. Deep intelligence report coming soon.</p>`;
    }
}

// --- MODULE CONTENT GENERATORS ---

function renderValidation(container) {
    container.innerHTML = `
        <h2><span class="glow-text">Idea Validation</span> Engine</h2>
        <div class="ai-msg">
            <span class="label">AURA-VALIDATOR:</span>
            <p>Vision: "${state.vision}"</p>
            <div class="glass" style="padding:20px; margin-top:15px;">
                <h4 style="color:var(--primary)">Brutally Honest Analysis</h4>
                <p style="font-size:0.9rem; margin:10px 0;">Market viability is strong, but execution risk is high in the 'Customer Acquisition' phase. You are targeting a $4B market with 14% efficiency gap.</p>
                <div class="action-grid" style="grid-template-columns: 1fr 1fr; margin-top:15px;">
                    <div class="action-card"><h4>Market Fit</h4><div class="val" style="font-size:1.2rem">HIGH</div></div>
                    <div class="action-card"><h4>Complexity</h4><div class="val" style="font-size:1.2rem">MODERATE</div></div>
                </div>
            </div>
        </div>
    `;
    logTask("Finalize MVP Scope");
}

function renderMarket(container) {
    container.innerHTML = `
        <h2>Market <span class="glow-text">Intelligence</span> Scanner</h2>
        <div class="ai-msg">
            <span class="label">MARKET-RESEARCHER:</span>
            <div class="glass" style="padding:20px;">
                <p><strong>Target Audience:</strong> High-growth tech founders and enterprise strategists.</p>
                <p style="margin-top:10px;"><strong>Competitor Scan:</strong> Found 3 direct rivals. Your "Monopoly Moat" is the Integrated Multi-Agent OS vs their point-solution chatbots.</p>
                <p style="margin-top:10px; color:var(--secondary)"><strong>Opportunity:</strong> 22% Underserved segment detected in EMEA region.</p>
            </div>
        </div>
    `;
}

function renderRevenue(container) {
    container.innerHTML = `
        <h2>Revenue <span class="glow-text">Predictor</span> Engine</h2>
        <div class="ai-msg">
            <span class="label">FINANCIAL-AGENT:</span>
            <div class="glass" style="padding:20px;">
                <h4 style="color:var(--primary)">Monetization Strategy: SaaS Hybrid</h4>
                <p style="font-size:0.9rem; margin:10px 0;">Projected MRR Year 1: $140K. Break-even at Month 7.</p>
                <div class="action-grid" style="grid-template-columns: 1fr 1fr; margin-top:15px;">
                    <div class="action-card"><h4>LTV/CAC</h4><div class="val" style="font-size:1.2rem">4.2x</div></div>
                    <div class="action-card"><h4>Burn Rate</h4><div class="val" style="font-size:1.2rem">LOW</div></div>
                </div>
            </div>
        </div>
    `;
}

function renderBlueprint(container, type) {
    const isWeb = type === 'web';
    container.innerHTML = `
        <h2>${isWeb ? 'Website' : 'Mobile'} <span class="glow-text">Blueprint</span> Architect</h2>
        <div class="ai-msg">
            <span class="label">CTO-AGENT:</span>
            <p>Generating ${type} architecture for "${state.vision}"...</p>
            <div class="glass" style="padding:15px; font-family:monospace; font-size:0.75rem; margin-top:10px;">
                [STACK] Next.js 14, Tailwind, Supabase, OpenAI v4<br>
                [UI] Premium Dark Glassmorphism<br>
                [ROUTES] /dashboard, /auth, /api/agents
            </div>
        </div>
    `;
    updatePreview(isWeb);
}

function renderSocial(container) {
    container.innerHTML = `
        <h2>Social Media <span class="glow-text">Control</span> System</h2>
        <div class="ai-msg">
            <span class="label">CMO-AGENT:</span>
            <div class="glass" style="padding:20px;">
                <h4 style="color:var(--secondary)">Viral Content Strategy</h4>
                <p style="font-size:0.8rem; margin:10px 0;">Hook: "Why 99% of founders fail at validation (and how to fix it with AURA)."</p>
                <div style="display:flex; gap:10px; margin-top:10px;">
                    <span class="badge" style="font-size:0.6rem; padding:5px 10px;">LinkedIn Script</span>
                    <span class="badge" style="font-size:0.6rem; padding:5px 10px;">X Thread</span>
                    <span class="badge" style="font-size:0.6rem; padding:5px 10px;">Reels Hook</span>
                </div>
            </div>
        </div>
    `;
    logTask("Schedule Viral Hook Thread");
}

function renderInvestor(container) {
    container.innerHTML = `
        <h2>Investor <span class="glow-text">Readiness</span> Mode</h2>
        <div class="ai-msg">
            <span class="label">INVESTOR-AGENT:</span>
            <div class="glass" style="padding:20px; border-left:4px solid gold;">
                <h4 style="color:gold">Valuation Estimate: $${state.valuation}M</h4>
                <p style="font-size:0.9rem; margin:10px 0;">Q&A Prep: "How do you handle the 3-year moat erosion?" - AURA suggests focusing on the network effect of the Multi-Agent ecosystem.</p>
                <button class="primary-btn" style="padding:8px 15px; font-size:0.7rem; margin-top:10px;">Export Pitch Deck</button>
            </div>
        </div>
    `;
}

function renderDecision(container) {
    container.innerHTML = `
        <h2>Daily <span class="glow-text">Decision</span> Engine</h2>
        <div class="ai-msg">
            <span class="label">COO-AGENT:</span>
            <div class="glass" style="padding:20px;">
                <h4 style="color:var(--primary)">Top Priority Today</h4>
                <p style="font-weight:800; font-size:1.1rem;">Secure Beta Users for Validation Node.</p>
                <p style="color:var(--text-gray); font-size:0.8rem; margin-top:10px;">AVOID: Deep-diving into UI polish. Focus on revenue-generating activities.</p>
            </div>
        </div>
    `;
}

function renderCOO(container) {
    container.innerHTML = `
        <h2>AI <span class="glow-text">Chief Operating Officer</span></h2>
        <div class="ai-msg">
            <span class="label">COO-AGENT:</span>
            <p>I am optimizing your entire operation. Based on your vision, I've identified a bottleneck in the 'Lead Conversion' workflow.</p>
            <div class="action-card" style="margin-top:15px; border-color:var(--secondary)">
                <h4 style="color:var(--secondary)">Automated Fix Applied</h4>
                <p style="font-size:0.8rem;">Redirected traffic from Low-Intent funnels to High-Conversion landing page.</p>
            </div>
        </div>
    `;
}

// --- STRATEGIC MOVES & PREVIEWS ---

async function executeStrategicMove() {
    const input = document.getElementById('founder-input');
    const cmd = input.value.trim();
    if (!cmd) return;
    
    input.value = "";
    logAgent("FOUNDER", cmd);
    
    // Simple command handling for the demo
    if (cmd.toLowerCase().includes('website')) switchNode('web');
    else if (cmd.toLowerCase().includes('investor')) switchNode('investor');
    else {
        logAgent("AURA-OS", "Processing strategic command. Analyzing permutations...");
        await delay(1500);
        logAgent("AURA-OS", "Command executed. Metrics updated.");
        state.scores.success += 1;
        updateUI();
    }
}

function updatePreview(isWeb) {
    const frame = document.getElementById('blueprint-frame');
    const color = isWeb ? 'var(--primary)' : 'var(--secondary)';
    const themeColor = isWeb ? '#00f2ff' : '#7000ff';
    
    const doc = `
        <style>
            body { background: #000; color: #fff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
            .card { padding: 40px; border: 1px solid ${themeColor}33; border-radius: 30px; background: ${themeColor}05; text-align: center; max-width: 80%; }
            h1 { color: ${themeColor}; font-size: 2rem; margin-bottom: 10px; }
            p { color: #888; font-size: 1rem; }
            .btn { display: inline-block; margin-top: 20px; padding: 10px 25px; background: ${themeColor}; color: #000; border-radius: 50px; font-weight: bold; text-decoration: none; }
        </style>
        <div class="card">
            <p style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px;">Elite ${isWeb ? 'Web' : 'Mobile'} Blueprint</p>
            <h1>${state.vision}</h1>
            <p>Architecting the future of industry with multi-agent AI intelligence.</p>
            <a href="#" class="btn">Launch Platform</a>
        </div>
    `;
    frame.srcdoc = doc;
}

// --- UTILITIES ---

function showModal(title, body) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerText = body;
    document.getElementById('global-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('global-modal').style.display = 'none';
}

