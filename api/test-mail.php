<?php
echo "PHP works. ";
echo "mail() exists: " . (function_exists('mail') ? 'yes' : 'no') . ". ";
echo "sendmail_path: " . (ini_get('sendmail_path') ?: 'not set') . ". ";
echo "SMTP: " . (ini_get('SMTP') ?: 'not set') . ". ";

// Test actual mail
$test = @mail('info@huaxingpcba.com', 'Test', 'Test body', 'From: info@huaxingpcba.com');
echo "mail() result: " . ($test ? 'TRUE' : 'FALSE');
