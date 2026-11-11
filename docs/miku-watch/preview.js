(() => {
  'use strict';
  const defaults = {layout:'comic',character:'reference',palette:'paper',mode:'active',art:100,texture:25,details:true,seconds:true,size:'44',format:'24',live:false,bare:false};
  const choices = {layout:['comic','portrait','dial'],character:['original','reference'],palette:['paper','night'],mode:['active','ambient'],size:['40','44'],format:['12','24']};
  const names = {comic:'Comic',portrait:'Portrait',dial:'Backstage'};
  const captions = {comic:'The Comic clock, with Miku’s playful sticker expression.',portrait:'An oversized time header. Miku takes the lower stage.',dial:'A classic dial with a tiny backstage guest.'};
  const storageKey = 'miku-watch-study-001';
  const $ = id => document.getElementById(id);
  function sanitize(input) {
    const result = {...defaults};
    for (const [key, values] of Object.entries(choices)) if(values.includes(input[key])) result[key] = input[key];
    if(input.character==='simple') result.character='reference';
    for(const key of ['art','texture']) {
      const value = Number(input[key]);
      if(input[key] !== undefined && Number.isFinite(value)) result[key] = Math.min(key==='art'?125:60, Math.max(key==='art'?75:0, value));
    }
    for(const key of ['details','seconds','live','bare']) if(typeof input[key] === 'boolean') result[key] = input[key];
    return result;
  }
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}') || {}; } catch {}
  const params = new URLSearchParams(location.hash.slice(1));
  const fromLink = {};
  for (const [key,value] of params) if(key in defaults) fromLink[key] = typeof defaults[key] === 'boolean' ? value==='true' : value;
  let state = sanitize(params.has('layout') ? fromLink : saved);
  let toastTimer;
  let currentTimeKey = '';
  const demoDate = new Date(2026,10,11,10,8,39);
  function timeParts() {
    const now = state.live ? new Date() : demoDate;
    const hour = now.getHours();
    return {hour:String(state.format==='12' ? hour%12 || 12 : hour).padStart(2,'0'), minute:String(now.getMinutes()).padStart(2,'0'), second:now.getSeconds(), hour24:hour, min:now.getMinutes(), period:hour>=12?'PM':'AM', day:now.toLocaleDateString('en-GB',{weekday:'short'}).toUpperCase(), date:now.getDate(), month:now.toLocaleDateString('en-GB',{month:'short'}).toUpperCase()};
  }
  const text = (x,y,value,size,fill,extra='') => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" ${extra}>${value}</text>`;
  function ticks(color,majorColor) {
    return Array.from({length:60},(_,i)=>`<line x1="225" y1="${i%5?18:15}" x2="225" y2="${i%5?21:26}" stroke="${i%5?color:majorColor}" stroke-width="${i%5?1.5:3}" transform="rotate(${i*6} 225 225)"/>`).join('');
  }
  function artImage(file,x,y,width,height,anchorX,anchorY) {
    const scale = state.art / 100;
    return `<g transform="translate(${anchorX} ${anchorY}) scale(${scale}) translate(${-anchorX} ${-anchorY})"><image href="assets/${file}.png" x="${x}" y="${y}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet"/></g>`;
  }
  function slots(layout,ink,muted,interactive) {
    const attr = interactive ? 'class="face-slot" role="button" tabindex="0"' : '';
    if(layout==='portrait') return `<g ${attr} data-slot="battery" aria-label="Sample battery, 82 percent"><rect x="151" y="349" width="148" height="42" rx="21" fill="#0b2925"/>${text(225,377,'82%  ·  6,390',21,'#f8f7ef','text-anchor="middle" font-weight="700"')}</g>`;
    if(layout==='dial') return `<g ${attr} data-slot="steps" aria-label="Sample steps, 6,390"><rect x="67" y="250" width="124" height="54" rx="6" fill="transparent"/>${text(129,270,'6,390',25,ink,'text-anchor="middle" font-weight="700"')}${text(129,290,'STEPS',10,muted,'text-anchor="middle" letter-spacing="2"')}</g><g ${attr} data-slot="battery" aria-label="Sample battery, 82 percent"><rect x="76" y="160" width="80" height="40" fill="transparent"/>${text(116,187,'82%',20,ink,'text-anchor="middle" font-weight="700"')}</g>`;
    return `<g ${attr} data-slot="battery" aria-label="Sample battery, 82 percent"><rect x="76" y="334" width="105" height="54" rx="6" fill="transparent"/><rect x="89" y="345" width="20" height="11" rx="2" fill="none" stroke="${muted}" stroke-width="2"/><rect x="110" y="348" width="2" height="5" fill="${muted}"/>${text(121,358,'82%',22,ink,'font-weight="700"')}${text(89,378,'BATTERY',10,muted,'letter-spacing="1.3"')}</g><g ${attr} data-slot="steps" aria-label="Sample steps, 6,390"><rect x="226" y="334" width="115" height="54" rx="6" fill="transparent"/>${text(233,358,'6,390',22,ink,'font-weight="700"')}${text(234,378,'STEPS',10,muted,'letter-spacing="1.3"')}</g>`;
  }
  function faceSVG(layout,ambient,id,interactive=false) {
    const t=timeParts(), night=state.palette==='night';
    const bg=ambient?'#000':night?'#092a27':'#f6f4e8';
    const ink=ambient?'#b9c3bc':night?'#f3f1e5':'#143d36';
    const muted=ambient?'#64877a':night?'#8cbcaf':'#608578';
    const teal=ambient?'#508e83':night?'#30d8c3':'#087f73';
    const pink=ambient?'#926074':'#ed3d7d';
    const timeFont='font-family="Comic,Barlow,sans-serif" font-weight="900" font-style="italic"';
    let content='';
    if(!ambient) {
      content+=`<path d="M-10 291 Q190 265 460 318 L460 470 L-10 470Z" fill="${night?'#103e36':'#e0e9d6'}"/>`;
      content+=`<rect y="220" width="450" height="230" fill="url(#dots-${id})" opacity="${state.texture/100}"/>`;
      if(layout!=='portrait') content+=ticks(night?'#2c5b50':'#b2c7b8',teal);
      if(state.seconds && layout!=='dial') content+=`<circle cx="225" cy="225" r="211" fill="none" stroke="${pink}" stroke-width="3" pathLength="60" stroke-dasharray="${t.second} 60" transform="rotate(-90 225 225)"/>`;
    }
    if(layout==='comic') {
      content+=text(276,103,'MIKU',34,teal,`${timeFont} transform="rotate(-8 276 103)"`);
      content+=text(282,128,`${t.day} ${t.date}`,14,muted,'font-weight="700" letter-spacing="1.5"');
      content+=text(61,193,t.hour,147,ink,`${timeFont} textLength="167" lengthAdjust="spacingAndGlyphs"`);
      content+=text(61,306,t.minute,147,ambient?ink:teal,`${timeFont} textLength="167" lengthAdjust="spacingAndGlyphs"`);
      if(state.format==='12') content+=text(62,104,t.period,13,muted,'font-weight="700"');
      if(!ambient) {
        content+=state.character==='reference'?artImage('miku-reference-head-hires-v2',180,92,280,280,320,232):artImage('miku',201,144,252,200,327,244);
        content+=`<path d="M303 145 l12 -13 m-2 20 17 -4" fill="none" stroke="${pink}" stroke-width="4" stroke-linecap="round"/>`;
      } else content+=text(302,279,'01',42,teal,`${timeFont} text-anchor="middle"`);
      if(state.details&&!ambient) content+=slots(layout,ink,muted,interactive);
    } else if(layout==='portrait') {
      content+=text(225,96,`${t.day} ${t.date} ${t.month}`,15,muted,'text-anchor="middle" font-weight="700" letter-spacing="2"');
      content+=text(225,196,`${t.hour}:${t.minute}`,108,ink,`${timeFont} text-anchor="middle" textLength="318" lengthAdjust="spacingAndGlyphs"`);
      if(state.format==='12') content+=text(225,221,t.period,13,muted,'text-anchor="middle"');
      if(!ambient) content+=artImage(state.character==='reference'?'miku-reference-head-hires-v2':'miku',71,209,331,221,237,318);
      else content+=text(225,318,'MIKU / 01',19,teal,'text-anchor="middle" letter-spacing="3"');
      if(state.details&&!ambient) content+=slots(layout,ink,muted,interactive);
    } else {
      if(ambient) content+=Array.from({length:4},(_,i)=>`<line x1="225" y1="25" x2="225" y2="38" stroke="${muted}" stroke-width="2" transform="rotate(${i*90} 225 225)"/>`).join('');
      content+=text(225,91,'MIKU',25,teal,`${timeFont} text-anchor="middle"`);
      content+=text(225,116,`${t.day} ${t.date}`,12,muted,'text-anchor="middle" letter-spacing="2"');
      content+=text(225,61,'12',13,muted,'text-anchor="middle" font-weight="700"');
      content+=text(403,230,'3',13,muted,'text-anchor="middle" font-weight="700"');
      content+=text(225,401,'6',13,muted,'text-anchor="middle" font-weight="700"');
      content+=text(46,230,'9',13,muted,'text-anchor="middle" font-weight="700"');
      if(!ambient) content+=artImage(state.character==='reference'?'miku-reference-head-hires-v2':'miku-head',237,253,133,110,304,308);
      if(state.details&&!ambient) content+=slots(layout,ink,muted,interactive);
      content+=`<line x1="225" y1="238" x2="225" y2="117" stroke="${ink}" stroke-width="12" stroke-linecap="round" transform="rotate(${(t.hour24%12)*30+t.min/2} 225 225)"/><line x1="225" y1="245" x2="225" y2="65" stroke="${teal}" stroke-width="7" stroke-linecap="round" transform="rotate(${t.min*6} 225 225)"/>`;
      if(state.seconds&&!ambient) content+=`<line x1="225" y1="253" x2="225" y2="49" stroke="${pink}" stroke-width="2.5" transform="rotate(${t.second*6} 225 225)"/>`;
      content+=`<circle cx="225" cy="225" r="8" fill="${pink}"/><circle cx="225" cy="225" r="3" fill="${bg}"/>`;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" role="${interactive?'group':'img'}" aria-label="${names[layout]} ${ambient?'always-on':'active'} face, ${t.hour}:${t.minute}" style="font-family:Barlow,Arial,sans-serif"><defs><clipPath id="clip-${id}"><circle cx="225" cy="225" r="225"/></clipPath><pattern id="dots-${id}" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.25" fill="${teal}"/></pattern></defs><g clip-path="url(#clip-${id})"><circle cx="225" cy="225" r="225" fill="${bg}"/>${content}</g></svg>`;
  }
  function updateFaces() {
    // Preserve focused information slots while the optional live clock updates.
    const focused = $('face').contains(document.activeElement) ? document.activeElement?.dataset.slot : null;
    $('face').innerHTML=faceSVG(state.layout,state.mode==='ambient','main',true);
    $('ambient-face').innerHTML=faceSVG(state.layout,true,'ambient');
    for(const layout of choices.layout) $('mini-'+layout).innerHTML=faceSVG(layout,false,'mini-'+layout);
    if(focused) $('face').querySelector(`[data-slot="${focused}"]`)?.focus({preventScroll:true});
  }
  function render(persist=true) {
    for(const type of ['layout','character','palette','mode']) for(const button of document.querySelectorAll(`[data-${type}]`)) button.setAttribute('aria-pressed',String(button.dataset[type]===state[type]));
    for(const key of ['art','texture','size','format']) $(key).value=state[key];
    for(const key of ['details','seconds','live']) $(key).checked=state[key];
    $('art-value').value=state.art+'%'; $('texture-value').value=state.texture+'%';
    $('watch').classList.toggle('small',state.size==='40');
    $('watch').classList.toggle('bare',state.bare);
    $('bare').setAttribute('aria-pressed',String(state.bare));
    $('bare').textContent=state.bare?'Show watch case ↙':'Hide watch case ↗';
    $('stage-label').textContent=`${names[state.layout].toUpperCase()} / ${state.mode==='active'?'ACTIVE':'ALWAYS-ON'}`;
    $('case-label').textContent=`${state.size} MM / ILLUSTRATIVE CASE`;
    $('stage-caption').textContent=state.mode==='ambient'?'Time stays. Illustration and texture rest.':captions[state.layout];
    // Texture/artwork settings remain adjustable for the active face while comparing ambient.
    updateFaces();
    if(persist) {try{localStorage.setItem(storageKey,JSON.stringify(state));}catch{}}
  }
  function toast(message) {
    clearTimeout(toastTimer);$('toast').textContent=message;$('toast').classList.add('visible');
    toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3500);
  }
  function change(key,value) { state=sanitize({...state,[key]:value});render(); }
  for(const key of ['layout','character','palette','mode']) document.querySelectorAll(`[data-${key}]`).forEach(button=>button.addEventListener('click',()=>change(key,button.dataset[key])));
  for(const key of ['art','texture']) $(key).addEventListener('input',event=>change(key,event.target.value));
  for(const key of ['size','format']) $(key).addEventListener('change',event=>change(key,event.target.value));
  for(const key of ['details','seconds','live']) $(key).addEventListener('change',event=>change(key,event.target.checked));
  $('bare').addEventListener('click',()=>change('bare',!state.bare));
  $('reset').addEventListener('click',()=>{state={...defaults};history.replaceState(null,'',location.pathname+location.search);render();toast('Back to the Comic reference design.');});
  $('share').addEventListener('click',async()=>{
    const url=new URL(location.href);url.hash=new URLSearchParams(Object.entries(state)).toString();
    try { await navigator.clipboard.writeText(url.href);toast('Design link copied.'); }
    catch { $('share-url').value=url.href;$('share-dialog').showModal();$('share-url').select(); }
  });
  function activateSlot(event) {
    const slot=event.target.closest('[data-slot]');if(!slot)return;
    toast(slot.dataset.slot==='battery'?'Sample watch battery: 82%. Data source selection comes with the native face.':'Sample activity: 6,390 steps. This preview is not connected to your watch.');
  }
  $('face').addEventListener('click',activateSlot);
  $('face').addEventListener('keydown',event=>{if((event.key==='Enter'||event.key===' ')&&event.target.closest('[data-slot]')){event.preventDefault();activateSlot(event);}});
  setInterval(()=>{
    if(!state.live||document.hidden)return;
    const t=timeParts(), key=[t.hour,t.minute,state.seconds?t.second:0,t.day,t.date].join(':');
    if(currentTimeKey!==key) {currentTimeKey=key;updateFaces();}
  },1000);
  render(false);
})();
