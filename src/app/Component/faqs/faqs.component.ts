import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})









export class FaqsComponent implements OnInit {


  header1 = `What is talabat?`;
  text1 = `talabat is a leading online food delivery service that operates in Kuwait, Saudi Arabia, UAE, Bahrain, Oman, Qatar, Jordan, Egypt and Iraq.
  We seamlessly connect customers with their favorite restaurants. It takes just few taps from our platform to place an order through talabat from your favorite place.`;
  
   text2 = `We simply take your submitted order and send it to the restaurant through a completely automated process, so you don’t have to deal with all the hassle of ordering and we make sure that you receive your order on time, every-time!`
   header2 = `What does Talabat do?`;
   text3 = `talabat is the one huge food court for many restaurants, so you don’t need to go through the hassle of finding restaurants’ numbers, waiting on hold, or getting a busy signal while dialing a restaurant number, or getting the wrong order due to miscommunication over the phone! Besides, by using talabat, you can view menus with pictures of all your favorite restaurants on our easy-to-use website and app.`
   header3 = `Why should I use talabat on a phone?`;
   text4 = `The only extra charges that might be applied are the restaurant’s delivery fees.`;
   header4 = `How much will it cost me to use talabat services?`;
   text5 = `yes, most of the restaurants on talabat support online payment options for Debit Card/Credit Card. Here you can find all online payment methods we provide based on countries:
  Kuwait: American Express, K-Net, MasterCard, and Visa.
  KSA: Apple Pay, MasterCard, SADAD, and Visa.
  UAE: American Express, Apple Pay, MasterCard, Visa, and Visa Checkout.
  Bahrain: American Express, Benefit (Debit Card), MasterCard, and Visa.
  Oman: American Express, MasterCard, Oman Net, and Visa.
  Qatar: American Express, MasterCard, and Visa.
  Jordan: American Express, MasterCard, and Visa.
  Egypt: MasterCard and Visa.
  Iraq: Cash payment only.`;
  header5 = `Do you have Debit Card/Credit Card services?`;
   text6 = `Yes. You can view the latest restaurant promotions and discount coupon in offers tab.`;
   header6 = `Do you have special offers?`;
   text7 = `Go to talabat app, log in with your account, then place an order from your favorite restaurant.`;
   header7 =`How do I place an order on Talabat?`;
   text8 = `If you entered the wrong combination of email/password repeatedly up to 5 times, your account will be blocked temporarily. The system will automatically email you a verification link where you need to unblock your account. In this email, we will also ask you to choose a new password.`;
   header8 = `I entered my email/password combination wrong and now my account is blocked, what do I do?`;
   text9 = `It depends on the restaurant's estimated delivery time. Each restaurant will display its order delivery time in the restaurant's "Info" section. However, the time may vary depending on the road traffic congestion.`;
   header9 = `If I placed an order, how long does it take to receive the order?`;
   text10 = `Once you are logged in to the app, go to the "My Orders" section and see if your order is listed. If your order is listed, then check the order status as “Successful”.`;
   header10 = `I just placed an order, but I’m not sure if you got it. What do I do?`;
  
  
  viewFaq :any = [
  
      {id:'1', text: this.text1, header: this.header1},
      {id:'2',text: this.text2, header: this.header2},
      {id:'3',text: this.text3, header: this.header3},
      {id:'4',text: this.text4, header: this.header4},
      {id:'5',text: this.text5, header: this.header5},
      {id:'6',text: this.text6, header: this.header6},
      {id:'7',text: this.text7, header: this.header7},
      {id:'8',text: this.text8, header: this.header8},
      {id:'9',text: this.text9, header: this.header9},
      {id:'10',text: this.text10, header: this.header10}
  
  ]


  constructor(private router: Router ) { 
    console.log(this.viewFaq[0]);
  }

  ngOnInit(): void {
/*    var acc = Array.from(document.getElementsByClassName("accordion") as HTMLCollectionOf<HTMLElement>);

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel && panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}*/
    
  }

  toggle(section :any):void{
    const box = document.getElementById(section);
    
    if(box && box.style.display == 'block'){
      box.style.display = 'none';
    }
    else if(box && box.style.display == 'none'){
      box.style.display = 'block';   
    }

  }

}
