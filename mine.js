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

/*Sep 2 2018*/
const postForm=obj=>{
	const xml=new XMLHttpRequest;
	const fd=new FormData;
	for(key in obj.data) fd.append(key,obj.data[key]);
	xml.open("post",obj.url);
	xml.responseType="json";
	xml.send(fd);
	xml.onload=()=>{
		if(obj.callback) obj.callback(xml.response);
	}
}

/*sep 7 2018*/
const getForm=obj=>{
	const xml=new XMLHttpRequest;
	xml.open("get",obj.url);
	xml.send();
	xml.responseType="json";
	xml.onload=()=>{
		if(obj.callback) obj.callback(xml.response);
	}
}

/*beta sep 7 2018*/
const ajax=obj=>{
	const xml=new XMLHttpRequest;
	xml.open(obj.method,obj.url);
	xml.responseType="json";

	if(obj.method=="get"){
		xml.send();
	}

	else if(obj.method=="post"){
		const fd=new FormData;
		for(key in obj.data) fd.append(key,obj.data[key]);
		xml.send(fd);
	}

	xml.onload=()=>{
		if(obj.callback) obj.callback(xml.response);
	}
}