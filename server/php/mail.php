<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Accept");

function mail_result() {
    $result = [
        "success" => null,
        "response" => [
            "error" => [],
        ],
    ];
    
    if(isset($_POST['name']) && isset($_POST['email']) && $_POST['subject'] && $_POST['message']) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        // regex for checking if its a valid email
        $emailRegex = '/^[a-zA-Z0-9._%-]+@(?:googlemail\.com|[a-zA-Z0-9-]+\.(?:[a-zA-Z]{2,}|[a-zA-Z]{2,}\.[a-zA-Z]{2,}))$/';


        if(!preg_match($emailRegex, $email)) {
            $result["success"] = false;
            $result["error"][0]["mail"] = "Invalid email address.";

            return $result;
        };

        $headers = "From: <$email>\r\nTo: <hutchinson.philip02@gmail.com>";
        $sentMailMessage =  "Name: " . $name . "\n\n" . $message;

        mail("<hutchinson.philip02@gmail.com>", $subject, $sentMailMessage, $headers);
        $result["success"] = true;

        return $result;
    }

    $result["success"] = false;
    $result["error"][0]["mail"] = "Fill in all required fields.";
    
    return $result;
}

$result = mail_result();


print_r(json_encode($result));

die();

?>