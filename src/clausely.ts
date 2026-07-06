import { imagePath } from '@nextcloud/router'

import '../css/clausely.css'

const matters = [
	{ name: 'Arora & Associates', type: 'folder' },
	{ name: 'Corporate', type: 'folder', active: true },
	{ name: 'NDA', type: 'doc', selected: true },
	{ name: 'Shareholders Agreement', type: 'doc' },
	{ name: 'Employment Contracts', type: 'doc' },
	{ name: 'Real Estate', type: 'folder' },
	{ name: 'Litigation', type: 'folder' },
	{ name: 'Taxation', type: 'folder' },
]

const clauses = [
	'Bharatiya Nyaya Sanhita 2024',
	'Maharashtra Stamp Act 1958',
	'Code of Civil Procedure 1908',
	'Indian Contract Act 1872',
]

const clauselyLogoPath = imagePath('onlyoffice', 'clausely-logo.svg')
const icon = (name: string) => `<span class="clausely-icon">${name}</span>`

/**
 * Shared Clausely wordmark used throughout the draft experience.
 */
function logo() {
	return `
		<div class="clausely-logo" aria-label="Clausely AI logo">
			<img class="clausely-logo__mark" src="${clauselyLogoPath}" alt="" aria-hidden="true">
			<div class="clausely-logo__word">clausely</div>
		</div>
	`
}

/**
 * Non-disclosure agreement drafting wrapper for draft.clausely.ai.
 */
function draftingPage() {
	return `
		<section class="drafting-page" aria-label="Clausely non-disclosure agreement drafting editor">
			<header class="ribbon-top">
				${logo()}
				<div class="doc-title">Non-Disclosure Agreement.docx <span>⌄</span></div>
				<nav aria-label="Document ribbon tabs">
					<button class="active">Home</button><button>Insert</button><button>Layout</button><button>References</button><button>Review</button><button>View</button><button class="ai">✦ Clausely AI</button>
				</nav>
				<div class="user-actions"><span>↶</span><span>↷</span><button>Share</button><strong>AK</strong><span>⌄</span></div>
			</header>
			<div class="format-ribbon" aria-label="Document formatting toolbar">
				<div class="clipboard"><strong>📋</strong><b>Paste</b><small>Clipboard</small></div>
				<div class="quick-tools">✂ Cut<br>⧉ Copy<br>⌁ Format</div>
				<div class="select-control">Times New Roman⌄</div>
				<div class="select-control compact">12⌄</div>
				<div class="font-tools">B&nbsp;&nbsp; <em>I</em>&nbsp;&nbsp; <u>U</u>&nbsp;&nbsp; x₂&nbsp;&nbsp; x²&nbsp;&nbsp; <span>A</span>&nbsp;&nbsp; <span class="red">A</span>&nbsp;&nbsp; 🖍</div>
				<div class="paragraph-tools">☷ &nbsp; ☰ &nbsp; ≡ &nbsp; ☱ &nbsp; ≣ &nbsp; ↔</div>
				<div class="styles"><strong>Normal</strong><b>Heading 1</b><b>Heading 2⌄</b></div>
				<div class="editing">⌕ Find<br>↻ Replace<br>⌖ Select</div>
			</div>
			<main class="studio-shell">
				<aside class="matter-sidebar" aria-label="Matters browser">
					<h3>MATTERS <button aria-label="Add matter">+</button></h3>
					<div class="search"><span>Search matters...</span><button>☰</button></div>
					<ul>${matters.map((item) => `<li class="${item.selected ? 'selected' : ''} ${item.active ? 'active' : ''}">${icon(item.type === 'folder' ? '▰' : '▤')} ${item.name}${item.active ? '<span>⌄</span>' : ''}</li>`).join('')}</ul>
					<div class="sidebar-footer"><strong>▣ Templates</strong><strong>▣ Vault</strong></div>
				</aside>
				<section class="document-stage" aria-label="Non-disclosure agreement document">
					<div class="ruler"></div>
					<article class="paper">
						<h1>NON-DISCLOSURE AGREEMENT</h1>
						<p>This Non-Disclosure Agreement (“Agreement”) is made and entered into on ____ day of __________, 20___, by and between:</p>
						<p><strong>1. The Disclosing Party:</strong> ________________________________, having its registered office at ________________________________ (“Disclosing Party”); and</p>
						<p><strong>2. The Receiving Party:</strong> ________________________________, having its registered office at ________________________________ (“Receiving Party”).</p>
						<h2>1. Confidential Information</h2>
						<p>The Receiving Party agrees to keep confidential and not disclose any Confidential Information received from the Disclosing Party, either directly or indirectly, in any form, including but not limited to written, oral, electronic, or any other tangible or intangible form.</p>
						<footer>1 of 7</footer>
					</article>
				</section>
				<aside class="ai-panel" aria-label="Clausely AI drafting assistant">
					<header>${logo()}<span>Ready</span><button aria-label="Collapse panel">⌃</button></header>
					<nav><button class="active">Draft</button><button>Review</button><button>Strategy</button><button>Vault</button><button>Playbook</button></nav>
					<label>What do you need to draft?</label>
					<textarea maxlength="500" placeholder="e.g., Draft a limitation clause for an NDA under Maharashtra jurisdiction"></textarea>
					<div class="helper-row"><span>Ctrl + Enter to generate</span><span>0/500</span></div>
					<div class="two"><div>Jurisdiction<br><strong>MH-DISTRICT</strong></div><div>Language<br><strong>English⌄</strong></div></div>
					<button class="generate">⚡ Generate Clause</button>
					<article class="suggestion"><h3>Limitation Clause <span>Risk 4/10 ●</span></h3><p>Neither Party shall be liable for any indirect, incidental, or consequential damages arising out of or in connection with this Agreement.</p><a>▣ 2 verified citations⌄</a><div><button class="accept">✓ Accept</button><button>↻ Regenerate</button><button class="reject">×</button></div></article>
					<h4>⚖ Applicable Law (MH-DISTRICT)</h4>
					${clauses.map((clause) => `<p class="law">▤ <a>${clause}</a><span>Primary</span>↗</p>`).join('')}
				</aside>
			</main>
			<footer class="statusbar">Page 1 of 7 <span></span> Words: 2,358 <span></span> Jurisdiction: <b>MH-DISTRICT</b> <span></span> Corpus: <b>BNS-2024-v1</b> <em>🛡 All validations passed</em><strong>▣ ▤ ◫ &nbsp; − ━●━━ &nbsp; 100% ＋</strong></footer>
		</section>
	`
}

const app = document.getElementById('clausely-app')
if (app) {
	document.title = 'Non-Disclosure Agreement.docx - Clausely Draft'
	app.innerHTML = draftingPage()
}
