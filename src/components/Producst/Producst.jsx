function Producst({ filter }) {
  return (
    <>
      <div className=" bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img className="w-full h-48 object-cover" src={filter.thumbnail} />

        <div className="p-6 text-sm">
          <h3 className="text-center font-semibold object-contain">
            {filter.title}
          </h3>
          <p className="text-black text-center">${filter.price}</p>

          <a
            href={filter.permalink}
            target="_blank"
            rel="noopener noreferrer "
            className="block bg-blue-600 text-white text-center py-2 rounded-sm font-semibold hover:bg-blue-700 transition duration-300"
          >
            detalle
          </a>
        </div>
      </div>
    </>
  );
}

export default Producst;
