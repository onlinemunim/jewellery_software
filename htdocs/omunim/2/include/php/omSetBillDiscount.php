<?php @"SourceGuardian"; //v9.0.3
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$msg.="</body></html>";}	die($__msg);exit();}}return sg_load('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');
?>