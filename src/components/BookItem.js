/* eslint-disable array-callback-return */
import React from "react";
import { useState } from "react";
import BookInfoModal from "../components/BookInfo";

import { Button, Card } from "react-bootstrap/";


const BookItem = ({ book }) => {
  
  const [modalShow, setModalShow] = React.useState(false);
  const [bookItem, setItem] = React.useState();
  console.log(book);

  return (
    <>
      {book.map((item) => {
        
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <>
              <Card
                className="h-100"
                style={{background: "#D4B996FF",
                    borderRadius: "1rem",
                    marginBottom:"10px"
                    
                }}
                onClick={()=> setModalShow(true)}
              >
                <Card.Img
                  variant="top"
                  src={thumbnail}
                  alt=""
                  height="200px"
                  style={{ objectFit: "contain" }}
                />
                <Card.Title className="text-center">{item.volumeInfo.title}</Card.Title>
                <Card.Subtitle className="text-center">{item.volumeInfo.authors}</Card.Subtitle>
                {/* <Button variant="primary" onClick={()=> setModalShow(true)} >More</Button> */}
              </Card>
              <BookInfoModal
              item={bookItem}
               show={modalShow}
               onHide={() => setModalShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
};
export default BookItem;
