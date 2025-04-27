
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  imageUrl: string;
  rating: number;
  brand: string;
  inStock: boolean;
  featured?: boolean;
  specifications: Record<string, string>;
  colors?: string[];
}

const products: Product[] = [
  // Laptops
  {
    id: "laptop-1",
    name: "Razer Blade 15",
    category: "laptops",
    price: 149990,
    originalPrice: 169990,
    description: "Experience the ultimate gaming laptop with the Razer Blade 15. Featuring a powerful NVIDIA RTX 3080 GPU, 11th Gen Intel Core i7 processor, and a 15.6-inch QHD 240Hz display, this laptop delivers exceptional performance for gaming and creative work.",
    shortDescription: "15.6\" QHD, RTX 3080, Intel Core i7, 16GB RAM, 1TB SSD",
    imageUrl: "https://images.unsplash.com/photo-1603706585758-4073savphbpb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBsYXB0b3B8ZW58MHx8fHwxNjM1MjMxMjIx&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.7,
    brand: "Razer",
    inStock: true,
    featured: true,
    specifications: {
      "Processor": "11th Gen Intel Core i7-11800H",
      "Graphics": "NVIDIA GeForce RTX 3080",
      "RAM": "16GB DDR4",
      "Storage": "1TB NVMe SSD",
      "Display": "15.6\" QHD 240Hz",
      "Battery": "80Wh",
      "Weight": "2.01 kg"
    }
  },
  {
    id: "laptop-2",
    name: "ASUS ROG Zephyrus G14",
    category: "laptops",
    price: 129990,
    originalPrice: 139990,
    description: "The ROG Zephyrus G14 is a compact gaming laptop that packs a punch. With an AMD Ryzen 9 processor and NVIDIA RTX 3060 graphics, it provides impressive gaming performance in a portable form factor.",
    shortDescription: "14\" QHD, RTX 3060, AMD Ryzen 9, 16GB RAM, 1TB SSD",
    imageUrl: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwzfHxnYW1pbmclMjBsYXB0b3B8ZW58MHx8fHwxNjM1MjMxMjIx&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.8,
    brand: "ASUS",
    inStock: true,
    specifications: {
      "Processor": "AMD Ryzen 9 5900HS",
      "Graphics": "NVIDIA GeForce RTX 3060",
      "RAM": "16GB DDR4",
      "Storage": "1TB NVMe SSD",
      "Display": "14\" QHD 120Hz",
      "Battery": "76Wh",
      "Weight": "1.7 kg"
    }
  },
  {
    id: "laptop-3",
    name: "MSI GE76 Raider",
    category: "laptops",
    price: 199990,
    description: "The MSI GE76 Raider is a powerhouse gaming laptop featuring top-tier components and a stunning RGB light bar. With its powerful hardware and cooling system, it's designed for gamers who demand the best.",
    shortDescription: "17.3\" FHD, RTX 3070, Intel Core i9, 32GB RAM, 1TB SSD",
    imageUrl: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHw0fHxsYXB0b3B8ZW58MHx8fHwxNjM1MjMxMjIx&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.6,
    brand: "MSI",
    inStock: true,
    specifications: {
      "Processor": "11th Gen Intel Core i9-11980HK",
      "Graphics": "NVIDIA GeForce RTX 3070",
      "RAM": "32GB DDR4",
      "Storage": "1TB NVMe SSD",
      "Display": "17.3\" FHD 300Hz",
      "Battery": "99.9Wh",
      "Weight": "2.9 kg"
    }
  },
  {
    id: "laptop-4",
    name: "Alienware m15 R6",
    category: "laptops",
    price: 179990,
    description: "The Alienware m15 R6 combines powerful performance with the iconic Alienware design. Its high-refresh-rate display and advanced cooling technology make it a premium choice for enthusiast gamers.",
    shortDescription: "15.6\" FHD, RTX 3070, Intel Core i7, 16GB RAM, 1TB SSD",
    imageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwyM3x8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.5,
    brand: "Alienware",
    inStock: true,
    specifications: {
      "Processor": "11th Gen Intel Core i7-11800H",
      "Graphics": "NVIDIA GeForce RTX 3070",
      "RAM": "16GB DDR4",
      "Storage": "1TB NVMe SSD",
      "Display": "15.6\" FHD 360Hz",
      "Battery": "86Wh",
      "Weight": "2.5 kg"
    }
  },
  {
    id: "laptop-5",
    name: "Acer Predator Helios 300",
    category: "laptops",
    price: 109990,
    originalPrice: 119990,
    description: "The Acer Predator Helios 300 offers excellent gaming performance at a more accessible price point. It features powerful hardware, a high-refresh-rate display, and effective cooling for marathon gaming sessions.",
    shortDescription: "15.6\" FHD, RTX 3060, Intel Core i7, 16GB RAM, 512GB SSD",
    imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHw3fHxsYXB0b3B8ZW58MHx8fHwxNjM1MjMxMjIx&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.4,
    brand: "Acer",
    inStock: true,
    specifications: {
      "Processor": "11th Gen Intel Core i7-11800H",
      "Graphics": "NVIDIA GeForce RTX 3060",
      "RAM": "16GB DDR4",
      "Storage": "512GB NVMe SSD",
      "Display": "15.6\" FHD 144Hz",
      "Battery": "59Wh",
      "Weight": "2.3 kg"
    }
  },
  {
    id: "laptop-6",
    name: "Lenovo Legion 5 Pro",
    category: "laptops",
    price: 144990,
    description: "The Lenovo Legion 5 Pro offers a perfect balance of performance and features. Its 16-inch QHD display, powerful RTX graphics, and robust build quality make it a top choice for gamers and content creators.",
    shortDescription: "16\" QHD, RTX 3070, AMD Ryzen 7, 16GB RAM, 1TB SSD",
    imageUrl: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwyNnx8bGFwdG9wfGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.7,
    brand: "Lenovo",
    inStock: true,
    featured: true,
    specifications: {
      "Processor": "AMD Ryzen 7 5800H",
      "Graphics": "NVIDIA GeForce RTX 3070",
      "RAM": "16GB DDR4",
      "Storage": "1TB NVMe SSD",
      "Display": "16\" QHD 165Hz",
      "Battery": "80Wh",
      "Weight": "2.45 kg"
    }
  },
  {
    id: "laptop-7",
    name: "HP Omen 15",
    category: "laptops",
    price: 124990,
    description: "The HP Omen 15 is designed for high-performance gaming with its powerful components and effective cooling system. Its sleek design and comfortable keyboard provide a premium gaming experience.",
    shortDescription: "15.6\" FHD, RTX 3060, AMD Ryzen 7, 16GB RAM, 512GB SSD",
    imageUrl: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxNHx8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.5,
    brand: "HP",
    inStock: true,
    specifications: {
      "Processor": "AMD Ryzen 7 5800H",
      "Graphics": "NVIDIA GeForce RTX 3060",
      "RAM": "16GB DDR4",
      "Storage": "512GB NVMe SSD",
      "Display": "15.6\" FHD 144Hz",
      "Battery": "70Wh",
      "Weight": "2.4 kg"
    }
  },
  {
    id: "laptop-8",
    name: "Dell G15",
    category: "laptops",
    price: 89990,
    originalPrice: 99990,
    description: "The Dell G15 offers reliable gaming performance at an affordable price point. With its robust design, effective cooling system, and decent battery life, it's a great entry-level gaming laptop.",
    shortDescription: "15.6\" FHD, RTX 3050 Ti, Intel Core i5, 8GB RAM, 512GB SSD",
    imageUrl: "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwyOHx8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.2,
    brand: "Dell",
    inStock: true,
    specifications: {
      "Processor": "11th Gen Intel Core i5-11400H",
      "Graphics": "NVIDIA GeForce RTX 3050 Ti",
      "RAM": "8GB DDR4",
      "Storage": "512GB NVMe SSD",
      "Display": "15.6\" FHD 120Hz",
      "Battery": "56Wh",
      "Weight": "2.5 kg"
    }
  },

  // Desktops
  {
    id: "desktop-1",
    name: "Alienware Aurora R12",
    category: "desktops",
    price: 249990,
    description: "The Alienware Aurora R12 is a premium gaming desktop featuring high-end components in a unique, eye-catching chassis. With its powerful hardware and advanced cooling system, it's designed for enthusiast gamers and content creators.",
    shortDescription: "RTX 3080, Intel Core i9, 32GB RAM, 2TB SSD + 2TB HDD",
    imageUrl: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwyfHxnYW1pbmclMjBkZXNrdG9wfGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.8,
    brand: "Alienware",
    inStock: true,
    featured: true,
    specifications: {
      "Processor": "11th Gen Intel Core i9-11900K",
      "Graphics": "NVIDIA GeForce RTX 3080",
      "RAM": "32GB DDR4",
      "Storage": "2TB NVMe SSD + 2TB HDD",
      "Cooling": "Liquid cooling",
      "Power Supply": "1000W Platinum",
      "Operating System": "Windows 11 Home"
    }
  },
  {
    id: "desktop-2",
    name: "ASUS ROG Strix GA35",
    category: "desktops",
    price: 229990,
    description: "The ASUS ROG Strix GA35 is a powerful gaming desktop with an aggressive design and top-tier components. It features advanced cooling technology and easy upgradability for future-proofing your gaming setup.",
    shortDescription: "RTX 3080, AMD Ryzen 9, 32GB RAM, 1TB SSD + 2TB HDD",
    imageUrl: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHw2fHxnYW1pbmclMjBkZXNrdG9wfGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.7,
    brand: "ASUS",
    inStock: true,
    specifications: {
      "Processor": "AMD Ryzen 9 5900X",
      "Graphics": "NVIDIA GeForce RTX 3080",
      "RAM": "32GB DDR4",
      "Storage": "1TB NVMe SSD + 2TB HDD",
      "Cooling": "Air cooling",
      "Power Supply": "850W Gold",
      "Operating System": "Windows 11 Home"
    }
  },
  {
    id: "desktop-3",
    name: "MSI MEG Aegis Ti5",
    category: "desktops",
    price: 319990,
    description: "The MSI MEG Aegis Ti5 is a high-end gaming desktop with a futuristic design featuring a unique Gaming Dial interface. It offers exceptional performance for gaming and content creation in a compact form factor.",
    shortDescription: "RTX 3090, Intel Core i9, 64GB RAM, 2TB SSD + 3TB HDD",
    imageUrl: "https://images.unsplash.com/photo-1547082299-de196ea013d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHw4fHxnYW1pbmclMjBkZXNrdG9wfGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.9,
    brand: "MSI",
    inStock: true,
    specifications: {
      "Processor": "11th Gen Intel Core i9-11900K",
      "Graphics": "NVIDIA GeForce RTX 3090",
      "RAM": "64GB DDR4",
      "Storage": "2TB NVMe SSD + 3TB HDD",
      "Cooling": "Liquid cooling",
      "Power Supply": "1200W Platinum",
      "Operating System": "Windows 11 Pro"
    },
    featured: true
  },
  {
    id: "desktop-4",
    name: "HP Omen 30L",
    category: "desktops",
    price: 189990,
    originalPrice: 199990,
    description: "The HP Omen 30L is a stylish gaming desktop that balances performance and aesthetics. With its tempered glass panels, RGB lighting, and powerful components, it's a great choice for gamers who appreciate design.",
    shortDescription: "RTX 3070, AMD Ryzen 7, 16GB RAM, 1TB SSD + 1TB HDD",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHw3fHxnYW1pbmclMjBkZXNrdG9wfGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.6,
    brand: "HP",
    inStock: true,
    specifications: {
      "Processor": "AMD Ryzen 7 5800X",
      "Graphics": "NVIDIA GeForce RTX 3070",
      "RAM": "16GB DDR4",
      "Storage": "1TB NVMe SSD + 1TB HDD",
      "Cooling": "Air cooling",
      "Power Supply": "750W Gold",
      "Operating System": "Windows 11 Home"
    }
  },
  {
    id: "desktop-5",
    name: "Corsair Vengeance a7200",
    category: "desktops",
    price: 219990,
    description: "The Corsair Vengeance a7200 is a premium gaming desktop with carefully selected components and extensive RGB lighting. It's designed for high-performance gaming and features Corsair's renowned build quality.",
    shortDescription: "RTX 3080, AMD Ryzen 9, 32GB RAM, 2TB SSD",
    imageUrl: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxMnx8Z2FtaW5nJTIwZGVza3RvcHxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.8,
    brand: "Corsair",
    inStock: true,
    specifications: {
      "Processor": "AMD Ryzen 9 5900X",
      "Graphics": "NVIDIA GeForce RTX 3080",
      "RAM": "32GB DDR4",
      "Storage": "2TB NVMe SSD",
      "Cooling": "Liquid cooling",
      "Power Supply": "850W Gold",
      "Operating System": "Windows 11 Home"
    }
  },
  {
    id: "desktop-6",
    name: "Lenovo Legion T7",
    category: "desktops",
    price: 159990,
    description: "The Lenovo Legion T7 is a high-performance gaming desktop with a clean, professional design. Its efficient cooling system and powerful components offer excellent gaming performance without excessive noise.",
    shortDescription: "RTX 3070, Intel Core i7, 16GB RAM, 512GB SSD + 1TB HDD",
    imageUrl: "https://images.unsplash.com/photo-1591817837573-2899bc4356a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxNXx8Z2FtaW5nJTIwZGVza3RvcHxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.5,
    brand: "Lenovo",
    inStock: true,
    specifications: {
      "Processor": "11th Gen Intel Core i7-11700K",
      "Graphics": "NVIDIA GeForce RTX 3070",
      "RAM": "16GB DDR4",
      "Storage": "512GB NVMe SSD + 1TB HDD",
      "Cooling": "Air cooling",
      "Power Supply": "650W Bronze",
      "Operating System": "Windows 11 Home"
    }
  },

  // Smartphones
  {
    id: "smartphone-1",
    name: "ASUS ROG Phone 5",
    category: "smartphones",
    price: 59990,
    originalPrice: 64990,
    description: "The ASUS ROG Phone 5 is the ultimate gaming smartphone, featuring a 144Hz AMOLED display, powerful Snapdragon 888 processor, and gaming-focused features like AirTrigger controls and optimized cooling system.",
    shortDescription: "6.78\" AMOLED, Snapdragon 888, 12GB RAM, 256GB Storage",
    imageUrl: "https://images.unsplash.com/photo-1592890288564-76628a30a657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBwaG9uZXxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.8,
    brand: "ASUS",
    inStock: true,
    featured: true,
    specifications: {
      "Display": "6.78\" FHD+ AMOLED 144Hz",
      "Processor": "Snapdragon 888",
      "RAM": "12GB LPDDR5",
      "Storage": "256GB UFS 3.1",
      "Battery": "6000mAh",
      "Camera": "64MP + 13MP + 5MP",
      "Operating System": "Android 11"
    },
    colors: ["Black", "White", "Storm"]
  },
  {
    id: "smartphone-2",
    name: "Black Shark 4 Pro",
    category: "smartphones",
    price: 49990,
    description: "The Black Shark 4 Pro is a gaming smartphone with magnetic pop-up triggers and a 144Hz AMOLED display. It offers high-performance gaming with its Snapdragon 888 processor and advanced cooling system.",
    shortDescription: "6.67\" AMOLED, Snapdragon 888, 8GB RAM, 128GB Storage",
    imageUrl: "https://images.unsplash.com/photo-1592891566792-31a85a97f3d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwyfHxnYW1pbmclMjBwaG9uZXxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.6,
    brand: "Black Shark",
    inStock: true,
    specifications: {
      "Display": "6.67\" FHD+ AMOLED 144Hz",
      "Processor": "Snapdragon 888",
      "RAM": "8GB LPDDR5",
      "Storage": "128GB UFS 3.1",
      "Battery": "4500mAh",
      "Camera": "64MP + 8MP + 5MP",
      "Operating System": "Android 11"
    },
    colors: ["Black", "Silver"]
  },
  {
    id: "smartphone-3",
    name: "Nubia Red Magic 6",
    category: "smartphones",
    price: 46990,
    originalPrice: 49990,
    description: "The Nubia Red Magic 6 is designed for mobile gaming with its 165Hz AMOLED display, built-in cooling fan, and shoulder triggers. It provides smooth gaming performance with its Snapdragon 888 processor.",
    shortDescription: "6.8\" AMOLED, Snapdragon 888, 12GB RAM, 256GB Storage",
    imageUrl: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHw0fHxnYW1pbmclMjBwaG9uZXxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.5,
    brand: "Nubia",
    inStock: true,
    specifications: {
      "Display": "6.8\" FHD+ AMOLED 165Hz",
      "Processor": "Snapdragon 888",
      "RAM": "12GB LPDDR5",
      "Storage": "256GB UFS 3.1",
      "Battery": "5050mAh",
      "Camera": "64MP + 8MP + 2MP",
      "Operating System": "Android 11"
    },
    colors: ["Black", "Cyborg"]
  },
  {
    id: "smartphone-4",
    name: "Lenovo Legion Phone Duel 2",
    category: "smartphones",
    price: 54990,
    description: "The Lenovo Legion Phone Duel 2 features an innovative design with a side-mounted pop-up camera and dual cooling fans. It's built for landscape gaming with its centrally-positioned processor and multiple tactile buttons.",
    shortDescription: "6.92\" AMOLED, Snapdragon 888, 16GB RAM, 512GB Storage",
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwyM3x8c21hcnRwaG9uZXxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.7,
    brand: "Lenovo",
    inStock: true,
    specifications: {
      "Display": "6.92\" FHD+ AMOLED 144Hz",
      "Processor": "Snapdragon 888",
      "RAM": "16GB LPDDR5",
      "Storage": "512GB UFS 3.1",
      "Battery": "5500mAh (dual)",
      "Camera": "64MP + 16MP",
      "Operating System": "Android 11"
    },
    colors: ["Black", "Titanium"]
  },
  {
    id: "smartphone-5",
    name: "iPhone 13 Pro",
    category: "smartphones",
    price: 119990,
    description: "The iPhone 13 Pro offers exceptional gaming performance with its A15 Bionic chip and 120Hz ProMotion display. Its advanced GPU delivers console-quality graphics for the most demanding mobile games.",
    shortDescription: "6.1\" Super Retina XDR, A15 Bionic, 6GB RAM, 256GB Storage",
    imageUrl: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjAxM3xlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.9,
    brand: "Apple",
    inStock: true,
    specifications: {
      "Display": "6.1\" Super Retina XDR 120Hz",
      "Processor": "A15 Bionic",
      "RAM": "6GB",
      "Storage": "256GB",
      "Battery": "3095mAh",
      "Camera": "12MP + 12MP + 12MP",
      "Operating System": "iOS 15"
    },
    colors: ["Graphite", "Gold", "Silver", "Sierra Blue"]
  },
  {
    id: "smartphone-6",
    name: "Samsung Galaxy S21 Ultra",
    category: "smartphones",
    price: 99990,
    originalPrice: 106990,
    description: "The Samsung Galaxy S21 Ultra delivers outstanding mobile gaming performance with its 120Hz Dynamic AMOLED display and Exynos 2100 processor. Its adaptive refresh rate and advanced cooling system ensure smooth gaming for extended periods.",
    shortDescription: "6.8\" Dynamic AMOLED, Exynos 2100, 12GB RAM, 256GB Storage",
    imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxzYW1zdW5nJTIwZ2FsYXh5JTIwczIxfGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.8,
    brand: "Samsung",
    inStock: true,
    featured: true,
    specifications: {
      "Display": "6.8\" Dynamic AMOLED 120Hz",
      "Processor": "Exynos 2100",
      "RAM": "12GB LPDDR5",
      "Storage": "256GB UFS 3.1",
      "Battery": "5000mAh",
      "Camera": "108MP + 10MP + 10MP + 12MP",
      "Operating System": "Android 11"
    },
    colors: ["Phantom Black", "Phantom Silver", "Navy"]
  },

  // Headphones
  {
    id: "headphone-1",
    name: "SteelSeries Arctis Pro Wireless",
    category: "headphones",
    price: 28990,
    description: "The SteelSeries Arctis Pro Wireless is a premium gaming headset featuring dual-wireless technology with 2.4GHz and Bluetooth connectivity. It delivers high-fidelity audio with Hi-Res capable speaker drivers and DTS Headphone:X v2.0 surround sound.",
    shortDescription: "Dual-Wireless, Hi-Res Audio, DTS Headphone:X v2.0, Dual Battery System",
    imageUrl: "https://images.unsplash.com/photo-1599669454699-248893623440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwyfHxnYW1pbmclMjBoZWFkc2V0fGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.8,
    brand: "SteelSeries",
    inStock: true,
    featured: true,
    specifications: {
      "Audio": "Hi-Res capable 40mm neodymium drivers",
      "Wireless": "2.4GHz and Bluetooth",
      "Battery Life": "20+ hours (dual battery system)",
      "Microphone": "ClearCast bidirectional",
      "Surround Sound": "DTS Headphone:X v2.0",
      "Compatibility": "PC, PS5, PS4, Mobile"
    },
    colors: ["Black", "White"]
  },
  {
    id: "headphone-2",
    name: "HyperX Cloud Alpha",
    category: "headphones",
    price: 8990,
    originalPrice: 9990,
    description: "The HyperX Cloud Alpha is renowned for its comfort and audio quality, featuring dual-chamber drivers for clearer sound with less distortion. Its durable aluminum frame and memory foam ear cushions make it ideal for long gaming sessions.",
    shortDescription: "Dual-chamber drivers, Detachable mic, Multiplatform compatibility",
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxM3x8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.7,
    brand: "HyperX",
    inStock: true,
    specifications: {
      "Audio": "Dual-chamber 50mm drivers",
      "Connection": "3.5mm",
      "Microphone": "Detachable noise-cancelling",
      "Comfort": "Memory foam ear cushions",
      "Frame": "Aluminum frame",
      "Compatibility": "PC, PS5, Xbox Series X/S, Mobile"
    },
    colors: ["Red", "Black"]
  },
  {
    id: "headphone-3",
    name: "Logitech G Pro X",
    category: "headphones",
    price: 12990,
    description: "The Logitech G Pro X delivers tournament-level audio performance with Blue Voice microphone technology. It features 7.1 surround sound, memory foam ear pads, and a durable steel and aluminum frame built for professional esports.",
    shortDescription: "7.1 Surround Sound, Blue Voice mic technology, DTS Headphone:X 2.0",
    imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwyMXx8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.7,
    brand: "Logitech",
    inStock: true,
    specifications: {
      "Audio": "PRO-G 50mm Drivers",
      "Connection": "USB / 3.5mm",
      "Microphone": "Blue Voice technology",
      "Surround Sound": "DTS Headphone:X 2.0",
      "Frame": "Steel and aluminum",
      "Compatibility": "PC, PS5, Xbox Series X/S, Mobile"
    },
    colors: ["Black"]
  },
  {
    id: "headphone-4",
    name: "Razer BlackShark V2 Pro",
    category: "headphones",
    price: 17990,
    description: "The Razer BlackShark V2 Pro is a wireless esports headset featuring Razer's TriForce Titanium 50mm drivers and THX Spatial Audio for immersive gaming. Its ultra-soft memory foam ear cushions and lightweight design provide exceptional comfort.",
    shortDescription: "Wireless, THX Spatial Audio, TriForce Titanium drivers",
    imageUrl: "https://images.unsplash.com/photo-1624887007782-98697bf75237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwzfHxnYW1pbmclMjBoZWFkc2V0fGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.6,
    brand: "Razer",
    inStock: true,
    specifications: {
      "Audio": "TriForce Titanium 50mm Drivers",
      "Wireless": "Razer HyperSpeed Wireless",
      "Battery Life": "24 hours",
      "Microphone": "Razer HyperClear Supercardioid",
      "Surround Sound": "THX Spatial Audio",
      "Compatibility": "PC, PS5"
    },
    colors: ["Black"]
  },
  {
    id: "headphone-5",
    name: "Astro A50 Wireless",
    category: "headphones",
    price: 31990,
    description: "The Astro A50 Wireless is a premium gaming headset featuring Dolby Audio and a convenient charging dock. Its open-back design provides incredible audio fidelity, while the adjustable headband and plush ear cushions offer exceptional comfort.",
    shortDescription: "Wireless with Base Station, Dolby Audio, Open-back design",
    imageUrl: "https://images.unsplash.com/photo-1517586979036-b7d1e86b3345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxNnx8aGVhZHBob25lc3xlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.5,
    brand: "Astro",
    inStock: true,
    specifications: {
      "Audio": "40mm Drivers",
      "Wireless": "2.4GHz with Base Station",
      "Battery Life": "15+ hours",
      "Microphone": "Flip-to-mute",
      "Surround Sound": "Dolby Audio",
      "Compatibility": "PC, PS5/PS4 or Xbox Series X/S/One (version specific)"
    },
    colors: ["Black/Gold"]
  },

  // Earbuds
  {
    id: "earbud-1",
    name: "Razer Hammerhead True Wireless Pro",
    category: "earbuds",
    price: 14990,
    originalPrice: 16990,
    description: "The Razer Hammerhead True Wireless Pro earbuds deliver immersive audio with Active Noise Cancellation and THX Certified sound. Their low-latency gaming mode ensures synchronization between audio and video, essential for competitive gaming.",
    shortDescription: "ANC, THX Certified, Low-latency Gaming Mode, IPX4",
    imageUrl: "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHw0fHxlYXJidWRzfGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.6,
    brand: "Razer",
    inStock: true,
    specifications: {
      "Audio": "10mm Drivers, THX Certified",
      "ANC": "Advanced Active Noise Cancellation",
      "Latency": "60ms Gaming Mode",
      "Battery Life": "4 hours (20+ with case)",
      "Water Resistance": "IPX4",
      "Compatibility": "Bluetooth 5.1, supports all devices"
    },
    colors: ["Black"]
  },
  {
    id: "earbud-2",
    name: "HyperX Cloud Earbuds",
    category: "earbuds",
    price: 4990,
    description: "The HyperX Cloud Earbuds are designed for gaming on the go with their 3.5mm connection. They feature 14mm drivers and an in-line mic, making them ideal for Nintendo Switch and mobile gaming.",
    shortDescription: "Wired 3.5mm, 14mm drivers, In-line mic, Enhanced bass",
    imageUrl: "https://images.unsplash.com/photo-1612444530582-fc66183b16f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxMXx8ZWFyYnVkc3xlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.4,
    brand: "HyperX",
    inStock: true,
    specifications: {
      "Audio": "14mm Drivers",
      "Connection": "3.5mm jack",
      "Microphone": "In-line",
      "Comfort": "Patented silicone ear tips",
      "Cable": "Tangle-free",
      "Compatibility": "Nintendo Switch, Mobile, PC, PS5, Xbox Series X/S"
    },
    colors: ["Red"]
  },
  {
    id: "earbud-3",
    name: "JBL Quantum TWS",
    category: "earbuds",
    price: 9990,
    description: "The JBL Quantum TWS gaming earbuds deliver immersive audio with Active Noise Cancellation and Ambient Aware features. Their low-latency connection and JBL QuantumSURROUND technology provide an edge in competitive gaming.",
    shortDescription: "True Wireless, ANC, JBL QuantumSURROUND, 8-hour Battery",
    imageUrl: "https://images.unsplash.com/photo-1631176093617-63490a3d785a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwzfHxlYXJidWRzfGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.5,
    brand: "JBL",
    inStock: true,
    featured: true,
    specifications: {
      "Audio": "JBL QuantumSOUND Signature",
      "ANC": "Adaptive Noise Cancellation",
      "Latency": "Low-latency connection",
      "Battery Life": "8 hours (24+ with case)",
      "Water Resistance": "IPX5",
      "Compatibility": "Bluetooth 5.2, 2.4GHz dongle for PC"
    },
    colors: ["Black"]
  },
  {
    id: "earbud-4",
    name: "Sony WF-1000XM4",
    category: "earbuds",
    price: 19990,
    originalPrice: 24990,
    description: "The Sony WF-1000XM4 earbuds deliver exceptional audio quality with industry-leading noise cancellation. Their low-latency LDAC codec support and impressive battery life make them a premium choice for gaming and media consumption.",
    shortDescription: "Best-in-class ANC, LDAC codec, 8-hour Battery, IPX4",
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxM3x8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.8,
    brand: "Sony",
    inStock: true,
    specifications: {
      "Audio": "6mm Drivers with new processor",
      "ANC": "Industry-leading noise cancellation",
      "Codec Support": "LDAC, AAC, SBC",
      "Battery Life": "8 hours (24+ with case)",
      "Water Resistance": "IPX4",
      "Compatibility": "Bluetooth 5.2, supports all devices"
    },
    colors: ["Black", "Silver"]
  },

  // Accessories
  {
    id: "accessory-1",
    name: "Razer DeathAdder V2",
    category: "accessories",
    price: 4990,
    originalPrice: 5990,
    description: "The Razer DeathAdder V2 is an iconic gaming mouse featuring a 20,000 DPI optical sensor and ergonomic form factor. Its lightweight design and durable switches make it a top choice for competitive gamers.",
    shortDescription: "20,000 DPI Optical Sensor, 8 Programmable Buttons, RGB",
    imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBtb3VzZXxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.8,
    brand: "Razer",
    inStock: true,
    specifications: {
      "Sensor": "20,000 DPI Optical",
      "Buttons": "8 Programmable",
      "RGB": "Razer Chroma",
      "Weight": "82g",
      "Cable": "Razer Speedflex",
      "Switches": "Optical (70M clicks)"
    }
  },
  {
    id: "accessory-2",
    name: "Logitech G Pro X Superlight",
    category: "accessories",
    price: 12990,
    description: "The Logitech G Pro X Superlight is an ultra-lightweight wireless gaming mouse weighing less than 63 grams. Its HERO 25K sensor and LIGHTSPEED wireless technology provide reliable performance for professional esports.",
    shortDescription: "Ultralight Wireless, 25K DPI HERO Sensor, 63g Weight",
    imageUrl: "https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwyfHxnYW1pbmclMjBtb3VzZXxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.9,
    brand: "Logitech",
    inStock: true,
    featured: true,
    specifications: {
      "Sensor": "HERO 25K",
      "Wireless": "LIGHTSPEED wireless technology",
      "Buttons": "5 Programmable",
      "Battery Life": "70 hours",
      "Weight": "<63g",
      "Switches": "Mechanical (20M clicks)"
    },
    colors: ["White", "Black", "Pink"]
  },
  {
    id: "accessory-3",
    name: "HyperX Alloy Origins Core",
    category: "accessories",
    price: 8990,
    description: "The HyperX Alloy Origins Core is a compact TKL keyboard featuring HyperX mechanical switches and dynamic RGB lighting. Its aircraft-grade aluminum body provides durability and stability during intense gaming sessions.",
    shortDescription: "TKL, RGB, HyperX Red Switches, Aluminum Frame",
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZHxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.7,
    brand: "HyperX",
    inStock: true,
    specifications: {
      "Type": "Tenkeyless (TKL)",
      "Switches": "HyperX Red Mechanical",
      "RGB": "Per-key RGB lighting",
      "Frame": "Aircraft-grade aluminum",
      "Features": "Game Mode, 100% Anti-ghosting, N-key rollover",
      "Cable": "Detachable USB-C"
    }
  },
  {
    id: "accessory-4",
    name: "SteelSeries QcK Prism Cloth XL",
    category: "accessories",
    price: 3990,
    description: "The SteelSeries QcK Prism Cloth XL is a large RGB gaming mousepad with a micro-woven cloth surface for smooth mouse movement. Its 2-zone RGB lighting adds ambiance to your gaming setup while the non-slip base ensures stability.",
    shortDescription: "XL RGB Mousepad, 900x300x4mm, 2-zone RGB",
    imageUrl: "https://images.unsplash.com/photo-1616933067445-4b556aa759c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxtb3VzZXBhZHxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.6,
    brand: "SteelSeries",
    inStock: true,
    specifications: {
      "Size": "900x300x4mm (XL)",
      "Surface": "Micro-woven cloth",
      "RGB": "2-zone RGB lighting",
      "Base": "Non-slip rubber",
      "Cable": "USB Type-A",
      "Compatibility": "SteelSeries Engine software"
    }
  },
  {
    id: "accessory-5",
    name: "Blue Yeti X",
    category: "accessories",
    price: 13990,
    description: "The Blue Yeti X is a professional USB microphone for gaming and streaming. Its four-capsule condenser array and high-res LED meter provide broadcast-quality audio capture and real-time monitoring.",
    shortDescription: "Professional USB Mic, 4 Pickup Patterns, Blue VO!CE",
    imageUrl: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwzfHxtaWNyb3Bob25lfGVufDB8fHx8MTYzNTIzMTIyMQ&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.8,
    brand: "Blue",
    inStock: true,
    specifications: {
      "Type": "Condenser",
      "Polar Patterns": "Cardioid, Omnidirectional, Bidirectional, Stereo",
      "Sample Rate": "48kHz/24-bit",
      "Features": "Blue VO!CE effects, LED meter",
      "Connection": "USB",
      "Compatibility": "PC, Mac"
    }
  },
  {
    id: "accessory-6",
    name: "NZXT Kraken Z73",
    category: "accessories",
    price: 22990,
    description: "The NZXT Kraken Z73 is a premium AIO liquid cooler featuring a customizable 2.36\" LCD display. Its 360mm radiator and three Aer P fans provide exceptional cooling performance for high-end gaming systems.",
    shortDescription: "360mm AIO Cooler, 2.36\" LCD Display, RGB",
    imageUrl: "https://images.unsplash.com/photo-1622957040873-8ea24e293caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwyfHxjcHUlMjBjb29sZXJ8ZW58MHx8fHwxNjM1MjMxMjIx&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.8,
    brand: "NZXT",
    inStock: true,
    specifications: {
      "Radiator": "360mm",
      "Fans": "3x NZXT Aer P 120mm",
      "Display": "2.36\" LCD",
      "RGB": "NZXT RGB",
      "Socket Support": "Intel & AMD",
      "Software": "NZXT CAM"
    }
  },
  {
    id: "accessory-7",
    name: "Elgato Stream Deck MK.2",
    category: "accessories",
    price: 11990,
    originalPrice: 13990,
    description: "The Elgato Stream Deck MK.2 features 15 customizable LCD keys for streamlining your content creation workflow. Control apps, launch social posts, adjust audio, and more with the touch of a button.",
    shortDescription: "15 LCD Keys, Customizable Icons, Interchangeable Faceplates",
    imageUrl: "https://images.unsplash.com/photo-1606937295547-bc30f5a97111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxM3x8c3RyZWFtJTIwZGVja3xlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.7,
    brand: "Elgato",
    inStock: true,
    specifications: {
      "Keys": "15 customizable LCD keys",
      "Integration": "OBS, Twitch, YouTube, Streamlabs",
      "Features": "Interchangeable faceplates, adjustable stand",
      "Connection": "USB-C",
      "Compatibility": "Windows 10, macOS 10.15+",
      "Software": "Stream Deck Software"
    }
  },
  {
    id: "accessory-8",
    name: "Secretlab TITAN Evo 2022",
    category: "accessories",
    price: 34990,
    description: "The Secretlab TITAN Evo 2022 is a premium gaming chair featuring 4-way L-ADAPT lumbar support and NextGen Neo Hybrid Leatherette. Its ergonomic design provides exceptional comfort for extended gaming sessions.",
    shortDescription: "Premium Gaming Chair, 4D Armrests, Magnetic Head Pillow",
    imageUrl: "https://images.unsplash.com/photo-1616148954773-0cbe6862c535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHw0fHxnYW1pbmclMjBjaGFpcnxlbnwwfHx8fDE2MzUyMzEyMjE&ixlib=rb-1.2.1&q=80&w=600",
    rating: 4.9,
    brand: "Secretlab",
    inStock: true,
    specifications: {
      "Material": "Neo Hybrid Leatherette or SoftWeave Plus",
      "Lumbar Support": "4-way L-ADAPT",
      "Armrests": "4D with metal mechanism",
      "Recline": "165 degrees",
      "Size": "Regular (Medium)",
      "Weight Capacity": "130kg"
    },
    colors: ["Stealth", "Classic", "Royal"]
  }
];

export default products;
