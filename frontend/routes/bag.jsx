import BagItems from "../components/BagItems"
import BagSummary from "../components/BagSummary"


const Bag = () => {
  const item = {
    "id": "006",
    "image": "images/img6.jpg",
    "company": "Nike",
    "item_name": "Men ReactX Running Shoes",
    "original_price": 14995,
    "current_price": 14995,
    "discount_percentage": 0,
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": { "stars": 0, "count": 0 }
  }
  return (
    <>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <BagItems item={item}/>
        </div>
        <BagSummary/>
        <div className="bag-summary">
        </div>
      </div>
    </main>
    </>
  )
}

export default Bag