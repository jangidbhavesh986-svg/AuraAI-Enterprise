const delay = (ms) => new Promise(res => setTimeout(res, ms));
function launchAura() { document.getElementById('hero').style.display = 'none'; document.getElementById('app').style.display = 'flex'; }
async function launchAuraWithIdea() { launchAura(); executeIntelligence(); }
async function executeIntelligence() {
      const input = document.getElementById('user-input');
      const idea = input.value || "New Venture";
      const chatWindow = document.getElementById('chat-window');
      const status = document.createElement('div');
      status.className = 'ai-msg';
      status.innerHTML = `<span class="label">AURA-CORE:</span><p>Analyzing ${idea}...</p>`;
      chatWindow.appendChild(status);
}
