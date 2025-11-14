export interface TravelPost {
  id: string;
  title: string;
  slug: string;
  location: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  featuredImage: string;
  content: {
    sections: Array<{
      heading: string;
      paragraphs: string[];
      images?: string[];
    }>;
  };
}

export const travelPosts: TravelPost[] = [
  {
    id: '1',
    title: 'Exploring the Golden Triangle: Delhi, Agra, and Jaipur',
    slug: 'golden-triangle-india',
    location: 'India',
    category: 'Cultural Heritage',
    date: '2024-01-15',
    readTime: '8',
    excerpt: 'A journey through India\'s most iconic cities, discovering ancient forts, magnificent palaces, and the timeless beauty of the Taj Mahal.',
    featuredImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=800&fit=crop',
    content: {
      sections: [
        {
          heading: 'Delhi: The Heart of India',
          paragraphs: [
            'Delhi, the capital city of India, is a fascinating blend of ancient history and modern development. The city has been continuously inhabited for over 2,500 years, making it one of the oldest cities in the world.',
            'Our journey began at the Red Fort, a UNESCO World Heritage Site that served as the main residence of the Mughal emperors. The massive red sandstone walls and intricate marble inlays tell stories of a glorious past.',
            'We also visited the Jama Masjid, one of the largest mosques in India, and explored the bustling streets of Old Delhi, where the aroma of street food fills the air.',
          ],
          images: [
            'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'Agra: The City of the Taj Mahal',
          paragraphs: [
            'Agra is home to one of the Seven Wonders of the World - the magnificent Taj Mahal. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this ivory-white marble mausoleum is a symbol of eternal love.',
            'We arrived at sunrise to witness the Taj Mahal bathed in golden light. The intricate carvings, the perfect symmetry, and the reflection in the Yamuna River create an unforgettable sight.',
            'Beyond the Taj Mahal, we explored the Agra Fort, another UNESCO World Heritage Site. This red sandstone fort complex houses beautiful palaces, mosques, and gardens that showcase Mughal architecture at its finest.',
          ],
          images: [
            'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1616464916356-df2b8c2e4c5a?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'Jaipur: The Pink City',
          paragraphs: [
            'Jaipur, known as the Pink City, is the capital of Rajasthan and a treasure trove of royal heritage. The city gets its nickname from the pink-colored buildings in the old part of the city.',
            'The Amber Fort, perched on a hilltop, offers breathtaking views of the surrounding landscape. We took an elephant ride up to the fort, just like the royalty did centuries ago.',
            'The City Palace, still home to the royal family, showcases a blend of Rajput and Mughal architecture. The Hawa Mahal, or Palace of Winds, with its 953 windows, is another architectural marvel.',
          ],
          images: [
            'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1555993539-0c5e0c4b0c4a?w=800&h=600&fit=crop',
          ],
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Himalayan Adventure: Trekking in Nepal',
    slug: 'himalayan-trekking-nepal',
    location: 'Nepal',
    category: 'Adventure',
    date: '2024-02-20',
    readTime: '10',
    excerpt: 'An unforgettable journey through the Himalayas, experiencing the rich culture of Nepal and the breathtaking beauty of the world\'s highest mountains.',
    featuredImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=800&fit=crop',
    content: {
      sections: [
        {
          heading: 'Kathmandu: Gateway to the Himalayas',
          paragraphs: [
            'Kathmandu, the capital of Nepal, is a vibrant city nestled in a valley surrounded by mountains. The city is a fascinating mix of ancient temples, bustling markets, and modern development.',
            'We explored the Durbar Square, a UNESCO World Heritage Site filled with ancient temples and palaces. The intricate wood carvings and pagoda-style architecture are truly remarkable.',
            'The Boudhanath Stupa, one of the largest spherical stupas in Nepal, is a sacred site for Buddhists. The peaceful atmosphere and the sound of prayer wheels create a spiritual experience.',
          ],
          images: [
            'https://images.unsplash.com/photo-1555993539-0c5e0c4b0c4a?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'The Annapurna Circuit Trek',
          paragraphs: [
            'The Annapurna Circuit is one of the most popular treks in Nepal, offering diverse landscapes from subtropical forests to high-altitude deserts. We embarked on this 15-day journey, starting from Besisahar.',
            'Each day brought new challenges and rewards. We crossed suspension bridges over raging rivers, passed through traditional villages where locals welcomed us with warm smiles, and witnessed stunning mountain vistas.',
            'The highlight was reaching Thorong La Pass at 5,416 meters, the highest point of the trek. The panoramic views of the Annapurna and Dhaulagiri ranges were absolutely breathtaking.',
          ],
          images: [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'Cultural Immersion in Mountain Villages',
          paragraphs: [
            'One of the most rewarding aspects of trekking in Nepal is the opportunity to experience local culture. We stayed in teahouses run by local families, sharing meals and stories.',
            'The Gurung and Thakali communities we encountered were incredibly hospitable. We learned about their traditions, tried local delicacies like dal bhat and momos, and even participated in traditional dances.',
            'The prayer flags fluttering in the mountain breeze, the sound of mantras, and the warm hospitality of the Nepalese people made this journey truly unforgettable.',
          ],
          images: [
            'https://images.unsplash.com/photo-1514282401047-d79a21a590d8?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
          ],
        },
      ],
    },
  },
  {
    id: '3',
    title: 'The Last Shangri-La: Discovering Bhutan',
    slug: 'discovering-bhutan',
    location: 'Bhutan',
    category: 'Cultural Heritage',
    date: '2024-03-10',
    readTime: '9',
    excerpt: 'A journey to the Land of the Thunder Dragon, where happiness is measured and ancient Buddhist traditions thrive in harmony with nature.',
    featuredImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
    content: {
      sections: [
        {
          heading: 'Paro: Gateway to Happiness',
          paragraphs: [
            'Paro, Bhutan\'s second-largest city, is nestled in a beautiful valley surrounded by mountains. The town is home to the country\'s only international airport and serves as the perfect introduction to Bhutan.',
            'The National Museum of Bhutan, housed in a former watchtower, offers fascinating insights into the country\'s history and culture. The collection includes ancient artifacts, thangka paintings, and traditional costumes.',
            'We visited the Paro Dzong, a magnificent fortress-monastery that exemplifies Bhutanese architecture. The intricate woodwork and colorful murals depicting Buddhist teachings are truly awe-inspiring.',
          ],
          images: [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'Tiger\'s Nest Monastery: A Spiritual Journey',
          paragraphs: [
            'The Taktsang Palphug Monastery, commonly known as Tiger\'s Nest, is Bhutan\'s most iconic landmark. Perched precariously on a cliff face at 3,120 meters, this sacred site is believed to be where Guru Rinpoche meditated.',
            'The hike to Tiger\'s Nest is challenging but incredibly rewarding. The trail winds through pine forests, crosses streams, and offers stunning views of the Paro Valley below.',
            'Reaching the monastery feels like a spiritual achievement. The prayer halls, meditation caves, and the breathtaking views create an atmosphere of profound peace and tranquility.',
          ],
          images: [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'Thimphu: The Modern Capital',
          paragraphs: [
            'Thimphu, Bhutan\'s capital, is a unique city where traditional architecture and modern development coexist harmoniously. The city has no traffic lights, and traditional dress is still commonly worn.',
            'We visited the Tashichho Dzong, the seat of the government and the central monastic body. This impressive fortress is beautifully illuminated at night, creating a magical sight.',
            'The concept of Gross National Happiness, Bhutan\'s unique development philosophy, is evident everywhere. The focus on environmental conservation, cultural preservation, and sustainable development makes Bhutan a truly special place.',
          ],
          images: [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
          ],
        },
      ],
    },
  },
  {
    id: '4',
    title: 'Dubai: Where Tradition Meets Innovation',
    slug: 'dubai-tradition-innovation',
    location: 'Dubai',
    category: 'Modern Marvels',
    date: '2024-04-05',
    readTime: '7',
    excerpt: 'Exploring the futuristic city of Dubai, from the world\'s tallest building to traditional souks, experiencing the perfect blend of old and new.',
    featuredImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop',
    content: {
      sections: [
        {
          heading: 'Burj Khalifa: Touching the Sky',
          paragraphs: [
            'The Burj Khalifa, standing at 828 meters, is the tallest building in the world. This architectural marvel dominates the Dubai skyline and offers breathtaking views from its observation decks.',
            'We took the high-speed elevator to the 124th floor, where the panoramic views of the city, desert, and ocean are simply spectacular. The building\'s design, inspired by the Hymenocallis flower, is a testament to human engineering.',
            'The Dubai Fountain show at the base of Burj Khalifa is a mesmerizing spectacle. The choreographed water, light, and music show creates a magical experience, especially in the evening.',
          ],
          images: [
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'The Palm Jumeirah: An Engineering Wonder',
          paragraphs: [
            'The Palm Jumeirah is an artificial archipelago shaped like a palm tree, one of Dubai\'s most ambitious projects. This man-made island is home to luxury hotels, resorts, and residential properties.',
            'We stayed at one of the beachfront resorts, enjoying the pristine beaches and world-class amenities. The view of the Dubai skyline from the Palm is absolutely stunning.',
            'The Atlantis, The Palm resort, with its underwater suites and Aquaventure waterpark, is a destination in itself. The marine life exhibits and thrilling water slides provide entertainment for all ages.',
          ],
          images: [
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'Traditional Souks and Modern Malls',
          paragraphs: [
            'Dubai offers a fascinating contrast between traditional markets and ultra-modern shopping malls. The Gold Souk and Spice Souk in Deira take you back in time with their narrow alleys and traditional architecture.',
            'We haggled for gold jewelry and spices, experiencing the traditional way of shopping. The vibrant colors, exotic aromas, and friendly merchants create an authentic Middle Eastern experience.',
            'On the other end of the spectrum, the Dubai Mall is one of the world\'s largest shopping centers, featuring over 1,200 stores, an aquarium, an ice rink, and countless dining options. The contrast between old and new Dubai is truly remarkable.',
          ],
          images: [
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
          ],
        },
      ],
    },
  },
  {
    id: '5',
    title: 'Kerala: God\'s Own Country',
    slug: 'kerala-backwaters-india',
    location: 'India',
    category: 'Nature & Wildlife',
    date: '2024-05-12',
    readTime: '8',
    excerpt: 'Cruising through the serene backwaters of Kerala, experiencing the unique culture and natural beauty of South India.',
    featuredImage: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&h=800&fit=crop',
    content: {
      sections: [
        {
          heading: 'Alleppey: The Venice of the East',
          paragraphs: [
            'Alleppey, also known as Alappuzha, is famous for its network of canals, lagoons, and lakes. The backwaters here are a unique ecosystem that supports a rich variety of flora and fauna.',
            'We boarded a traditional houseboat, locally known as a kettuvallam, for an overnight cruise. These boats, made from coir and wood, are a perfect way to experience the backwaters.',
            'As we glided through the calm waters, we passed by villages, paddy fields, and coconut groves. The peaceful atmosphere and the sound of water lapping against the boat created a truly relaxing experience.',
          ],
          images: [
            'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'Munnar: Tea Plantations and Misty Hills',
          paragraphs: [
            'Munnar, nestled in the Western Ghats, is famous for its sprawling tea plantations. The rolling hills covered in emerald green tea bushes create a picturesque landscape.',
            'We visited a tea factory to learn about the tea-making process, from plucking the leaves to the final product. The aroma of fresh tea leaves was invigorating.',
            'The Eravikulam National Park, home to the endangered Nilgiri Tahr, offers excellent trekking opportunities. The Anamudi Peak, the highest peak in South India, provides stunning panoramic views.',
          ],
          images: [
            'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'Kochi: A Blend of Cultures',
          paragraphs: [
            'Kochi, also known as Cochin, is a port city with a rich history of trade and cultural exchange. The city\'s architecture reflects influences from Portuguese, Dutch, and British colonial periods.',
            'Fort Kochi is a charming area with colonial buildings, art galleries, and cafes. The Chinese fishing nets, a unique fishing method introduced by Chinese traders, are a major attraction.',
            'We watched a Kathakali performance, a classical Indian dance form that originated in Kerala. The elaborate costumes, expressive makeup, and storytelling through dance were mesmerizing.',
          ],
          images: [
            'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop',
          ],
        },
      ],
    },
  },
  {
    id: '6',
    title: 'Everest Base Camp: A Dream Realized',
    slug: 'everest-base-camp-nepal',
    location: 'Nepal',
    category: 'Adventure',
    date: '2024-06-18',
    readTime: '12',
    excerpt: 'The ultimate trekking adventure to the base of the world\'s highest mountain, experiencing the Sherpa culture and breathtaking Himalayan landscapes.',
    featuredImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    content: {
      sections: [
        {
          heading: 'Lukla: The Gateway to Everest',
          paragraphs: [
            'Our journey began with a thrilling flight to Lukla, one of the world\'s most dangerous airports. The short runway, perched on a mountainside, requires skilled pilots and perfect weather conditions.',
            'Lukla serves as the starting point for treks to Everest Base Camp. The town is bustling with trekkers, porters, and yaks preparing for their mountain adventures.',
            'We met our guide and porters, who would be our companions for the next two weeks. Their knowledge of the mountains and their warm hospitality immediately put us at ease.',
          ],
          images: [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'Namche Bazaar: The Sherpa Capital',
          paragraphs: [
            'Namche Bazaar, at 3,440 meters, is the largest Sherpa settlement in the Khumbu region. This vibrant town is a crucial acclimatization stop and a hub for trekkers.',
            'We spent two days here, exploring the local markets, visiting the Sherpa Culture Museum, and taking acclimatization hikes. The views of Everest, Lhotse, and Ama Dablam from nearby viewpoints were spectacular.',
            'The Sherpa people, known for their mountaineering skills and warm hospitality, welcomed us into their community. We learned about their traditions, religion, and way of life in the high mountains.',
          ],
          images: [
            'https://images.unsplash.com/photo-1514282401047-d79a21a590d8?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'Reaching Base Camp',
          paragraphs: [
            'The final push to Everest Base Camp was challenging but incredibly rewarding. We passed through Gorak Shep, the last settlement before base camp, and continued through the Khumbu Icefall.',
            'Reaching Base Camp at 5,364 meters was an emotional moment. The colorful tents of expedition teams, prayer flags fluttering in the wind, and the massive Khumbu Icefall created an unforgettable scene.',
            'Standing at the base of the world\'s highest mountain, surrounded by peaks like Nuptse and Lhotse, we felt a profound sense of achievement. This journey taught us about perseverance, respect for nature, and the incredible spirit of the Sherpa people.',
          ],
          images: [
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
          ],
        },
      ],
    },
  },
  {
    id: '7',
    title: 'Punakha: The Ancient Capital of Bhutan',
    slug: 'punakha-bhutan',
    location: 'Bhutan',
    category: 'Cultural Heritage',
    date: '2024-07-22',
    readTime: '6',
    excerpt: 'Exploring the ancient capital of Bhutan, home to one of the most beautiful dzongs in the country and the site of the royal wedding.',
    featuredImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
    content: {
      sections: [
        {
          heading: 'Punakha Dzong: The Palace of Great Happiness',
          paragraphs: [
            'Punakha Dzong, located at the confluence of the Pho Chhu and Mo Chhu rivers, is considered one of the most beautiful dzongs in Bhutan. This fortress-monastery served as the capital until 1955.',
            'The dzong\'s architecture is stunning, with whitewashed walls, golden roofs, and intricate woodwork. The location, surrounded by jacaranda trees, creates a picturesque setting.',
            'We visited during the spring when the jacaranda trees were in full bloom, creating a purple carpet around the dzong. The contrast between the purple flowers and the white walls was breathtaking.',
          ],
          images: [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'The Suspension Bridge Adventure',
          paragraphs: [
            'The Punakha Suspension Bridge, one of the longest suspension bridges in Bhutan, offers thrilling views of the Po Chhu River below. Walking across this bridge is an adventure in itself.',
            'The bridge sways gently in the wind, and the views of the dzong and surrounding mountains are spectacular. Prayer flags adorn the bridge, adding to the spiritual atmosphere.',
            'We crossed the bridge multiple times, each crossing offering a different perspective of the dzong and the valley. The experience was both exhilarating and peaceful.',
          ],
          images: [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'Chimi Lhakhang: The Temple of Fertility',
          paragraphs: [
            'Chimi Lhakhang, also known as the Temple of Fertility, is a unique temple dedicated to the Divine Madman, Drukpa Kunley. The temple is famous for its phallus paintings and symbols.',
            'The walk to the temple through rice fields and traditional villages was peaceful and scenic. The temple itself is simple but holds great significance for Bhutanese people.',
            'We learned about the legend of Drukpa Kunley and his unconventional methods of teaching Buddhism. The temple attracts many visitors seeking blessings for fertility and good fortune.',
          ],
          images: [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
          ],
        },
      ],
    },
  },
  {
    id: '8',
    title: 'Dubai Desert Safari: Dunes and Stars',
    slug: 'dubai-desert-safari',
    location: 'Dubai',
    category: 'Adventure',
    date: '2024-08-15',
    readTime: '6',
    excerpt: 'An exhilarating desert adventure featuring dune bashing, camel rides, traditional entertainment, and stargazing under the Arabian sky.',
    featuredImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop',
    content: {
      sections: [
        {
          heading: 'Dune Bashing: An Adrenaline Rush',
          paragraphs: [
            'Dune bashing is one of Dubai\'s most popular desert activities. We boarded a 4x4 vehicle and set off into the golden dunes of the Arabian Desert.',
            'The skilled driver navigated the steep dunes, creating thrilling ups and downs that felt like a roller coaster ride. The views of endless sand dunes were mesmerizing.',
            'We stopped at the top of a large dune to watch the sunset. The golden hour transformed the desert into a magical landscape, with shadows creating beautiful patterns on the sand.',
          ],
          images: [
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'Traditional Bedouin Camp Experience',
          paragraphs: [
            'After the dune bashing, we arrived at a traditional Bedouin-style camp. The camp featured Arabic tents, low seating areas, and traditional decorations.',
            'We enjoyed a delicious barbecue dinner with traditional Arabic dishes like shawarma, hummus, and grilled meats. The food was flavorful and authentic.',
            'The evening entertainment included belly dancing, fire shows, and henna painting. We also tried shisha (water pipe) and dressed in traditional Arabic attire for photos.',
          ],
          images: [
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
          ],
        },
        {
          heading: 'Camel Rides and Stargazing',
          paragraphs: [
            'A camel ride through the desert was a must-do experience. These gentle animals, known as the ships of the desert, carried us through the dunes at a leisurely pace.',
            'As night fell, the desert sky came alive with stars. Away from city lights, we could see the Milky Way clearly. The silence of the desert and the vastness of the starry sky created a profound sense of peace.',
            'We learned about the constellations and the importance of stars in Bedouin navigation. The experience reminded us of the simple pleasures of life and the beauty of nature.',
          ],
          images: [
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
          ],
        },
      ],
    },
  },
];

export const galleryImages = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop',
    title: 'Taj Mahal, India',
    location: 'India',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop',
    title: 'Himalayan Peaks, Nepal',
    location: 'Nepal',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    title: 'Tiger\'s Nest, Bhutan',
    location: 'Bhutan',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
    title: 'Burj Khalifa, Dubai',
    location: 'Dubai',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop',
    title: 'Kerala Backwaters',
    location: 'India',
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    title: 'Everest Base Camp',
    location: 'Nepal',
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop',
    title: 'Mountain Trekking',
    location: 'Nepal',
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1514282401047-d79a21a590d8?w=800&h=600&fit=crop',
    title: 'Sherpa Village',
    location: 'Nepal',
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
    title: 'Red Fort, Delhi',
    location: 'India',
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&fit=crop',
    title: 'Amber Fort, Jaipur',
    location: 'India',
  },
  {
    id: '11',
    url: 'https://images.unsplash.com/photo-1555993539-0c5e0c4b0c4a?w=800&h=600&fit=crop',
    title: 'Kathmandu Valley',
    location: 'Nepal',
  },
  {
    id: '12',
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    title: 'Bhutanese Architecture',
    location: 'Bhutan',
  },
];

export const locations = ['India', 'Nepal', 'Bhutan', 'Dubai'];
export const categories = ['Cultural Heritage', 'Adventure', 'Nature & Wildlife', 'Modern Marvels'];

