<?php @"SourceGuardian"; //v9.0.3
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$msg.="</body></html>";}	die($__msg);exit();}}return sg_load('A27FEAAF0F783BBEAAQAAAASAAAABIgAAACABAAAAAAAAAD/CdIm+7LaWKtIqUNe5fu6JD2SJVtTU1msxRNCOEcsPpOg7APYyAQZO6Vn4tMjki6+h+F8dYPV1Q5HRf7zrX34e+Cikq3Ya5P3jqH70v14Ozx7faDLmxtYpkx5huy0DRfpyXyQALkMHbT+FmwP9Uo5HUl+mAqCUdOa64bug6XWcKBxy79Y0s3gbjUAAAA4BQAAobwPCSQmjOL49sDlu59nxqflhaxys+Si6dyTl9GkV7uc5YaLfa26g/A0hwNWWH/HnQcD9ss2We2H89w1lkSUMRlmJSe6Lru+5nVN+Pajb1Vuvc3v1oAGdGsQ007lK4SLq68ILWpOre7ldYjYxm/3BADy2aN4xhNLfYT4ZmOdxfY9KvTTTjAV8zILuIcHRRss/8WGEpg80D4b9jnucGkOzCJ+VkBsjU/wEksVgt/qjML8CQqwvKD+m7YJat3vb2GEhA/KPnzwOiISWtyFngKlHr/oAuLQhoXxMhAV4gLZyBHGaPP4jy7RMq68R4D6ntIwv9qgHpjao3DeLnrWBo7hlpjUMTBaG1YJpkvA6nIdN4k3CJ/jbT0TZwdLgP93aUXj7hJ6b9aY5Yz8K3mK3F2cTdiVB1ESS6m7B3Pms2HK5v5Fg1FumtbgSNvqrd2sE0WF22vybb3pOHjGj4hIstOaBylkhK0fGYlFTaLBzyX0bvfy6LjSUaSmWTcK2DX1wHOOH+jc5h+MLhnFbIEi284BjP/sBcZLcdbjHTP4vNLfXY6QTjeGIhuAqo1iljyb7VCB8oLWcAhbNuYsquVdFl69u1PQGU+DsBzPqL2mlFt91xI6EshFxQz0dSnNlFj1RuN+W7VvZLlaDQKI4HYbS8OwFtrs0hCcyOQWFivHAViJ1x5aRO1OCcqrmJQiNVNLMPxtKRwcudFK7QuKcCJSSiES9Yzeb+JsefWRG9JkzJJYf+IrnEo5nvLJh3B3Ot6boiAHEB4mgDkfXHwNtMsC6jbMAg4lT8AqXu6wCy5bkOZ7XxVIKiGl5ubBv8BPN7K1Tmor5wcNipbFvQlvyZdhKMH2QvcYHo2bfQ+ZI/xmZOSIAoPFE7OANm+RNy2UhYypRTvk6g+b5Lzmlt5MOAQ/eVDpc1hCzS4l/teEEtXQEgywbKA9HB2fKMdhe0XuscvjVFyy/K2308PoYG3FMsQjP3Rx+nsjJcmR9PdGAbLqpPZ7pKcPIXky6/OW/KnCV+g8gbd+xXj7nf7UcFext1v/oNWvuiWe2fly9sJ4mX0WAVZOHAN5Pf6yraXLNuQmrtooTbZSxO7t88hdeVlTTnVQBqYzkyrihyKQZvCZpp3Tjw6D9qadjiJeYMYw1C8zZsSnIciPH4oYW0Sh50HHwhjcDB0txSAZuwB4r8aK6h4HYHjvlU2FooTTyffbi7bNAY6zIw5pgbzkcLfXp8BySCtlt9iNOci4jswj4jymJ6DMwgLgEafVT1g0esPo1yZPmsLV5b/zPoSmqE7f72IiXf31jQ3wytM2yqLrfB/GKPaV3Kq8Q9YCL1Fh9SFODK/yr5JZcFHlZjxn0TvnZlFJnq4Rrj+SrqLJAD3LuqQ7wL8v4omcnfK6iBIe9OjIqjwloEaqZNzCZKISF2ZcOt8VjY9kCu9PAxWlvjCuT77kd1gtfyvq9zCat+wFF3/nHsrXVKRoHUn9fw3x/diIgMLBah17u5pEyWeg6h0QECs2h1hEH9YCd2IqtJuG9w+XQGHHx6EHhnVe2CIHouY/sTNvU3FlT8q5ch4Xj6OjtN0Y9Llkcz9ZLynAUfKp+fIZqW5iwEKVA2FVKttmadkaNcKbm9qgnuKaH8Y4D6+NmnGL5tGHViDWEnPvBheIvaj9fkHEQS1jRLub8LY44ntoHVo36LHbB3c2I2F/TN1b9NnUvXsBH1znBN5jSczbR8DCUo6zsWvLf1WqV/OaSKzw1g0EygbqUmg7JMqdoBxbawV6r9BKIkRSeCySv2PqLFJTQwAAAAA=');
?>