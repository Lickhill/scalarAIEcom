// Sample products for each category to initialize the database
export const sampleProducts = [
	// Fashion
	{
		name: "Premium Cotton T-Shirt",
		category: "Fashion",
		subcategory: "Premium",
		price: 499,
		description: "High-quality cotton t-shirt with perfect fit and comfort",
	},
	{
		name: "Casual Denim Jeans",
		category: "Fashion",
		subcategory: "Standard",
		price: 799,
		description: "Stylish casual denim jeans for everyday wear",
	},
	// Mobiles
	{
		name: "Smartphone Pro Max",
		category: "Mobiles",
		subcategory: "Premium",
		price: 49999,
		description: "Latest flagship smartphone with advanced features",
	},
	{
		name: "Budget Smartphone",
		category: "Mobiles",
		subcategory: "Budget",
		price: 9999,
		description: "Reliable budget smartphone for basic needs",
	},
	// Beauty
	{
		name: "Organic Face Cream",
		category: "Beauty",
		subcategory: "Premium",
		price: 1299,
		description: "Premium organic face cream for all skin types",
	},
	{
		name: "Lipstick Collection",
		category: "Beauty",
		subcategory: "Standard",
		price: 299,
		description: "Long-lasting matte lipstick in various shades",
	},
	// Electronics
	{
		name: "Wireless Earbuds",
		category: "Electronics",
		subcategory: "Premium",
		price: 5999,
		description: "Premium wireless earbuds with noise cancellation",
	},
	{
		name: "USB-C Cable",
		category: "Electronics",
		subcategory: "Basic",
		price: 199,
		description: "Durable USB-C charging and data transfer cable",
	},
	// Home
	{
		name: "Decorative Wall Clock",
		category: "Home",
		subcategory: "Standard",
		price: 1599,
		description: "Modern wall clock to brighten your home",
	},
	{
		name: "Luxury Bed Sheet Set",
		category: "Home",
		subcategory: "Luxury",
		price: 3999,
		description: "Premium Egyptian cotton bed sheets",
	},
	// Appliances
	{
		name: "Electric Kettle",
		category: "Appliances",
		subcategory: "Standard",
		price: 1299,
		description: "Fast boiling electric kettle with auto shut-off",
	},
	{
		name: "Premium Mixer Grinder",
		category: "Appliances",
		subcategory: "Premium",
		price: 4999,
		description: "Powerful mixer grinder for smooth grinding",
	},
	// Toys & Baby
	{
		name: "Educational Toy Set",
		category: "Toys, Baby & More",
		subcategory: "Standard",
		price: 999,
		description: "Fun and educational toy set for kids",
	},
	{
		name: "Premium Baby Monitor",
		category: "Toys, Baby & More",
		subcategory: "Premium",
		price: 6999,
		description: "Smart baby monitor with HD camera and night vision",
	},
	// Food & Health
	{
		name: "Organic Green Tea",
		category: "Food & Health",
		subcategory: "Premium",
		price: 399,
		description: "100% organic green tea for health benefits",
	},
	{
		name: "Protein Powder",
		category: "Food & Health",
		subcategory: "Standard",
		price: 1299,
		description: "High-protein powder for fitness and nutrition",
	},
	// Auto Accessories
	{
		name: "Car Phone Mount",
		category: "Auto Accessories",
		subcategory: "Basic",
		price: 299,
		description: "Adjustable car phone mount for safe driving",
	},
	{
		name: "Premium Car Seat Covers",
		category: "Auto Accessories",
		subcategory: "Premium",
		price: 1999,
		description: "Durable and stylish car seat covers",
	},
	// 2 Wheelers
	{
		name: "Motorcycle Helmet",
		category: "2 Wheelers",
		subcategory: "Premium",
		price: 2999,
		description: "Safety-certified motorcycle helmet",
	},
	{
		name: "Bike Chain Lock",
		category: "2 Wheelers",
		subcategory: "Basic",
		price: 499,
		description: "Heavy-duty bike chain lock for security",
	},
	// Sports & Outdoors
	{
		name: "Yoga Mat",
		category: "Sports & Outdoors",
		subcategory: "Standard",
		price: 699,
		description: "Premium yoga mat for comfort and grip",
	},
	{
		name: "Professional Running Shoes",
		category: "Sports & Outdoors",
		subcategory: "Premium",
		price: 4999,
		description: "High-performance running shoes with arch support",
	},
	// Books & More
	{
		name: "Best Selling Novel",
		category: "Books & More",
		subcategory: "Standard",
		price: 299,
		description: "International best-selling fiction novel",
	},
	{
		name: "Programming Guide",
		category: "Books & More",
		subcategory: "Premium",
		price: 599,
		description: "Comprehensive guide to web development",
	},
	// Furniture
	{
		name: "Study Desk",
		category: "Furniture",
		subcategory: "Standard",
		price: 3999,
		description: "Spacious study desk with storage",
	},
	{
		name: "Luxury Sofa Set",
		category: "Furniture",
		subcategory: "Luxury",
		price: 29999,
		description: "Premium leather sofa set for living room",
	},
];

// SQL Script to create category table (if using PostgreSQL)
export const createCategoryTableSQL = `
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  icon VARCHAR(10),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO categories (name, icon, description) VALUES
('For You', '👜', 'Personalized recommendations'),
('Fashion', '👕', 'Clothing and apparel'),
('Mobiles', '📱', 'Mobile phones and devices'),
('Beauty', '💄', 'Beauty and cosmetics products'),
('Electronics', '🖥️', 'Electronic gadgets and devices'),
('Home', '🏠', 'Home decor and furnishings'),
('Appliances', '⚡', 'Home appliances'),
('Toys, Baby & More', '🧸', 'Toys and baby products'),
('Food & Health', '🍎', 'Food and health products'),
('Auto Accessories', '🚗', 'Car and auto accessories'),
('2 Wheelers', '🏍️', 'Bikes and two-wheeler accessories'),
('Sports & Outdoors', '⚽', 'Sports equipment and outdoor gear'),
('Books & More', '📚', 'Books and educational materials'),
('Furniture', '🛋️', 'Furniture and home furnishings')
ON CONFLICT (name) DO NOTHING;
`;

// MongoDB seed script
export const mongooseInsertCategories = `
const categories = [
  { name: 'For You', icon: '👜' },
  { name: 'Fashion', icon: '👕' },
  { name: 'Mobiles', icon: '📱' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Electronics', icon: '🖥️' },
  { name: 'Home', icon: '🏠' },
  { name: 'Appliances', icon: '⚡' },
  { name: 'Toys, Baby & More', icon: '🧸' },
  { name: 'Food & Health', icon: '🍎' },
  { name: 'Auto Accessories', icon: '🚗' },
  { name: '2 Wheelers', icon: '🏍️' },
  { name: 'Sports & Outdoors', icon: '⚽' },
  { name: 'Books & More', icon: '📚' },
  { name: 'Furniture', icon: '🛋️' }
];

// Insert into database
await Category.insertMany(categories);
`;
