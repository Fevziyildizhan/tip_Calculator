<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tip Calculator</title>

    <style type="text/css">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    body{
        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(to bottom right,#3388cc,#33cc88);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto',sans-serif;
    }
   
    .app {
 position: relative;
 width: 100%;
 max-width: 320px;
 background: rgba(255, 255, 255, 1);
 border-radius: 16px;
 overflow-x: hidden;
 overflow-y: scroll;
 box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
 

}

/*
.calculator{

position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0px;
z-index: 1;
height: 100%;
overflow-y: hidden;
display: flex;
flex-direction: column;

}
*/
header{
    background-color: #33CC88;
    padding: 10px 15px;
    box-sizing: 0px 3px rgba(0,0,0,0.2);
}
    
h1{
    color: #FFF;
    text-transform: uppercase;
    font-size: 24px;
    text-align: center;
}

main {
  flex: 1 1 100%;
  overflow-y: scroll;
  padding: 20px 15px;
  
  }
  .input-group {
   display: flex;
   margin-bottom: 20px;
  
   }

   .pre {
    display: flex;
    justify-content: center;
    padding: 10px 15px;
    color: #212121;
    font-size: 18px;
    border-bottom: 3px solid #33CC88;
    background: #EEE;
    border-radius: 8px 0px 0px 0px;
   }
  input {
   appearance: none;
   border: none;
   outline: none;
   background: none;
   display: block;
   width: 100%;
   padding: 10px 15px;
   border-bottom: 3px solid #33CC88;
   color: #212121;
   font-size: 18px;
  
   
  }
  
  select {
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   border: none;
   outline: none;
   background: none;
   display: block;
   width: 100%;
   border-bottom: 3px solid #33CC88;
   border-radius: 0px;
   color: #212121;
   font-size: 16px;
   padding: 10px 15px;

  }
  
  .tip-wrap {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   
  } 
   
   .tip {
    padding: 15px 25px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to bottom right, #3388CC, #33CC88);
    color: #FFF;
   }
  
 
   p {
    color: #212121;
    font-size: 18px;
    margin-bottom: 15px;
   }
 
 footer {
  box-shadow: 0px -3px 12px rgba(0, 0, 0, 0.2);
  
 
 
}
button {
   display: block;
   width: 100%;
   padding: 10px 15px;
   appearance: none;
   border: none;
   outline: none;
   background-image: linear-gradient(to bottom right, #3388CC, #33CC88);
   
   color: #FFF;
   font-size: 20px;
   font-weight: 700;
   text-transform: uppercase;
   cursor: pointer;
  }
 </style>
</head>
<body>
    
    <div class="app">
        <div class="calculator">
         <header>
          <h1>Tip Calculator</h1>
         </header>
         <main>
          <section class="options">
           <div class="input-group">
           <div class="pre">£</div>
           <input type="number" class="cost" placeholder="Fatura Ne Kadar?" />
          </div>
          <div class="input-group">
           <select class="service" required>
            <option disabled selected>Hizmeti Beğendiniz mi?</option>
            <option value="30">5 - Efsane !!</option>
            <option value="20">4 - Beğendim</option>
            <option value="10">3 - iyi</option>
            <option value="5">2 - Eh İşte</option>
            <option value="0">1 - Beğenmedim</option>
           </select>
          </div>
          <div class="input-group">
           <input type="number" class="people" placeholder="Faturayı Kaç kişi Paylaşıcak?" />
          </div>
          </section>
          <section class="tip-wrap">
           <p>Bahşiş Lütfen :): </p>
           <h3 class="tip">£0</h3>
          </section>
         </main>
         <footer>
          <button id="tip-btn">Tip</button>
         </footer>
        </div>
       </div>


    <script type="text/javascript">
    
   const cost_input = document.querySelector('.cost')
   const service_input = document.querySelector('.service')
   const people_input = document.querySelector('.people')

   const tip_btn = document.querySelector('#tip-btn')

   tip_btn.addEventListener('click', calc_tip)

   function calc_tip(){
      let cost = Number(cost_input.value)
      let service = Number(service_input.value) / 100
      let people = Number(people_input.value)
      let tip = (cost * service) / people

      let tip_el = document.querySelector('.tip-wrap .tip')

      tip_el.innerText = '£ '+tip.toFixed(2) +((people > 1) ? 'her biri ' : ' ')
   }


    </script>
</body>
</html>
