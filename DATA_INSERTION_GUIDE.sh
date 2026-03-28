#!/bin/bash

# =============================================================================
# COMPLETE DATA INSERTION GUIDE FOR POSTGRESQL
# =============================================================================
# This script demonstrates how to insert data into your PostgreSQL database
# through the Admin panel and fetch it in the Frontend
# =============================================================================

BACKEND_URL="http://localhost:4000"
ADMIN_EMAIL="unclefab23@gmail.com"
ADMIN_PASSWORD="unclefab@23"

echo "================================"
echo "STEP 1: Admin Login"
echo "================================"

ADMIN_TOKEN=$(curl -s -X POST "$BACKEND_URL/api/user/admin" \
  -H "Content-Type: application/json" \
  -d "{
    \"email\": \"$ADMIN_EMAIL\",
    \"password\": \"$ADMIN_PASSWORD\"
  }" | grep -o '"token":"[^"]*' | cut -d'"' -f4)

if [ -z "$ADMIN_TOKEN" ]; then
  echo "❌ Admin login failed!"
  exit 1
fi

echo "✅ Admin login successful!"
echo "Token: $ADMIN_TOKEN"
echo ""

# =============================================================================
# NOTE: To add products with images, you need to use the Admin Panel (React app)
# or use FormData with multipart/form-data in your requests
# The API endpoint is: POST /api/product/add
# Required fields: name, description, price, category, subcategory, sizes, bestseller
# Required files: image1, image2, image3, image4 (at least one image required)
# =============================================================================

echo "================================"
echo "STEP 2: Product Addition Steps"
echo "================================"
echo ""
echo "Since products require image uploads, you should:"
echo ""
echo "Option A: Use the Admin Frontend (Recommended)"
echo "  1. Open: http://localhost:5173 (Admin panel)"
echo "  2. Go to 'Add Products' page"
echo "  3. Fill in product details"
echo "  4. Upload product images"
echo "  5. Click 'Add Product'"
echo ""
echo "Option B: Use curl with FormData (Advanced)"
echo "  Example:"
echo "  curl -X POST http://localhost:4000/api/product/add \\"
echo "    -H \"Authorization: Bearer \$ADMIN_TOKEN\" \\"
echo "    -F \"name=Test Product\" \\"
echo "    -F \"description=Test Description\" \\"
echo "    -F \"price=99\" \\"
echo "    -F \"category=Men\" \\"
echo "    -F \"subcategory=Topwear\" \\"
echo "    -F \"sizes=[\\\"S\\\",\\\"M\\\",\\\"L\\\"]\" \\"
echo "    -F \"bestseller=false\" \\"
echo "    -F \"image1=@/path/to/image1.jpg\" \\"
echo "    -F \"image2=@/path/to/image2.jpg\""
echo ""

echo "================================"
echo "STEP 3: Verify Data in Database"
echo "================================"
echo ""
echo "To check all products in the database:"
echo "  curl http://localhost:4000/api/product/list"
echo ""
echo "Example response:"
echo "  {\"success\": true, \"products\": [{\"id\": \"...\", \"name\": \"...\", ...}]}"
echo ""

echo "================================"
echo "STEP 4: Fetch Data in Frontend"
echo "================================"
echo ""
echo "Your Frontend (React) can fetch products with:"
echo ""
echo "  // In React component:"
echo "  const [products, setProducts] = useState([]);"
echo ""
echo "  useEffect(() => {"
echo "    fetch('http://localhost:4000/api/product/list')"
echo "      .then(res => res.json())"
echo "      .then(data => setProducts(data.products));"
echo "  }, []);"
echo ""

echo "================================"
echo "API ENDPOINTS SUMMARY"
echo "================================"
echo ""
echo "USER MANAGEMENT:"
echo "  POST /api/user/register      - Register user"
echo "  POST /api/user/login         - User login"
echo "  POST /api/user/admin         - Admin login"
echo ""
echo "PRODUCTS (Admin only):"
echo "  POST /api/product/add        - Add product (requires image + auth)"
echo "  POST /api/product/remove     - Remove product (requires auth)"
echo ""
echo "PRODUCTS (Public):"
echo "  GET /api/product/list        - Get all products"
echo "  POST /api/product/single     - Get single product"
echo ""
echo "CART (Auth required):"
echo "  POST /api/cart/add           - Add to cart"
echo "  POST /api/cart/update        - Update cart"
echo "  POST /api/cart/get           - Get cart"
echo ""
echo "ORDERS (Auth required):"
echo "  POST /api/order/place        - Place order"
echo "  POST /api/order/verify       - Verify payment"
echo "  GET /api/order/userorders    - Get user orders"
echo "  GET /api/order/list          - Get all orders (admin)"
echo "  POST /api/order/status       - Update order status (admin)"
echo ""
