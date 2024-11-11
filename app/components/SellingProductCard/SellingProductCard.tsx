import { FaStar } from 'react-icons/fa';
import './SellingProductCard.css';


interface SellingProductCardProps {
  title: string;
  imageUrl: string;
  reviews: number;
  price: string;
}

const products = [
  {
    title: 'Biotin Plus',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/PQk7P2Vx3orfCidskcdGtUmmyX7s7jTAsmUOSq7EdeMTY9vTA.jpg',
    reviews: 216,
    price: '1,150.00',
  },
  {
    title: 'Vitamin C',
    imageUrl: 'https://example.com/vitamin-c.jpg',
    reviews: 150,
    price: '850.00',
  },
  {
    title: 'Omega 3 Fish Oil',
    imageUrl: 'https://example.com/omega-3.jpg',
    reviews: 300,
    price: '1,250.00',
  },
  {
    title: 'Multivitamin Complex',
    imageUrl: 'https://example.com/multivitamin.jpg',
    reviews: 500,
    price: '950.00',
  },
];

const SellingProductCard: React.FC<SellingProductCardProps> = ({ 
  title, 
  imageUrl, 
  reviews, 
  price 
}) => {
  return (
    <div className="flex items-center justify-center flex-row">
      <div className="bg-white p-4 rounded-lg shadow-md text-center max-w-xs">
        <div className="bg-purple-100 p-2 rounded-lg">
          <img
            alt={`Bottle of ${title} supplement`}
            className="mx-auto"
            height="150"
            src={imageUrl}
            width="150"
          />
        </div>
        <h2 className="mt-2 text-lg font-semibold">{title}</h2>
        <div className="flex items-center justify-center mt-1">
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <FaStar key={index} className="text-black text-sm" />
              ))}
          </div>
          <span className="ml-1 text-gray-500 text-sm">{reviews} reviews</span>
        </div>
        <div className="mt-1 text-gray-500 text-sm">From</div>
        <div className="mt-1 text-xl font-bold text-gray-800">Rs. {price}</div>
      </div>
    </div>
  );
};

const ProductList: React.FC = () => {
  return (
    <div className="sellingproductcard">
      {products.map((product, index) => (
        <SellingProductCard
          key={index}
          title={product.title}
          imageUrl={product.imageUrl}
          reviews={product.reviews}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;