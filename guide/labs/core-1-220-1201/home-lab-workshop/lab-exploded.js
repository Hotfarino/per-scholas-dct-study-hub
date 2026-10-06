import * as E from './lab-engine.js?v=exploded28';
import {equipmentFaces,wallSockets} from './lab-physical-layout.js?v=exploded28';
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function explodedPhoto(d){
 const entries=Object.keys(E.catalog[d.type].ports);
 const marker=(p,xy)=>`<button type="button" class="photo-port-marker" data-photo-device="${esc(d.id)}" data-photo-port="${p}" style="left:${xy[0]}%;top:${xy[1]}%" aria-label="Locate ${esc(d.name)} ${p.toUpperCase()} enlarged socket" title="${p.toUpperCase()}">${entries.indexOf(p)+1}</button>`;
 if(d.type==='wall')return `<div class="exploded-wall-photos">${[0,1].map(i=>{const cropX=i?1180:562;return `<figure><div class="wall-photo-crop"><img src="lab-bench-hd.jpg" alt="${i?'Right':'Left'} wall outlet plate from the workbench" style="left:${-cropX}%;top:${-266/116*100}%">${Object.entries(wallSockets).filter(([p])=>Number(p.slice(3))>(i?2:0)&&Number(p.slice(3))<=(i?4:2)).map(([p,xy])=>marker(p,[(xy[0]*16.72-cropX),((xy[1]*9.41-266)/116)*100])).join('')}</div><figcaption>${i?'Right':'Left'} wall plate</figcaption></figure>`;}).join('')}</div>`;
 const face=equipmentFaces[d.type];if(!face)return '';
 return `<div class="exploded-photo" role="group" aria-label="${esc(d.name)} photo and socket locations" style="background-position:${face.tile%3*50}% ${Math.floor(face.tile/3)*100/3}%">${Object.entries(face.ports).map(([p,xy])=>marker(p,xy)).join('')}</div>`;
}
export function drawExplodedCallouts(stage,focus={}){
 for(const unit of stage.querySelectorAll('.exploded-unit')){
  const svg=unit.querySelector('.exploded-callout'),bounds=unit.getBoundingClientRect();if(!svg||!bounds.width)continue;
  const id=unit.dataset.unit,port=focus[id]||unit.querySelector('.photo-port-marker')?.dataset.photoPort;
  const dot=unit.querySelector(`[data-photo-port="${port}"]`),socket=unit.querySelector(`[data-socket="${port}"] .socket-art`);
  for(const n of unit.querySelectorAll('[data-photo-port]'))n.classList.toggle('photo-port-active',n===dot);
  if(!dot||!socket){svg.innerHTML='';continue;}
  const a=dot.getBoundingClientRect(),b=socket.getBoundingClientRect();
  const x=a.left+a.width/2-bounds.left,y=a.top+a.height/2-bounds.top,tx=b.left+b.width/2-bounds.left,ty=b.top-bounds.top;
  svg.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);
  svg.innerHTML=`<path d="M${x} ${y} L${x} ${Math.max(y+15,ty-22)} L${tx} ${Math.max(y+15,ty-22)} L${tx} ${ty}"/>`;
 }
}
