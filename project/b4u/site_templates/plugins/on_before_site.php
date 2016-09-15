<?php

   
 //BATMAN!
//if(!isset($_SESSION['iambatmat'])) 
//{
 // if ($this->curhurl!='site_closed') die(header('Location: '.$m_conf['host'].'site_closed'));
//}


//admitad
global $admitad_uid;
if ($admitad_uid) setcookie("admitad_uid", $admitad_uid, time() + 3600*24*31);

//PageRouting
 global $PGID;  $PGID  = (int)$PGID;
 if ($this->_is_child($PGID,9,2)) //Оформление кредита
 {

   @$iuser = $_SESSION['w_karloid'];
   global $m_conf;
   if ((int)$iuser<=0) die(header('Location: '.$m_conf['host']));
   $sost = GetFieldFromSQL($this->conn,"SELECT SOST FROM PERSONA WHERE ID=".(int)$iuser,0);
   if ($this->curhurl=='index.php' and $PGID) $this->curhurl =  GetFieldFromSQL($this->conn,"SELECT HREFNAZ FROM MTREE WHERE ID=".(int)$PGID,'');
   //if ($this->curhurl=='lk-add-first-card-confirm') return '';
   
   $goto = '';

   
   if ($sost==WO_PERSONA_SOST_NEW) //Новый клиент Временное
     $goto =  "credit-anketa-1";  
   elseif ($sost==WO_PERSONA_SOST_BLOCKED)  
     $goto =  "persona-blocked";  
   elseif ($sost==WO_PERSONA_SOST_EM_NOT_CONFIRM)  
     $goto = 'email-not-confirm';
   elseif ($sost==WO_PERSONA_SOST_EM_CONFIRM)  
   {
     if ($this->curhurl=='credit-anketa-1') return '';
     //$goto = 'credit-anketa-1';
     die(header('Location: '.$m_conf['host']));
   }  
   elseif ($sost==WO_PERSONA_SPR1_SEND)  
     $goto = 'credit-wait-1';
   elseif ($sost==WO_PERSONA_SPR1_OK)  
     $goto = 'credit-wait-1';
   elseif ($sost==WO_PERSONA_SPR2_OK)  
   {
     if ($this->curhurl=='credit-anketa-2') return '';
     if ($this->curhurl=='credit-anketa-3') return '';
     if ($this->curhurl=='credit-anketa-4') return '';
     if ($this->curhurl=='credit-anketa-5') return '';
     $goto = 'credit-anketa-2';
   }     
   elseif ($sost==WO_PERSONA_SPR3_SEND)  
     $goto = 'credit-wait-3';  
   elseif ($sost==WO_PERSONA_SPR3_OK)  
     $goto = 'credit-wait-3'; 
  elseif ($sost==WO_PERSONA_SPR3_OK_ALT)  
     $goto = 'credit-agreed-alt';  
  elseif ($sost==WO_PERSONA_SOST_VERIF)  
     $goto = 'credit-verification';
  elseif ($sost==WO_PERSONA_SOST_SUPPORTINFO)  
     $goto = 'credit-verification';  
  elseif ($sost==WO_PERSONA_SOST_DOPINFO)  
     $goto = 'credit-anketa-6';  
  elseif ($sost==WO_PERSONA_SPR4_SEND)  
     $goto = 'credit-verification';  
  elseif ($sost==WO_PERSONA_SPRAVKA)  
     $goto = 'credit-spravka'; 
  elseif ($sost==WO_PERSONA_SOST_CARDSELECT)  
     $goto = 'credit-lk-card-select';
  elseif ($sost==WO_PERSONA_SOST_DOGOVOR)  
     $goto = 'credit-dogovor';
  elseif ($sost==WO_PERSONA_SOST_CREDIT_INPROC)  
     $goto = 'credit-to-card';
  elseif ($sost==WO_PERSONA_SOST_CREDIT)  
  {
     if ($this->_is_child($this->curpid,'credit-lk',3)) return '';
     $goto = 'credit-lk-credit-list'; 
  }elseif ($sost==WO_PERSONA_SOST_DEYST)
  {
     if ($this->curhurl=='credit-anketa-1') return '';
     if ($this->_is_child($this->curpid,'credit-lk',3)) return '';
     $goto = 'credit-lk-credit-list'; 
  } else 
  {  
    die(header('Location: '.$m_conf['host']));
  }  

  if ($goto && ($goto!=$this->curhurl))
   die(header('Location: '.$m_conf['host'].$goto));
 }



?>