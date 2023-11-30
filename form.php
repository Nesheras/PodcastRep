<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
// Принимаем данные с формы
$fio = $_POST['Name'];
$email = $_POST['email'];
// Убираем спецсимволы
$fio = htmlspecialchars($Name);
$email = htmlspecialchars($email);
// Убираем какие-либо ссылки и адреса
$fio = urldecode($Name);
$email = urldecode($email);
// Убираем пробелы слева и справа
$fio = trim($Name);
$email = trim($email);
// Вывод переданной информации
echo $fio;
echo "<br>";
echo $email;
echo "<br>";
// Проверка отправки сообщения
// 1 параметр - кому
// 2 параметр - тема
// 3 параметр - содержимое
// 4 параметр - от кого
if (mail("example@mail.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>
</body>
</html>


