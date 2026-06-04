<?php
/**
 * HUAXING PCBA — Contact Form Handler (SMTP via Hostinger)
 * Static export: place this file at public_html/api/contact.php
 */
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://huaxingpcba.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204); exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']); exit;
}

// ── Honeypot ──
if (!empty($_POST['_honeypot'])) {
    http_response_code(200); echo json_encode(['success' => true]); exit;
}

// ── Rate limit (simple file-based) ──
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rateFile = sys_get_temp_dir() . '/huaxing_rate_' . md5($ip);
$now = time();
$rateData = @json_decode(@file_get_contents($rateFile), true) ?: ['count' => 0, 'reset' => 0];
if ($now > $rateData['reset']) { $rateData = ['count' => 1, 'reset' => $now + 3600]; }
elseif ($rateData['count'] >= 3) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests. Please try later.']); exit;
} else { $rateData['count']++; }
@file_put_contents($rateFile, json_encode($rateData));

// ── Parse fields ──
$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$phone   = trim($_POST['phone']   ?? '');
$company = trim($_POST['company'] ?? '');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email, and message are required.']); exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address.']); exit;
}

// ── Handle file attachment ──
$attachment = null;
if (!empty($_FILES['attachment']) && $_FILES['attachment']['error'] === UPLOAD_ERR_OK) {
    $attachment = [
        'name' => $_FILES['attachment']['name'],
        'data' => chunk_split(base64_encode(file_get_contents($_FILES['attachment']['tmp_name']))),
        'type' => $_FILES['attachment']['type'] ?? 'application/octet-stream',
    ];
}

// ── SMTP config ──
$smtpHost = 'smtp.hostinger.com';
$smtpPort = 465;
$smtpUser = 'sales@huaxingpcba.com';
$smtpPass = 'Quentel15757163840';
$to       = 'sales@huaxingpcba.com';

// Build email with optional attachment
$boundary = md5(time());
$subject  = "=?UTF-8?B?" . base64_encode("HUAXING — New Inquiry from $name") . "?=";
$from     = "sales@huaxingpcba.com";

$headers  = "From: $name <$from>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";

$body = '';
if ($attachment) {
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
}

$body .= "NEW INQUIRY\r\n\r\n";
$body .= "Name:    $name\r\n";
$body .= "Email:   $email\r\n";
$body .= "Phone:   " . ($phone ?: 'N/A') . "\r\n";
$body .= "Company: " . ($company ?: 'N/A') . "\r\n";
$body .= "IP:      $ip\r\n\r\n";
$body .= "Message:\r\n$message\r\n\r\n";
$body .= "---\r\n" . date('Y-m-d H:i:s T');

if ($attachment) {
    $body .= "\r\n--$boundary\r\n";
    $body .= "Content-Type: {$attachment['type']}; name=\"{$attachment['name']}\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"{$attachment['name']}\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= $attachment['data'] . "\r\n";
    $body .= "--$boundary--";
}

// ── Send via SMTP socket ──
$sent = false;
$errno = 0;
$errstr = '';

$ctx = stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]]);
$socket = @stream_socket_client("ssl://$smtpHost:$smtpPort", $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $ctx);

if ($socket) {
    $read = function() use ($socket) {
        $r = ''; while ($line = fgets($socket, 512)) { $r .= $line; if (isset($line[3]) && $line[3] === ' ') break; }
        return $r;
    };
    
    $read(); // banner
    fwrite($socket, "EHLO huaxingpcba.com\r\n"); $read();
    fwrite($socket, "AUTH LOGIN\r\n"); $read();
    fwrite($socket, base64_encode($smtpUser) . "\r\n"); $read();
    fwrite($socket, base64_encode($smtpPass) . "\r\n");
    $authResp = $read();
    
    if (strpos($authResp, '235') === 0) {
        fwrite($socket, "MAIL FROM:<$from>\r\n"); $read();
        fwrite($socket, "RCPT TO:<$to>\r\n"); $read();
        fwrite($socket, "DATA\r\n"); $read();
        fwrite($socket, "To: $to\r\nSubject: $subject\r\n$headers\r\n\r\n$body\r\n.\r\n");
        $dataResp = $read();
        $sent = (strpos($dataResp, '250') === 0);
        fwrite($socket, "QUIT\r\n");
    }
    fclose($socket);
}

// ── Fallback: PHP mail() ──
if (!$sent) {
    $mailHeaders  = "From: $name <$from>\r\n";
    $mailHeaders .= "Reply-To: $email\r\n";
    $mailHeaders .= "MIME-Version: 1.0\r\n";
    $mailHeaders .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $sent = @mail($to, $subject, $body, $mailHeaders);
}

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Send failed. Please email us at sales@huaxingpcba.com.']);
}
