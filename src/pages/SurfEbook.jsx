import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/surfebook.css";
import chanakaya from  "../assets/chanakya.jpg";
import hary1 from  "../assets/hary1.jpg";
import intersteller from "../assets/intersteller.jpg";
import angular from "../assets/angular.png"
const SurfEbook = () => {
  const form_values = [
    {
      text: "Search by Name",
    },
    {
      text: "Search by Category",
    },
    {
      text: "Search by Author",
    },
  ];

  const e_Books = [
    {
      e_book_id:1,
      titile: "Harry Potter & half  blood prince",
      Author: "J.K Rowlling",
      Category: "Novel",
      img:hary1,
      Link_1: "Preview",
      Link_2: "Subcribe now",
      color: "",
    },
    {
      e_book_id:2,
      titile: "Harry Potter & the prisoner of Azkanban",
      Author: "J.K Rowlling",
      Category: "Novel",
      img:hary1,
      Link_1: "Preview",
      Link_2: "Subcribe now",
    },

    {
      e_book_id:3,
      titile: "Harry Potter & the deathly hallow part 1",
      Author: "J.K Rowlling",
      Category: "Novel",
      img:hary1,
      Link_1: "Preview",
      Link_2: "Subcribe now",
    },

    {
      e_book_id:4,
      titile: "Intersteller",
      Author: "J.K Borrow",
      Category: "sci-fi",
      img:intersteller,
      Link_1: "Preview",
      Link_2: "Subcribe now",
    },

    {
      e_book_id:5,
      titile: "Corporate Chanakya",
      Author: "R.K Pillai",
      Category: "Management",
      img:chanakaya,
      Link_1: "Preview",
      Link_2: "Subcribe now",
    },

    {
      e_book_id:6,
      titile: "Learn Angular in 24Hrs",
      Author: "J.K Rowlling",
      Category: "Technical",
      img:angular,
      Link_1: "Preview",
      Link_2: "Subcribe now",
    },
  ];
  return (
    <>
    <section>
      <h2>E-Book Filters</h2>
      <Card className="filter_card" >
        {form_values.map((placeholder) => (
          <input type="text" placeholder={placeholder.text} />
        ))}
      </Card>
      </section>
      <div className="e_books_list">
      {e_Books.map((e_books_list) => (
       
          <Card className="card_list_ebooks">
           <Card.Body>
            <Card.Title>{e_books_list.titile}</Card.Title>
            <Card.Text><span>Author:</span>{e_books_list.Author}</Card.Text>
            <Card.Text><span>Category:</span>{e_books_list.Category}</Card.Text>
            <Card.Img x src={e_books_list.img}/>
            <Card.Link>{e_books_list.Link_1}</Card.Link>
            <Card.Link>{e_books_list.Link_2}</Card.Link>
           </Card.Body>
           
          </Card>

         
          ))}
           </div>
   
    </>
  );
};

export default SurfEbook;
