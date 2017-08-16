new Vue({
    el:"#container",
    data:{
        newStudent: {
            grade:'',
            name: '',
            age: '',
            sex: '',
            showInput:false,
            showSpan:true
        },
        student:[],
        flag:true
    },
    methods:{
        addText:function(){
            if(this.flag){
                this.student.push(this.newStudent);
                this.flag=false;
            }
        },
        fixed:function(item){
            this.$set(item,'showInput',false);  //显示input框
            this.$set(item,'showSpan',true);    //隐藏span
        },
        confirm:function(item){
            this.newStudent={
                grade:'',
                name: '',
                age: '',
                sex: '',
                id:'',
                showInput:false,
                showSpan:true
            };

            if(item.id==undefined||item.id==''){
                alert(item.id);
                this.$http.post('/saveStudent',{
                    grade:item.grade,
                    name:item.name,
                    age:item.age,
                    sex:item.sex
                },function(data){
                    item.id=data;
                })
            } else{
                alert(item.id);
                this.$http.post('/fixStudent',{
                    grade:item.grade,
                    name:item.name,
                    age:item.age,
                    sex:item.sex,
                    id:item.id
                },function(data){
                    alert(data);
                })
            }

            this.$set(item,'showInput',true);   //隐藏input
            this.$set(item,'showSpan',false);   //显示span
            this.flag=true;
        },
        del:function(item){
            var index = this.student.indexOf(item);
            this.student.splice(index,1);
            this.$http.post('delStudent',{
                id:item.id
            },function(data){
                alert(data);
            })
        }
    }

})