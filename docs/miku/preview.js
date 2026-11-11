const $ = (selector) => document.querySelector(selector);
function demoIcon(color, paths) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="${color}"/><g fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${paths}</g></svg>`)}`;
}
const moreApps = [
  ['Books','#bd7435','<path d="M12 15q10-4 20 2 10-6 20-2v32q-10-4-20 2-10-6-20-2zM32 17v32"/>'],
  ['Calculator','#168467','<rect x="16" y="10" width="32" height="44" rx="4"/><path d="M22 19h20M22 29h4m10 0h4M22 38h4m10 0h4M22 47h4m10 0h4"/>'],
  ['Compass','#437ec0','<circle cx="32" cy="32" r="21"/><path d="m41 21-5 15-15 7 7-15z"/>'],
  ['Documents','#cb6862','<path d="M18 10h21l9 9v35H18zM39 10v10h9M24 30h17M24 38h17M24 46h12"/>'],
  ['Downloads','#438fc3','<path d="M32 10v28m-11-9 11 11 11-11M14 43v10h36V43"/>'],
  ['Email','#7e75bb','<rect x="11" y="17" width="42" height="31" rx="4"/><path d="m12 20 20 15 20-15"/>'],
  ['Gallery','#c56189','<rect x="11" y="13" width="42" height="38" rx="4"/><circle cx="23" cy="25" r="4"/><path d="m13 45 14-12 8 7 8-11 10 16"/>'],
  ['Health','#bf5874','<path d="M32 51C-2 29 19 6 32 22 45 6 66 29 32 51z"/>'],
  ['Music','#8370b4','<path d="M28 42V16l23-5v27M28 23l23-5"/><ellipse cx="21" cy="44" rx="7" ry="5"/><ellipse cx="44" cy="40" rx="7" ry="5"/>'],
  ['Notes','#d0a044','<path d="M17 10h31v44H17zM24 23h16M24 32h16M24 41h10M13 17h8M13 28h8M13 39h8"/>'],
  ['Radio','#478995','<rect x="11" y="23" width="42" height="29" rx="4"/><path d="m17 21 29-12M19 30h25"/><circle cx="23" cy="41" r="5"/><path d="M38 39h7m-7 6h7"/>'],
  ['Recorder','#cc5b67','<rect x="24" y="10" width="16" height="29" rx="8"/><path d="M17 29v3a15 15 0 0 0 30 0v-3M32 47v8m-9 0h18"/>'],
  ['Scanner','#497d8c','<path d="M11 24V12h12M41 12h12v12M53 40v12H41M23 52H11V40M19 24h26M19 31h26M19 38h26"/>'],
  ['Tasks','#409b8a','<rect x="15" y="11" width="34" height="44" rx="4"/><path d="m22 24 4 4 7-8m4 5h6M22 38h5m8 0h8M22 46h21"/>'],
  ['Timer','#ae8b52','<path d="M20 10h24M20 54h24M23 10v11l18 22v11M41 10v11L23 43v11"/>'],
  ['Translate','#4f89c8','<path d="M10 20h25M22 13v7m-9 9q8 13 20 17M30 20q-2 16-18 26m25 3 9-26 9 26m-14-9h10"/>'],
  ['Travel','#bd7d4c','<rect x="11" y="22" width="42" height="29" rx="4"/><path d="M23 22v-8h18v8M22 23v27M42 23v27"/>'],
  ['Video','#527eb0','<rect x="10" y="18" width="29" height="30" rx="4"/><path d="m39 27 15-8v28l-15-8"/>'],
  ['Wallet','#627aba','<path d="M13 18h37v34H13zM13 18l32-7v7m-8 12h16v12H37z"/><path d="M44 36h2"/>'],
  ['Weather','#d3a24f','<circle cx="25" cy="24" r="11"/><path d="M25 7V3M10 12l-3-3M7 25H3m30-12 4-4M17 51a11 11 0 0 1-2-22 15 15 0 0 1 28 6 8 8 0 1 1 2 16z"/>'],
].map(([name,color,path],i)=>({name,icon:demoIcon(color,path),collection:i%2?'everyday':'creative'}));
const apps = [
  ['Calendar','calendar','everyday'],['Camera','camera','creative'],['Chrome','chrome','everyday'],['Clock','clock','everyday'],
  ['Contacts','contacts','everyday'],['Drive','drive','creative'],['Files','files','everyday'],['Gemini','gemini','creative'],
  ['Gmail','gmail','everyday'],['Google','google','everyday'],['Maps','maps','everyday'],['Messages','messages','everyday'],
  ['Naopomi','cat','creative'],['Orbit Fixture','orbit','creative'],['Orbit Notes','orbit','creative'],['Phone','phone','everyday'],
  ['Photos','photos','creative'],['Safety','safety','everyday'],['Settings','settings','everyday'],['Spotify','spotify','creative'],
  ['YouTube','youtube','creative'],['YT Music','music','creative']
].map(([name, icon, collection]) => ({name, icon, collection})).concat(moreApps);
const state = {collection:'all', sort:'az', layout:'grid', keyboard:true, shifted:false, symbols:false, selected:'', refined:true};
let toastTimer;
let depthFrame=0;
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
function requestCatalogDepth() {
  if (depthFrame) return;
  depthFrame=requestAnimationFrame(()=>{
    depthFrame=0;
    const viewport=$('.library-scroll');
    const bounds=viewport.getBoundingClientRect();
    if (!viewport.clientHeight) return;
    const middleY=bounds.top+viewport.clientTop+viewport.clientHeight/2;
    const middleX=bounds.left+viewport.clientLeft+viewport.clientWidth/2;
    const strength=state.refined&&!reducedMotion.matches?Number($('#scroll-depth').value)/100:0;
    const perspective=Math.max(480,Math.min(1100,viewport.clientWidth*1.65));
    // Read every untransformed slot before writing any of its card transforms.
    const geometry=[...$('#app-grid').children].map(slot=>({slot,bounds:slot.getBoundingClientRect()}));
    for(const item of geometry){
      const rect=item.bounds;
      const distanceY=rect.top+rect.height/2-middleY;
      const distanceX=rect.left+rect.width/2-middleX;
      const t=Math.max(-1.25,Math.min(1.25,distanceY/(viewport.clientHeight*.55)));
      const z=(36-185*t*t)*strength;
      const scale=perspective/(perspective-z);
      const card=item.slot.firstElementChild;
      card.style.transform=strength?`perspective(${perspective}px) translate3d(${(distanceX*(scale-1)/scale).toFixed(2)}px,${(distanceY*(scale-1)/scale).toFixed(2)}px,${z.toFixed(2)}px) rotateX(${(-24*t*strength).toFixed(2)}deg)`:'none';
      item.slot.style.zIndex=String(Math.round(1000+z));
    }
  });
}
function toast(message) {
  clearTimeout(toastTimer); $('#toast').textContent=message; $('#toast').classList.add('visible');
  toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2400);
}
function selectApp(app) {
  state.selected=app.name;
  document.querySelectorAll('[data-app]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.app===app.name)));
  toast(`${app.name} selected · browser preview only`);
}
function appButton(app, result=false) {
  const button=document.createElement('button');button.type='button';button.className=result?'result':'app-card';
  button.dataset.app=app.name;button.setAttribute('aria-label',`${app.name}${result?' · App':''}`);button.setAttribute('aria-pressed',String(state.selected===app.name));
  const image=document.createElement('img');image.src=app.icon.startsWith('data:')?app.icon:`assets/${app.icon}.${['clock','contacts','drive','gemini','gmail','google','cat','orbit','safety','youtube'].includes(app.icon)?'svg':'png'}`;image.alt='';image.width=48;image.height=48;image.draggable=false;
  button.append(image);
  if (result) {const copy=document.createElement('span');copy.className='result-copy';const name=document.createElement('span');name.className='result-name';name.textContent=app.name;const type=document.createElement('span');type.className='result-type';type.textContent='App';copy.append(name,type);button.append(copy);}
  else {const label=document.createElement('span');label.className='app-label';label.textContent=app.name;button.append(label);}
  button.addEventListener('click',()=>selectApp(app));
  if(result)return button;
  const slot=document.createElement('div');slot.className='app-slot';slot.append(button);return slot;
}
function renderLibrary() {
  const visible=apps.filter(app=>state.collection==='all'||app.collection===state.collection).sort((a,b)=>a.name.localeCompare(b.name)* (state.sort==='az'?1:-1));
  $('#app-grid').replaceChildren(...visible.map(app=>appButton(app)));
  $('#app-grid').classList.toggle('is-list',state.layout==='list');
  $('#library-count').textContent=`${visible.length} apps`;
  requestCatalogDepth();
}
function renderSearch() {
  const query=$('#query').value.trim().toLocaleLowerCase();
  const results=query?apps.filter(app=>app.name.toLocaleLowerCase().includes(query)):apps.filter(app=>['Calendar','Camera','Messages'].includes(app.name));
  const target=$('#search-results');target.replaceChildren();
  if (!query) {const heading=document.createElement('h3');heading.className='results-heading';heading.textContent='RECENT APPS';target.append(heading);}
  if (!results.length) {const empty=document.createElement('div');empty.className='empty-results';const title=document.createElement('strong');title.textContent='No apps found';const hint=document.createElement('span');hint.textContent='Try another name, or clear your search.';empty.append(title,hint);target.append(empty);}
  else target.append(...results.map(app=>appButton(app,true)));
  $('#suggestion').textContent=$('#query').value.trim()||'Search';
  $('#clear-query').disabled=!$('#query').value;
  target.parentElement.scrollTop=target.parentElement.scrollHeight;
}
function setKeyboard(visible) {
  state.keyboard=visible;$('#search-device').classList.toggle('keyboard-hidden',!visible);$('#keyboard').hidden=!visible;
  $('#keyboard-toggle').setAttribute('aria-pressed',String(visible));$('#keyboard-toggle').setAttribute('aria-label',`${visible?'Hide':'Show'} preview keyboard`);
}
function setLayout(layout) {
  state.layout=layout;$('#grid-view').setAttribute('aria-pressed',String(layout==='grid'));$('#list-view').setAttribute('aria-pressed',String(layout==='list'));renderLibrary();
}
function editQuery(value) {
  const input=$('#query');const start=input.selectionStart??input.value.length;const end=input.selectionEnd??start;
  input.value=input.value.slice(0,start)+value+input.value.slice(end);input.focus({preventScroll:true});input.setSelectionRange(start+value.length,start+value.length);renderSearch();
}
function populateKeys() {
  const symbolRows=['1234567890','@#$%&*-+=','()!?/:;'];
  document.querySelectorAll('[data-letters]').forEach((row,index)=>{
    const letters=state.symbols?symbolRows[index]:row.dataset.letters;
    row.replaceChildren(...[...letters].map(letter=>{const button=document.createElement('button');button.type='button';button.textContent=state.shifted?letter.toUpperCase():letter;button.addEventListener('click',()=>editQuery(button.textContent));return button;}));
  });
}
function updateFinish() {
  const width=$('#card-width').value,dots=$('#dot-strength').value,gradient=$('#gradient').value,depth=$('#scroll-depth').value;
  document.documentElement.style.setProperty('--card-width',`${width}%`);document.documentElement.style.setProperty('--dots',Number(dots)/100);document.documentElement.style.setProperty('--gradient',Number(gradient)/100);
  $('#card-width-value').value=`${width}%`;$('#dot-strength-value').value=`${dots}%`;$('#gradient-value').value=`${gradient}%`;
  $('#scroll-depth-value').value=`${depth}%`;requestCatalogDepth();
}
function setDesign(refined) {
  state.refined=refined;document.body.classList.toggle('is-refined',refined);
  $('#current-design').setAttribute('aria-pressed',String(!refined));$('#refined-design').setAttribute('aria-pressed',String(refined));
  [...$('#collection').options].forEach(option=>{const name={all:'Personal',everyday:'Everyday',creative:'Creative'}[option.value];option.textContent=refined?name:`List: ${name}`;});
  requestCatalogDepth();
}
function setCanvas(open) {
  document.body.classList.toggle('open-canvas',open);$('#cover-mode').setAttribute('aria-pressed',String(!open));$('#open-mode').setAttribute('aria-pressed',String(open));
  requestCatalogDepth();
}
$('#collection').addEventListener('change',event=>{state.collection=event.target.value;renderLibrary();});
$('#sort').addEventListener('change',event=>{state.sort=event.target.value;renderLibrary();});
$('#grid-view').addEventListener('click',()=>setLayout('grid'));$('#list-view').addEventListener('click',()=>setLayout('list'));
$('#view-menu-button').addEventListener('click',()=>{const expanded=$('#view-menu-button').getAttribute('aria-expanded')==='true';$('#view-menu').hidden=expanded;$('#view-menu-button').setAttribute('aria-expanded',String(!expanded));});
document.addEventListener('click',event=>{if(!event.target.closest('#view-menu, #view-menu-button')){$('#view-menu').hidden=true;$('#view-menu-button').setAttribute('aria-expanded','false');}});
$('#library-back').addEventListener('click',()=>{state.collection='all';$('#collection').value='all';renderLibrary();$('.library-scroll').scrollTop=0;});
$('#open-search').addEventListener('click',()=>{$('#search-device').scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});setKeyboard(true);$('#query').focus({preventScroll:true});$('#query').setSelectionRange(0,$('#query').value.length);});
$('#query').addEventListener('input',renderSearch);$('#query').addEventListener('focus',()=>setKeyboard(true));
$('#search-form').addEventListener('submit',event=>{event.preventDefault();setKeyboard(false);$('#query').blur();});
$('#clear-query').addEventListener('click',()=>{$('#query').value='';renderSearch();$('#query').focus({preventScroll:true});});
$('#cancel-search').addEventListener('click',()=>{$('#query').value='';renderSearch();setKeyboard(false);$('#open-search').focus({preventScroll:true});});
$('#keyboard-toggle').addEventListener('click',()=>setKeyboard(!state.keyboard));$('#hide-keyboard').addEventListener('click',()=>setKeyboard(false));
$('#keyboard-search').addEventListener('click',()=>{setKeyboard(false);$('#query').blur();});
$('#shift').addEventListener('click',()=>{state.shifted=!state.shifted;$('#shift').setAttribute('aria-pressed',String(state.shifted));populateKeys();});
$('#symbols').addEventListener('click',()=>{state.symbols=!state.symbols;$('#symbols').setAttribute('aria-pressed',String(state.symbols));$('#symbols').textContent=state.symbols?'ABC':'?123';populateKeys();});
$('#backspace').addEventListener('click',()=>{const input=$('#query');const start=input.selectionStart??input.value.length;const end=input.selectionEnd??start;input.value=input.value.slice(0,start===end?Math.max(0,start-1):start)+input.value.slice(end);const pos=start===end?Math.max(0,start-1):start;input.focus({preventScroll:true});input.setSelectionRange(pos,pos);renderSearch();});
$('#space').addEventListener('click',()=>editQuery(' '));document.querySelectorAll('[data-character]').forEach(button=>button.addEventListener('click',()=>editQuery(button.dataset.character)));
$('#keyboard').addEventListener('pointerdown',event=>event.preventDefault());
$('#cover-mode').addEventListener('click',()=>setCanvas(false));$('#open-mode').addEventListener('click',()=>setCanvas(true));
['#card-width','#dot-strength','#gradient','#scroll-depth'].forEach(selector=>$(selector).addEventListener('input',updateFinish));
$('#current-design').addEventListener('click',()=>setDesign(false));$('#refined-design').addEventListener('click',()=>setDesign(true));
$('#reset').addEventListener('click',()=>{$('#card-width').value=82;$('#dot-strength').value=14;$('#gradient').value=1;$('#scroll-depth').value=75;setDesign(true);updateFinish();setCanvas(false);state.collection='all';state.sort='az';state.selected='';state.shifted=false;state.symbols=false;$('#shift').setAttribute('aria-pressed','false');$('#symbols').setAttribute('aria-pressed','false');$('#symbols').textContent='?123';populateKeys();$('#collection').value='all';$('#sort').value='az';setLayout('grid');$('#query').value='Orbit';renderSearch();$('.library-scroll').scrollTop=0;setKeyboard(true);$('#view-menu').hidden=true;$('#view-menu-button').setAttribute('aria-expanded','false');toast('Study reset');});
document.addEventListener('keydown',event=>{if(event.key!=='Escape')return;if(!$('#view-menu').hidden){$('#view-menu').hidden=true;$('#view-menu-button').setAttribute('aria-expanded','false');$('#view-menu-button').focus();}else if(state.keyboard){setKeyboard(false);$('#query').blur();}else{$('#open-search').focus({preventScroll:true});}});
$('.library-scroll').addEventListener('scroll',requestCatalogDepth,{passive:true});
window.addEventListener('resize',requestCatalogDepth,{passive:true});
reducedMotion.addEventListener('change',requestCatalogDepth);
if('ResizeObserver' in window){const observer=new ResizeObserver(requestCatalogDepth);observer.observe($('.library-scroll'));observer.observe($('#app-grid'));}
document.fonts.ready.then(requestCatalogDepth);
renderLibrary();renderSearch();populateKeys();updateFinish();
