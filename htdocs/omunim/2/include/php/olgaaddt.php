<?php @"SourceGuardian"; //v9.0.3
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$msg.="</body></html>";}	die($__msg);exit();}}return sg_load('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');
?>