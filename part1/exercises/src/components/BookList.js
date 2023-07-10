export default function BookList() {
   let pageTitle = "Recently Published Books to Read";
   let book1 = "https://images2.penguinrandomhouse.com/cover/9780525559757";
   let book2 = "https://images2.penguinrandomhouse.com/cover/9780593490143";
   let book3 = "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982150921/tender-is-the-flesh-9781982150921_lg.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Bunny by Mona Awad" />
         <img src={book2} alt="I Have Some Questions For You by Rebecca Makkai" />
         <img src={book3} alt="Tender is the Flesh by Agustina Bazterrica" />
      </div>      
   );
}