import {spawnSync} from 'node:child_process';
// Run in order: the engine test creates the portable-save fixture.
const tests=["test-lab", "test-lab-save", "test-lab-laptop-courses", "test-lab-laptop-config", "test-lab-browsers", "test-lab-presentation"];
for(const test of tests){console.log('\n'+test);const result=spawnSync(process.execPath,[test+'.mjs'],{stdio:'inherit'});if(result.error)throw result.error;if(result.status!==0)process.exit(result.status||1);}
console.log('\nAll Home Lab checks passed.');
