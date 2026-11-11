/* Standalone watch face studies. All information is illustrative sample data. */
globalThis.WatchStudies = (() => {
  const names={closeup:'Miku Close-up',takeover:'Miku Takeover',headliner:'Miku Headliner',sidekick:'Miku Sidekick',vinyl:'Miku Vinyl',sticker:'Miku Sticker',arc:'Arc',instrument:'Instrument',paper:'Paper'};
  const captions={takeover:'Miku takes the stage. The time gets a bold headline below.',headliner:'Big time at the top. A full-size character underneath.',sidekick:'A sideways time column and a larger-than-life Miku.',vinyl:'A tiny record label, a favourite face, and a big digital clock.',sticker:'A Miku sticker and a crooked time ticket. A little more pop.',arc:'Quiet typography and a sweep of colour across the horizon.',instrument:'A precise field dial, warm markers and useful little details.',paper:'Oversized type, warm paper and a single vermilion accent.'};
  const focusLayouts=['takeover','headliner','sidekick'];
  captions.closeup='Her face fills the dial. The clock sits gently across the fringe.';
  const isMiku=layout=>['closeup','vinyl','sticker',...focusLayouts].includes(layout);
  const text=(x,y,value,size,fill,extra='')=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" fill="${fill}" ${extra}>${value}</text>`;
  function colour(hex,intensity) {
    return '#'+hex.slice(1).match(/../g).map(pair=>Math.round(parseInt(pair,16)*intensity).toString(16).padStart(2,'0')).join('');
  }
  function render(layout,state,t,id,interactive=false) {
    const ambient=state.mode==='ambient',night=state.palette==='night';
    const activeInk=night?'#f4f0df':'#20332b', ink=ambient?'#c3c9c1':activeInk;
    const muted=ambient?'#687a72':night?'#8ba99b':'#6a7b6c';
    const intensity=state.aod/100;
    const accent=hex=>ambient?colour(state.aodstyle==='teal'?'#6bb6a3':hex,intensity):hex;
    const anchor='font-weight="700"';
    let bg='#000',content='',defs='';
    const art=(x,y,size,centreX=x+size/2,centreY=y+size/2)=>{
      if(ambient&&state.aod===0) return '';
      const scale=ambient?1:state.art/100;
      const file=state.character==='original'&&!ambient?'miku':'miku-reference-head-hires-v2';
      return `<g transform="translate(${centreX} ${centreY}) scale(${scale}) translate(${-centreX} ${-centreY})"><image ${ambient?'data-ambient-art="true"':''} href="assets/${file}.png" x="${x}" y="${y}" width="${size}" height="${size}" filter="${ambient?`url(#aod-${id})`:'none'}"/></g>`;
    };
    if(ambient&&isMiku(layout)&&state.aod>0) {
      const matrix=state.aodstyle==='colour'?[intensity,0,0,0,0,0,intensity,0,0,0,0,0,intensity,0,0,0,0,0,1,0]:[.64,1,.88].flatMap(tint=>[.2126,.7152,.0722].map(luma=>luma*tint*intensity).concat([0,0])).concat([0,0,0,1,0]);
      defs+=`<filter id="aod-${id}" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="${matrix.join(' ')}"/></filter>`;
    }
    const metric=(x,y,label,value,slot,fill=ink)=>{
      if(!state.details||ambient) return '';
      return `<g ${interactive?'class="face-slot" role="button" tabindex="0"':''} data-slot="${slot}" aria-label="Sample ${label}, ${value}"><rect x="${x-52}" y="${y-24}" width="104" height="48" fill="transparent"/>${text(x,y,value,21,fill,anchor)}${text(x,y+17,label,9,muted,'letter-spacing="1.5"')}</g>`;
    };
    const secondDot=(r,fill)=>{
      if(ambient||!state.seconds) return '';
      const angle=t.second*Math.PI/30-Math.PI/2;
      return `<circle cx="${225+Math.cos(angle)*r}" cy="${225+Math.sin(angle)*r}" r="4" fill="${fill}"/>`;
    };
    if(layout==='closeup') {
      bg=ambient?'#000':'#78adbd';
      if(!ambient||state.aod>0) content+=`<image ${ambient?'data-ambient-art="true"':''} href="assets/soft-chibi-full-face-v1.png" x="0" y="0" width="450" height="450" preserveAspectRatio="xMidYMid slice" filter="${ambient?`url(#aod-${id})`:'none'}"/>`;
      const clockInk='#75b5ca';
      const clockFamily={fredoka:'Fredoka',nunito:'Nunito',baloo:'Baloo 2',barlow:'Barlow'}[state.font]||'Fredoka';
      const clockWeight=state.font==='nunito'?800:state.font==='fredoka'?600:700;
      defs+=`<path id="closeup-time-${id}" d="M65 225 A160 160 0 0 1 385 225"/>`;
      content+=`<text font-family="'${clockFamily}',Barlow,sans-serif" font-size="64" font-weight="${clockWeight}" text-anchor="middle" fill="${clockInk}" paint-order="stroke" stroke="#192751" stroke-width="5" stroke-linejoin="round"><textPath href="#closeup-time-${id}" startOffset="50%" textLength="220" lengthAdjust="spacingAndGlyphs">${t.hour}:${t.minute}</textPath></text>`;
      content+=text(225,127,`${t.day} ${t.date}${state.format==='12'?' · '+t.period:''}`,14,clockInk,`font-family="'${clockFamily}',Barlow,sans-serif" font-weight="700" letter-spacing="1.5" paint-order="stroke" stroke="#192751" stroke-width="3"`);
      content+=secondDot(208,'#192751');
    } else if(focusLayouts.includes(layout)) {
      const pink=accent('#f34d8b'),teal=accent('#15baa6');
      bg=ambient?'#000':night?'#092b2b':layout==='takeover'?'#f9edda':layout==='headliner'?'#c8eee1':'#f5dce4';
      if(!ambient) {
        defs+=`<pattern id="focus-print-${id}" width="11" height="11" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.45" fill="${night?'#6bc6b6':'#216658'}"/></pattern>`;
        if(layout==='takeover') content+=`<path d="M0 270 450 239V450H0Z" fill="${night?'#173c36':'#a9e2d0'}"/><circle cx="225" cy="161" r="157" fill="${night?'#224c44':'#f3acc5'}"/>`;
        if(layout==='headliner') content+=`<path d="M0 0H450V182L0 160Z" fill="${night?'#153e38':'#f6eddb'}"/><path d="M0 285 450 258V450H0Z" fill="${night?'#173936':'#edb1c7'}"/>`;
        if(layout==='sidekick') content+=`<path d="M142 0 121 450H0V0Z" fill="${night?'#1e4e45':'#f6eddb'}"/><circle cx="278" cy="206" r="150" fill="${night?'#153f3c':'#9de1ce'}"/>`;
        content+=`<rect width="450" height="450" fill="url(#focus-print-${id})" opacity="${state.texture/100}"/>`;
      }
      content+=secondDot(211,'#f34d8b');
      const frame=layout==='takeover'?[18,-58,414,225,150]:layout==='headliner'?[18,80,414,225,287]:[104,24,357,284,225];
      if(!ambient||state.aod>0) {
        const [x,y,size,cx,cy]=frame;
        const scale=ambient?1:state.art/100;
        content+=`<g data-focus-art="${layout}" transform="translate(${cx} ${cy}) scale(${scale}) translate(${-cx} ${-cy})"><image ${ambient?'data-ambient-art="true"':''} href="assets/miku-reference-head-hires-v2.png" x="${x}" y="${y}" width="${size}" height="${size}" filter="${ambient?`url(#aod-${id})`:'none'}"/></g>`;
      }
      const timeInk=ambient?ink:night?'#f9f0dc':'#143d35';
      const timeStyle=`font-family="Comic,Barlow,sans-serif" font-weight="900" font-style="italic" textLength="${layout==='headliner'?312:318}" lengthAdjust="spacingAndGlyphs"`;
      if(layout==='takeover') {
        content+=text(225,373,`${t.hour}:${t.minute}`,116,timeInk,timeStyle);
        if(state.format==='12') content+=text(225,407,t.period,12,ambient?muted:night?'#abcab9':'#447b65','letter-spacing="3"');
      } else if(layout==='headliner') {
        content+=text(225,151,`${t.hour}:${t.minute}`,112,timeInk,timeStyle);
        if(state.format==='12') content+=text(225,61,t.period,12,ambient?muted:night?'#abcab9':'#447b65','letter-spacing="3"');
      } else {
        content+=`<g transform="translate(118 225) rotate(-90)">${text(0,0,`${t.hour}:${t.minute}`,91,timeInk,'font-family="Comic,Barlow,sans-serif" font-weight="900" font-style="italic" textLength="258" lengthAdjust="spacingAndGlyphs"')}</g>`;
        content+=text(283,348,'MIKU',35,teal,'font-family="Comic" font-weight="900" font-style="italic" letter-spacing="2"');
        if(state.format==='12') content+=text(283,375,t.period,12,ambient?muted:night?'#abcab9':'#447b65','letter-spacing="3"');
      }
    } else if(layout==='vinyl') {
      bg=ambient?'#000':night?'#091815':'#112f28';
      const teal=accent('#28cfbc'),pink=accent('#f04e8a');
      content+=text(225,76,'MIKU / VINYL CLUB',15,teal,'letter-spacing="2" font-weight="700"');
      if(!ambient) {
        content+=`<circle cx="225" cy="263" r="125" fill="#081c18"/>`;
        for(const radius of [122,114,106,98,90]) content+=`<circle cx="225" cy="263" r="${radius}" fill="none" stroke="#406557" stroke-width="1.5" opacity="${.35+state.texture/100}"/>`;
        content+=`<circle cx="225" cy="255" r="80" fill="${night?'#136f63':'#f4ebcf'}"/>`;
      } else if(state.aod>0) content+=`<path d="M102 261a123 123 0 0 1 246 0" fill="none" stroke="${teal}" stroke-width="2"/>`;
      content+=text(225,145,`${t.hour}:${t.minute}`,75,ambient?ink:'#f6efdc',anchor);
      if(state.format==='12') content+=text(225,168,t.period,11,ambient?muted:'#a8c2b4','letter-spacing="2"');
      content+=state.character==='reference'||ambient?art(125,133,200,225,235):art(140,156,170,225,236);
      content+=text(225,323,'SIDE A · 01',12,pink,'letter-spacing="2" font-weight="700"');
      content+=metric(149,365,'BATTERY','82%','battery','#f6efdc')+metric(301,365,'STEPS','6,390','steps','#f6efdc');
      content+=secondDot(202,'#f04e8a');
    } else if(layout==='sticker') {
      bg=ambient?'#000':night?'#092b29':'#c8eee0';
      const pink=accent('#ed4e87'),teal=accent('#128b7c');
      if(!ambient) {
        defs+=`<pattern id="print-${id}" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.6" fill="#267d6c"/></pattern>`;
        content+=`<rect y="140" width="450" height="300" fill="url(#print-${id})" opacity="${state.texture/100}"/><g transform="rotate(-7 225 100)"><path d="M80 82h290l-12 42H70Z" fill="#ee6295"/>${text(225,111,'GOOD TIME.',28,'#122e29','font-family="Comic" font-style="italic" font-weight="900"')}</g>`;
        content+=state.character==='reference'?art(110,116,230,225,215):art(140,133,170,225,215);
        content+=`<g transform="rotate(-5 225 348)"><rect x="80" y="312" width="290" height="76" rx="3" fill="#f6f0dc" stroke="#143b33" stroke-width="4"/>${text(225,370,`${t.hour}:${t.minute}`,72,'#173c33','font-family="Comic" font-style="italic" font-weight="900"')}</g>`;
      } else {
        content+=text(225,98,'MIKU',21,teal,'letter-spacing="4" font-weight="700"');
        content+=art(105,105,240);
        content+=text(225,345,`${t.hour}:${t.minute}`,72,ink,anchor);
      }
      if(state.format==='12') content+=text(386,347,t.period,10,ambient?muted:night?'#b5d8c8':'#206456','letter-spacing="1"');
      content+=text(225,416,`${t.day} ${t.date} · ${t.month}`,13,ambient?pink:night?'#a4c8b8':'#215c4e','letter-spacing="2"');
      if(state.details&&!ambient) for(const [x,value,slot] of [[150,'82% BATTERY','battery'],[300,'6,390 STEPS','steps']]) content+=`<g ${interactive?'class="face-slot" role="button" tabindex="0"':''} data-slot="${slot}" aria-label="Sample ${value}"><rect x="${x-65}" y="119" width="130" height="44" fill="transparent"/>${text(x,145,value,11,night?'#b5d8c8':'#206456','letter-spacing="1"')}</g>`;
      content+=secondDot(209,'#ed4e87');
    } else if(layout==='arc') {
      bg=ambient?'#000':night?'#111b30':'#eeece6';
      const arc=accent(night?'#baa4f2':'#7659ac');
      if(!ambient) {
        content+=`<path d="M15 317Q225 40 435 317" fill="none" stroke="${night?'#2d3459':'#d8d0e3'}" stroke-width="28"/><path d="M15 337Q225 60 435 337" fill="none" stroke="${night?'#4e4e80':'#bfb0d3'}" stroke-width="9"/>`;
      }
      if(!ambient||state.aod>0) content+=`<path d="M62 333Q225 131 388 333" fill="none" stroke="${arc}" stroke-width="${ambient?2:4}"/>`;
      content+=text(225,85,'A R C',17,arc,anchor);
      content+=text(225,155,`${t.day} ${t.date} ${t.month}`,13,muted,'letter-spacing="2"');
      content+=text(225,253,`${t.hour}:${t.minute}`,99,ambient?ink:night?'#ede9e0':'#30384b','letter-spacing="-4"');
      if(state.format==='12') content+=text(225,284,t.period,12,muted,'letter-spacing="2"');
      content+=metric(146,356,'BATTERY','82%','battery')+metric(304,356,'STEPS','6,390','steps');
      content+=secondDot(207,night?'#baa4f2':'#7659ac');
    } else if(layout==='instrument') {
      bg=ambient?'#000':night?'#0f241c':'#e1e6cf';
      const orange=accent('#e77b37'),dialInk=ambient?ink:night?'#e6ead5':'#244235';
      if(!ambient) content+=`<circle cx="225" cy="225" r="193" fill="none" stroke="${night?'#36523f':'#afbea0'}" stroke-width="1"/><circle cx="225" cy="225" r="157" fill="none" stroke="${night?'#263e30':'#c4cfb4'}" stroke-width="1"/>`;
      for(let i=0;i<60;i++) {
        if(ambient&&i%5) continue;
        content+=`<line x1="225" y1="${i%5?29:24}" x2="225" y2="${i%5?35:45}" stroke="${i%5?muted:dialInk}" stroke-width="${i%5?1:3}" transform="rotate(${i*6} 225 225)"/>`;
      }
      for(const [label,x,y] of [['12',225,76],['3',383,232],['6',225,390],['9',67,232]]) content+=text(x,y,label,22,dialInk,'font-family="monospace"');
      content+=text(225,116,'FIELD / 08',12,orange,'letter-spacing="2" font-weight="700"');
      if(!ambient&&state.details) content+=`<rect x="289" y="206" width="49" height="38" rx="2" fill="${night?'#dce4c8':'#264634'}"/>${text(313,233,t.date,24,night?'#183628':'#eff2d9',anchor)}`;
      content+=text(225,325,`${t.hour}:${t.minute}`,31,dialInk,'font-family="monospace"');
      if(state.format==='12') content+=text(225,344,t.period,10,muted,'letter-spacing="2"');
      content+=`<path d="m219 237 2-123 4-15 4 15 2 123Z" fill="${dialInk}" transform="rotate(${(t.hour24%12)*30+t.min/2} 225 225)"/><line x1="225" y1="239" x2="225" y2="65" stroke="${dialInk}" stroke-width="5" stroke-linecap="round" transform="rotate(${t.min*6} 225 225)"/>`;
      if(state.seconds&&!ambient) content+=`<line x1="225" y1="252" x2="225" y2="57" stroke="#e77b37" stroke-width="2" transform="rotate(${t.second*6} 225 225)"/>`;
      content+=`<circle cx="225" cy="225" r="6" fill="${orange}"/>`;
      content+=metric(128,288,'BATTERY','82%','battery',dialInk)+metric(322,288,'STEPS','6,390','steps',dialInk);
    } else if(layout==='paper') {
      bg=ambient?'#000':night?'#242325':'#f7f1e5';
      const red=accent('#db503b'),paperInk=ambient?ink:night?'#f2eadb':'#2f302a';
      content+=text(225,77,`${t.day} / ${t.month}`,15,red,'letter-spacing="3" font-weight="700"');
      content+=`<line x1="70" y1="107" x2="70" y2="307" stroke="${red}" stroke-width="4"/>`;
      content+=text(178,212,t.hour,158,paperInk,'font-weight="700" letter-spacing="-8"');
      content+=text(264,334,t.minute,158,paperInk,'font-weight="700" letter-spacing="-8"');
      if(!ambient||state.aod>0) content+=`<circle cx="329" cy="116" r="23" fill="${red}"/>`;
      if(state.format==='12') content+=text(334,175,t.period,12,muted,'letter-spacing="1"');
      content+=metric(139,378,'BATTERY','82%','battery',paperInk)+metric(304,378,'STEPS','6,390','steps',paperInk);
      content+=secondDot(207,'#db503b');
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" role="${interactive?'group':'img'}" aria-label="${names[layout]} ${ambient?'always-on':'active'} face, ${t.hour}:${t.minute}" style="font-family:Barlow,Arial,sans-serif"><defs><clipPath id="study-${id}"><circle cx="225" cy="225" r="225"/></clipPath>${defs}</defs><g clip-path="url(#study-${id})"><circle cx="225" cy="225" r="225" fill="${bg}"/>${content}</g></svg>`;
  }
  return {names,captions,isMiku,render};
})();
