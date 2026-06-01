<?php
/**
 * HUAXING PCBA — Contact Form Handler
 * 
 * Place at: public_html/api/contact.php
 * Receives POST from /contact page, sends to info@huaxingpcba.com
 */
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://huaxingpcba.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Honeypot — simple bot trap
if (!empty($_POST['_honeypot'])) {
    http_response_code(200); // pretend success
    echo json_encode(['success' => true]);
    exit;
}

$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$phone   = trim($_POST['phone']   ?? '');
$company = trim($_POST['company'] ?? '');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email, and message are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address.']);
    exit;
}

$to      = 'info@huaxingpcba.com';
$subject = 'HUAXING PCBA — New Inquiry from ' . $name;

$body  = "=== NEW INQUIRY ===\n\n";
$body .= "Name:    $name\n";
$body .= "Email:   $email\n";
$body .= "Phone:   $phone\n";
$body .= "Company: $company\n\n";
$body .= "Message:\n$message\n\n";
$body .= "---\n";
$body .= "Submitted: " . date('Y-m-d H:i:s') . " UTC\n";
$body .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$headers  = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send. Please email us directly at info@huaxingpcba.com.']);
}
