import Card from "@/components/Card";
export default function Home() {

  return (
  <div>
  
<div className="flex">


   <Card image="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126090.jpg" title="Card no 1" desc="This is card no 1"/>
   <Card image="https://img.freepik.com/free-psd/modern-clean-professional-business-card-template_501970-93.jpg" title="This is Card no 2" desc="This is card no 2 and there is a image"/>
   <Card image="https://img.freepik.com/free-vector/clean-style-modern-business-card-template_1017-30352.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727049600&semt=ais_hybrid" title="Card no 3" desc="This is card no 3 and there is description"/>

   </div> 
   
   
    </div>
  );
}