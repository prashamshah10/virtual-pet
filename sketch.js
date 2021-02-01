//Create variables here

var database;
var dog,happyDog,foodS,foodStock;

function preload()
{
  //load images here
  dog = loadImage(dogimg);
  happyDog=loadImage(dogImg1);
}

function setup() {
  createCanvas(800, 700);
  
  database=firebase.database();
  
    
  
}


function draw() {  

  drawSprites();
  //add styles here

  if (keyWentDown(UP_ARROw)){
    wtriteStocks(foods);
    happydog.addImage("images/dogImg1.png");

    feed=createButton("Feedt the dog");
    feed.position(700,95);
    feed.mousePressed(feedDog);

    addFood.createButton("Add Food");
    addFood.position(800,95);
    addFood.mousePressed(addFoods);



  }

}

function readStock(data){
  foodS=data.val();
}

function foodStock(){
  foodStock=database.ref('food');
    foodStock.on("value",readStock)
}

function writeStock(){
  if (x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })



}

function feedDog(){
  dog.addImage(happyDog);
  foodobj.updateFoodStock(foodobj.getFoodStock()-1)
  databasr.ref('/').update({
    food:foodobj.getFoodStock(),
    FeedTime:hour()

  })
}

function addFoods(){
  foods++;
  database.ref('/').update({
    Food:Foods
  })

}








