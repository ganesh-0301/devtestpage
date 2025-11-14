'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { travelPosts, locations, categories } from '@/lib/travelData';

function BlogContent() {
  const searchParams = useSearchParams();
  const locationFilter = searchParams.get('location');
  const categoryFilter = searchParams.get('category');

  let filteredPosts = travelPosts;

  if (locationFilter) {
    filteredPosts = filteredPosts.filter((post) => post.location === locationFilter);
  }

  if (categoryFilter) {
    filteredPosts = filteredPosts.filter((post) => post.category === categoryFilter);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Travel Stories
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover amazing destinations and experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          <Link
            href="/blog"
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              !locationFilter && !categoryFilter
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-purple-50 border border-purple-200'
            }`}
          >
            All Posts
          </Link>
          {locations.map((location) => (
            <Link
              key={location}
              href={`/blog?location=${location}`}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                locationFilter === location
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-purple-200'
              }`}
            >
              {location}
            </Link>
          ))}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
                      {post.location}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-600 text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-purple-100">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-1 group"
                    >
                      Read More
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-4">No posts found matching your filters.</p>
            <Link
              href="/blog"
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg"
            >
              View All Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <BlogContent />
    </Suspense>
  );
}

