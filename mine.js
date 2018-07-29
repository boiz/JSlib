
/*Last modified Apr 2018*/
const getXHR=(url,callback)=>{
	const xml=new XMLHttpRequest;
	xml.open("get",url);
	xml.send();
	xml.responseType="json";
	xml.onload=()=>callback(xml.response);
}
/*Last modified 2017*/
let getFormData=data=>{
	var param="";
	var count=0;
	for(var k in data){
		var value=data[k];
		if(count++) k="&"+k;
		param+=k+"="+value;
	}
	count=0;
	return param;
}

/*Last modified 2018*/
let postXhr=obj=>{
	var xml=new XMLHttpRequest;
	xml.open("post",obj.url);
	xml.setRequestHeader("content-type","application/x-www-form-urlencoded");
	xml.responseType="json";
	xml.send(getFormData(obj.data));
	xml.onload=function(){
		obj.callback(this.response);
	}
}

/*Last modified 7.2018*/
const postForm=obj=>{
	const xml=new XMLHttpRequest;
	xml.open("post",obj.url);
	xml.responseType="json";
	xml.send((obj.data));
	xml.onload=()=>{
		if(obj.callback) obj.callback(xml.response);
	}
}