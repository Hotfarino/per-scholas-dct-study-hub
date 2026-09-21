'use strict';
window.ProgressStore={
 description:'Results are saved to your signed-in account on this study site. Download a CSV to keep a separate copy.',
 async request(method='GET',attempt){const r=await fetch('/api/attempts',{method,credentials:'same-origin',headers:attempt?{'Content-Type':'application/json'}:undefined,body:attempt?JSON.stringify(attempt):undefined});if(!r.ok)throw new Error('Progress unavailable');return r.json()},
 async load(){return this.request()},async add(attempt){return this.request('POST',attempt)},async clear(){return this.request('DELETE')}
};
