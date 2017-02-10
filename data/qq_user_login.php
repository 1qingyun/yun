<?php
header('Content-Type:application/json;charset=UTF-8');

require('0_init.php');

@$n=$_REQUEST['uname'] or die('{"code":3,"msg":"uname required"}');

@$p=$_REQUEST['upwd'] or die('{"code":4,"msg":"upwd required"}');

$sql="SELECT * FROM qq_user_login WHERE uname='$n' AND upwd='$p'";

$result=mysqli_query($conn,$sql);

$row=mysqli_fetch_assoc($result);

if($row===null){
	$output=['code'=>2,'msg'=>'用户名或密码错误'];
}else{
	$output=['code'=>1,'uname'=>$n,'uid'=>$row['uid']];
}

echo json_encode($output);