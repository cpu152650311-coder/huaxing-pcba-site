<?php
/**
 * HUAXING PCBA — Contact Form Handler
 * Uses Hostinger SMTP (no external libs needed)
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

// Honeypot
if (!empty($_POST['_honeypot'])) {
    http_response_code(200); echo json_encode(['success' => true]); exit;
}

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
    echo json_encode(['error' => 'Invalid email.']); exit;
}

$to      = 'info@huaxingpcba.com';
$subject = '=?UTF-8?B?' . base64_encode("HUAXING — New Inquiry from $name") . '?=';

$body  = "NEW INQUIRY\n\n";
$body .= "Name:    $name\nEmail:   $email\nPhone:   $phone\nCompany: $company\n\n";
$body .= "Message:\n$message\n\n---\n" . date('Y-m-d H:i:s T');

$headers  = "From: $name <info@huaxingpcba.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Try PHP mail() first
$sent = @mail($to, $subject, $body, $headers);

// If mail() fails, try sendmail directly
if (!$sent && function_exists('proc_open')) {
    $sendmail = '/usr/sbin/sendmail -t -i';
    $full = "To: $to\nSubject: $subject\n$headers\n\n$body";
    $proc = proc_open($sendmail, [0 => ['pipe', 'r']], $pipes);
    if (is_resource($proc)) {
        fwrite($pipes[0], $full);
        fclose($pipes[0]);
        $sent = proc_close($proc) === 0;
    }
}

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send. Please email us directly at info@huaxingpcba.com.']);
}
