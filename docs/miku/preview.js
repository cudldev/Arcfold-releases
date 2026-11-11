const $ = (selector) => document.querySelector(selector);
const apps = [
  ['Calendar','calendar','everyday'],['Camera','camera','creative'],['Chrome','chrome','everyday'],['Clock','clock','everyday'],
  ['Contacts','contacts','everyday'],['Drive','drive','creative'],['Files','files','everyday'],['Gemini','gemini','creative'],
  ['Gmail','gmail','everyday'],['Google','google','everyday'],['Maps','maps','everyday'],['Messages','messages','everyday'],
  ['Naopomi','cat','creative'],['Orbit Fixture','orbit','creative'],['Orbit Notes','orbit','creative'],['Phone','phone','everyday'],
  ['Photos','photos','creative'],['Safety','safety','everyday'],['Settings','settings','everyday'],['Spotify','spotify','creative'],
  ['YouTube','youtube','creative'],['YT Music','music','creative']
].map(([name, icon, collection]) => ({name, icon, collection}));
const state = {collection:'all', sort:'az', layout:'grid', keyboard:true, shifted:false, symbols:false, selected:'', refined:true};
let toastTimer;
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
  const image=document.createElement('img');image.src=`assets/${app.icon}.${['clock','contacts','drive','gemini','gmail','google','cat','orbit','safety','youtube'].includes(app.icon)?'svg':'png'}`;image.alt='';image.width=48;image.height=48;image.draggable=false;
  if (result) button.append(image);
  else {
    const edge=document.createElement('span');edge.className='paper-edge';edge.setAttribute('aria-hidden','true');button.append(edge);
    const stage=document.createElement('span');stage.className='icon-stage';stage.setAttribute('aria-hidden','true');stage.append(image);button.append(stage);
    button.addEventListener('pointermove',event=>{
      if (!state.refined || event.pointerType!=='mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const bounds=button.getBoundingClientRect();
      stage.style.setProperty('--tilt-x',`${7-(event.clientY-bounds.top)/bounds.height*8}deg`);
      stage.style.setProperty('--tilt-y',`${(event.clientX-bounds.left)/bounds.width*12-6}deg`);
    });
    const release=()=>{button.classList.remove('is-pressing');stage.style.removeProperty('--tilt-x');stage.style.removeProperty('--tilt-y');};
    button.addEventListener('pointerdown',()=>button.classList.add('is-pressing'));
    button.addEventListener('pointerup',release);button.addEventListener('pointercancel',release);button.addEventListener('pointerleave',release);button.addEventListener('blur',release);
  }
  if (result) {const copy=document.createElement('span');copy.className='result-copy';const name=document.createElement('span');name.className='result-name';name.textContent=app.name;const type=document.createElement('span');type.className='result-type';type.textContent='App';copy.append(name,type);button.append(copy);}
  else {const label=document.createElement('span');label.className='app-label';label.textContent=app.name;button.append(label);}
  button.addEventListener('click',()=>selectApp(app));return button;
}
function renderLibrary() {
  const visible=apps.filter(app=>state.collection==='all'||app.collection===state.collection).sort((a,b)=>a.name.localeCompare(b.name)* (state.sort==='az'?1:-1));
  $('#app-grid').replaceChildren(...visible.map(app=>appButton(app)));
  $('#app-grid').classList.toggle('is-list',state.layout==='list');
  $('#library-count').textContent=`${visible.length} apps`;
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
  const width=$('#card-width').value,dots=$('#dot-strength').value,gradient=$('#gradient').value,depth=$('#icon-depth').value;
  document.documentElement.style.setProperty('--card-width',`${width}%`);document.documentElement.style.setProperty('--dots',Number(dots)/100);document.documentElement.style.setProperty('--gradient',Number(gradient)/100);
  $('#card-width-value').value=`${width}%`;$('#dot-strength-value').value=`${dots}%`;$('#gradient-value').value=`${gradient}%`;
  document.documentElement.style.setProperty('--depth',depth);document.documentElement.style.setProperty('--depth-amount',Number(depth)/12);$('#icon-depth-value').value=depth;
}
function setDesign(refined) {
  state.refined=refined;document.body.classList.toggle('is-refined',refined);
  $('#current-design').setAttribute('aria-pressed',String(!refined));$('#refined-design').setAttribute('aria-pressed',String(refined));
  document.querySelectorAll('.icon-stage').forEach(stage=>{stage.style.removeProperty('--tilt-x');stage.style.removeProperty('--tilt-y');});
  [...$('#collection').options].forEach(option=>{const name={all:'Personal',everyday:'Everyday',creative:'Creative'}[option.value];option.textContent=refined?name:`List: ${name}`;});
}
function setCanvas(open) {
  document.body.classList.toggle('open-canvas',open);$('#cover-mode').setAttribute('aria-pressed',String(!open));$('#open-mode').setAttribute('aria-pressed',String(open));
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
['#card-width','#dot-strength','#gradient','#icon-depth'].forEach(selector=>$(selector).addEventListener('input',updateFinish));
$('#current-design').addEventListener('click',()=>setDesign(false));$('#refined-design').addEventListener('click',()=>setDesign(true));
$('#reset').addEventListener('click',()=>{$('#card-width').value=82;$('#dot-strength').value=14;$('#gradient').value=1;$('#icon-depth').value=8;setDesign(true);updateFinish();setCanvas(false);state.collection='all';state.sort='az';state.selected='';state.shifted=false;state.symbols=false;$('#shift').setAttribute('aria-pressed','false');$('#symbols').setAttribute('aria-pressed','false');$('#symbols').textContent='?123';populateKeys();$('#collection').value='all';$('#sort').value='az';setLayout('grid');$('#query').value='Orbit';renderSearch();setKeyboard(true);$('#view-menu').hidden=true;$('#view-menu-button').setAttribute('aria-expanded','false');toast('Study reset');});
document.addEventListener('keydown',event=>{if(event.key!=='Escape')return;if(!$('#view-menu').hidden){$('#view-menu').hidden=true;$('#view-menu-button').setAttribute('aria-expanded','false');$('#view-menu-button').focus();}else if(state.keyboard){setKeyboard(false);$('#query').blur();}else{$('#open-search').focus({preventScroll:true});}});
renderLibrary();renderSearch();populateKeys();updateFinish();
