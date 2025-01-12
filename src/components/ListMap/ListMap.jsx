
import Producst from "../Producst/Producst";

function ListMap({ products_filter }) {
  

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7">
        {products_filter.map((items_props) => (
          <Producst key={items_props.id} filter={items_props} />
        ))}
      
      </div>
    </>
  );
}

export default ListMap;
