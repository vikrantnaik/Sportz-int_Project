import React from "react";
import Card from "./Card";

function CardList({ Items, isLoading ,sort}) {


  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {Items.map((item) => 
        <Card key={item.id} item ={item}  ></Card>
      )}
    </section>
  );
}

export default CardList;
