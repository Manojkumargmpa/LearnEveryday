
const btn=document.querySelector(".btn-open");
const form=document.querySelector(".fact-form");

loadFacts();
async function loadFacts(){
  const res=await fetch("https://bdfhlovnmfjaqofgjsyl.supabase.co/rest/v1/facts",{
    headers:{
      apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkZmhsb3ZubWZqYXFvZmdqc3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNDQ3NTgsImV4cCI6MjAwNDkyMDc1OH0.dpDCDoD-ySUbQKZ9awW6PG0Lv8SqtzNq05xeaTKTCFs",
      authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkZmhsb3ZubWZqYXFvZmdqc3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNDQ3NTgsImV4cCI6MjAwNDkyMDc1OH0.dpDCDoD-ySUbQKZ9awW6PG0Lv8SqtzNq05xeaTKTCFs"
    }
  });
  const data=await res.json();
  const filteredData=data.filter((fact)=>{
    return fact.category==="society";
  });
 console.log(filteredData);
}


btn.addEventListener('click',function(){
  if(form.classList.contains("hidden")){

    form.classList.remove("hidden");
   btn.textContent="CLOSE";
  }
  else{
    form.classList.add("hidden");
    btn.textContent="share a fact";
  }
   
});
