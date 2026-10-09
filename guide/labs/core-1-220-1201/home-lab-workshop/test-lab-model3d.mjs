import assert from 'node:assert/strict';
import * as E from './lab-engine.js';
import {portLayout,modelSnapshot,bodies} from './lab-model3d-data.js';
let ports=0;
for(const [type,d] of Object.entries(E.catalog)){
 const layout=portLayout(type);assert.deepEqual(layout.map(p=>p.id),Object.keys(d.ports));assert.ok(bodies[type].every(n=>n>0));
 for(const p of layout){ports++;assert.equal(p.kind,d.ports[p.id]);assert.ok([...p.position,...p.normal].every(Number.isFinite));assert.equal(Math.hypot(...p.normal),1);}
}
const s=E.fresh();const laptop=E.addDevice(s,'laptop').id,sw=E.addDevice(s,'switch').id;
const wire=(...args)=>assert.ok(E.connect(s,...args).ok);
wire('wall','out1',laptop,'ac','power',6);wire('wall','out2',sw,'ac','power',6);wire(laptop,'eth',sw,'p1','cat6a',6);
let m=modelSnapshot(s,laptop);assert.equal(m.ports[0].live,true,'input may have power while device switched off');assert.equal(m.ports[1].live,false);
E.find(s,laptop).on=E.find(s,sw).on=true;m=modelSnapshot(s,laptop);assert.equal(m.ports[1].live,true);assert.equal(E.network(s,laptop).ok,false,'physical link is not proof of IP connectivity');assert.equal(m.ports[1].peer,'Managed switch 1');assert.equal(m.ports[1].peerPort,'p1');
const before=JSON.stringify(s);for(let i=0;i<50;i++)modelSnapshot(s,laptop);assert.equal(JSON.stringify(s),before,'snapshot is read-only');
s.links.at(-1).broken=true;assert.equal(modelSnapshot(s,laptop).ports[1].live,false,'broken cable must stop blue pulse');s.links.at(-1).broken=false;s.outage=true;assert.equal(modelSnapshot(s,laptop).ports[0].live,false);assert.equal(modelSnapshot(s,laptop).ports[1].live,false);
const empty=modelSnapshot(s,sw).ports.find(p=>p.id==='p2');assert.equal(empty.connected,false);assert.equal(empty.live,false);assert.equal(empty.peer,null);assert.match(empty.description.fit,/latch/);
for(const type of Object.keys(E.catalog)){let id=['wall','isp'].includes(type)?type:E.addDevice(s,type).id;assert.ok(modelSnapshot(s,id));}
assert.equal(modelSnapshot(s,'missing'),null);
console.log(`PASS: 13 model types, ${ports} uniquely mapped finite socket positions, connector definitions, real power/link/peer state, empty examples, faults, outages, and no lab mutations.`);
