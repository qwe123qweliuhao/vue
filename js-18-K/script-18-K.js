new Vue({
    el:'#app',
    data:{
        funs:[
            {
                text:'hello Vue!',
                p:'hi everyone'
            }
        ]
    },
    methods:{
        but:function(){

            var inp = document.getElementById('inp');
            var inps = document.getElementById('inps');
            if(inp.value==""||inps.value==""){
               alert("请输入内容");
            }else {
                var c={"text":inp.value,"p":inps.value};
                this.funs.push(c);
                inps.value="";
                inp.value="";
            }
        },
        tex:function(){

        },
        del:function(e){
            this.funs.splice(e,1);
        }
    }
})
