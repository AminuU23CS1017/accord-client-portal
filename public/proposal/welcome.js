(() => {
 const dialog=document.getElementById('welcome');
 const replay=document.getElementById('replay-intro');
 const proposal=document.getElementById('proposal');
 if(!dialog || typeof dialog.showModal!=='function') return;
 const open=()=>{dialog.showModal();document.body.classList.add('welcome-open');};
 const enter=()=>{dialog.close();};
 dialog.querySelectorAll('[data-enter]').forEach(button=>button.addEventListener('click',enter));
 dialog.addEventListener('close',()=>{document.body.classList.remove('welcome-open');proposal.focus({preventScroll:true});});
 replay.hidden=false;
 replay.addEventListener('click',open);
 if(!location.hash) open();
})();
