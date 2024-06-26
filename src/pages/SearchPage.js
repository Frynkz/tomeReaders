import {React, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import BookItem from "../components/BookItem";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);


  const searchBook =(evt) => {
    if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
  };
  return (
    <>
      <Container>
        <Row className="mx-auto my-2">
          <Col>
            <h2>Find Your Book</h2>
            <ButtonGroup>
              <input
                type="text"
                placeholder="Enter Your Book Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={searchBook}
              />

              <Button
                onClick={searchBook}
                
              >
                <i>search</i>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        

        <Row  md={2} xs={1} lg={3} className="mx-auto my-2">
            
             
                <BookItem book={bookData}/>
                
  
    
        </Row>
      </Container>
    </>
  );
};

export default SearchPage;
