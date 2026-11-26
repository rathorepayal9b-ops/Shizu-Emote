const form=document.getElementById('emoteForm');
const sendBtn=document.getElementById('sendBtn');
const statusEl=document.getElementById('status');
const responseEl=document.getElementById('response');
const digits=v=>/^\d+$/.test(v);
function setStatus(type,label){statusEl.className='status '+type;statusEl.innerHTML='<i></i> '+label;}
form.addEventListener('submit',async e=>{
 e.preventDefault();
 const tc=document.getElementById('teamCode').value.trim();
 const uid=document.getElementById('targetUid').value.trim();
 const emote=document.getElementById('emoteId').value.trim();
 if(!digits(tc)||!digits(emote)||(uid&&!digits(uid))){setStatus('error','INVALID INPUT');responseEl.innerHTML='<pre>Enter numeric Team Code and Emote ID. Target UID must also be numeric when provided.</pre>';return;}
 sendBtn.disabled=true;sendBtn.querySelector('.btn-text').textContent='SENDING...';
 setStatus('loading','PROCESSING');
 responseEl.innerHTML='<div class="empty-icon">⌁</div><strong>Request in progress</strong><p>Waiting for the server response. Please keep this page open.</p>';
 try{
   const params=new URLSearchParams({Tc:tc,Emote_id:emote});
   if(uid)params.set('Target_Uid',uid);
   const res=await fetch('/rishu?'+params.toString(),{method:'GET',headers:{'Accept':'application/json'}});
   const raw=await res.text();let data;try{data=JSON.parse(raw)}catch{data={raw_response:raw}}
   const ok=res.ok&&data.ok!==false;
   setStatus(ok?'success':'error',ok?'SUCCESS':'ERROR');
   responseEl.innerHTML='<pre></pre>';responseEl.querySelector('pre').textContent=JSON.stringify(data,null,2);
 }catch(err){
   setStatus('error','CONNECTION ERROR');
   responseEl.innerHTML='<pre></pre>';responseEl.querySelector('pre').textContent='Could not reach the API server: '+err.message;
 }finally{sendBtn.disabled=false;sendBtn.querySelector('.btn-text').textContent='SEND EMOTE';}
});