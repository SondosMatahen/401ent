'use strict'

require('dotenv').config();
const express=require('express');
const cors=require('cors')
const pg= require('pg');
const superagent= require('superagent')
const methodOverride=require('method-override');
const app=express()
const PORT=process.env.PORT||3000


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
const client = new pg.Client(process.env.DATABASE_URL);


client.connect().then(()=>{
    app.listen(PORT,()=>{
        console.log('app to port',PORT)
    })
});


//Routes:
app.get('/',handdelhome);
app.post('/add',handdeladd);
app.get('/favorite',handdelfav);
app.get('/view/:id',handdelDetails);
app.delete('/delete/:id',handdeldelete);
app.get('/update/:id',renderUpdate);
app.put('/update/:id',handeelupdate)
app.get('/random',random);



function handdelhome(req,res){
    let url=`https://official-joke-api.appspot.com/jokes/programming/ten`;
    superagent.get(url).then(data=>{
      let arr=data.body.map(e=>{
          return new Jokes(e);
      })
      res.render('index',{result:arr})
    })

}


function random(req,res){
    let url='https://official-joke-api.appspot.com/jokes/programming/random';
    superagent.get(url).then(data=>{
       data.body.map(e=>{
          let arr= new Jokes(e);
            res.render('random',{result:arr})
        })
        
      })
  
}


function handdeladd(req,res){
    let sql='INSERT INTO jokes (number,type,setup,punchline) VALUES ($1,$2,$3,$4);';
    let {number,type,setup,punchline}=req.body;
    let values=[number,type,setup,punchline];
    console.log(values)
    client.query(sql,values).then(data=>{
        console.log(values)
        res.redirect('favorite');
    })
    
}

function handdelfav(req,res){
    let sql='select * from jokes;';
   
    client.query(sql).then(data=>{
        res.render('favorite',{jokes:data.rows});
    }) 
}

function handdelDetails(req,res){
    let id=[req.params.id];
    let sql='select * from jokes where id=$1;';
    client.query(sql,id).then(data=>{
        res.render('detail',{item:data.rows[0]});
    }) 
    
}

function handdeldelete(req,res){
    let id=[req.params.id];
    let sql='delete from jokes where id=$1;';
    client.query(sql,id).then(data=>{
        console.log(id)
        res.redirect('/favorite');
    }) 
}


function renderUpdate(req,res){
    let id=[req.params.id];
    let sql='select * from jokes where id=$1;';
  console.log(id)
    client.query(sql,id).then(data=>{
        console.log(data.rows[0])
        res.render('edit',{item:data.rows[0]});
    })   
}


function handeelupdate(req,res){
    let id=req.params.id;
    let sql='UPDATE jokes SET type=$1, setup=$2 ,punchline=$3 where id=$4;';
    let {type,setup,punchline}=req.body;
    let values=[type,setup,punchline,id];
    console.log(values)
    client.query(sql,values).then(data=>{
        console.log('lll')
        res.redirect(`/view/${id}`);
    })   
}



function Jokes(data){
    this.number=data.id;
    this.type=data.type;
    this.setup=data.setup;
    this.punchline=data.punchline;
}
