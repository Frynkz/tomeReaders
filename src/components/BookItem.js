
import {React , useState} from 'react';
import BookInfoModal from "../components/BookInfo";
import { Fragment } from 'react';

import {Card } from "react-bootstrap/";


const BookItemList = ({ books }) => {
  
  const [modalShow, setModalShow] = useState(false);
   const [bookItem, setItem] = useState();
  

  return (
    <>
      {books.map((item, index) => { 
        
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
        
        if (thumbnail !== undefined) {
          return (
            <Fragment key={index}>
              <Card
                className="h-100"
                style={{background: "#D4B996FF",
                    borderRadius: "1rem",
                    marginBottom:"10px"
                    
                }}
                onClick={()=> {
                  setModalShow(true)
                  setItem(item)
                }}
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
              </Fragment>
          );
        }
        return null;
      })}
    </>
  );
};
export default BookItemList;
