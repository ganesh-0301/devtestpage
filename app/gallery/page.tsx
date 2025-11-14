import Image from 'next/image';
import { galleryImages } from '@/lib/travelData';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Travel Gallery
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A visual journey through our favorite destinations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-purple-100"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-purple-200">{image.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Filter Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Explore destinations: India, Nepal, Bhutan, Dubai
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['India', 'Nepal', 'Bhutan', 'Dubai'].map((location) => (
              <a
                key={location}
                href={`/blog?location=${location}`}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
              >
                View {location} Stories
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

