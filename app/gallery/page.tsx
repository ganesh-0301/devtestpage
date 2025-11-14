import { galleryImages } from '@/lib/travelData';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Travel Gallery
          </h1>
          <p className="text-xl text-gray-600">
            A visual journey through our favorite destinations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Filter Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Explore destinations: India, Nepal, Bhutan, Dubai
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['India', 'Nepal', 'Bhutan', 'Dubai'].map((location) => (
              <a
                key={location}
                href={`/blog?location=${location}`}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
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

