import React from "react"
import Header from "../components/Header"

export default function ProductPage(props){
  const [apiData,setApiData] = React.useState([])
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        let arr = []
        json.map(a => {
          if (a.category === "women's clothing" || a.category === "men's clothing"){
            arr.push(a)
          }
        })
        setApiData(arr)
      })
      .then(() => setLoaded(true));
  }, [])

  let clothingData

  if (loaded) {
   clothingData = apiData.map((item) => setClothingData(item))
  }

  function setClothingData(data){
    return (
      <div key={data.id} className={"product--items"}>
      <img className="product--items-image" src={data.image} alt={data.title}></img>
      <hr></hr>
      <div className="product--text">
      <p>{data.title}</p>
      <p>${data.price}</p>
      </div>
      <button onClick={() => props.setItemsInCart(prevState => {
        let newArr = []
        newArr.push(...prevState)
        newArr.push(data)
        return newArr
      })} className="product--items-button">Add to cart</button>
      </div>
    )
  }


  return (
    <>
    <Header itemsInCart={props.itemsInCart}/>
    <div className="product--container">
    <>{loaded && clothingData}</>
    </div>
    </>
  )
}